import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
