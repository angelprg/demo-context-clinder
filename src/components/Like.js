import React, { useState, useContext } from "react";
import LikeContext from '../context/LikeContext';


const Like = () => {
  const {likes, setLikes} = useContext(LikeContext)
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    if (liked){
      setLikes(likes - 1)
      setLiked(false)
    }
    else {
      setLikes(likes + 1)
      setLiked(true)
    }
  }

  return (
    <span onClick={handleClick} style={{cursor: 'pointer'}}>
      {liked ? "❤️" : "🤍"}
    </span>
  )
};

export default Like;
