'use client'

import photo1 from '@/assets/images/about-image-2.jpg'
import { motion } from 'framer-motion'
import Image from 'next/image'
import style from './hero-image.module.css'

const MotionImage = motion(Image)

const HeroImage = () => (
  <div className={style['hero-image']}>
    <MotionImage
      initial={{ x: '-110%', opacity: 0 }}
      animate={{ x: '0%', opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.7, ease: 'circOut' }}
      src={photo1}
      alt="photo 1"
      placeholder="blur"
      objectFit="fill"
      fill
    />
  </div>
)

export default HeroImage
