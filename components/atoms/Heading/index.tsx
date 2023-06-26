import { ReactNode } from 'react'
import style from './heading.module.css'

interface NewHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: ReactNode
}

interface HeroHeadingProps {
  children: ReactNode
}

export const Heading = ({ children, as = 'h1' }: NewHeadingProps) => {
  const CustomTag = as as keyof JSX.IntrinsicElements
  return <CustomTag className={`${style.base} ${style[as]}`}>{children}</CustomTag>
}

export const HeroHeading = ({ children }: HeroHeadingProps) => <h1 className={style.hero}>{children}</h1>
