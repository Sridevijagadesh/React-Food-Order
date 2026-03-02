import React, { useEffect, useState } from "react";

import { Menu_Image_URL } from "../utils/contants";

import Shimming from "./Shimming";

const menuList = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    FetchMenu();
  }, []);

  const FetchMenu = async () => {
    const Menudata = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=671928&catalog_qa=undefined&submitAction=ENTER",
    );
    const json = await Menudata.json();
    console.log(json);
    setResInfo(json.data);
  };
  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
  console.log(restaurantInfo);

  const restaurantItemCard =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(restaurantItemCard);
  if (!resInfo) return <Shimming />;
  console.log(resInfo);

  return (
    <>
      <h1>{restaurantInfo.name}</h1>
      <div className="resMenu-title">
        <h1>Recommended ({restaurantItemCard.length})</h1>
      </div>

      {restaurantItemCard.map((item) => {
        return (
          <>
            <div className="resMenu-Description" key={item.card.info.id}>
              <div className="resMenu-container">
                <div className="resMenu-Content">
                  <li>
                    {item.card.info.name} - {item.card.info.price}
                  </li>
                  <h4>{item.card.info.description}</h4>
                  <h4>{item.card.info.category}</h4>
                </div>
                <div className="resMenu-image">
                  <img
                    src={Menu_Image_URL + item.card.info.imageId}
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
