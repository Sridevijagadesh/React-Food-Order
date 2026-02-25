import ResList from "../utils/Data";
import React from "react";
import { Image_URL } from "../utils/contants";

const RestarturatCard = (props) => {
  const { resdata } = props;
  const {
    name,
    description,
    cuisines,
    cloudinaryImageId,
    avgRatingString,
    costForTwo,
  } = resdata.info;
  return (
    <>
      <div className="card-container">
        <img src={Image_URL + cloudinaryImageId} width={200} />
        <div className="card-body">
          <h2 className="card-name">{name}</h2>
          <h3 className="card-Category">{cuisines?.join(", ")}</h3>
          <h3 className="card-info">{description}</h3>
          <h3 className="card-Price">{costForTwo}</h3>
          <h3 className="card-rating">{avgRatingString} Stars</h3>
        </div>
      </div>
    </>
  );
};

export default RestarturatCard;
