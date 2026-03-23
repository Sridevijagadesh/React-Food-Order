import React, { useEffect, useState } from "react";
import { Menu_Image_URL } from "../utils/contants";
import Shimming from "./Shimming";
import { useParams } from "react-router";
import { Menu_URL } from "../utils/contants";
import useMenuCustomHook from "../utils/useMenuCustomHook";

const menuList = () => {
  const [filterInfo, setFilterInfo] = useState(null);

  // const [showItems, setShowItems] = useState(false);
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useMenuCustomHook(resId);

  //Name of the Res
  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
  console.log(restaurantInfo);

  //to get the image category description
  const restaurantItemCard =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(restaurantItemCard);
  if (!resInfo) return <Shimming />;
  console.log(resInfo);
  const itemToRender = filterInfo || restaurantItemCard || [];

  return (
    <>
      <h1 className="resMenu-Name">{restaurantInfo?.name}</h1>
      <div
        className="resMenu-title"
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#f5f5f5",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      >
        <h1>Recommended ({restaurantItemCard?.length})</h1>
        {/* <span
          style={{
            transform: showItems ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
            fontSize: "18px",
          }}
        >
          ▲
        </span> */}
      </div>
      <div className="Filter-Button">
        <div>
          <button
            className="veg-Button"
            onClick={() => {
              const vegFilter = restaurantItemCard.filter((menu) => {
                const vegItem = menu?.card?.info?.itemAttribute?.vegClassifier;
                return vegItem === "VEG";
              });
              setFilterInfo(vegFilter);
              console.log(setFilterInfo(vegFilter.length));
            }}
          >
            Veg
          </button>
        </div>
        <div>
          <button
            className=" Nonveg-Button"
            onClick={() => {
              const vegFilter = restaurantItemCard.filter((menu) => {
                const vegItem = menu?.card?.info?.itemAttribute?.vegClassifier;
                return vegItem === "NONVEG";
              });
              setFilterInfo(vegFilter);
            }}
          >
            Non-Veg
          </button>
        </div>
      </div>

      {itemToRender.map((item) => {
        return (
          <>
            <div key={item?.card?.info?.id} className="resMenu-Description">
              <div className="resMenu-container">
                <div className="resMenu-Content">
                  <h2>{item?.card?.info?.name}</h2>
                  <h3>
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </h3>
                  <h4>{item?.card?.info?.description}</h4>
                </div>
                <div className="resMenu-image">
                  <img
                    src={Menu_Image_URL + item?.card?.info?.imageId}
                    width={200}
                    height={186}
                  />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default menuList;
