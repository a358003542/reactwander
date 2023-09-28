import { Link, NavLink } from 'react-router-dom';


function Header({ }) {
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4">ReactWander</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink to="/" className={`nav-link  ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""`}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" className={`nav-link  ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""`}>Login</NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/about" className={`nav-link  ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""`}>About</NavLink>
                </li>
            </ul>
        </header >
    )
}
export default Header;