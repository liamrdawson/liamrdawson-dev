'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import style from './text-slider.module.css'

type SlideProps = {
  children: ReactNode
  duration?: number
  delay?: number
  axis: 'x' | 'y'
  initialValue: string
  endValue: string
  styleVal?: any
}

const TextSlider = ({ children, duration, delay, axis, initialValue, endValue, styleVal }: SlideProps) => (
  <motion.span style={styleVal} className={style['slide-container']}>
    <motion.span
      initial={axis === 'y' ? { y: initialValue } : { x: initialValue }}
      animate={axis === 'y' ? { y: endValue } : { x: endValue }}
      transition={{
        duration: duration || 0.3,
        delay: delay || 0.5,
      }}
      className={style.slide}
    >
      {children}
    </motion.span>
  </motion.span>
)

export default TextSlider
