import {Link} from 'react-router-dom'

const Navbar = function () {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>workout body</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar