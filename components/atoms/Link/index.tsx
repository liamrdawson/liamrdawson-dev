import Link from 'next/link'
import style from './link.module.css'

interface LinkAtomProps {
  path: string
  name: string
}

const LinkAtom = ({ path, name }: LinkAtomProps) => (
  <span className={style.link}>
    <Link href={path} passHref>
      {name}
    </Link>
  </span>
)

export default LinkAtom
