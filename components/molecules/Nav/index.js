import Link from 'next/link'

const Nav = ({navLinks}) => (
        <nav>
            <ul>
                {
                    navLinks.map((navLink) =>{
                        return (
                        <li key={`navLink-${navLinks.indexOf(navLink)}`}>
                            <Link href={navLink.path}>
                                <a>
                                    <span>
                                        {navLink.name}
                                    </span>
                                </a>
                            </Link>
                        </li>
                        )}
                    )
                }
            </ul>
        </nav>
    )

export default Nav