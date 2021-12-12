import Link from 'next/link'

interface LinkAtomDataTypes {
  path: string
  name: string
}

const LinkAtom = ({ path, name }: LinkAtomDataTypes) => {
  return (
    <Link href={path}>
      <a>
        <span>{name}</span>
      </a>
    </Link>
  )
}

export default LinkAtom
