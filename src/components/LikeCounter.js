import React, { useContext } from "react";
import { LikeContext } from "../context/LikeContext";

const LikeCounter = () => {
  const { nLikes, emptyLikes } = useContext(LikeContext);


  return (
    <span style={{ cursor: "pointer" }} onClick={emptyLikes}>
      ❤️ = {nLikes}
    </span>
  );
};

export default LikeCounter;
