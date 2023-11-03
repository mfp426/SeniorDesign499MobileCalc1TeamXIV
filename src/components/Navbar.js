

import {
  Link,
  useNavigate 
} from "react-router-dom";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import React, { useState } from "react";
import searchMapping from '../App';

import SearchBar from './searchBar'; // Import the SearchBar component





function NavBar(props) {

  const data = localStorage.getItem("allUsers");
  const user= JSON.parse(data) || '[]';


  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
    if (trimmedSearchTerm) {
      if (searchMapping[trimmedSearchTerm]) {
        navigate(searchMapping[trimmedSearchTerm]);
      } else {
        const matchingRoutes = Object.keys(searchMapping).filter((route) =>
          route.toLowerCase().includes(trimmedSearchTerm)
        );
        setSuggestions(matchingRoutes);
      }
    }
  };


  // const handleSearch = () => {
  //   const trimmedSearchTerm = searchTerm.trim().toLowerCase();
  //   if (trimmedSearchTerm && searchMapping[trimmedSearchTerm]) {
  //     // Use the searchMapping to navigate to the corresponding route path
  //     navigate(searchMapping[trimmedSearchTerm]);
  //   }
  // };

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
                <Link to ="/HomePage" className="nav-link">Home - If user logs in</Link>
              </li>
              <li className="nav-item">
                <Link to ="/Calculator" className="nav-link">Calculator - If user logs in</Link>
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
              <li className="nav-item">
                <Link to ="#" className="nav-link">Search Here:</Link>
              </li>
              
        
            
            

            <Form inline className="ml-auto">
          
          </Form>
          
            <SearchBar /> 
            </ul>
          </div>
        </nav>
    );
  }
}
export default NavBar;