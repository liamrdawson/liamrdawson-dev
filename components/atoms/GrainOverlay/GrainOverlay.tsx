'use client'

import { motion, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'
import style from './grainoverlay.module.css'

function getRandomNumber(min: number, max: number, currentNumber?: number): number {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  if (currentNumber && randomNumber === currentNumber) {
    return randomNumber + 1
  }
  return randomNumber
}

const GrainOverlay = () => {
  const [scope, animate] = useAnimate()
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    animate(
      scope.current,
      { rotate: rotation, x: `${getRandomNumber(-9, 9)}rem`, y: `${getRandomNumber(-9, 9)}rem` },
      {
        duration: 0,
        delay: 1 / 24,
        onComplete: () => setRotation(getRandomNumber(0, 360, rotation)),
      },
    )
  }, [rotation])

  return <motion.div ref={scope} className={style.grain} />
}

export default GrainOverlay
