

import {
  Link
} from "react-router-dom";


function NavBar(props) {

  const data = localStorage.getItem("allUsers");
  const user= JSON.parse(data) || '[]';

  if(user === '[]' ){
    return (
      <nav className="navbar  navbar-expand navbar-light bg-light ">
          <div className="container-fluid ">
            <ul className="nav navbar-nav ">
            {/* <li className="nav-item">
                <Link to ="/LoginPage" className="nav-link">Log in</Link>
              </li>
              <li className="nav-item">
                <Link to="/AccountPage" className="nav-link">Account</Link>
              </li>

              <li className="nav-item">
                <Link to ="/SignupPage" className="nav-link">Sign up</Link>
              </li> */}
              <li className="nav-item">
                <Link to ="/HomePage" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to ="/Calculator" className="nav-link">Calculator</Link>
              </li>
            </ul>


          </div>
        </nav>
    );
  }
  else{
    return (
      <nav className="navbar  navbar-expand navbar-light bg-light ">
          <div className="container-fluid ">
            <ul className="nav navbar-nav ">
            <li className="nav-item">
                <Link to ="/HomePage" className="nav-link">Home</Link>
              </li>
            {/* <li className="nav-item">
                <Link to ="/LoginPage" className="nav-link">Log in</Link>
              </li>
              <li className="nav-item">
                <Link to="/AccountPage" className="nav-link">Account</Link>
              </li>

              <li className="nav-item">
                <Link to ="/SignupPage" className="nav-link">Sign up</Link>
              </li> */}
              <li className="nav-item">
                <Link to ="/Calculator" className="nav-link">Calculator</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}
export default NavBar;