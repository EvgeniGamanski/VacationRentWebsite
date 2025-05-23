import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import {useSelector, useDispatch} from "react-redux";
import variables from "../styles/variables.scss";
import React, { useState } from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import { setLogout } from "../redux/state";

const Navbar = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false)
  
  const user = useSelector((state) => state.user)
  
  const dispatch = useDispatch()
  
  return (
    <div className='navbar'>
      <a href='/'>
      <img className="logoImg" src="/assets/logo.jpg" alt="logo" />
      </a>

      <div className='navbar_search'>
        <input type="text" placeholder='Search ...' />
        <IconButton>
          <Search sx={{ color: variables.pinkred }} />
        </IconButton>
      </div>

      <div className="navbar_right">
        {user ? (
          <a href="/create-listing" className="host">Become A Host</a>
        ) : (
          <a href="/login" className="host">Become A Host</a>
        )}

        <button className="navbar_right_account" onClick={() => setDropDownMenu(!dropDownMenu)}>
          <Menu sx={{ color: variables.darkgrey }} />
          {!user ?
            <Person sx={{ color: variables.darkgrey }} />
            : (
              <img 
                  src={`http://localhost:3001/${user.profileImagePath.replace(
                  "public", 
                  ""
                )}`} 
                alt="profile photo" 
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
            )}
        </button>

        {dropDownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        )}

        {dropDownMenu && user && (
          <div className="navbar_right_accountmenu">
            <Link to="">Trip List</Link>
            <Link to="">Wish List</Link>
            <Link to="">Property List</Link>
            <Link to="">Reservation List</Link>
            <Link to="">Become a Host</Link>

            <Link to="/login" onClick={() => {
              dispatch(setLogout())
            }}>Log Out</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;