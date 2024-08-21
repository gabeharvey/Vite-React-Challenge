import "../src/App.css"

function Navbar () {
    return (
        <nav className="main-nav">
            <div className="left-nav">
                <img src='./src/assets/gabe-photo.jpg' alt='logo' className="nav-photo"></img>
                <h3>React Website</h3>
            </div>
            <div>
                <h3>Challenge 1</h3>
            </div>
        </nav>
    )
}

export default Navbar;