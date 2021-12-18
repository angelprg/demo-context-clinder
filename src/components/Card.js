import React from "react";
import Like from './Like';

const Cards = ({ data }) => {
  const { title, first, last } = data.name;
  const fullName = `${title} ${first} ${last}`;
  
  return (
    <div className="card m-2" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={data.picture.large}
            className="img-fluid rounded-start"
            alt={fullName}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {fullName}
            </h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">{data.email}</small>
            </p>
            <Like />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
