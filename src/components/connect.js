import { LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { SiGithub, SiLinkedin, SiInstagram, SiX, SiYoutube } from 'react-icons/si'

const SOCIAL_LINKS = [
  {
    href: "https://github.com/ch3mson",
    title: 'GitHub',
    icon: SiGithub
  },
  {
    href: "https://www.linkedin.com/in/benson-yan-622413201/",
    title: 'Linkedin',
    icon: SiLinkedin
  },
  {
    href: "https://www.instagram.com/1800_benson/",
    title: 'Instagram',
    icon: SiInstagram
  },
  {
    href: "https://x.com/ch3mson",
    title: 'X',
    icon: SiX
  },
  {
    href: "https://www.youtube.com/@Ch3mson",
    title: 'YouTube',
    icon: SiYoutube
  }
]

const Connect = () => {
  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-6 rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <LinkIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>Connect</h2>
      </div>
      <div className='flex flex-col gap-4 px-2'>
        {SOCIAL_LINKS.map((link) => {
          const { href, title, icon: Icon } = link;

          return (
            <Link
              key={href}
              href={href}
              className='flex items-center gap-3 transition-colors text-slate-500 hover:text-black'
            >
              <Icon className='size-[18px]' />
              <h2 className='font-light'>{title}</h2>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Connect
