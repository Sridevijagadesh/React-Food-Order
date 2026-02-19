import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import About from "./src/component/About";
import Error from "./src/component/Error";
import Contact from "./src/component/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // parent router
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
