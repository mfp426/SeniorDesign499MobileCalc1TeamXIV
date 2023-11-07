

import {
  Link 
} from "react-router-dom";
import { Form } from "react-bootstrap";

import React from "react";

import SearchBar from './searchBar'; // Import the SearchBar component





function NavBar(props) {


  return (
        <nav className="navbar  navbar-expand navbar-light bg-light ">
            <div className="container-fluid ">
              <ul className="nav navbar-nav ">
              <li className="nav-item">
                  <Link to ="/HomePage" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to ="/Calculator" className="nav-link">Calculator</Link>
                </li>
                <li className="nav-item">
                  <Link to ="SearchPage" className="nav-link">Search </Link>
                </li>
                
          
              
              
  
              <Form inline className="ml-auto">
            
            </Form>
            
              <SearchBar /> 
              </ul>
            </div>
          </nav>
      );
    





}
export default NavBar;