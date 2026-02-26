import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'random-talk',
  description:
    'astro-erudite is a opinionated, unstyled blogging template—built with Astro, Tailwind, and shadcn/ui.',
  href: 'https://astro-erudite.vercel.app',
  author: 'jktrn',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
 {
    href: '/random-talk/blog/', // 確保有專案名，且結尾有斜線
    label: 'blog',
  },
  {
    href: '/random-talk/authors/',
    label: 'authors',
  },
  {
    href: '/random-talk/about/',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/jktrn',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/enscry',
    label: 'Twitter',
  },
  {
    href: 'mailto:jason@enscribe.dev',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}