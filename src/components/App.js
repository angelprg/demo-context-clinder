import React, { useState } from "react";
import LikeContext from "../context/LikeContext";
import Catalog from "./Catalog";
import Navbar from "./Navbar";

const App = () => {
  const [likes, setLikes] = useState([]);
  console.log('likes: ', likes)
  return (
    <LikeContext.Provider value={{ likes, setLikes }}>
      <div>
        <Navbar />
        <div className="text-center m-4">
          <h1>❤️Clinder❤️</h1>
        </div>
        <Catalog likes={likes} />
      </div>
    </LikeContext.Provider>
  );
};

export default App;
