import { Link, useLocation } from "react-router-dom";

function ProjectNav() {
    const { pathname } = useLocation();
    return (
    <nav className="list-group mt-2">
        <Link to="/project/home"
            className={`list-group-item ${pathname.includes("home") ? "active" : ""}`}>Home</Link>
        <Link to="/project/search"
            className={`list-group-item ${pathname.includes("search") ? "active" : ""}`}>Search</Link>
        <Link to="/project/signin"
            className={`list-group-item ${pathname.includes("signin") ? "active" : ""}`}>Signin</Link>
        <Link to="/project/signup"
                className={`list-group-item ${pathname.includes("signup") ? "active" : ""}`}>Signup</Link>
        <Link to="/project/account"
            className={`list-group-item ${pathname.includes("account") ? "active" : ""}`}>Account</Link>
        <Link to="/project/admin/users"
            className={`list-group-item ${pathname.includes("users") ? "active" : ""}`}>Table</Link>
    </nav>
 );
}
export default ProjectNav;