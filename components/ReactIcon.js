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
 * @returns A div with an approximate height of 70px, containing a labeel and svg of the icon.
 */
export function TechIcon({ kind, ...rest }) {
  const classAppend = rest.className || ''
  delete rest.className

  switch (kind) {
    case 'javascript':
      return (
        <div
          className={`text-center font-serif italic leading-none text-[#98963c] ${classAppend}`}
          {...rest}
        >
          <p className="-mb-1 font-bold leading-none">JavaScript</p>
          <ReactIcon kind={'di.DiJavascript'} size={`68`} className="-mb-[6px]" />
        </div>
      )
    case 'bootstrap':
      return (
        <div
          className={`px-0 pb-1 text-center font-serif italic leading-none text-[#672ce7] ${classAppend}`}
          {...rest}
        >
          <p className="font-bold leading-none ">Bootstrap</p>
          <ReactIcon kind={'si.SiBootstrap'} size={`56`} className="-mb-1" />
        </div>
      )
    case 'react':
      return (
        <div
          className={`px-0 pb-1 text-center font-serif italic leading-none text-[#6bb6d2] ${classAppend}`}
          {...rest}
        >
          <p className="mb-0.5 font-bold leading-none">React</p>
          <ReactIcon kind={'si.SiReact'} size={`56`} className="-mb-1" />
        </div>
      )
    case 'rubygem':
      return (
        <div
          className={`px-0.5 pb-1 text-center font-serif italic leading-none text-[#cf3c2f] ${classAppend}`}
          {...rest}
        >
          <p className="mb-0.5 font-bold leading-none">RubyGem</p>
          <ReactIcon kind={'si.SiRubygems'} size={`52`} className="mb-0" />
        </div>
      )
    case 'jquery':
      return (
        <div
          className={`px-0.5 pb-1 text-center font-serif italic leading-none text-[#2764a1] ${classAppend}`}
          {...rest}
        >
          <p className="mb-0.5 font-bold leading-none">jQuery</p>
          <ReactIcon kind={'si.SiJquery'} size={`52`} className="mb-0" />
        </div>
      )
    case 'dsp':
      return (
        <div
          className={`px-0.5 pb-1 text-center font-serif italic leading-none text-[#2764a1] ${classAppend}`}
          {...rest}
        >
          <p className="mb-0.5 font-bold leading-none">DSP</p>
          <ReactIcon kind={'si.SiAudiomack'} size={`52`} className="mb-0" />
        </div>
      )
    case 'nextjs':
      return (
        <div
          className={`px-0.5 pb-1 text-center font-serif italic leading-none text-[#888899] ${classAppend}`}
          {...rest}
        >
          <p className="mb-0.5 font-bold leading-none">NextJS</p>
          <ReactIcon kind={'si.SiNextdotjs'} size={`52`} className="mb-0" />
        </div>
      )
    case 'tailwind':
      return (
        <div
          className={`pb-0.5 text-center font-serif italic leading-none text-[#509fcf] ${classAppend}`}
          {...rest}
        >
          <p className="mb-1 font-bold leading-none">Tailwind</p>
          <ReactIcon
            kind={'si.SiTailwindcss'}
            size={`52`}
            className="rounded-[50%] border-[1px] border-[#509fcf] p-0.5 shadow-md"
          />
        </div>
      )
    case 'sass':
      return (
        <div
          className={`px-0.5 pb-1 text-center font-serif italic leading-none text-[#b4678f] ${classAppend}`}
          {...rest}
        >
          <p className="mb-1 font-bold leading-none">Sass</p>
          <ReactIcon kind={'si.SiSass'} size={`50`} className="mb-0" />
        </div>
      )
    case 'github':
      return (
        <div
          className={`px-0.5 pb-1 text-center font-serif italic leading-none dark:text-[#898888] ${classAppend}`}
          {...rest}
        >
          <p className="mb-1 font-bold leading-none">GitHub</p>
          <ReactIcon kind={'si.SiGithub'} size={`50`} className="mb-0" />
        </div>
      )
    case 'express':
      return (
        <div
          className={`px-0.5 pb-1 text-center font-serif italic leading-none text-[#30302f] dark:text-[#9e9e9b]  ${classAppend}`}
        >
          <p className="mb-1 font-bold leading-none">Express</p>
          <ReactIcon
            kind={'si.SiExpress'}
            size={`52`}
            className="-mb-0.5 rounded-[50%] border-[1px] border-[#30302f] p-1 shadow-md dark:border-[#9e9e9b]"
          />
        </div>
      )
    case 'python':
      return (
        <div
          className={`pb-1 text-center font-serif italic leading-none text-[#406d90] ${classAppend}`}
          {...rest}
        >
          <p className="mb-1 font-bold leading-none">Python</p>
          <ReactIcon kind={'si.SiPython'} size={`52`} className="-mb-0.5" />
        </div>
      )
    case 'mongodb':
      return (
        <div
          className={`pb-1 text-center font-serif italic leading-none text-[#4a9d55] ${classAppend}`}
          {...rest}
        >
          <p className="mb-1 font-bold leading-none">MongoDB</p>
          <ReactIcon
            kind={'si.SiMongodb'}
            size={`52`}
            className="-mb-0.5 rounded-[50%] border-2 border-[#77a452] bg-[#563f37] p-1 text-[#77a452] shadow-md"
          />
        </div>
      )
    case 'cpp':
      return (
        <div
          className={`pb-1 text-center font-serif italic leading-none text-[#6992c3] ${classAppend}`}
          {...rest}
        >
          <p className="mb-1 font-bold leading-none">C++</p>
          <ReactIcon kind={'si.SiCplusplus'} size={`52`} className="-mb-0.5" />
        </div>
      )
    case 'css3':
      return (
        <div
          className={`-mx-1 px-0.5 pb-1 text-center font-serif italic leading-none text-[#3072b4] ${classAppend}`}
          {...rest}
        >
          <p className="mb-0.5 font-bold leading-none">CSS</p>
          <ReactIcon kind={'si.SiCss3'} size={`56`} className="-mb-1" />
        </div>
      )
    case 'html5':
      return (
        <div
          className={`-mx-1 px-0.5 pb-1 text-center font-serif italic leading-none text-[#8f5339] ${classAppend}`}
          {...rest}
        >
          <p className="mb-0.5 font-bold leading-none">HTML</p>
          <ReactIcon kind={'si.SiHtml5'} size={`56`} className="-mb-1" />
        </div>
      )
    case 'ror':
      return (
        <div
          className={`-mx-1 px-0.5 pb-1 text-center font-serif italic leading-none text-[#9b4544] ${classAppend}`}
          {...rest}
        >
          <p className="-mb-0.5 font-bold leading-none">Ruby</p>
          <p className="-mb-4 font-bold leading-none">on</p>
          <ReactIcon kind={'si.SiRubyonrails'} size={`56`} className="mb-0" />
        </div>
      )
    // case 'nodejs':
    // 	return (
    // 		<div className={`text-center font-serif italic leading-none text-[#64984f] pb-2 -mx-1 ${classAppend}`} {...rest}>
    // 			<NodeIcon width="70" height='70' fill="currentColor" className='mx-auto -mb-1' />
    // 		</div>
    // 	)
    case 'nodejs':
      return (
        <div
          className={`-mx-1 pb-2 text-center font-serif italic leading-none text-[#64984f] ${classAppend}`}
          {...rest}
        >
          <p className="mb-0.5 font-bold leading-none">Node</p>
          <ReactIcon kind={'fa.FaNodeJs'} size="54" />
        </div>
      )
    case 'php':
      return (
        <div
          className={`px-0 pb-3 text-center font-serif italic leading-none text-[#7682ba] ${classAppend}`}
          {...rest}
        >
          <p className="-mb-1 font-bold leading-none">PHP</p>
          <PhpElephantOnly width="62" height="62" fill="currentColor" className="mx-auto -mb-4" />
        </div>
      )
    case 'git':
      return (
        <div
          className={`-mx-2 text-center font-serif italic leading-none text-[#d85a3e] ${classAppend}`}
          {...rest}
        >
          <p className="-mb-2 font-bold leading-none">Git</p>
          <ReactIcon kind={'di.DiGit'} size={`74`} className="-mb-2" />
        </div>
      )
    case 'ruby':
      return (
        <div
          className={`-mx-0.5 text-center font-serif italic leading-none text-[#c22c1e] ${classAppend}`}
          {...rest}
        >
          <p className="mb-0 font-bold leading-none">Ruby</p>
          <ReactIcon kind={'di.DiRuby'} size={`50`} className="mb-2" />
        </div>
      )
    case 'nosql':
      return (
        <div
          className={`-mx-1 text-center font-serif italic leading-none text-[#30302f] ${classAppend}`}
          {...rest}
        >
          <p className="mb-0 font-bold leading-none">NoSQL</p>
          <ReactIcon kind={'hi.HiOutlineDatabase'} size={`58`} className="-mb-2" />
        </div>
      )
    case 'scripts':
      return (
        <div
          className={`mx-1 pb-1 text-center font-serif italic leading-none text-[#3f473f] dark:text-[#545f54] ${classAppend}`}
          {...rest}
        >
          <p className="mb-1.5 font-bold leading-none">Scripts</p>
          <ReactIcon kind={'bs.BsTerminal'} size={`48`} />
        </div>
      )
    case 'wordpress':
      return (
        <div
          className={`mx-1 pb-1 text-center font-serif italic leading-none text-[#2d7294] ${classAppend}`}
          {...rest}
        >
          <p className="mb-1.5 font-bold leading-none">WordPress</p>
          <ReactIcon kind={'bs.BsWordpress'} size={`48`} />
        </div>
      )
    case 'postgres':
      return (
        <div
          className={`-mx-1 text-center font-serif italic leading-none text-[#3b6286] dark:text-[#44729c] ${classAppend}`}
          {...rest}
        >
          <p className="-mb-1.5 font-bold leading-none">Postgres</p>
          <ReactIcon kind={'di.DiPostgresql'} size={`73`} className="-mb-[9px]" />
        </div>
      )
    case 'sql':
      return (
        <div
          className={`text-center font-serif italic leading-none text-[#3b6286] dark:text-[#44729c]  ${classAppend}`}
          {...rest}
        >
          <p className="mb-0 font-bold leading-none">SQL</p>
          <ReactIcon kind={'im.ImTable2'} size={`52`} className="-mb-2" />
        </div>
      )
    default:
      console.error(`<ReactIcon kind='${kind}' /> not found`)
      return null
  }
}
/*
const tech = {
      javascript: {icon: 'di.DiJavascript', color: 'text-[#98963c]' mb: '-mb-1', size: '70'}
    }
*/
// export function TechIconsLabled({tech, labelPosition, ...rest}) {
// 	// let wrapper = ({children}) => <p className="sm:inline sm:align-text-top ">{children}</p>
// 	// if (labelPosition === 'b') {

