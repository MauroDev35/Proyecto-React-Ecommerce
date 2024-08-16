import CartWidget from "../CartWidget/CartWidget"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo"><p>⚡</p></div>
        <div className="listContainer">
          <ul className="linkList">
              <li><a href="#Section1">Section 1</a></li>
              <li><a href="#Section2">Section 2</a></li>
              <li><a href="#Section3">Section 3</a></li>
          </ul>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar
