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
      <div className="w-65 border-[1] p-5 m-1 h-110 hover:bg-gray-200">
        <img src={Image_URL + cloudinaryImageId} className="w-70 " />
        <div className="mt-1.5  ">
          <h1 className="font-bold">{name}</h1>
          <h3 className="card-Category">{cuisines?.join(", ")}</h3>
          <h3 className="card-info">{description}</h3>
          <h3 className="card-Price">{costForTwo}</h3>
          <h3 className="card-rating">{avgRatingString} Stars</h3>
        </div>
      </div>
    </>
  );
};

export const withPromotedCard = (RestarturatCard) => {
  return (props) => {
    return (
      <>
        <label>Promoted</label>
        <RestarturatCard {...props} />
      </>
    );
  };
};

export default RestarturatCard;
