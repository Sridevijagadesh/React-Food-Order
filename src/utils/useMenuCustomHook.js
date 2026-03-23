import React, { useEffect } from "react";
import { Menu_URL } from "./contants";

const useMenuCustomHook = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    FetchMenu();
  }, []);

  const FetchMenu = async () => {
    const data = await fetch(Menu_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useMenuCustomHook;
