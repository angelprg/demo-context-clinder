import React, { useContext } from "react";
import { LikeContext } from "../context/LikeContext";

const LikeCounter = () => {
  const { likes, setLikes } = useContext(LikeContext);
  const handleClick = () => setLikes([]);

  return (
    <span style={{ cursor: "pointer" }} onClick={handleClick}>
      ❤️ = {likes.length}
    </span>
  );
};

export default LikeCounter;
