import { motion } from 'framer-motion'
import { Trophy, Star, Palette } from 'lucide-react'
import { awards } from '../data'
import { fadeUp, stagger, viewport } from '../animations'

const icons = [Trophy, Star, Palette]

export default function Awards() {
  return (
    <section id="awards">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.1)}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '56px' }}>
            <span className="section-tag">Recognition</span>
            <h2 className="section-title">Awards & achievements</h2>
          </motion.div>

          <div className="awards__grid">
            {awards.map((award, i) => {
              const Icon = icons[i]
              return (
                <motion.div
                  key={award.id}
                  className="award-card"
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <div className="award-card__icon">
                    <Icon size={20} />
                  </div>
                  <div className="award-card__title">{award.title}</div>
                  <div className="award-card__event">{award.event}</div>
                  <p className="award-card__desc">{award.description}</p>
                  <div className="award-card__year">{award.year}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
