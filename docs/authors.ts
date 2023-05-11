import authors from './authors.json'
import type { DocsTheme } from './.vitepress/theme/types'

export interface Author {
  name: string | Record<string, string>
  github: string
  avatar: string
  modstore?: string
  modxpro?: string
  website?: string
}

const authorsList: Record<string, Author> = {}

for (const [key, value] of Object.entries(authors)) {
  const data: Partial<Author> = typeof value === 'object' && value !== null ? value : {}

  authorsList[key] = {
    ...data,
    name: typeof value === 'string' ? value : value.name,
    github: `https://github.com/${key}`,
    avatar: `https://github.com/${key}.png`,
  }
}

export const coreMembers: DocsTheme.TeamMember[] = [
  {
    avatar: 'https://github.com/GulomovCreative.png',
    name: {
      ru: 'Баха Волков',
      en: 'Gulomov Bakhtovar',
    },
    org: 'codesolution.io',
    orgLink: 'https://codesolution.io',
    links: [
      { icon: 'github', link: 'https://github.com/GulomovCreative' },
      { icon:
        { svg: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 457.8 465.9"><path d="M0 210.9V0l105.5 89.2L210.9 0v210.9H0zm449.9-105.4c0 58.2-47.2 105.5-105.5 105.5S239 163.7 239 105.5 286.2 0 344.4 0s105.5 47.2 105.5 105.5zM0 255v210.9h113.2v-.3c47.5-4.1 84.9-49.6 84.9-105.2 0-55.5-37.4-101-84.9-105.2v-.2H0zm313.2 0H191.7l126.9 210.9h123.7L313.2 255zm129.2 34.5c-2.4 0-4.7-.4-6.7-1.1-2-.7-3.8-1.8-5.3-3.1-1.5-1.4-2.7-2.9-3.5-4.7-.8-1.8-1.2-3.8-1.2-6s.4-4.1 1.2-5.9c.8-1.8 2-3.4 3.5-4.7 1.5-1.4 3.3-2.4 5.3-3.1 2-.7 4.3-1.1 6.6-1.1 2.4 0 4.6.4 6.6 1.1 2 .7 3.8 1.8 5.3 3.1s2.7 2.9 3.5 4.7c.8 1.8 1.2 3.8 1.2 5.9s-.4 4.1-1.2 6c-.8 1.8-2 3.4-3.5 4.7-1.5 1.3-3.3 2.4-5.3 3.1-1.9.7-4.1 1.1-6.5 1.1zm-.1-4.7c1.6 0 3-.2 4.3-.7 1.3-.5 2.5-1.2 3.5-2.1 1-.9 1.7-2 2.3-3.2.6-1.2.8-2.6.8-4.1s-.3-2.8-.8-4.1c-.5-1.2-1.3-2.3-2.3-3.2-1-.9-2.1-1.7-3.5-2.2-1.3-.5-2.8-.7-4.3-.7s-3 .2-4.3.7c-1.3.5-2.4 1.2-3.5 2.2-1 .9-1.7 2-2.3 3.2-.5 1.2-.8 2.6-.8 4.1 0 1.5.3 2.8.8 4.1.6 1.2 1.3 2.3 2.3 3.3 1 .9 2.1 1.6 3.5 2.1 1.3.3 2.8.6 4.3.6z"/><path fill-rule="evenodd" d="M363.7 289.1v-29h12.8c2.7 0 5.1.4 7 1.2 2 .8 3.5 2 4.6 3.6 1.1 1.5 1.6 3.4 1.6 5.5s-.5 4-1.6 5.5-2.6 2.7-4.6 3.6c-2 .8-4.3 1.2-7 1.2h-7v8.4h-5.8zm18.2-14.4c-1.3 1-3.2 1.5-5.7 1.5h-6.7v-11.5h6.7c2.5 0 4.5.5 5.7 1.5 1.3 1 1.9 2.4 1.9 4.3.1 1.8-.6 3.2-1.9 4.2zm13.5 14.4v-29h12.8c2.7 0 5.1.4 7 1.2 2 .8 3.5 2 4.6 3.6 1.1 1.5 1.6 3.4 1.6 5.5s-.5 4-1.6 5.5-2.6 2.7-4.6 3.5c-.1.1-.3.1-.4.2l7.1 9.5h-6.2l-6.3-8.5h-8.2v8.4h-5.8zm18.2-14.4c-1.3 1-3.2 1.5-5.7 1.5h-6.7v-11.5h6.7c2.5 0 4.4.5 5.7 1.5 1.3 1 1.9 2.4 1.9 4.3.1 1.8-.6 3.2-1.9 4.2z" clip-rule="evenodd"/></svg>' },
        link: 'https://modx.pro/users/gulomovcreative',
      },
    ],
  },
  {
    avatar: 'https://github.com/Ibochkarev.png',
    name: {
      ru: 'Иван Бочкарёв',
      en: 'Ivan Bochkarev',
    },
    org: 'MODX RSC',
    orgLink: 'https://github.com/modx-pro',
    links: [
      { icon: 'github', link: 'https://github.com/Ibochkarev' },
      { icon:
        { svg: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 457.8 465.9"><path d="M0 210.9V0l105.5 89.2L210.9 0v210.9H0zm449.9-105.4c0 58.2-47.2 105.5-105.5 105.5S239 163.7 239 105.5 286.2 0 344.4 0s105.5 47.2 105.5 105.5zM0 255v210.9h113.2v-.3c47.5-4.1 84.9-49.6 84.9-105.2 0-55.5-37.4-101-84.9-105.2v-.2H0zm313.2 0H191.7l126.9 210.9h123.7L313.2 255zm129.2 34.5c-2.4 0-4.7-.4-6.7-1.1-2-.7-3.8-1.8-5.3-3.1-1.5-1.4-2.7-2.9-3.5-4.7-.8-1.8-1.2-3.8-1.2-6s.4-4.1 1.2-5.9c.8-1.8 2-3.4 3.5-4.7 1.5-1.4 3.3-2.4 5.3-3.1 2-.7 4.3-1.1 6.6-1.1 2.4 0 4.6.4 6.6 1.1 2 .7 3.8 1.8 5.3 3.1s2.7 2.9 3.5 4.7c.8 1.8 1.2 3.8 1.2 5.9s-.4 4.1-1.2 6c-.8 1.8-2 3.4-3.5 4.7-1.5 1.3-3.3 2.4-5.3 3.1-1.9.7-4.1 1.1-6.5 1.1zm-.1-4.7c1.6 0 3-.2 4.3-.7 1.3-.5 2.5-1.2 3.5-2.1 1-.9 1.7-2 2.3-3.2.6-1.2.8-2.6.8-4.1s-.3-2.8-.8-4.1c-.5-1.2-1.3-2.3-2.3-3.2-1-.9-2.1-1.7-3.5-2.2-1.3-.5-2.8-.7-4.3-.7s-3 .2-4.3.7c-1.3.5-2.4 1.2-3.5 2.2-1 .9-1.7 2-2.3 3.2-.5 1.2-.8 2.6-.8 4.1 0 1.5.3 2.8.8 4.1.6 1.2 1.3 2.3 2.3 3.3 1 .9 2.1 1.6 3.5 2.1 1.3.3 2.8.6 4.3.6z"/><path fill-rule="evenodd" d="M363.7 289.1v-29h12.8c2.7 0 5.1.4 7 1.2 2 .8 3.5 2 4.6 3.6 1.1 1.5 1.6 3.4 1.6 5.5s-.5 4-1.6 5.5-2.6 2.7-4.6 3.6c-2 .8-4.3 1.2-7 1.2h-7v8.4h-5.8zm18.2-14.4c-1.3 1-3.2 1.5-5.7 1.5h-6.7v-11.5h6.7c2.5 0 4.5.5 5.7 1.5 1.3 1 1.9 2.4 1.9 4.3.1 1.8-.6 3.2-1.9 4.2zm13.5 14.4v-29h12.8c2.7 0 5.1.4 7 1.2 2 .8 3.5 2 4.6 3.6 1.1 1.5 1.6 3.4 1.6 5.5s-.5 4-1.6 5.5-2.6 2.7-4.6 3.5c-.1.1-.3.1-.4.2l7.1 9.5h-6.2l-6.3-8.5h-8.2v8.4h-5.8zm18.2-14.4c-1.3 1-3.2 1.5-5.7 1.5h-6.7v-11.5h6.7c2.5 0 4.4.5 5.7 1.5 1.3 1 1.9 2.4 1.9 4.3.1 1.8-.6 3.2-1.9 4.2z" clip-rule="evenodd"/></svg>' },
        link: 'https://modx.pro/users/ibochkarev',
      },
    ],
  },
  {
    avatar: 'https://github.com/bezumkin.png',
    name: {
      ru: 'Василий Наумкин',
      en: 'Vasiliy Naumkin',
    },
    org: 'bezumkin.ru',
    orgLink: 'https://bezumkin.ru/',
    links: [
      { icon: 'github', link: 'https://github.com/bezumkin' },
      { icon:
        { svg: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 457.8 465.9"><path d="M0 210.9V0l105.5 89.2L210.9 0v210.9H0zm449.9-105.4c0 58.2-47.2 105.5-105.5 105.5S239 163.7 239 105.5 286.2 0 344.4 0s105.5 47.2 105.5 105.5zM0 255v210.9h113.2v-.3c47.5-4.1 84.9-49.6 84.9-105.2 0-55.5-37.4-101-84.9-105.2v-.2H0zm313.2 0H191.7l126.9 210.9h123.7L313.2 255zm129.2 34.5c-2.4 0-4.7-.4-6.7-1.1-2-.7-3.8-1.8-5.3-3.1-1.5-1.4-2.7-2.9-3.5-4.7-.8-1.8-1.2-3.8-1.2-6s.4-4.1 1.2-5.9c.8-1.8 2-3.4 3.5-4.7 1.5-1.4 3.3-2.4 5.3-3.1 2-.7 4.3-1.1 6.6-1.1 2.4 0 4.6.4 6.6 1.1 2 .7 3.8 1.8 5.3 3.1s2.7 2.9 3.5 4.7c.8 1.8 1.2 3.8 1.2 5.9s-.4 4.1-1.2 6c-.8 1.8-2 3.4-3.5 4.7-1.5 1.3-3.3 2.4-5.3 3.1-1.9.7-4.1 1.1-6.5 1.1zm-.1-4.7c1.6 0 3-.2 4.3-.7 1.3-.5 2.5-1.2 3.5-2.1 1-.9 1.7-2 2.3-3.2.6-1.2.8-2.6.8-4.1s-.3-2.8-.8-4.1c-.5-1.2-1.3-2.3-2.3-3.2-1-.9-2.1-1.7-3.5-2.2-1.3-.5-2.8-.7-4.3-.7s-3 .2-4.3.7c-1.3.5-2.4 1.2-3.5 2.2-1 .9-1.7 2-2.3 3.2-.5 1.2-.8 2.6-.8 4.1 0 1.5.3 2.8.8 4.1.6 1.2 1.3 2.3 2.3 3.3 1 .9 2.1 1.6 3.5 2.1 1.3.3 2.8.6 4.3.6z"/><path fill-rule="evenodd" d="M363.7 289.1v-29h12.8c2.7 0 5.1.4 7 1.2 2 .8 3.5 2 4.6 3.6 1.1 1.5 1.6 3.4 1.6 5.5s-.5 4-1.6 5.5-2.6 2.7-4.6 3.6c-2 .8-4.3 1.2-7 1.2h-7v8.4h-5.8zm18.2-14.4c-1.3 1-3.2 1.5-5.7 1.5h-6.7v-11.5h6.7c2.5 0 4.5.5 5.7 1.5 1.3 1 1.9 2.4 1.9 4.3.1 1.8-.6 3.2-1.9 4.2zm13.5 14.4v-29h12.8c2.7 0 5.1.4 7 1.2 2 .8 3.5 2 4.6 3.6 1.1 1.5 1.6 3.4 1.6 5.5s-.5 4-1.6 5.5-2.6 2.7-4.6 3.5c-.1.1-.3.1-.4.2l7.1 9.5h-6.2l-6.3-8.5h-8.2v8.4h-5.8zm18.2-14.4c-1.3 1-3.2 1.5-5.7 1.5h-6.7v-11.5h6.7c2.5 0 4.4.5 5.7 1.5 1.3 1 1.9 2.4 1.9 4.3.1 1.8-.6 3.2-1.9 4.2z" clip-rule="evenodd"/></svg>' },
        link: 'https://modx.pro/users/bezumkin',
      },
    ],
  },
]

export { authorsList as authors }
