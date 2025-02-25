import { IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"
import variables from "../styles/variables"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <a href='/'> 
         <img src="/assets/logo.png" alt="logo" />
        </a>      

        <div className='navbar_search'>
            <input type="text" placeholder='Search ...' />
            <IconButton>
              <Search sx={{ color: variables.pinkred }}/>
            </IconButton>
        </div>

        <div className="navbar_right"></div>
    </div>
  )
}
