function Nav({showMenu}){
    return (
        <nav className={showMenu?"nav-mobile-click":"nav-mobile-close"}>
                <a href="#">Home</a>
                <a href="#main-theory-body">Stack</a>
                <a href="#main-about-project">Project Desc</a>
                <a href="#main-project-body">Project</a>
        </nav>
    );
}

export default Nav;