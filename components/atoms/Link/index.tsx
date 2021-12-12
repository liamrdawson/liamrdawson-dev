import Link from 'next/link'
import { FunctionComponent } from 'react'

interface LinkAtomDataTypes {
        path: string
        name: string
}

const LinkAtom = ({path, name}: LinkAtomDataTypes) => {
    return (
        <Link href={path}>
            <a>
                <span>
                    {name}
                </span>
            </a>
        </Link> 
    )
}

export default LinkAtom