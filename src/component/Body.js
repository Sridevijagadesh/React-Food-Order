import RestarturatCard from "./RestarturatCard";
import React from "react";

import resList from "../utils/Data";

const Body = () => {
  const [resData, setResdata] = React.useState(resList);

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
