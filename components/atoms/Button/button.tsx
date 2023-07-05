'use client'

import { motion } from 'framer-motion'
import style from './button.module.css'

interface Props {
  value: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const buttonHoverVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: '-100%',
  },
}

export const PrimaryButton = ({ value, onClick }: Props) => (
  <motion.button
    animate={{ color: 'blue' }}
    initial="rest"
    whileHover="hover"
    className={style['base-button']}
    type="button"
    onClick={onClick}
  >
    <span className={style.value}>{value}</span>
    <motion.div
      transition={{ type: 'spring', duration: 0.25, bounce: 0, delay: 0.125 }}
      variants={buttonHoverVariants}
      className={style.fill}
    />
  </motion.button>
)
