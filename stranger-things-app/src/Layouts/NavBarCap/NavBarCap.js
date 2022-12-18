import stranger_things from '../../Assets/Principais/stranger_things.png';

function NavBarCap() {
    return(
        <>
            <nav className="position-fixed d-flex justify-content-around align-items-center">
            <a href="#">
                <img src={stranger_things} alt="Logo de Stranger Things"></img>
            </a>
            <ul>
                <li>
                    <a href="../index.html">Home</a>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default NavBarCap