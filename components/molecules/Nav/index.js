import LinkAtom from '../../atoms/Link'

const Nav = ({navLinks}) => (
        <nav>
            <ul>
                {
                    navLinks.map((navLink) => {
                        return (
                        <li key={`navLink-${navLinks.indexOf(navLink)}`}>
                            <LinkAtom path={navLink.path} name={navLink.name} />
                        </li>
                        )}
                    )
                }
            </ul>
        </nav>
    )

export default Nav