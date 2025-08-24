import type { GithubConfig, Link, PostConfig, Project, ProjectConfig, Site, SkillsShowcaseConfig, SocialLink, TagsConfig } from '~/types'

export const SITE: Site = {
  title: 'Jiasheng\'s Blog',
  description: 'Personal website for Jiasheng Xiong',
  website: 'https://litos.vercel.app/',
  base: '/',
  author: 'Jiasheng Xiong',
  ogImage: '/og-image.jpg',
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'Resume',
    url: '/resume',
  },
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
    name: 'Resume',
    url: '/resume',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Posts',
    url: '/posts',
  },
  {
    name: 'Tags',
    url: '/tags',
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/yourname',
    icon: 'icon-[ri--github-fill]',
  },
  {
    name: 'rednote',
    url: 'https://reddit.com/user/yourname',
    icon: 'icon-[ri--rednote-fill]',
  },
  {
    name: 'bilibili',
    url: 'https://space.bilibili.com/yourSpaceId',
    icon: 'icon-[ri--bilibili-fill]',
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
          icon: 'icon-[mdi--language-javascript]',
        },
        {
          name: 'CSS',
          icon: 'icon-[mdi--language-css3]',
        },
        {
          name: 'HTML',
          icon: 'icon-[mdi--language-html5]',
        },
        {
          name: 'TypeScript',
          icon: 'icon-[mdi--language-typescript]',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'Astro',
          icon: 'icon-[lineicons--astro]',
        },
        {
          name: 'Node.js',
          icon: 'icon-[mdi--nodejs]',
        },
        {
          name: 'React',
          icon: 'icon-[mdi--react]',
        },
        {
          name: 'Next.js',
          icon: 'icon-[devicon--nextjs]',
        },
        {
          name: 'Tailwind CSS',
          icon: 'icon-[mdi--tailwind]',
        },
        {
          name: 'Iconify',
          icon: 'icon-[line-md--iconify2-static]',
        },
      ],
    },
    {
      direction: 'left',
      skills: [
        {
          name: 'Ubuntu',
          icon: 'icon-[mdi--ubuntu]',
        },
        {
          name: 'Git',
          icon: 'icon-[mdi--git]',
        },
        {
          name: 'MongoDB',
          icon: 'icon-[lineicons--mongodb]',
        },
        {
          name: 'Vercel',
          icon: 'icon-[lineicons--vercel]',
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
  GITHUB_USERNAME: 'Dnzzk2',
  TOOLTIP_ENABLED: true,
}

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
    type: 'compact',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  defaultHeroImage: '/og-image.jpg',
  defaultHeroImageAspectRatio: '16/9',
  postType: 'horizontal',
  imageDarkenInDark: true,
  readMoreText: 'Read more',
  prevPageText: 'Previous',
  nextPageText: 'Next',
  tocText: 'On this page',
  backToPostsText: 'Back to Posts',
  nextPostText: 'Next Post',
  prevPostText: 'Previous Post',
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Tags',
  description: 'All tags of Posts',
  introduce: 'All the tags for posts are here, you can click to filter them.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'Projects',
  description: 'The examples of my projects.',
  introduce: 'The examples of my projects.',
}

// get icon https://icon-sets.iconify.design/
export const ProjectList: Project[] = [
  {
    name: '这是blog的格式',
    description: 'A Simple & Modern Blog Theme for Astro.',
    githubUrl: 'https://github.com/Dnzzk2/Litos',
    website: 'https://litos.vercel.app/',
    type: 'image',
    icon: '/projects/logo.png',
    star: 16,
    fork: 5,
  },
]
