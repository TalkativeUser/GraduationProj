import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ColorRing } from "react-loader-spinner";
import { Link, Outlet } from "react-router-dom";

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}




const HealthCare = () => {
  const [healthCareData, setHealthCareData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getHealthyCare() {
    setIsLoading(true);
    try {
      const data = await axios.get("https://dummyjson.com/products");
      console.log(data.data.products);
      setIsLoading(false);
      return data.data.products;
    } catch (error:any) {
      console.log(error.message);
      // setIsLoading(false);
      return error.message;
    }
  }

  useEffect(() => {
    getHealthyCare().then((data) => {
      console.log(data)
      setHealthCareData(data);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="vh-100  d-flex justify-content-center align-items-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  

  return ( <>  
  
  <Helmet>
        <title> AllProducts </title>
        <meta name='phone' about='this one product of all products' />
      </Helmet>  <div className="flex flex-col items-center" >

<div>
<Outlet/>

      <h2>HealthCare</h2>
      <h2>HealthCare</h2>
      <div className="container m-5 grid xl:grid-cols-4 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-2 ">
        {healthCareData&& healthCareData.map((product) => (
          <div key={product.id} className=" ">
            {/* <h3>{product.title}</h3> */}
         <Link to={`/productDetails/${product.id}`} >   <img src={product.thumbnail} width={"100%"} className="h-64" alt="" /></Link>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>

  );
};
export default HealthCare;
