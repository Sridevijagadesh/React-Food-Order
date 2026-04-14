import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import About from "./src/component/About";
import Error from "./src/component/Error";
import Contact from "./src/component/Contact";

import RestaurantMeanList from "./src/component/RestaurantMeanList";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Grocery = lazy(() => import("./src/component/Grocery"));
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // parent router
    children: [
      // child router
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/restarturat/:resId", element: <RestaurantMeanList /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
