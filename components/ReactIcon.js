import dynamic from 'next/dynamic'
// import NodeIcon from './svg/nodejs.svg'
import PhpElephantOnly from './svg/php-elephant-only.svg'

/** Dynamically imports and returns a icon component form react-icons for you. Choose one at
 * https://react-icons.github.io/react-icons/search from any lib within react-icons.
 * @param {string} kind - In the form <libName>.<iconName> Example: <ReactIcon kind='di.DiJqueryLogo' />
 * will import { DiJqueryLogo } from 'react-icons/di' and return <DiJqueryLogo {...rest} />
 * @param {*} ...rest - returned is <DynamicComponent {...rest} />
 * @returns  <iconName {...rest} />
 */
export default function ReactIcon({ kind, ...rest }) {
  // based on getDynamicIcon:
  // https://github.com/react-icons/react-icons/issues/364#issuecomment-688817589

  const [library, iconName] = kind.split('.')

  // console.log(`import { ${iconName} } from 'react-icons/${library}'`)

  const classAppend = rest.className || ''
  delete rest.className

  let DynamicComponent = null
  switch (library) {
    case 'ai': // Ant Design Icons:
      DynamicComponent = dynamic(() => import('react-icons/ai').then((lib) => lib[iconName]))
      break
    case 'bs': // Bootstrap Icons:
      DynamicComponent = dynamic(() => import('react-icons/bs').then((lib) => lib[iconName]))
      break
    case 'bi': // BoxIcons:
      DynamicComponent = dynamic(() => import('react-icons/bi').then((lib) => lib[iconName]))
      break
    case 'di': // Devicons:
      DynamicComponent = dynamic(() => import('react-icons/di').then((lib) => lib[iconName]))
      break
    case 'fi': // Feather:
      DynamicComponent = dynamic(() => import('react-icons/fi').then((lib) => lib[iconName]))
      break
    case 'fc': // Flat Color Icons:
      DynamicComponent = dynamic(() => import('react-icons/fc').then((lib) => lib[iconName]))
      break
    case 'fa': // Font Awesome:
      DynamicComponent = dynamic(() => import('react-icons/fa').then((lib) => lib[iconName]))
      break
    case 'gi': // Game Icons:
      DynamicComponent = dynamic(() => import('react-icons/gi').then((lib) => lib[iconName]))
      break
    case 'go': // Github Octicons icons:
      DynamicComponent = dynamic(() => import('react-icons/go').then((lib) => lib[iconName]))
      break
    case 'gr': // Grommet-Icons:
      DynamicComponent = dynamic(() => import('react-icons/gr').then((lib) => lib[iconName]))
      break
    case 'hi': // Heroicons:
      DynamicComponent = dynamic(() => import('react-icons/hi').then((lib) => lib[iconName]))
      break
    case 'im': // IcoMoon Free:
      DynamicComponent = dynamic(() => import('react-icons/im').then((lib) => lib[iconName]))
      break
    case 'io': // Ionicons 4:
      DynamicComponent = dynamic(() => import('react-icons/io').then((lib) => lib[iconName]))
      break
    case 'io5': // Ionicons 5:
      DynamicComponent = dynamic(() => import('react-icons/io5').then((lib) => lib[iconName]))
      break
    case 'md': // Material Design:
      DynamicComponent = dynamic(() => import('react-icons/md').then((lib) => lib[iconName]))
      break
    case 'ri': // // Remix Icon:
      DynamicComponent = dynamic(() => import('react-icons/ri').then((lib) => lib[iconName]))
      break
    case 'si': // Simple Icons:
      DynamicComponent = dynamic(() => import('react-icons/si').then((lib) => lib[iconName]))
      break
    case 'ti': // Typicons:
      DynamicComponent = dynamic(() => import('react-icons/ti').then((lib) => lib[iconName]))
      break
    case 'vsc': // VS Code Icons:
      DynamicComponent = dynamic(() => import('react-icons/vsc').then((lib) => lib[iconName]))
      break
    case 'wi': // Weather Icons:
      DynamicComponent = dynamic(() => import('react-icons/wi').then((lib) => lib[iconName]))
      break
    case 'cg': // css.gg:
      DynamicComponent = dynamic(() => import('react-icons/cg').then((lib) => lib[iconName]))
      break
    default:
      return null
  }

  return <DynamicComponent className={`m-auto block ${classAppend}`} {...rest} />
}

