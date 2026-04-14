import { useParams } from "react-router";
import useMenuCustomHook from "../utils/useMenuCustomHook";
import Shimming from "./Shimming";
import RestarturantCategory from "./RestarturantCategory";

const RestaurantMeanList = () => {
  const { resId } = useParams();
  const resInfo = useMenuCustomHook(resId);

  console.log(resInfo);
  const restarturatInfo = resInfo?.cards[2]?.card?.card?.info;
  console.log(restarturatInfo);

  const RestaurantItemCard =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(RestaurantItemCard);
  console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR);
  const category =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  console.log(category);
  if (!restarturatInfo) return <Shimming />;
  return (
    <>
      <div className="items-center m-auto text-center">
        <h1 className="font-bold text-2xl">{restarturatInfo.name}</h1>
        <h2 className="mt-4 text-[20] italic">
          {restarturatInfo.cuisines.join(" ")}
        </h2>
        {category.map((category) => (
          <RestarturantCategory data={category.card?.card} />
        ))}
      </div>
    </>
  );
};
export default RestaurantMeanList;
