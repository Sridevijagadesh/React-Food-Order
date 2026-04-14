import { Image_URL } from "../utils/contants";
const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" border-gray-200 border-b-2 mb-4 w-6/12 m-auto text-left"
        >
          <div className="flex justify-between">
            <div className="w-300 ">
              <span className="font-bold">{item.card.info.name}</span>
              <span>
                {" "}
                -$
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>

              <div className="">
                <p className="text-[12px]"> {item.card.info.description}</p>
              </div>
            </div>
            <div>
              <img
                src={Image_URL + item.card.info.imageId}
                className="w-[350]"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default ItemList;
