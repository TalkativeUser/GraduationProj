import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect } from "react";

export default function ProductDetails() {

    const { id } = useParams()
    // document.title='all products'

    async function getDetails() {

      const data=await axios.get(`https://dummyjson.com/products/${id}`)
      console.log(data.data);
      

    }

  useEffect(()=>{  
    getDetails()



  },[])
    
  return (<>

<Helmet>
        <title> Products {id} </title>
        <meta name='phone' about='this one product of all products' />
      </Helmet>
  

    </>
  )
}
