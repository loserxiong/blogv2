import type {
  AnalyticsConfig,
  CommentConfig,
  GithubConfig,
  Link,
  PhotosConfig,
  PostConfig,
  ProjectConfig,
  Site,
  SkillsShowcaseConfig,
  SocialLink,
  TagsConfig,
} from '~/types'

//--- Readme Page Config ---
export const SITE: Site = {
  title: "Jiasheng's Blog",
  description: 'Personal website for Jiasheng Xiong',
  website: 'https://litos.vercel.app/',
  lang: 'zh-CN',
  base: '/',
  author: 'Jiasheng Xiong',
  ogImage: '/og-image.jpg',
  transition: false,
  themeAnimation: true,
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Posts',
    url: '/posts',
  },
]

export const FOOTER_LINKS: Link[] = [
  {
    name: 'Readme',
    url: '/',
  },
  {
    name: 'Posts',
    url: '/posts',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Tags',
    url: '/tags',
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'strava',
    url: 'https://www.strava.com/athletes/124855661',
    icon: 'icon-[bi--strava]',
  },
  {
    name: 'rednote',
    url: 'https://xhslink.com/m/8expZCsqVza',
    icon: 'icon-[famicons--share-social-sharp]',
  },
]

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: false,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'JavaScript',
          icon: 'icon-[skill-icons--javascript]',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'CSS',
          icon: 'icon-[skill-icons--css]',
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
        {
          name: 'HTML',
          icon: 'icon-[skill-icons--html]',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
          name: 'TypeScript',
          icon: 'icon-[skill-icons--typescript]',
          url: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Vue',
          icon: 'icon-[skill-icons--vuejs-dark]',
          url: 'https://vuejs.org/',
        },
        {
          name: 'Sass',
          icon: 'icon-[skill-icons--sass]',
          url: 'https://sass-lang.com/',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'Astro',
          icon: 'icon-[skill-icons--astro]',
          url: 'https://astro.build/',
        },
        {
          name: 'Node.js',
          icon: 'icon-[skill-icons--nodejs-dark]',
          url: 'https://nodejs.org/',
        },
        {
          name: 'React',
          icon: 'icon-[skill-icons--react-dark]',
          url: 'https://react.dev/',
        },
        {
          name: 'Next.js',
          icon: 'icon-[skill-icons--nextjs-dark]',
          url: 'https://nextjs.org/',
        },
        {
          name: 'Tailwind CSS',
          icon: 'icon-[skill-icons--tailwindcss-dark]',
          url: 'https://tailwindcss.com/',
        },
        {
          name: 'Vite',
          icon: 'icon-[skill-icons--vite-dark]',
          url: 'https://vitejs.dev/',
        },
      ],
    },
    {
      direction: 'left',
      skills: [
        {
          name: 'Ubuntu',
          icon: 'icon-[skill-icons--ubuntu-dark]',
          url: 'https://ubuntu.com/',
        },
        {
          name: 'Git',
          icon: 'icon-[skill-icons--git]',
          url: 'https://git-scm.com/',
        },
        {
          name: 'MongoDB',
          icon: 'icon-[skill-icons--mongodb]',
          url: 'https://www.mongodb.com/',
        },
        {
          name: 'Vercel',
          icon: 'icon-[skill-icons--vercel-dark]',
          url: 'https://vercel.com/',
        },
        {
          name: 'VS Code',
          icon: 'icon-[skill-icons--vscode-dark]',
          url: 'https://code.visualstudio.com/',
        },
        {
          name: 'Obsidian',
          icon: 'icon-[skill-icons--obsidian-dark]',
          url: 'https://obsidian.md/',
        },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {string} GITHUB_USERNAME - GITHUB用户名 / GitHub username
 * @property {boolean} TOOLTIP_ENABLED - 是否开启Tooltip功能 / Whether to enable Github Tooltip features
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: false,
  GITHUB_USERNAME: 'loserxiong',
  TOOLTIP_ENABLED: true,
}

//--- Posts Page Config ---
export const POSTS_CONFIG: PostConfig = {
  title: 'Posts',
  description: 'Posts by Jiasheng Xiong',
  introduce: '最近的积累和思考',
  author: 'Jiasheng Xiong',
  homePageConfig: {
    size: 5,
    type: 'time-line',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
    coverLayout: 'right',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  ogImageUseCover: false,
  postType: 'metaOnly',
  imageDarkenInDark: true,
  readMoreText: 'Read more',
  prevPageText: 'Previous',
  nextPageText: 'Next',
  tocText: 'On this page',
  backToPostsText: 'Back to Posts',
  nextPostText: 'Next Post',
  prevPostText: 'Previous Post',
  recommendText: 'REC',
  wordCountView: true,
}

export const COMMENT_CONFIG: CommentConfig = {
  enabled: false,
  system: 'none',
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Tags',
  description: 'All tags of Posts',
  introduce: '所有的标签都在这了',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'Projects',
  description: '一些完成的项目',
  introduce: '一些完成的项目',
}

export const PHOTOS_CONFIG: PhotosConfig = {
  title: 'Photos',
  description: '日常照片',
  introduce: '日常照片',
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  vercount: {
    enabled: false,
  },
  umami: {
    enabled: false,
    websiteId: 'Your websiteId in umami',
    serverUrl: 'https://cloud.umami.is/script.js',
  },
}
