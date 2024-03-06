import React from 'react'
import styles from './Login.module.scss'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
 <div className='' >
     <div className={` ${styles.loginPage} h-[585px] flex justify-center items-center ` }  >

<form className={`${styles.my_form} backdrop-blur-sm bg-white/2 rounded-lg `} action="">

<div>  <input className={` ${styles.my_inp} `} type="text" />    </div>
<div>  <input className={` ${styles.my_inp} `} type="password" />  </div>

<button className={`${styles.my_btn_login}  ` } > Login </button>

<p className='text-white text-[18px]' >if you don't have any account you can create one now  <Link className='text-white' to={'/register'}>Sign Up</Link> </p>

</form>

    
</div>
 </div>
  )
}
