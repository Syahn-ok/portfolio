import { motion } from 'framer-motion'
import { skills } from '../data'
import { fadeUp, slideLeft, stagger, viewport } from '../animations'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '60px' }}>
            <span className="section-tag">Stack</span>
            <h2 className="section-title">What I work with</h2>
          </motion.div>

          <div className="skills__grid">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                className="skills__category"
                variants={slideLeft}
              >
                <div className="skills__cat-name">{category}</div>
                <div className="skills__tags">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      whileHover={{ y: -3, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
