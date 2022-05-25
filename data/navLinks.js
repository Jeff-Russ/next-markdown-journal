// As for reactIcon, only reactIcon[0] is used so move the one you like up to that position.
// The rest are there in case you change your mind.
const navLinks = [
  {
    title: 'Posts',
    href: '/posts/page/1',
    reactIcon: [
      'md.MdRssFeed',
      'md.MdAutoStories',
      'md.MdMenuBook',
      'md.MdArticle',
      'md.MdDynamicFeed',
      'md.MdLocalLibrary', // meh
      'md.MdFormatQuote',
    ],
  },
  { title: 'Tags', href: '/tags', reactIcon: ['md.MdTag'] },
  {
    title: 'Projects',
    href: '/projects',
    reactIcon: [
      'md.MdHandyman',
      'md.MdDataObject',
      'md.MdDataArray',
      'md.MdConstruction',
      'md.MdBusinessCenter',
      'md.MdCategory',
      'md.MdSquareFoot',
      'md.MdAccountTree',
      'md.MdEngineering',
      'md.MdCode',
      'md.MdWorkHistory',
      'md.MdMediation',
      'md.MdViewTimeline',
      'md.MdDataset',
      'md.MdDeveloperBoard',
      'md.MdWebStories',
    ],
  },
  {
    title: 'About',
    href: '/about',
    reactIcon: [
      'md.MdContactSupport',
      'md.MdQuiz',
      'md.MdAttribution',
      'md.MdContactMail',
      'md.MdSpeakerNotes',
      'md.Md3p',
      'md.MdContactPage',
      'md.MdContactEmergency',
    ],
  },
  {
    title: 'Resumé',
    href: '/resume',
    reactIcon: [
      'md.MdDescription',
      'md.MdTextSnippet',
      'md.MdFeed',
      'md.MdSummarize',
      'md.MdFilePresent',
      'md.MdAttachFile',
      'md.MdAttachment',
      'md.MdWysiwyg',
      'md.MdTextFormat',
    ],
  },
]

export default navLinks

export const headerNavOrder = [0, 1, 2, 3, 4]
export const homeNavOrder = [3, 4, 2, 0, 1]
