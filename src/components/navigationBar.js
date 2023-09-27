import { Link } from 'react-router-dom';

function NavigationBar() {
    const navStyle = {
        padding: "5px",
    }
    return (
        <nav
            style={navStyle}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>

    )
}

export default NavigationBar;