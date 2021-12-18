import React, { useContext } from "react";
import LikeContext from "../context/LikeContext";

const LikeCounter = () => {
  const { likes } = useContext(LikeContext);

  return <div>❤️ = {likes}</div>;
};

export default LikeCounter;
