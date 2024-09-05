import Link from 'next/link'

// Footer links constant
const FOOTER_LINKS = [
  {
    id: 'general',
    links: [
      { href: '/', text: 'Home' },
      { href: '/gallery', text: 'Gallery' },
    ]
  },
  {
    id: 'social',
    links: [
      { href: 'https://github.com/ch3mson', text: 'GitHub' },
      { href: 'https://www.linkedin.com/in/benson-yan-622413201/', text: 'LinkedIn' },
      { href: 'https://twitter.com/yourusername', text: 'Twitter' },
    ]
  },
  {
    id: 'other',
    links: [
      { href: '/uses', text: 'Uses' },
      { href: '/guestbook', text: 'Guestbook' },
      { href: '/dashboard', text: 'Dashboard' },
    ]
  }
]

const Footer = () => {
  return (
    <footer className='bg-background/30 relative mx-auto mb-6 flex max-w-5xl flex-col rounded-2xl p-8 shadow-sm saturate-100 backdrop-blur-[10px]'>
      <div className='mt-12 grid grid-cols-2 sm:grid-cols-3'>
        {FOOTER_LINKS.map((list) => (
          <div key={list.id} className='mb-10 flex flex-col items-start gap-4 pr-4'>
            {list.links.map((link) => {
              const { href, text } = link

              return (
                <Link 
                  key={href} 
                  href={href} 
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  {text}
                </Link>
              )
            })}
          </div>
        ))}
      </div>
      <div className='mt-20 text-sm'>
        <div>&copy; {new Date().getFullYear()} Benson Yan</div>
      </div>
    </footer>
  )
}

export default Footer