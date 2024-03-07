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

          {/* <Route path="supCat" element={<SupCat />} /> */}

          const routes = [
            {
              path: '/healthCare', 
              element: <HealthCare />
            },
            {
              path: '/vitamins&Supplements',
              element: <VitaminsSupplements />  
            },
            {
              path: '/otc',
              element: <OTC />
            },  
            {
              path: '/personalCare',
              element: <PersonalCare />
            },
            {
              path: '/skinCare', 
              element: <SkinCare />
            },
            {
              path: '/babyCare',
              element: <BabyCare />
            },
            {
              path: '/cosmtics',
              element: <Cosmetics />
            },
            {
              path: '/healthyFood',
              element: <HealthFood />
            },
      
            {
              path: '/brands',
              element: <Brands />
            },
        
    
       
       
          ]


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} ></Route>
        <Route path="/productDetails/:id" element={<ProductDetails />} ></Route>
        <Route path="/personalData" element={<PersonalData />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Register />} ></Route>



      {routes.map((route, index) => (
          <Route  key={index} path={route.path} element={route.element} >
            
            
             </Route>
           
       
       ))}




      </Route>





      
    </>
  )
);


export default function App() {


  return <>
    <RouterProvider router={router} ></RouterProvider>

  </>;
}


