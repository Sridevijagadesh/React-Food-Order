import RestarturatCard from "./RestarturatCard";
import React, { useEffect, useState } from "react";
import Shimming from "./Shimming";
import { Link } from "react-router";
import { Body_URL } from "../utils/contants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resData, setResdata] = React.useState([]);
  const [filterRestroList, setFilterRestroList] = useState([]);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(Body_URL);

    const json = await data.json();
    console.log(json);
    // update the state variable
    setResdata(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilterRestroList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  //condintional rending
  // if (resData.length === 0) {
  //   return <Shimming />;
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>your interent is slow please check on the internet</h1>;

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
                res.info.name.toLowerCase().includes(search.toLowerCase()),
              );
              setFilterRestroList(filterData);
            }}
          >
            search
          </button>
        </label>
        <button
          onClick={() => {
            const FilterBtn = filterRestroList.filter((res) => {
              const rating = parseFloat(res?.info?.avgRatingString);
              return !isNaN(rating) && rating > 4.5;
            });
            setFilterRestroList(FilterBtn);
          }}
        >
          filter
        </button>
      </div>
      <div className="res-Container">
        {filterRestroList.map((res) => {
          return (
            <Link
              key={res.info.id}
              to={"restarturat/" + res.info.id}
              className="resCardLink"
            >
              <RestarturatCard resdata={res} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
