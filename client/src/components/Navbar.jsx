import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import {useSelector, useDispatch} from "react-redux";
import variables from "../styles/variables.scss";
import React, { useState } from "react";
import "../styles/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/state";


const Navbar = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false)
  
  const user = useSelector((state) => state.user)
  
  const dispatch = useDispatch();

  const [search, setSearch] = useState("")

  const navigate = useNavigate()
  
  return (
    <div className='navbar'>
      <a href='/'>
      <img className="logoImg" src="/assets/logo.jpg" alt="logo" />
      </a>

      <div className='navbar_search'>
        <input 
          type="text" 
          placeholder='Search ...' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton disabled={search === ""}>
          <Search 
            sx={{ color: variables.blue }} 
            onClick={() => {navigate(`/properties/search/${search}`)}}
            />
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
            <Link to={`/${user._id}/trips`}>Trip List</Link>
            <Link to={`/${user._id}/wishList`}>Wish List</Link>
            <Link to={`/${user._id}/properties`}>Property List</Link>
            <Link to="/create-listing">Become a Host</Link>

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