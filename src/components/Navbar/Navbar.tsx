import styles from "./Navbar.module.scss";
  import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AllSupCat from "./AllSupCat";


export default function Navbar() {

  


  const [showSupCategory1,setShowSupCategory1]=useState<boolean>(false)
  const [showSupCategory2,setShowSupCategory2]=useState<boolean>(false)
  const [showSupCategory3,setShowSupCategory3]=useState<boolean>(false)
  const [showSupCategory4,setShowSupCategory4]=useState<boolean>(false)
  const [showSupCategory5,setShowSupCategory5]=useState<boolean>(false)
  const [showSupCategory6,setShowSupCategory6]=useState<boolean>(false)
  const [showSupCategory7,setShowSupCategory7]=useState<boolean>(false)
  const [showSupCategory8,setShowSupCategory8]=useState<boolean>(false)
  const [showSupCategory9,setShowSupCategory9]=useState<boolean>(false)
  const [showSupCategory10,setShowSupCategory10]=useState<boolean>(false)

  function hideLayout_subCategory () { 

    const links = document.querySelectorAll('a');
    links.forEach(link => {

      link.addEventListener('click', () => {
    
        setShowSupCategory1(false)
        setShowSupCategory2(false)
        setShowSupCategory3(false)
        setShowSupCategory4(false)
        setShowSupCategory5(false)
        setShowSupCategory6(false)
        setShowSupCategory7(false)
        setShowSupCategory8(false)
        setShowSupCategory9(false)
        setShowSupCategory10(false)
    
    
      });
    
    });

  }

  useEffect(()=> {   

    hideLayout_subCategory ()

    
    })
  return (
    <div>
      <nav className={`fixed-top mt-0 xl:px-36 xl:text-[16px] bg-white ${styles.my_nav}`}>
            <ul className={`flex justify-between items-center mb-2 p-0 flex-wrap ${styles.my_ul1}`}> 
              <li className={`${styles.my_li1}  `} > Al-Sharif Pharmacy </li>
              <li className={`${styles.my_li2} ${styles.ParentSearchInput} w-[55%]  `} > <input className={`focus:outline-none w-[100%] rounded-lg ${styles.searchInput}`} type="text" />   </li>
              <li className={`${styles.my_li3} ps-0 `} >  
                
                <div className="flex justify-between items-center" >

                  <ul className={` flex ${styles.my_inner_ul} ${styles.handleMainIcons1} w-[100%] justify-between ps-0 `} >

                    <li className="mx-3" ><Link className="text-black" to={""} ><i className="fa-regular fa-heart "></i></Link> </li>
                    <li className="mx-3" > <Link className="text-black" to={'personalData'} ><i className="fa-solid fa-user-gear "></i></Link></li>
                    <li className="mx-3 me-1" ><Link className="text-black" to={''} ><i className="fa-solid fa-cart-shopping  "></i> </Link></li>
                  </ul>
                  <ul className={` flex ${styles.my_inner_ul} ${styles.handleMainIcons2}  justify-between ps-0 `} >

                    <li className="me-3 " ><Link className="text-black" to={""} ><i className="fa-regular fa-heart "></i></Link> </li>
                    <li className="mx-3" > <Link className="text-black" to={'personalData'} ><i className="fa-solid fa-user-gear "></i></Link></li>
                    <li className="mx-3" ><Link className="text-black" to={''} ><i className="fa-solid fa-cart-shopping  "></i> </Link></li>
                    <li className="" ><i className={`fa-solid fa-bars fa-flip-horizontal text-4xl ${styles.myToggleIcon1}`}></i></li>
                  </ul>



                </div>
                
                  </li>
            </ul>

            <ul className={`flex justify-between items-center mb-0 p-0 ${styles.my_ul2}`}> 
              <li onMouseOver={()=> {setShowSupCategory1(true)}} onMouseLeave={()=> {setShowSupCategory1(false)}} className={` p-2 pb-4 rounded-md ps-0  ${styles.my_ul2_li} ${styles.my_li1}`}>  <AllSupCat showSupCategory={showSupCategory1} /> <Link  to={'/'} className={`  p-2 rounded-md ${styles.my_a}`} >  Home </Link>  </li>
              <li onMouseOver={()=> { setShowSupCategory2(true)}} onMouseLeave={()=> {setShowSupCategory2(false)}} className={` p-2 pb-4 rounded-md  ${styles.my_ul2_li} ${styles.my_li2}`}>  <AllSupCat showSupCategory={showSupCategory2} /> <Link  to={'/healthCare'} className={`  p-2 rounded-md ${styles.my_a}`} >   Health Care </Link>  </li>
              <li onMouseOver={()=> { setShowSupCategory3(true)}} onMouseLeave={()=> {setShowSupCategory3(false)}} className={` p-2 pb-4 rounded-md  ${styles.my_ul2_li} ${styles.my_li3}`}>  <AllSupCat showSupCategory={showSupCategory3} /> <Link  to={'/vitamins&Supplements'} className={`  p-2 rounded-md ${styles.my_a}`} >  Vitamins & Supplements </Link>          </li>
              <li onMouseOver={()=> { setShowSupCategory4(true)}} onMouseLeave={()=> {setShowSupCategory4(false)}} className={` p-2 pb-4 rounded-md  ${styles.my_ul2_li} ${styles.my_li4}`}>  <AllSupCat showSupCategory={showSupCategory4} /> <Link  to={'/otc'} className={`  p-2 rounded-md ${styles.my_a}`} >     OTC  </Link>      </li>
              <li onMouseOver={()=> { setShowSupCategory5(true)}} onMouseLeave={()=> {setShowSupCategory5(false)}} className={` p-2 pb-4 rounded-md ${styles.my_ul2_li}  ${styles.my_li5}`}>  <AllSupCat showSupCategory={showSupCategory5} /> <Link  to={'/personalCare'} className={`  p-2 rounded-md ${styles.my_a}`} >  Personal Care  </Link>          </li>
              <li onMouseOver={()=> { setShowSupCategory6(true)}} onMouseLeave={()=> {setShowSupCategory6(false)}} className={` p-2 pb-4 rounded-md  ${styles.my_ul2_li} ${styles.my_li6}`}>  <AllSupCat showSupCategory={showSupCategory6} /> <Link  to={'/babyCare'} className={`  p-2 rounded-md ${styles.my_a}`} >  Baby Care  </Link>          </li>
              <li onMouseOver={()=> { setShowSupCategory7(true)}} onMouseLeave={()=> {setShowSupCategory7(false)}} className={` p-2 pb-4 rounded-md  ${styles.my_ul2_li} ${styles.my_li7}`}>  <AllSupCat showSupCategory={showSupCategory7} /> <Link  to={'/skinCare'} className={`  p-2 rounded-md ${styles.my_a}`} >  Skin Care   </Link>          </li>
              <li onMouseOver={()=> { setShowSupCategory8(true)}} onMouseLeave={()=> {setShowSupCategory8(false)}} className={` p-2 pb-4 rounded-md  ${styles.my_ul2_li} ${styles.my_li8}`}>  <AllSupCat showSupCategory={showSupCategory8} /> <Link  to={'/cosmtics'} className={`  p-2 rounded-md ${styles.my_a}`} > Cosmetics   </Link>          </li>
              <li onMouseOver={()=> { setShowSupCategory9(true)}} onMouseLeave={()=> {setShowSupCategory9(false)}} className={` p-2 pb-4 rounded-md  ${styles.my_ul2_li} ${styles.my_li9}`}>  <AllSupCat showSupCategory={showSupCategory9} /> <Link  to={'/healthyFood'} className={`  p-2 rounded-md ${styles.my_a}`} >  Healthy Food   </Link>          </li>
              <li   onMouseOver={()=> { setShowSupCategory10(true)}} onMouseLeave={()=>{setShowSupCategory10(false)}} className={` p-2 pb-4 rounded-md  ${styles.my_ul2_li} ${styles.my_li10}`}>  <AllSupCat showSupCategory={showSupCategory10} /> <Link  to={'/brands'} className={`  p-2 rounded-md ${styles.my_a}`} >  Brands   </Link>          </li> 
              
           
            </ul>
              <div className="flex justify-end " >   

                    <i className={`fa-solid fa-bars fa-flip-horizontal text-4xl ${styles.myToggleIcon2}`}></i>

              </div>
     
      </nav>



    </div>
  );
}
