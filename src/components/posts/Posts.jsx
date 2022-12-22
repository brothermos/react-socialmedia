import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
   //TEMPORARY
   const posts = [
      {
         id: 1,
         name: "Anime lover",
         userId: 1,
         profilePic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlzN002eWayTogmgJRlY3903YZOGZJ19METnwK715QJqw_cmd6MSKw4ss4sBa6Vyochc&usqp=CAU",
         desc: "Chainsaw man",
         img: "https://www.animenewsnetwork.com/thumbnails/crop1200x630gI2/herald/141942/chainsaw-man-ep-5y.png.jpg",
      },
      {
         id: 2,
         name: "Mikasa Ackerman",
         userId: 2,
         profilePic:
            "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Mikasa-Ackermann.Attack-on-Titan.webp",
         desc: "สวัสดีค่า สบายดีมั้ย",
      },
   ];

   return (
      <div className="posts">
         {posts.map((post) => (
            <Post post={post} key={post.id} />
         ))}
      </div>
   );
};

export default Posts;
