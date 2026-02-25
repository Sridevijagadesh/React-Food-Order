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
      <h1>I am from menu card</h1>
      <h1>{restaurantInfo.name}</h1>
      <div className="resMenu-Container">
        <div className="resMenu-title">
          <h1>Recommended{restaurantItemCard.length}</h1>
        </div>

        {restaurantItemCard.map((item) => {
          return (
            <>
              <div className="resMenu-Description">
                <li key={item.card.info.id}>
                  {item.card.info.name} - {item.card.info.price}
                </li>

                <img src={Menu_Image_URL + item.card.info.imageId} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default menuList;
