import { ReactNode } from 'react'
import style from './callout.module.css'

type Props = {
  children: ReactNode
}

export const Callout = ({ children }: Props) => <p className={style.callout}>{children}</p>
