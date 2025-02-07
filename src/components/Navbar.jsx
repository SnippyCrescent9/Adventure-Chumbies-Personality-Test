import { Link } from "react-router";

function Navbar(){
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/adventureChumbiesList">Adventure Chumbies</Link>
        </nav>
    );
}

export default Navbar