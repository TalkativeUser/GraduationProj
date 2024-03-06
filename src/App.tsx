import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import 'animate.css';
import Layout from "./components/Layout/Layout";
import BabyCare from "./categories/BabyCare/BabyCare";
import VitaminsSupplements from "./categories/VitaminsSupplements/VitaminsSupplements";
import HealthCare from "./categories/HealthCare/HealthCare";
import HealthFood from "./categories/HealthFood/HealthFood";
import Cosmetics from "./categories/Cosmetics/Cosmetics";
import PersonalCare from "./categories/PersonalCare/PersonalCare";
import OTC from "./categories/OTC/OTC";
import SkinCare from "./categories/SkinCare/SkinCare";
import Brands from "./categories/Brands/Brands";
import Home from "./categories/Home/Home";
import NotFound from "./categories/NotFound/NotFound";
import Register from "./categories/Register/Register";
import PersonalData from "./categories/PersonalData/PersonalData";
import ProductDetails from "./categories/ProductDetails/ProductDetails";
import Login from "./categories/Login/Login";
import SupCat from "./categories/HealthCare/SupCat/SupCat";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>

        <Route path="/" element={<Home title="" desc="" />  }> </Route>
        <Route path="/healthCare" element={<HealthCare />}>
          <Route path="supCat" element={<SupCat />} />
        </Route>
        <Route path="/vitamins&Supplements" element={<VitaminsSupplements title="" desc="" />}> </Route>
        <Route path="/otc" element={<OTC title="" desc="" />}> </Route>
        <Route path="/personalCare" element={<PersonalCare title="" desc="" />}> </Route>
        <Route path="/skinCare" element={<SkinCare title="" desc="" />}> </Route>
        <Route path="/babyCare" element={<BabyCare />}>     </Route>
        <Route path="/cosmtics" element={<Cosmetics />}>      </Route>
        <Route path="/brands" element={<Brands/>}>        </Route>
        <Route path="/healthyFood" element={<HealthFood title="" desc="" />}>   </Route>
        <Route path="/register" element={<Register/>}>   </Route>
        <Route path="/login" element={<Login/>}>   </Route>
        <Route path="/personalData" element={<PersonalData/>}>   </Route>
        <Route path="/productDetails/:id" element={<ProductDetails/>}>   </Route>
        <Route path="*" element={<NotFound />}>   </Route>
      </Route>
    </>
  )
);


export default function App() {


  return <>
    <RouterProvider router={router} ></RouterProvider>

  </>;
}


