import { motion } from 'framer-motion'
import { Github, ExternalLink, Globe, LayoutDashboard, ShoppingBag } from 'lucide-react'
import { projects } from '../data'
import { fadeUp, stagger, viewport } from '../animations'

const icons = [Globe, LayoutDashboard, ShoppingBag]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.1)}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '56px' }}>
            <span className="section-tag">Work</span>
            <h2 className="section-title">Featured projects</h2>
          </motion.div>

          <div className="projects__list">
            {projects.map((project, i) => {
              const Icon = icons[i]
              return (
                <motion.div
                  key={project.id}
                  className="project-card"
                  style={{ '--proj-accent': project.accent }}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                  {/* Visual */}
                  <div className="project-card__visual">
                    <div className="project-card__visual-bg" />
                    <div className="project-card__visual-grid" />
                    <div className="project-card__visual-icon">
                      <Icon size={26} />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="project-card__body">
                    <div className="project-card__header">
                      <div className="project-card__num">0{project.id}</div>
                      <div className="project-card__title">{project.title}</div>
                      <p className="project-card__desc">{project.description}</p>
                    </div>
                    <div className="project-card__footer">
                      <div className="project-card__tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="proj-tag">{tag}</span>
                        ))}
                      </div>
                      <div className="project-card__links">
                        <a href={project.links.github} className="proj-link">
                          <Github size={13} /> Code
                        </a>
                        <a href={project.links.live} className="proj-link">
                          <ExternalLink size={13} /> Live
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
