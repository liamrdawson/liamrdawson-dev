import Nav from '../../molecules/Nav'

const Header = ({navigation, title}) => {
    return (
        <header>
            <h1>{title}</h1>
            <Nav navLinks={navigation} />
        </header>
    )
}

export default Header