// import { useContext } from "react";
import "./stories.scss";
// import { AuthContext } from "../../context/authContext";

const Stories = () => {
   // const { currentUser } = useContext(AuthContext);

   //TEMPORARY
   const stories = [
      {
         id: 1,
         name: "Erwin Smith",
         img: "http://pm1.narvii.com/6327/994a57c92c31cc4f81deb90931622cbd40319134_00.jpg",
      },
      {
         id: 2,
         name: "Armin",
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHEcIDO8s7EH-Grv-qidls65k8Uop5KWg8Y9hchDKxOaW_3wkNqcv5WDPyIlUOcsWXHY&usqp=CAU",
      },
      {
         id: 3,
         name: "Reiner Braun",
         img: "https://qph.cf2.quoracdn.net/main-qimg-d6cee5c14e7f2a2df7b96efaf11ea7c4-lq",
      },
      {
         id: 4,
         name: "Levi Ackerman",
         img: "https://i.pinimg.com/originals/15/2c/86/152c86196f4b6e5e4a6b501fa542f2a5.png",
      },
   ];

   return (
      <div className="stories">
         <div className="story">
            <img
               src="https://pm1.narvii.com/6717/853fa0542c4a453c28da102ab8bcad61c416de9c_hq.jpg"
               alt=""
            />
            <span>Eren Yeager</span>
            <button>+</button>
         </div>
         {stories.map((story) => (
            <div className="story" key={story.id}>
               <img src={story.img} alt="" />
               <span>{story.name}</span>
            </div>
         ))}
      </div>
   );
};

export default Stories;
