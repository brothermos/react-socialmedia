import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
// import { AuthContext } from "../../context/authContext";

const Navbar = () => {
   const { toggle, darkMode } = useContext(DarkModeContext);
   // const { currentUser } = useContext(AuthContext);

   return (
      <div className="navbar">
         <div className="left">
            <Link to="/" style={{ textDecoration: "none" }}>
               <span>mossocial</span>
            </Link>
            <HomeOutlinedIcon />
            {darkMode ? (
               <WbSunnyOutlinedIcon
                  onClick={toggle}
                  style={{ cursor: "pointer" }}
               />
            ) : (
               <DarkModeOutlinedIcon
                  onClick={toggle}
                  style={{ cursor: "pointer" }}
               />
            )}
            <GridViewOutlinedIcon />
            <div className="search">
               <SearchOutlinedIcon />
               <input type="text" placeholder="Search..." />
            </div>
         </div>
         <div className="right">
            <PersonOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon />

            <div className="user">
               <img
                  src="https://pm1.narvii.com/6717/853fa0542c4a453c28da102ab8bcad61c416de9c_hq.jpg"
                  alt=""
               />
               <Link to="/profile/:id" style={{ textDecoration: "none" }}>
                  <span className="user">Eren Yeager</span>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
