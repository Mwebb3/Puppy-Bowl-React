import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/players">All Puppies</Link>
        </nav>
    )
}
export default Nav