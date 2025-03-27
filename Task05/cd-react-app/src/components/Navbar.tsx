import "../css/Navbar.css"
import logo from "../assets/img/logo.png"
import dashboard from "../assets/img/dashboard.png"

const Navbar = () => {
  return (
    <>
  <nav className="nav-bar">
        <img className = "logo" src={logo} />

    <div className="heading">
            Thought's Spot
    </div>
    <div className="nav-lists">
        <li className="Dashboard"><img src={dashboard} alt="" /></li>
    </div>
  </nav>
  </>
  );
};

export {Navbar};
