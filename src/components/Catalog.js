import React, { useState, useEffect } from "react";
import Card from "./Card";

const ENDPOINT = "https://randomuser.me/api/?results=30";
const Catalog = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => setList(data.results));
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {list.map((user) => (
        <Card key={user.login.uuid} data={user} />
      ))}
    </div>
  );
};

export default Catalog;
