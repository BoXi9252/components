import Nav from './Nav';

const navItems = ['Home', 'About', 'Services', 'Contact']

function Header(props){
    return (
        <header>
            <Nav navItems={navItems}></Nav> 
        </header>
    );
}

export default Header;	