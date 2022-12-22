import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
   return (
      <div className="profile">
         <div className="images">
            <img
               src="https://i.pinimg.com/originals/a7/81/05/a781057de964e97a9c69f160e665a067.png"
               alt=""
               className="cover"
            />
            <img
               src="https://pm1.narvii.com/6717/853fa0542c4a453c28da102ab8bcad61c416de9c_hq.jpg"
               alt=""
               className="profilePic"
            />
         </div>
         <div className="profileContainer">
            <div className="uInfo">
               <div className="left">
                  <a href="http://facebook.com">
                     <FacebookTwoToneIcon fontSize="large" />
                  </a>
                  <a href="http://facebook.com">
                     <InstagramIcon fontSize="large" />
                  </a>
                  <a href="http://facebook.com">
                     <TwitterIcon fontSize="large" />
                  </a>
                  <a href="http://facebook.com">
                     <LinkedInIcon fontSize="large" />
                  </a>
                  <a href="http://facebook.com">
                     <PinterestIcon fontSize="large" />
                  </a>
               </div>
               <div className="center">
                  <span>Eren Yeager</span>
                  <div className="info">
                     <div className="item">
                        <PlaceIcon />
                        <span>USA</span>
                     </div>
                     <div className="item">
                        <LanguageIcon />
                        <span>mos.dev</span>
                     </div>
                  </div>
                  <button>follow</button>
               </div>
               <div className="right">
                  <EmailOutlinedIcon />
                  <MoreVertIcon />
               </div>
            </div>
            <Posts />
         </div>
      </div>
   );
};

export default Profile;
