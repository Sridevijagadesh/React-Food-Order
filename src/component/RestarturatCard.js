import ResList from "../utils/Data";
import React from "react";

const RestarturatCard = (props) => {
  const { resdata } = props;
  const { name, description, category, cloudinaryImageId, rating, price } =
    resdata.info;
  return (
    <>
      <div className="card-container">
        <img
          src={"https://media-assets.swiggy.com/" + cloudinaryImageId}
          width={200}
        />
        <div className="card-body">
          <h2 className="card-name">{name}</h2>
          <h3 className="card-Category">{category}</h3>
          <h3 className="card-info">{description}</h3>
          <h3 className="card-Price">₹{price / 100}</h3>
          <h3 className="card-rating">{rating} Stars</h3>
        </div>
      </div>
    </>
  );
};

export default RestarturatCard;
