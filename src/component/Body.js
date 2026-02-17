import RestarturatCard from "./RestarturatCard";
import React, { useEffect } from "react";
import Shimming from "./Shimming";

import resList from "../utils/Data";

const Body = () => {
  const [resData, setResdata] = React.useState([]);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    console.log(json);
    // update the state variable
    setResdata(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  //condintional rending
  // if (resData.length === 0) {
  //   return <Shimming />;
  // }
  return resData.length === 0 ? (
    <Shimming />
  ) : (
    <>
      <div className="filter">
        <label>
          <input
            style={{ padding: "7px 10px" }}
            type="text"
            placeholder="search"
            className="search-bar"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterData = resData.filter((res) =>
                res.info.name.includes(search),
              );
              setResdata(filterData);
            }}
          >
            search
          </button>
        </label>
        <button
          onClick={() => {
            const FilterBtn = resData.filter((res) => {
              const rating = parseFloat(res?.info?.avgRatingString);
              return !isNaN(rating) && rating > 4.5;
            });
            setResdata(FilterBtn);
          }}
        >
          filter
        </button>
      </div>
      <div className="res-Container">
        {resData.map((res) => {
          return <RestarturatCard resdata={res} key={res.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
