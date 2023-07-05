'use client'

import { motion } from 'framer-motion'
import style from './button.module.css'

interface Props {
  value: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const PrimaryButton = ({ value, onClick }: Props) => (
  <motion.button className={style['base-button']} type="button" onClick={onClick}>
    {value}
  </motion.button>
)