// 	// }
// 	let kind = ''
// 	switch(tech) {
// 		case 'javascript': kind=''

// 		default: return null
// 	}

// 	return <DynamicComponent {...rest} />
// }

// import {
//   SiAmazonaws,  // SiAngular, SiAngularjs,  SiApple, SiAppstore, SiAssemblyscript, SiAtom, SiBitbucket
//   SiBootstrap, SiCoffeescript,
//   SiCss3,  // SiCsswizardry,
//   SiCplusplus, // SiCsharp,  SiDevdotto,
//   SiExpress,  // SiFitbit,   SiFlutter,
//   SiGithub, SiGnubash, SiHtml5, SiJavascript, SiJava,
//   SiJquery,  // SiLess,
//   SiLinkedin,
//   SiMarkdown, // SiMeetup,  SiMicropython, SiMidi, SiMocha,
//   SiMongodb, SiNextdotjs, SiNodedotjs, SiNpm, SiPhp, SiPostgresql,
//   SiPython, // SiRaspberrypi,
//   SiReact, // SiReddit,
//   SiRuby, SiRubygems, SiRubyonrails,
//   SiSass,  // SiSemanticuireact,  SiSwift,
//   SiTailwindcss, // SiTiktok, SiTsnode,  SiTypescript, SiUdacity,  SiUdemy,  SiUpwork,
//   SiVercel, SiVisualstudiocode,
//   // SiWebassembly, SiWikipedia,
//   SiWordpress,  // SiYoutube,
// } from "react-icons/si";

