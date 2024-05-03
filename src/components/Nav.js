
function Nav(props){
    return (
        <header>
            <ul className='flex nav'>
                {
                    props.navItems.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </header>
    );
}

export default Nav;	