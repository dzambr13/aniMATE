import { Link } from 'react-router-dom'

const Nav = () => {
    return (
    <nav className="navbar">
        <h4> hi </h4>
        <div>
            <Link to="/">Home</Link>
            <Link to="/pics">Profile</Link>
            {/* <Link to="/"></Link> */}
        </div>
    </nav>
    )
}

export default Nav