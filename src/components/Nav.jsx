import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Awards', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav__inner">
        <button
          className="nav__logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          YN<span>.</span>
        </button>

        <ul className="nav__links">
          {links.map((link) => (
            <li key={link}>
              <button className="nav__link" onClick={() => scrollTo(link)}>
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button className="nav__cta" onClick={() => scrollTo('Contact')}>
          Hire Me
        </button>
      </div>
    </motion.nav>
  )
}
