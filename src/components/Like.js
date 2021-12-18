import React, { useContext } from "react";
import { LikeContext } from '../context/LikeContext';


const Like = ({id}) => {
  
  const valueContext = useContext(LikeContext)
  const {isLiked, addLike, removeLike} = valueContext
  const liked = isLiked(id)

  const handleClick = () => {
    if (!liked) addLike(id)
    else removeLike(id)
  }
  return (
    <span onClick={handleClick} style={{cursor: 'pointer'}}>
      {liked ? "❤️" : "🤍"}
    </span>
  )
};

export default Like;
