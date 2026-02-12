import RestarturatCard from "./RestarturatCard";
import React, { useEffect } from "react";

import resList from "../utils/Data";

const Body = () => {
  const [resData, setResdata] = React.useState([]);

  useEffect(() => {
    FetchData();
  }, [20000]);

  const FetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING%22",
    );

    const Json = await data.json();
    console.log(Json);
    // update the state variable
    setResdata(
      Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  if (resData.length === 0) {
    return <h1>loading......</h1>;
  }
  return (
    <>
      <div className="filter">
        <button
          onClick={() => {
            const FilterBtn = resList.filter((res) => res.info.rating < 4);
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