export const techIconsAvailable = [
  'javascript',
  'react',
  'nextjs',
  'tailwind',
  'sass',
  'github',
  'express',
  'python',
  'mongodb',
  'cpp',
  'css3',
  'html5',
  'nodejs',
  'git',
  'nosql',
  'scripts',
  'postgres',
  'sql',
  'bootstrap',
  'rubygem',
  'jquery',
  'ruby',
  'ror',
  'dsp',
  'php',
  'wordpress',
]

/**
 * Returns a labeled icon for various technologies.
 * @param {string} kind - can by any string found in techIconsAvailable
 * @param {number} size - The size of the icon + label in pixels is 70 * size
 * @returns A div containing a label and svg of the icon.
 */
export function TechIcon({ kind, size = 1, showLabel = true, ...rest }) {
  const classAppend = rest.className || ''
  delete rest.className

  switch (kind) {
    case 'javascript':
      return (
        <div
          className={`text-center font-serif italic leading-none text-[#98963c] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${-0.25 * size}rem` }}
              className={`font-bold leading-none`}
            >
              JavaScript
            </p>
          )}
          <ReactIcon
            kind={'di.DiJavascript'}
            size={`${68 * size}`}
            style={{ marginBottom: `${-6 * size}px` }}
          />
        </div>
      )
    case 'bootstrap':
      return (
        <div
          style={{
            paddingLeft: `0px`,
            paddingRight: `0px`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#672ce7] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p style={{ fontSize: `${14 * size}px` }} className={`font-bold leading-none `}>
              Bootstrap
            </p>
          )}
          <ReactIcon
            kind={'si.SiBootstrap'}
            size={`${56 * size}`}
            style={{ marginBottom: `${-0.25 * size}rem` }}
          />
        </div>
      )
    case 'react':
      return (
        <div
          style={{
            paddingLeft: `0px`,
            paddingRight: `0px`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#51abcc] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.125 * size}rem` }}
              className={`font-black leading-none`}
            >
              React
            </p>
          )}
          <ReactIcon
            kind={'si.SiReact'}
            size={`${56 * size}`}
            style={{ marginBottom: `${-0.25 * size}rem` }}
          />
        </div>
      )
    case 'rubygem':
      return (
        <div
          style={{
            paddingLeft: `${0.125 * size}rem`,
            paddingRight: `${0.125 * size}rem`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#cf3c2f] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.125 * size}rem` }}
              className={`font-bold leading-none`}
            >
              RubyGem
            </p>
          )}
          <ReactIcon kind={'si.SiRubygems'} size={`${52 * size}`} style={{ marginBottom: `0px` }} />
        </div>
      )
    case 'jquery':
      return (
        <div
          style={{
            paddingLeft: `${0.125 * size}rem`,
            paddingRight: `${0.125 * size}rem`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#2764a1] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.125 * size}rem` }}
              className={`font-bold leading-none`}
            >
              jQuery
            </p>
          )}
          <ReactIcon kind={'si.SiJquery'} size={`${52 * size}`} style={{ marginBottom: `0px` }} />
        </div>
      )
    case 'nextjs':
      return (
        <div
          style={{
            paddingLeft: `${0.125 * size}rem`,
            paddingRight: `${0.125 * size}rem`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#71acaa] dark:text-[#73aeac] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.125 * size}rem` }}
              className={`font-bold leading-none`}
            >
              NextJS
            </p>
          )}
          <ReactIcon
            kind={'si.SiNextdotjs'}
            size={`${52 * size}`}
            style={{ marginBottom: `0px` }}
          />
        </div>
      )
    case 'tailwind':
      return (
        <div
          style={{ paddingBottom: `${0.125 * size}rem` }}
          className={`text-center font-serif italic leading-none text-[#5ebaf3] dark:text-[#4488b2] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.25 * size}rem` }}
              className={`font-bold leading-none`}
            >
              Tailwind
            </p>
          )}
          <ReactIcon
            kind={'si.SiTailwindcss'}
            size={`${52 * size}`}
            style={{ padding: `${0.125 * size}rem` }}
            className="rounded-[50%] border-[1px] border-[#5ebaf3] shadow-md"
          />
        </div>
      )
    case 'sass':
      return (
        <div
          style={{
            paddingLeft: `${0.125 * size}rem`,
            paddingRight: `${0.125 * size}rem`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#b4678f] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.25 * size}rem` }}
              className={`font-bold leading-none`}
            >
              Sass
            </p>
          )}
          <ReactIcon kind={'si.SiSass'} size={`${50 * size}`} style={{ marginBottom: `0px` }} />
        </div>
      )
    case 'github':
      return (
        <div
          style={{
            paddingLeft: `${0.125 * size}rem`,
            paddingRight: `${0.125 * size}rem`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#362a2a] dark:text-[#957676] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.25 * size}rem` }}
              className={`font-bold leading-none`}
            >
              GitHub
            </p>
          )}
          <ReactIcon kind={'si.SiGithub'} size={`${50 * size}`} style={{ marginBottom: `0px` }} />
        </div>
      )
    case 'git':
      return (
        <div
          style={{ paddingLeft: `${-0.5 * size}rem`, paddingRight: `${-0.5 * size}rem` }}
          className={`text-center font-serif italic leading-none text-[#362a2a] dark:text-[#957676] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${-0.4 * size}rem` }}
              className={`font-bold leading-none`}
            >
              Git
            </p>
          )}
          <ReactIcon
            kind={'di.DiGit'}
            size={`${74 * size}`}
            style={{ marginBottom: `${-0.5 * size}rem` }}
          />
        </div>
      )
    case 'express':
      // return (
      //   <div
      //     className={`px-0.5 pb-1 text-center font-serif italic leading-none text-[#30302f] dark:text-[#9e9e9b]  ${classAppend}`}
      //   >
      //     <p className="mb-1 font-bold leading-none">Express</p>
      //     <ReactIcon
      //       kind={'si.SiExpress'}
      //       size={`52`}
      //       className="-mb-0.5 rounded-[50%] border-[1px] border-[#30302f] p-1 shadow-md dark:border-[#9e9e9b]"
      //     />
      //   </div>
      // )
      return (
        <div
          style={{
            paddingLeft: `${0.125 * size}rem`,
            paddingRight: `${0.125 * size}rem`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`bg-transparent text-center font-serif italic leading-none text-[#30302f] dark:text-[#9e9e9b] ${classAppend}`}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.3 * size}rem` }}
              className={`bg-transparent font-bold leading-none`}
            >
              Express
            </p>
          )}
          <ReactIcon
            kind={'si.SiExpress'}
            size={`${50 * size}`}
            style={{ marginBottom: `${0.125 * size}rem`, padding: `${0.25 * size}rem` }}
            className="rounded-[50%] border-[1px] border-[#30302f] bg-transparent shadow-md dark:border-[#9e9e9b]"
          />
        </div>
      )
    case 'python':
      return (
        <div
          style={{ paddingBottom: `${0.25 * size}rem` }}
          className={`text-center font-serif italic leading-none text-[#406d90] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.25 * size}rem` }}
              className={`font-bold leading-none`}
            >
              Python
            </p>
          )}
          <ReactIcon
            kind={'si.SiPython'}
            size={`${52 * size}`}
            style={{ marginBottom: `${-0.125 * size}rem` }}
          />
        </div>
      )
    case 'mongodb':
      return (
        <div
          style={{ paddingBottom: `${0.25 * size}rem` }}
          className={`text-center font-serif italic leading-none text-[#4a9d55] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.25 * size}rem` }}
              className={`font-bold leading-none`}
            >
              MongoDB
            </p>
          )}
          <ReactIcon
            kind={'si.SiMongodb'}
            size={`${52 * size}`}
            style={{ marginBottom: `${0.125 * size}rem`, padding: `${0.25 * size}rem` }}
            className="rounded-[50%] border-2 border-[#77a452] bg-[#563f37] text-[#77a452] shadow-md"
          />
        </div>
      )
    case 'cpp':
      return (
        <div
          style={{ paddingBottom: `${0.25 * size}rem` }}
          className={`text-center font-serif italic leading-none text-[#5687c3] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.25 * size}rem` }}
              className={`font-bold leading-none`}
            >
              C++
            </p>
          )}
          <ReactIcon
            kind={'si.SiCplusplus'}
            size={`${52 * size}`}
            style={{ marginBottom: `${0.125 * size}rem` }}
          />
        </div>
      )
    case 'dsp':
      return (
        <div
          style={{
            paddingLeft: `${0.125 * size}rem`,
            paddingRight: `${0.125 * size}rem`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#6992c3] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.125 * size}rem` }}
              className={`font-bold leading-none`}
            >
              DSP
            </p>
          )}
          <ReactIcon
            kind={'si.SiAudiomack'}
            size={`${52 * size}`}
            style={{ marginBottom: `0px` }}
          />
        </div>
      )
    case 'css3':
      return (
        <div
          style={{
            /*  marginLeft:`${-0.25*size}rem`, marginRight:`${-0.25*size}rem`,  */
            paddingLeft: `${-0.125 * size}rem`,
            paddingRight: `${-0.125 * size}rem`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#3072b4] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.125 * size}rem` }}
              className={`font-bold leading-none`}
            >
              CSS
            </p>
          )}
          <ReactIcon
            kind={'si.SiCss3'}
            size={`${56 * size}`}
            style={{ marginBottom: `${-0.25 * size}rem` }}
          />
        </div>
      )
    case 'html5':
      return (
        <div
          style={{
            /*  marginLeft:`${-0.25*size}rem`, marginRight:`${-0.25*size}rem`, */
            paddingLeft: `${-0.125 * size}rem`,
            paddingRight: `${-0.125 * size}rem`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#8f5339] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.125 * size}rem` }}
              className={`font-bold leading-none`}
            >
              HTML
            </p>
          )}
          <ReactIcon
            kind={'si.SiHtml5'}
            size={`${56 * size}`}
            style={{ marginBottom: `${-0.25 * size}rem` }}
          />
        </div>
      )
    case 'ror':
      return (
        <div
          style={{
            /* marginLeft:`${-0.25*size}rem`, marginRight:`${-0.25*size}rem`,  */
            paddingLeft: `${-0.125 * size}rem`,
            paddingRight: `${-0.125 * size}rem`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#9b4544] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${-0.125 * size}rem` }}
              className={`font-bold leading-none`}
            >
              Ruby
            </p>
          )}
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${-1 * size}rem` }}
              className={`font-bold leading-none`}
            >
              on
            </p>
          )}
          <ReactIcon
            kind={'si.SiRubyonrails'}
            size={`${56 * size}`}
            style={{ marginBottom: `0px` }}
          />
        </div>
      )

    case 'nodejs':
      // return (
      //   <div className={`text-center font-serif italic leading-none text-[#64984f] pb-2 -mx-1 ${classAppend}`} {...rest}>
      //     <NodeIcon width="70" height='70' fill="currentColor" className='mx-auto -mb-1' />
      //   </div>
      // )
      return (
        <div
          style={{
            paddingLeft: `${-0.25 * size}rem`,
            paddingRight: `${-0.25 * size}rem` /* , paddingBottom:`${0.5*size}rem` */,
          }}
          className={`text-center font-serif italic leading-none text-[#64984f] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.125 * size}rem` }}
              className={`font-bold leading-none`}
            >
              Node
            </p>
          )}
          <ReactIcon kind={'fa.FaNodeJs'} size={`${54 * size}`} />
        </div>
      )
    case 'php':
      return (
        <div
          style={{ paddingLeft: `0px`, paddingRight: `0px`, paddingBottom: `${0.75 * size}rem` }}
          className={`text-center font-serif italic leading-none text-[#7682ba] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${-0.25 * size}rem` }}
              className={`font-bold leading-none`}
            >
              PHP
            </p>
          )}
          <PhpElephantOnly
            width={`${62 * size}`}
            height={`${62 * size}`}
            fill="currentColor"
            style={{ marginBottom: `${-1 * size}rem` }}
            className="mx-auto"
          />
        </div>
      )
    case 'ruby':
      return (
        <div
          style={{ paddingLeft: `${-0.125 * size}rem`, paddingRight: `${-0.125 * size}rem` }}
          className={`text-center font-serif italic leading-none text-[#c22c1e] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${-0.25 * size}rem` }}
              className={`font-bold leading-none`}
            >
              Ruby
            </p>
          )}
          <ReactIcon
            kind={'di.DiRuby'}
            size={`${50 * size}`}
            style={{ marginBottom: `${-0.5 * size}rem` }}
          />
        </div>
      )
    case 'nosql':
      return (
        <div
          style={{ paddingLeft: `${-0.25 * size}rem`, paddingRight: `${-0.25 * size}rem` }}
          className={`text-center font-serif italic leading-none text-[#3e4d5d] dark:text-[#687e90] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.2 * size}rem` }}
              className={`font-bold leading-none`}
            >
              NoSQL
            </p>
          )}
          <ReactIcon
            kind={'hi.HiOutlineDatabase'}
            size={`${58 * size}`}
            style={{ marginBottom: `${-0.5 * size}rem` }}
          />
        </div>
      )
    case 'scripts':
      return (
        <div
          style={{
            paddingLeft: `${0.25 * size}rem`,
            paddingRight: `${0.25 * size}rem`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#485a48] dark:text-[#789478] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.375 * size}rem` }}
              className={`font-bold leading-none`}
            >
              Scripts
            </p>
          )}
          <ReactIcon kind={'bs.BsTerminal'} size={`${48 * size}`} />
        </div>
      )
    case 'wordpress':
      return (
        <div
          style={{
            paddingLeft: `${0.25 * size}rem`,
            paddingRight: `${0.25 * size}rem`,
            paddingBottom: `${0.25 * size}rem`,
          }}
          className={`text-center font-serif italic leading-none text-[#2d7294] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.375 * size}rem` }}
              className={`font-bold leading-none`}
            >
              WordPress
            </p>
          )}
          <ReactIcon kind={'bs.BsWordpress'} size={`${48 * size}`} />
        </div>
      )
    case 'postgres':
      return (
        <div
          style={{ paddingLeft: `${-0.25 * size}rem`, paddingRight: `${-0.25 * size}rem` }}
          className={`text-center font-serif italic leading-none text-[#3b6286] dark:text-[#44729c] ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${-0.375 * size}rem` }}
              className={`font-bold leading-none`}
            >
              Postgres
            </p>
          )}
          <ReactIcon
            kind={'di.DiPostgresql'}
            size={`${73 * size}`}
            style={{ marginBottom: `${-9 * size}px` }}
          />
        </div>
      )
    case 'sql':
      return (
        <div
          className={`text-center font-serif italic leading-none text-[#3b6286] dark:text-[#44729c]  ${classAppend}`}
          {...rest}
        >
          {showLabel && (
            <p
              style={{ fontSize: `${14 * size}px`, marginBottom: `${0.375 * size}rem` }}
              className={`font-bold leading-none`}
            >
              SQL
            </p>
          )}
          <ReactIcon
            kind={'im.ImTable2'}
            size={`${52 * size}`}
            style={{ marginBottom: `${-0.5 * size}rem` }}
          />
        </div>
      )
    default:
      console.error(`<ReactIcon kind='${kind}' /> not found`)
      return null
  }
}
/**
 * Returns a labeled icon for various technologies.
 * @param {string} kind - can by any string found in techIconsAvailable
 * @returns stylize span of tech name
 */
