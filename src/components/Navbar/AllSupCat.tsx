 export const AllSubCategoriesElement= [

    ["Sports And Nutrition"," Complementary Remedies "," First Aid  "," Health Checks","Childrens Health"," Family Planning"," Foot Care",
    "Support","Medicated Skin Care","Travel Health"," Weight Management","Drinks", "Home Health Care Solutions"," Eye And Ear Care", "Healthy Snacks"," Cough And Cold",  ]
,
   [

      "  Bone And Joint Care",
"Calcium and Minerals",
"Weight Loss Management",
"Womens Health",
"Anti Oxidants",
"Mens Health",
"Fish Oil And Omega 3",
"Hair Skin and Nails",
"Multi-Vitamins",
"Childrens Health",
"Brain and Memory"
    ],

   ["Allergy and Sinus",
       " Analgesics and pain relief",
        "Cough and cold",
        "Digestive care and laxative",
       " Stop Smoking"
        ]

    ]

interface IProps {

  showSupCategory:boolean

}



import styles from './Navbar.module.scss'    
import { Link } from 'react-router-dom'
    export default function AllSupCat({showSupCategory}:IProps) {

    

      return (    <>
      
      { showSupCategory? <div className={` bg-white flex items-center justify-between xl:px-36  animate__animated animate__bounceInDown   ${styles.allSubCategories}`} style={{position:"absolute",top:"100%",left:"0px",right:"0px"}} >

      



        

<ul className="p-0" >

 <li className='bg-indigo-400 ' ><Link to={'/healthCare/supCat'} >hello worsdfgsfdsdld</Link  ></li>
 <li className='bg-indigo-400 ' ><Link to={'/healthCare/supCat2'} >hello worsdfgsfdsdld 222</Link  ></li>
 <li><span>hellod world</span></li>
 <li><span>hello world</span></li>
 <li><span> world</span> </li>
 <li><span>hello woddddddddrld</span> </li>
 <li><span>hello dworld</span> </li> 
 <li><span>hel world</span> </li>


</ul>
<ul className="p-0">

 <li><span>hello worsdfgsfdsdld</span></li>
 <li><span>hello ddworld</span></li>
 <li><span>hellod world</span></li>
 <li><span>hello world</span></li>
 <li><span> world</span> </li>
 <li><span>hello woddddddddrld</span> </li>
 <li><span>hello dworld</span> </li>
 <li><span>hel world</span> </li>


</ul>



<ul className="flex flex-col m-0 p-0 "  >

    <li className="mb-3" >
      
          <ul className="flex m-0 p-0" >
          <li className="mx-2" >
            <img src="../../../images/HealthyCare/brand-1.jpg" width={'110px'}  alt="" />
            
            </li>
          <li className="mx-2" >
          <img src="../../../images/HealthyCare/brand-2.jpg" width={'110px'}  alt="" />
            
            </li>
          <li className="mx-2" >
          <img src="../../../images/HealthyCare/brand-3.jpg" width={'110px'}  alt=""/>        
            </li>
          
          </ul>
      
      </li>
    <li>
      
          <ul className="flex m-0 p-0 " >
          <li className="mx-2" >
            <img src="../../../images/HealthyCare/brand-4.jpg" width={'110px'}  alt="" />
            
            </li>
          <li className="mx-2" >
          <img src="../../../images/HealthyCare/brand-5.jpg" width={'110px'}  alt="" />
            
            </li>
          <li className="mx-2" >
          <img src="../../../images/HealthyCare/brand-6.jpg" width={'110px'} alt="" />        
            </li>
          
          </ul>
      
      </li>

</ul>

<div className="categoryMainImg">
<img src="../../../images/HealthyCare/Mega_Menu__420X272_HealthCare.jpg" width={'240px'} alt="" />
</div>



</div>:""}
      
      </>  
      
      )
    }
    