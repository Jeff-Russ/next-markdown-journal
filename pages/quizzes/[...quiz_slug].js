// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { formatSlug, readFileBySlug, getFiles } from '@/lib/mdx'
import {
  splitLinesKeepNLs,
  deleteAll,
  firstContentIs,
  newlinesCount,
  splitAfterNth,
} from '@/lib/stringManip'
import QuizLayout from '@/layouts/QuizLayout'
import Markdown from 'markdown-to-jsx'

export async function getStaticPaths() {
  const quizzes = getFiles('quizzes') // basenames of files. e.g.: 'default.md'
  return {
    paths: quizzes.map((p) => ({
      params: {
        quiz_slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

/* example converted md:
<h4 id="q2-variables-declared-with-the-let-keyword-have-what-type-of-scope">Q2. Variables declared with the let keyword have what type of scope?</h4>
<ul>
    <li><input type="checkbox" readonly=""> function scope</li>
    <li><input type="checkbox" readonly="" checked=""> block scope</li>
    <li><input type="checkbox" readonly=""> inline scope</li>
    <li><input type="checkbox" readonly=""> global scope</li>
</ul>
*/

export async function getStaticProps({ params }) {
  const file = await readFileBySlug('quizzes', params.quiz_slug.join('/'))
  const imagesDir = `${params.quiz_slug}`.replace('-quiz', '')

  // const quiz = file.replaceAll(`](images/`, `](/static/images/quizzes/${imagesDir}/images/`)
  const lines = splitLinesKeepNLs(
    file.replaceAll(`](images/`, `](/static/images/quizzes/${imagesDir}/images/`)
  )

  var mdData = []

  var questionNumber = 0 // not zero-based
  var lastType = null
  lines.forEach((line) => {
    const mdIdx = mdData.length - 1 // WARNING: this will be -1 if mdData is empty!

    if (line.startsWith('#')) {
      mdData.push({
        sectionTop: line,
        options: '', // so we can render without checking if it exists. keep this?
        numberOfOptions: 0,
      })
      lastType = 'sectionTop'
    } else {
      const listSymbol = firstContentIs(line, '- [') ? '-' : firstContentIs(line, '* [') ? '*' : ''

      if (listSymbol) {
        // first or only line of an option
        // This assumes finding an option means element on mdData for
        // for it already exist (because before an option, you always
        // have a question or a previous option).

        if (lastType === 'option') {
          mdData[mdIdx].numberOfOptions += 1
        } else {
          // this is the first option
          // add the nessisary members:
          mdData[mdIdx].questionNumber = ++questionNumber
          mdData[mdIdx].numberOfOptions = 1
          mdData[mdIdx].options = []
          lastType = 'option'
          mdData[mdIdx].answers = []
        }

        // if found to be checked, record as a correct answer:
        if (firstContentIs(line, `${listSymbol} [x`)) {
          mdData[mdIdx].answers.push(mdData[mdIdx].numberOfOptions)
        }
        // done with first or only line of an option

        // add CONTENT of list item to options:
        const content = splitAfterNth(line, '] ', 1)[1]
        // const content = line.replace('[x]', '[ ]')
        mdData[mdIdx].options.push(content)
      } else if (lastType === 'option') {
        // subsequent line of option
        mdData[mdIdx].options[mdData[mdIdx].options.length - 1] += line
      } else {
        mdData[mdIdx][lastType] += line
      }
    }
  })
  // Parse options arrays, pulling out explanations
  mdData.forEach((item, i) => {
    if (item.numberOfOptions) {
      // It's a question and not a section heading
      let maxNewlines = 1
      item.options.slice(0, -1).forEach((option) => {
        const currentCount = newlinesCount(option)
        if (currentCount > maxNewlines) maxNewlines = currentCount
      })
      if (newlinesCount(item.options[item.options.length - 1]) > maxNewlines) {
        // console.log(`Q${item.questionNumber}: explanation found in option${item.options.length -1} ${item.options[item.options.length -1]} because it exceeds ${maxNewlines} lines`)
        const temp = item.options[item.options.length - 1]
        const [nthOption, explanation] = splitAfterNth(temp, '\n', maxNewlines - 1)
        mdData[i].options[item.options.length - 1] = nthOption
        mdData[i].explanation = explanation
        // console.log(`Explanation is: ${explanation}`)
      }
      // else {
      //   console.log(`Q${item.questionNumber}: no explanation.`)
      // }
    }
  })
  // return { props: {  } }
  return { props: { mdData, totalQuestions: questionNumber } }
}

// export default function Quiz({ quiz }) {
export default function Quiz({ mdData, totalQuestions }) {
  const title = mdData[0].sectionTop.replaceAll('#', '')

  const router = useRouter()
  // console.log(router.query); // ?scoreStats={1:[0,1],2:[1,0],3:[1,0],4:[1,0],5:[1,0],6:[1,0],7:[1,0]}

  function uncompressScoreStats(str) {
    return JSON.parse(`{${str.replaceAll(/([\d]+):([\d]+,[\d]+)/g, '"$1":[$2]')}}`)
  }
  // console.log("uncompressScoreStats", uncompressScoreStats('1:0,1,2:1,0,3:1,0,4:1,0,5:1,0,6:1,0,7:1,0'))

  function compressScoreStats(jsonObj) {
    return deleteAll(JSON.stringify(jsonObj), ['"', '{', '}', '[', ']'])
  }
  // console.log("compressScoreStats", compressScoreStats({"1":[0,1],"2":[1,0],"3":[1,0],"4":[1,0],"5":[1,0],"6":[1,0],"7":[1,0]}))

  // console.log(initState)

  const [scoreStats, setScoreStats] = useState(
    'scoreStats' in router.query ? uncompressScoreStats(router.query.scoreStats) : {}
  ) // useState({})
  // scoreStats = {
  //   <qestionNum>: : [<incorrectCount>,  <correctCount>],
  //   <qestionNum>: : [<incorrectCount>,  <correctCount>]
  // }

  useEffect(() => {
    document.querySelectorAll('input[type=radio]').forEach((item) => {
      item.addEventListener('click', (event) => {
        const qestionNum = `${item.name.match(/[0-9]+$/)}`

        if (item.getAttribute('grade-as') === 'correct') {
          setScoreStats((scoreStats) => ({
            ...scoreStats,
            [qestionNum]:
              qestionNum in scoreStats
                ? [scoreStats[qestionNum][0], scoreStats[qestionNum][1] + 1]
                : [0, 1],
          }))
        } else {
          setScoreStats((scoreStats) => ({
            ...scoreStats,
            [qestionNum]:
              qestionNum in scoreStats
                ? [scoreStats[qestionNum][1] + 1, scoreStats[qestionNum][0]]
                : [1, 0],
          }))
        }
      })
    })
  }, [])

  // const [scoreStatsQSP, setScoreStatsQSP] = useState(router.query || {})

  useEffect(() => {
    console.log(JSON.stringify(scoreStats))

    // router.query.scoreStats = compressScoreStats(scoreStats)

    if (Object.keys(scoreStats).length === totalQuestions) console.log('finished quiz')
  }, [scoreStats])

  // useEffect(() => {
  //   console.log(scoreStatsQSP)
  // }, [scoreStatsQSP])

  const onCompletion = () => {
    console.log('completed')
  }

  // https://codepen.io/bramus/pen/OJPQmpo?editors=1010
  return (
    <QuizLayout title={title} description={title}>
      <form /* method="POST" */ className="is-not-results">
        {mdData.map((item, i) => (
          <div key={i}>
            {item.options ? (
              <div key={`Q${item.questionNumber}`}>
                <fieldset>
                  <legend>
                    <Markdown>{item.sectionTop}</Markdown>
                  </legend>
                  <div className="answers">
                    {item.options.map((option, i) => (
                      <div className="option" key={i}>
                        <input
                          type="radio"
                          name={`Q${item.questionNumber}`}
                          id={`Q${item.questionNumber}-option${i + 1}`}
                          value={`${i + 1}`}
                          grade-as={`${item.answers.includes(i + 1) ? 'correct' : 'incorrect'}`}
                          required
                        />
                        <label
                          htmlFor={`Q${item.questionNumber}-option${i + 1}`}
                          className={`selection ${
                            item.answers.includes(i + 1)
                              ? 'selection-is-correct'
                              : 'selection-is-incorrect'
                          }`}
                        >
                          <Markdown options={{ forceInline: true }}>{option + '<br>'}</Markdown>
                        </label>
                      </div>
                    ))}
                  </div>
                  {item.explanation && (
                    <div className="explanation">
                      <Markdown>{item.explanation}</Markdown>
                    </div>
                  )}
                </fieldset>
              </div>
            ) : (
              <Markdown>{item.sectionTop}</Markdown>
            )}
          </div>
        ))}
        <button
          id="submit-answers"
          type="button"
          className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          onClick={onCompletion}
        >
          Submit answers
        </button>
        <div className="message" id="result-display">
          <p>
            Your Score: <span id="score-display" data-question-count={`${totalQuestions}`}></span>
          </p>
        </div>
      </form>
    </QuizLayout>
  )
}
