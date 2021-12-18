import React, { useContext } from "react";
import LikeContext from '../context/LikeContext';


const Like = ({id}) => {
  const {likes, setLikes} = useContext(LikeContext)

  const liked = likes.includes(id)

  const handleClick = () => {
    if (!liked) setLikes([...likes, id])
    else setLikes(likes.filter((currentId)=>currentId!==id))
  }

  return (
    <span onClick={handleClick} style={{cursor: 'pointer'}}>
      {liked ? "❤️" : "🤍"}
    </span>
  )
};

export default Like;
