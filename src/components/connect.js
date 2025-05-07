import { LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { SiGithub, SiLinkedin} from 'react-icons/si'

const SOCIAL_LINKS = [
  {
    href: "https://github.com/hwiseongahn",
    title: 'GitHub',
    icon: SiGithub
  },
  {
    href: "https://www.linkedin.com/in/hwiseongahn/",
    title: 'Linkedin',
    icon: SiLinkedin
  },
  // {
  //   href: "",
  //   title: 'Instagram',
  //   icon: SiInstagram
  // },
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
              className='text-muted-foreground hover:text-foreground flex items-center gap-3 transition-colors'
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
