import { Link } from "react-router";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/userinfo">User Info</Link>
            <Link to="/userList">User List</Link>
        </nav>
    )
}
export default NavBar