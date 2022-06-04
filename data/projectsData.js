const projectsData = {
  jeffruss: [
    {
      sectionHeading: "Here are some of the latest and/or greatest things I'm invovled in:",
      projects: [
        {
          title: 'Next Markdown Journal',
          date: "Dec. '21 ~ Present.",
          description: `A personal or professional journal/posts starter build on Next.js, a React framework, with TailwindCSS and content provided as markdown or MDX files by one or more authors. It was used to build this site, jeffruss.com.`,
          imgSrc: '/static/images/projects/jeffruss/next-markdown-journal-homepage.png',
          href: 'https://github.com/Jeff-Russ/next-markdown-journal',
          techIcons: ['javascript', 'nodejs', 'react', 'nextjs', 'tailwind'],
        },
        {
          title: 'AdblibBlaster aka JuceOPLVSTi',
          description: `<!--MD-->AdblibBlaster is AUi a port for macOS of <a href="https://bsutherland.github.io/JuceOPLVSTi/" target="_blank">bsutherland's JuceOPLVSTi</a>, a VST instrument emulating the Yamaha OPL sound chip used in the AdLib FM synthesis soundcards from the 90s`,
          imgSrc: '/static/images/projects/jeffruss/adlibblaster.png',
          href: 'https://jeff-russ.github.io/AdlibBlaster/',
          techIcons: ['cpp', 'dsp'],
        },
        {
          hidden: true,
          title: 'next-markdown-journal',
          href: 'https://github.com/Jeff-Russ/next-markdown-journal',
          techIcons: ['javascript', 'nodejs', 'react', 'nextjs', 'tailwind'],
          description:
            'A personal journal, blog and portfolio website built in Next.js with content authored in MDX files (Markdown with JSX support) and TailwindCSS.',
          imgSrc: '/static/images/next-markdown-journal-homepage.png',
        },
        {
          hidden: true,
          title: 'AdlibBlaster',
          href: 'https://jeff-russ.github.io/AdlibBlaster/',
          techIcons: ['cpp', 'dsp'],
          description:
            'MacOS port of [bsutherland/JuceOPLVSTi](https://github.com/bsutherland/JuceOPLVSTi), a VST instrument which emulates the Yamaha OPL sound chip used in PC sound cards from the 90s.',
          imgSrc: '/static/images/adlibblaster-vst.jpg',
        },
      ],
    },
    {
      sectionHeading: 'Git and various Terminal Utilities (Bash and Node.js Scripts):',
      hideAll: false,
      projects: [
        {
          title: 'gits',
          href: 'https://github.com/Jeff-Russ/gits',
          techIcons: ['git', 'scripts'],
          description:
            'Initialize and toggle between multiple Git repositories from the same main working directory.',
          imgSrc: '/static/images/projects/jeffruss/gits.png',
          date: "Oct. '16",
        },
        {
          title: 'bash-boolean-helpers',
          techIcons: ['git', 'scripts'],
          href: 'https://github.com/Jeff-Russ/bash-boolean-helpers',
          description: "Adds 'truthy' and 'falsy' to Bash with better, cleaner syntax.",
          imgSrc: '/static/images/projects/jeffruss/bash-boolean-helpers.png',
          date: "Jun. '16",
        },
        {
          title: 'bashquicks',
          href: 'https://github.com/Jeff-Russ/bashquicks',
          techIcons: ['git', 'scripts'],
          description: 'Staple bash scripts for common tasks.',
          imgSrc: '/static/images/projects/jeffruss/bashquicks.png',
          date: "May '16",
        },
        {
          title: 'spelunker-node-shell',
          href: 'https://github.com/Jeff-Russ/spelunker-node-shell',
          techIcons: ['javascript', 'nodejs', 'react', 'nextjs', 'tailwind'],
          description:
            '“`spelunker()` sends your guy into the shell and brings back the goods quicker than going in and out for each command.” The goal of this project was to limit I/O with the shell and thus increase performance.',
          imgSrc: '/static/images/projects/jeffruss/spelunker.png',
          date: "Jun. '16",
        },
      ],
    },
    {
      sectionHeading: 'CSS, SCSS(SASS), Bootstrap and HTML:',
      hideAll: false,
      projects: [
        {
          title: 'jeffpack-for-wordpress',
          href: 'https://github.com/Jeff-Russ/jeffpack-for-wordpress',
          techIcons: ['css3', 'sass', 'bootstrap', 'html5', 'wordpress', 'php'],
          description:
            'A WordPress Plugin / Theme for editing sites from a local machine with installing & updating the deployed site done via `git`.',
          imgSrc: '',
          date: "Jan. '17",
        },
        {
          title: 'scoped-bootstrap',
          href: 'https://github.com/Jeff-Russ/scoped-bootstrap',
          techIcons: ['css3', 'sass', 'bootstrap', 'html5'],
          description: 'Apply Bootstrap only to specified HTML elements.',
          imgSrc: '',
          date: "Aug. '16",
        },
        {
          title: 'PlastiCSS',
          href: 'https://github.com/Jeff-Russ/PlastiCSS',
          techIcons: ['css3', 'sass', 'bootstrap', 'html5'],
          description:
            'A SCSS (Sass) library to generate CSS for pages without horizontal scrolling.',
          imgSrc: '',
          date: "Mar. '16",
        },
      ],
    },
    {
      sectionHeading: 'C++ & DSP:',
      hideAll: false,
      projects: [
        {
          title: 'jATK',
          techIcons: ['cpp', 'dsp'],
          href: 'https://github.com/Jeff-Russ/jATK',
          description: "Jeff's (JUCE)Audio ToolKit: A DSP audio synthesis library.",
          imgSrc: '',
          date: "Jun. '15",
        },
      ],
    },
    {
      sectionHeading: 'Ruby and Ruby on Rails:',
      projects: [
        {
          title: 'markdown.design',
          href: 'https://github.com/Jeff-Russ/markdown.design',
          techIcons: ['ruby', 'ror'],
          description: 'A real-time web page generator assembled from simple markdown documents.',
          imgSrc: '/static/images/projects/jeffruss/markdown.design.png',
          date: "May '16",
        },
        {
          title: 'gfunc-gem',
          href: 'https://github.com/Jeff-Russ/gfunc-gem',
          techIcons: ['ruby', 'rubygem'],
          description: 'The gfunc Ruby gem is a small collection of multi-purpose utilities.',
          imgSrc: '/static/images/projects/jeffruss/gfunc.png',
          date: "May '16",
        },
      ],
    },
  ],
  sparrowhawk: [
    {
      sectionHeading: 'Some Projects',
      hideAll: false,
      projects: [
        {
          title: 'A Search Engine',
          description: `What if you could look up any information in the world? Webpages, images, videos
          and more. Google has many features to help you find exactly what you're looking
          for.`,
          imgSrc: '/static/images/projects/sparrowhawk/google.png',
          href: 'https://www.google.com',
        },
        {
          title: 'The Time Machine',
          description: `Imagine being able to travel back in time or to the future. Simple turn the knob
          to the desired date and press "Go". No more worrying about lost keys or
          forgotten headphones with this simple yet affordable solution.`,
          imgSrc: '/static/images/projects/sparrowhawk/time-machine.jpg',
          href: '/blog/the-time-machine',
        },
      ],
    },
  ],
}

export default projectsData
