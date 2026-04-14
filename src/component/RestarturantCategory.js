import React, { useState } from "react";
import ItemList from "./ItemList";
const RestarturantCategory = ({ data }) => {
  const [isopen, setIsopen] = useState(false);
  // const [title] = data;
  return (
    <div>
      <div
        className=" w-6/12 bg-gray-200 shadow-lg  my-4 p-4 m-auto "
        onClick={() => {
          setIsopen(!isopen);
        }}
      >
        <div className="flex justify-between">
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span className={isopen ? "rotate-180" : "rotate-0"}>🔺</span>
        </div>
      </div>
      {/* Body */}
      {isopen && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestarturantCategory;
