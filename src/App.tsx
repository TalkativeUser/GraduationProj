import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import 'animate.css';
import Layout from "./components/Layout/Layout";

import Home from "./categories/Home/Home";
import NotFound from "./categories/NotFound/NotFound";
import Register from "./categories/Register/Register";
import PersonalData from "./categories/PersonalData/PersonalData";
import ProductDetails from "./categories/ProductDetails/ProductDetails";
import Login from "./categories/Login/Login";
import { routes } from "./Routes/Routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} ></Route>
        <Route path="/productDetails/:id" element={<ProductDetails />} ></Route>
        <Route path="/personalData" element={<PersonalData />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/*" element={<NotFound />} ></Route>

        {routes.map((route, index) => (
          <Route key={index} path={route.path}  >

            {route.supCategory.map((innerRoute, innerIndex) =><>

            {
                  innerIndex == 0 ? 
                  <>  
                    <Route key={innerIndex} index element={innerRoute.element} >
                    </Route>  <Route key={innerIndex} path={`${route.path}/${innerRoute.path}`} element={innerRoute.element} ></Route> 
                  </> :
                  <Route key={innerIndex} path={`${route.path}/${innerRoute.path}`} element={innerRoute.element} >
                  </Route>

            }
            </>
            )}

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


