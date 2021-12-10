import Link from 'next/link'

const LinkAtom = ({data}) => (
    <Link href={data.path}>
        <a>
            <span>
                {data.name}
            </span>
        </a>
    </Link> 
)

export default LinkAtom