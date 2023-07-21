import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar">
            <Link to="/">SuperHeros</Link>
            <Link to="/search">Search</Link>
        </nav>
    )
}