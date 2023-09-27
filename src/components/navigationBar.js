
function NavigationBar() {
    const navStyle = {
        padding: "5px",
    }
    return (
        <nav
            style={navStyle}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our team</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

    )
}

export default NavigationBar;