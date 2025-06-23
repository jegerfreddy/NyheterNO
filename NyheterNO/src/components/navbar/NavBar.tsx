

const NavBar = () => {

    return (
        <>
            <nav className="bg-dark m-0 p-2 navbar">
                <div className="navbarContent ps-3 pe-3">
                    <div>
                        <h5 className="text-white ">Alle nyheter samlet på et sted</h5>
                    </div>

                    <div>
                        <h1 className="text-white">Bakke Kontakt</h1>
                    </div>

                    <div>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Hjem</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/about">Om Oss</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/contact">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;