// export default TechIcons

// import {
//   // DiAndroid, DiAngularSimple, DiApple, DiAtom
//   DiAws, DiBitbucket, DiBootstrap,
//   // DiBower. DiClojureAlt, DiClojure, DiCoda, DiCodeBadge, DiCode DiCodeigniter,
//   DiCodepen, DiCoffeescript, // DiCreativecommonsBadge, DiCreativecommons
//   DiCss3Full, DiCss3, // DiDart, DiDebian, DiDigitalOcean, DiDjang, DiDlang, DiDocker,
//   // DiDotnet, DiDrupal, DiEmber, DiErlang. DiFirebase, DiFsharp
//   // DiGitBranch, DiGitCommit, DiGitCompare, DiGitMerge, DiGitPullRequest
//   DiGit, DiGithubAlt, DiGithubBadge, DiGithubFull, DiGithub, // DiGo,
//   DiGoogleAnalytics, // DiGoogleDrive, DiGoogleCloudPlatform
//   // DiGrails, DiGroovy, DiGrunt, DiGulp, DiHaskell
//   DiHeroku, DiHtml5, DiJava, DiJavascript1, DiJavascript, // DiJekyllSmall, DiJenkins, DiJira, DiJoomla
//   DiJqueryLogo, // DiJqueryUiLogo
//   DiJsBadge, // DiLaravel, DiLess, DiLinux
//   DiMailchimp, DiMarkdown, // DiMaterializecss, DiMeteor, DiMeteorfull,
//   DiMitlicence, // DiModernizr
//   DiMongodb, // DiMootoolsBadge, DiMootools, DiMsqlServer, DiMysql, DiNginx
//   DiNodejsSmall, DiNodejs, DiNpm, //DiPerl, DiPhonegap
//   DiPhp, DiPostgresql,  DiPython, // DiRasberryPi
//   DiReact, DiResponsive,  DiRor, DiRubyRough, DiRuby, // DiRust
//   DiSass, // DiScala, DiScriptcs, DiScrum, DiSpark
//   DiSqllite, DiStackoverflow, // DiStreamline, DiStylus, DiSublime, DiSwift, DiSymfonyBadge,DiSymfony
//   DiTerminalBadge, DiTerminal, // DiTravis, DiTrello, DiTypo3, DiUbuntu, DiUikit, DiUnitySmall, DiVim
//   DiVisualstudio, DiW3C, // DiWebplatform, DiWindows
//   DiWordpress, // DiYeoman, DiYii, DiZend,
// } from "react-icons/di";