export function TechLabel({ kind, children, ...rest }) {
  const classAppend = rest.className || ''
  delete rest.className

  switch (kind) {
    case 'javascript':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#98963c] ${classAppend}`}>
          {children || 'JavaScript'}
        </span>
      )
    case 'bootstrap':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#672ce7] ${classAppend}`}>
          {children || 'Bootstrap'}
        </span>
      )
    case 'react':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#51abcc] ${classAppend}`}>
          {children || 'React.js'}
        </span>
      )
    case 'rubygem':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#cf3c2f] ${classAppend}`}>
          {children || 'RubyGem'}
        </span>
      )
    case 'jquery':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#2764a1] ${classAppend}`}>
          {children || 'jQuery'}
        </span>
      )
    case 'nextjs':
      return (
        <span
          className={`font-serif text-[108%] font-black italic text-[#71acaa] dark:text-[#73aeac] ${classAppend}`}
        >
          {children || 'Next.js'}
        </span>
      )
    case 'tailwind':
      return (
        <span
          className={`font-serif text-[108%] font-black italic text-[#5ebaf3] dark:text-[#4488b2] ${classAppend}`}
        >
          {children || 'Tailwind CSS'}
        </span>
      )
    case 'sass':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#b4678f] ${classAppend}`}>
          {children || 'Sass'}
        </span>
      )
    case 'github':
      return (
        <span
          className={`font-serif text-[108%] font-black italic text-[#362a2a] dark:text-[#957676] ${classAppend}`}
        >
          {children || 'GitHub'}
        </span>
      )
    case 'express':
      return (
        <span
          className={`font-serif text-[108%] font-black italic text-[#30302f] dark:text-[#9e9e9b] ${classAppend}`}
        >
          {children || 'Express.js'}
        </span>
      )
    case 'python':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#406d90] ${classAppend}`}>
          {children || 'Python'}
        </span>
      )
    case 'mongodb':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#4a9d55] ${classAppend}`}>
          {children || 'MongoDB'}
        </span>
      )
    case 'cpp':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#6992c3] ${classAppend}`}>
          {children || 'C++'}
        </span>
      )
    case 'dsp':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#6992c3] ${classAppend}`}>
          {children || 'DSP'}
        </span>
      )
    case 'css3':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#3072b4] ${classAppend}`}>
          {children || 'CSS'}
        </span>
      )
    case 'html5':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#8f5339] ${classAppend}`}>
          {children || 'HTML'}
        </span>
      )
    case 'ror':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#9b4544] ${classAppend}`}>
          {children || 'Ruby on Rails'}
        </span>
      )
    case 'nodejs':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#64984f] ${classAppend}`}>
          {children || 'Node.js'}
        </span>
      )
    case 'php':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#7682ba] ${classAppend}`}>
          {children || 'PHP'}
        </span>
      )
    case 'git':
      return (
        <span
          className={`font-serif text-[108%] font-black italic text-[#362a2a] dark:text-[#957676] ${classAppend}`}
        >
          {children || 'Git'}
        </span>
      )
    case 'ruby':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#c22c1e] ${classAppend}`}>
          {children || 'Ruby'}
        </span>
      )
    case 'nosql':
      return (
        <span
          className={`font-serif text-[108%] font-black italic text-[#3e4d5d] dark:text-[#687e90]${classAppend}`}
        >
          {children || 'NoSQL'}
        </span>
      )
    case 'scripts':
      return (
        <span
          className={`text-[108%] font-black italic text-[#485a48] dark:text-[#789478] ${classAppend}`}
        >
          {children || 'Scripts'}
        </span>
      )
    case 'wordpress':
      return (
        <span className={`font-serif text-[108%] font-black italic text-[#2d7294] ${classAppend}`}>
          {children || 'WordPress'}
        </span>
      )
    case 'postgres':
      return (
        <span
          className={`font-serif text-[108%] font-black italic text-[#3b6286] dark:text-[#44729c] ${classAppend}`}
        >
          {children || 'PostgreSQL'}
        </span>
      )
    case 'sql':
      return (
        <span
          className={`font-serif text-[108%] font-black italic text-[#3b6286] dark:text-[#44729c] ${classAppend}`}
        >
          {children || 'SQL'}
        </span>
      )
    default:
      return (
        <span className={`font-serif text-[105%] font-medium italic ${classAppend}`}>
          {children}
        </span>
      )
  }
}
