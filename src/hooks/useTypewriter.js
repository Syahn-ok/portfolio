import { useState, useEffect } from 'react'

export function useTypewriter(texts, { speed = 90, deleteSpeed = 45, pause = 2000 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)
  const [pos, setPos] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    if (!deleting && pos < current.length) {
      const t = setTimeout(() => setPos(p => p + 1), speed)
      return () => clearTimeout(t)
    }
    if (!deleting && pos === current.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && pos > 0) {
      const t = setTimeout(() => setPos(p => p - 1), deleteSpeed)
      return () => clearTimeout(t)
    }
    if (deleting && pos === 0) {
      setDeleting(false)
      setIndex(i => (i + 1) % texts.length)
    }
  }, [pos, deleting, index, texts, speed, deleteSpeed, pause])

  useEffect(() => {
    setDisplayed(texts[index].slice(0, pos))
  }, [pos, index, texts])

  return displayed
}
