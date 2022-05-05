const navLinks = [
  {
    title: 'Posts',
    href: '/posts/page/1',
    materialIcon: [
      'rss_feed',
      'auto_stories',
      'menu_book',
      'article',
      'dynamic_feed',
      'newspaper',
      'local_library', // meh
      'format_quote',
    ],
  },
  { title: 'Tags', href: '/tags', materialIcon: ['tag'] },
  {
    title: 'Projects',
    href: '/projects',
    materialIcon: [
      'handyman',
      'data_object',
      'data_array',
      'construction',
      'business_center',
      'category',
      'square_foot',
      'account_tree',
      'engineering',
      'code',
      'work_history',
      'mediation',
      'view_timeline',
      'dataset',
      'developer_board',
      'web_stories',
    ],
  },
  {
    title: 'About',
    href: '/about',
    materialIcon: [
      'contact_support',
      'quiz',
      'attribution',
      'contact_mail',
      'speaker_notes',
      '3p',
      'contact_page',
      'contact_emergency',
    ],
  },
  {
    title: 'Resumé',
    href: '/resume',
    materialIcon: [
      'description',
      'text_snippet',
      'feed',
      'summarize',
      'file_present',
      'attach_file',
      'attachment',
      'wysiwyg',
      'text_format',
    ],
  },
]

export default navLinks

export const headerNavOrder = [0, 1, 2, 3, 4]
export const homeNavOrder = [3, 4, 2, 0, 1]
