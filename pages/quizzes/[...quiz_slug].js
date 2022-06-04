// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, readFileBySlug, getFiles } from '@/lib/mdx'
import { splitLinesKeepNLs, firstContentIs, newlinesCount, splitAfterNth } from '@/lib/stringManip'
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
  return { props: { mdData } }
}

// export default function Quiz({ quiz }) {
export default function Quiz({ mdData }) {
  // const { mdxSource, frontMatter } = quiz

  // console.log(jsxSections)
  const title = mdData[0].sectionTop.replaceAll('#', '')
  // console.log(mdData)

  // https://codepen.io/bramus/pen/OJPQmpo?editors=1010
  return (
    <QuizLayout title={title} description={title}>
      <form method="POST" className="is-not-results">
        {mdData.map((item, i) => (
          <div key={i}>
            {item.options ? (
              <div key={`q${item.questionNumber}`}>
                <fieldset>
                  <legend>
                    <Markdown>{item.sectionTop}</Markdown>
                  </legend>
                  <div className="answers">
                    {item.options.map((option, i) => (
                      <div className="answer" key={i}>
                        <input
                          type="radio"
                          name={`answers[${item.questionNumber}]`}
                          id={`answers-${item.questionNumber}-${i + 1}`}
                          value={`${i + 1}`}
                          required
                        />
                        <label
                          htmlFor={`answers-${item.questionNumber}-${i + 1}`}
                          className={`answer__item ${
                            item.answers.includes(i + 1) ? 'answer__item--is-correct' : ''
                          }`}
                        >
                          <Markdown options={{ forceInline: true }}>{option + '<br>'}</Markdown>
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>

                {item.explanation && (
                  <div className="answer__reveal-text">
                    <Markdown>{item.explanation}</Markdown>
                  </div>
                )}
              </div>
            ) : (
              <Markdown>{item.sectionTop}</Markdown>
            )}
          </div>
        ))}
        <button type="submit">Submit answers</button>
        <div className="message">
          <p>
            Your Score: <span className="score" data-question-count="2"></span>
          </p>
        </div>
      </form>
    </QuizLayout>
  )
  // return ( {jsxSections.map((section) => (section))} )
}
