import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import PHOTO from '../assets/photo'
import { fadeUp, slideLeft, slideRight, stagger, viewport } from '../animations'

const roles = [
  'Full Stack Developer',
  'React Specialist',
  'Hackathon Champion',
  'UI/UX Enthusiast',
]

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section className="hero">
      {/* Background elements */}
      <div className="hero__bg">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__grid" />
      </div>

      <div className="container">
        <motion.div
          className="hero__inner"
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
        >
          {/* Text side */}
          <motion.div variants={slideLeft}>
            <motion.div className="hero__badge" variants={fadeUp}>
              <span className="hero__badge-dot" />
              Open to opportunities
            </motion.div>

            <h1 className="hero__name">
              <span className="grad">Sayhan</span>
            </h1>

            <p className="hero__sub">Developer & Creator</p>

            <div className="hero__typewriter">
              <span className="hero__typewriter-prefix">→&nbsp;</span>
              {typed}
              <span className="hero__cursor" />
            </div>

            <div className="hero__actions">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View Projects <ArrowRight size={15} />
              </motion.button>
              <motion.a
                href="#"
                className="btn-ghost"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV <Download size={15} />
              </motion.a>
            </div>
          </motion.div>

          {/* Photo side */}
          <motion.div className="hero__photo-wrap" variants={slideRight}>
            <div className="hero__photo-glow" />
            <div className="hero__photo-ring" />
            <img src={PHOTO} alt="Developer" className="hero__photo" />
          </motion.div>
        </motion.div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        scroll
      </div>
    </section>
  )
}
