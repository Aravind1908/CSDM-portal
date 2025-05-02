import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import BcaSd from "../pages/StudentDetails/BcaSd";
import CsSd from "../pages/StudentDetails/CsSd";
import CtSd from "../pages/StudentDetails/CtSd";
import ItSd from "../pages/StudentDetails/ItSd";



function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/students/bca" element={<BcaSd/>} />
        <Route path="/students/cs" element={<CsSd/>}/>
        <Route path="/students/ct" element={<CtSd/>}/>
        <Route path="/students/it" element={<ItSd/>}/>
      </Route>
    </Routes>
  );
}

export default AllRoutes;
