import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, FileText } from 'lucide-react'
import { fadeUp, stagger, viewport } from '../animations'

const socials = [
  { label: 'GitHub', icon: Github, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'Resume', icon: FileText, href: '#' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.1)}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '56px', textAlign: 'center' }}>
            <span className="section-tag">Contact</span>
            <h2 className="section-title">Let's build something</h2>
          </motion.div>

          <div className="contact__inner">
            <motion.p className="contact__desc" variants={fadeUp}>
              Have a project in mind, a role to fill, or just want to talk tech?
              My inbox is always open. I read every message.
            </motion.p>

            <motion.div variants={fadeUp}>
              <motion.a
                href="mailto:hello@yourname.dev"
                className="contact__email"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={22} />
                hello@yourname.dev
              </motion.a>
            </motion.div>

            <motion.div className="contact__socials" variants={stagger(0.07)}>
              {socials.map(({ label, icon: Icon, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="social-btn"
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  <Icon size={15} />
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
