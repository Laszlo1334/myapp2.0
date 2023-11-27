import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderComponet from "./HeaderComponet";

import './header.css';

export class Header extends Component {
 

  render() {
    return (
      <header className="header">
        <Link to="/" className="logo-flex-container">
          <div className="logo textblock blue-yellow-textblock">
            <a>LOGO</a>
          </div>
        </Link>
        <nav>
          <ul className="nav-flex-container">
            
              <HeaderComponet
                typeOfPage="All ROOMS"
                currentPage={this.props.currentPage}
                toLink="/"
              />
            
            
              <HeaderComponet
                typeOfPage="BOOK ROOMS"
                currentPage={this.props.currentPage}
                toLink="/bookroom"
              />
            
            
              <HeaderComponet
                typeOfPage="ABOUT US"
                currentPage={this.props.currentPage}
                toLink="/aboutus"
              />
            
              <HeaderComponet
                typeOfPage="CONTACTS"
                currentPage={this.props.currentPage}
                toLink="/contacts"
              />
            

            {/* <Link
              to="/"
              className="nav-element btn-active textblock gray-black-textblock"
              onCLick={() => {
                this.inputClick("allrooms");
              }}
            >
              ALL ROOMS
            </Link>

            <Link
              to="/bookroom"
              className="nav-element btn-light textblock gray-black-textblock"
              onCLick={() => {
                this.inputClick("bookroom");
              }}
            >
              BOOK ROOM
            </Link>
            <Link
              to="/aboutus"
              className="nav-element btn-light textblock gray-black-textblock"
              onCLick={() => {
                this.inputClick("aboutus");
              }}
            >
              ABOUT US
            </Link>
            <Link
              to="/contacts"
              className="nav-element btn-light textblock gray-black-textblock"
              onCLick={() => {
                this.inputClick("contacts");
              }}
            >
              CONTACTS
            </Link> */}
          </ul>
          <ul className="login-signup-flex-container">
            <Link
              to="/admin/login"
              className="login-nav-element btn-light-yellow textblock light-yellow-black-textblock"
            >
              LOG IN
            </Link>
            <Link
              to="/admin/register"
              className="login-nav-element btn-light-yellow textblock light-yellow-black-textblock"
            >
              SIGN UP
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
