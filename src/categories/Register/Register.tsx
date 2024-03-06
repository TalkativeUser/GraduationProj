import React from 'react'
import styles from './Register.module.scss'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
 <div className='' >
     <div className={` ${styles.registerPage} h-[585px] flex justify-center items-center ` }  >

<form className={`${styles.my_form} backdrop-blur-sm bg-white/2 rounded-lg `} action="">

<div>  <input className={` ${styles.my_inp} `} type="text" />    </div>
<div>  <input className={` ${styles.my_inp} `} type="password" />  </div>
<div>  <input className={` ${styles.my_inp} `} type="password" />  </div>
<div>  <input className={` ${styles.my_inp} `} type="password" />  </div>
<div>  <input className={` ${styles.my_inp} `} type="password" />  </div>

<button className={`${styles.my_btn_login}  ` } > Login </button>


</form>

    
</div>
 </div>
  )
}
