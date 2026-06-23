import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <span className="footer__logo">
            YN<span>.</span>
          </span>
          <span>Built with React + Framer Motion · {new Date().getFullYear()}</span>
          <span>Update the placeholder text with your real info</span>
        </div>
      </div>
    </footer>
  )
}
