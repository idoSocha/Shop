import { Route, Routes } from "react-router-dom";
import "./MainRouter.css";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";

function MainRouter(): JSX.Element {
  return (
    <div className="MainRouter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
