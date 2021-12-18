import React from "react";
import LikeContextProvider from '../context/LikeContext';
import Catalog from "./Catalog";
import Navbar from "./Navbar";

const App = () => {

  return (
    <LikeContextProvider >
      <div>
        <Navbar />
        <div className="text-center m-4">
          <h1>❤️Clinder❤️</h1>
        </div>
        <Catalog />
      </div>
    </LikeContextProvider>
  );
};

export default App;
