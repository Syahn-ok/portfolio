import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, stagger, viewport } from '../animations'

const stats = [
  { num: '10', suffix: '+', label: 'Projects shipped' },
  { num: '3', suffix: '', label: 'Awards won' },
  { num: '2', suffix: '+', label: 'Years building' },
  { num: '∞', suffix: '', label: 'Bugs squashed' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="about__grid"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div className="about__text" variants={slideLeft}>
            <span className="section-tag">About</span>
            <h2 className="section-title" style={{ marginBottom: '32px' }}>
              I build things<br />that live on the web.
            </h2>
            <p>
              I'm a <strong>full-stack developer</strong> who cares deeply about both the code behind
              a product and the experience in front of it. Whether it's a snappy React UI or a
              resilient Node.js backend, I aim for work that's clean, fast, and maintainable.
            </p>
            <p>
              I've competed in hackathons, shipped real products used by real people, and earned
              recognition as a standout <strong>React developer</strong>. I believe the best
              engineers are also curious designers.
            </p>
            <p>
              Right now I'm looking for roles where I can go deep on hard problems, ship fast, and
              learn from people smarter than me.
            </p>
          </motion.div>

          <motion.div variants={slideRight}>
            <div className="about__stats">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="stat-card"
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -3 }}
                >
                  <div className="stat-card__num">
                    {s.num}<span>{s.suffix}</span>
                  </div>
                  <div className="stat-card__label">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
