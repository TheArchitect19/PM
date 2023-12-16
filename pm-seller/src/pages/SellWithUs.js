import React from 'react'
import rys from '../assets/rys.jpg'
import rys2 from '../assets/rys2.jpg'
import rys3 from '../assets/rys3.jpg'
import styles from "./Sell.module.css"


const SellWithUs = () => {
  return (
    <>
    <div className='py-6' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <h2 className='p-2 md:p-4 lg:p-5 text-sm md:text-2xl sm:text-xl lg:text-3xl'>Start Selling with <span className='text-red-700 font-semibold'>Pandrimarket</span> in just <span className='text-red-700 font-semibold'>3</span> easy steps</h2>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} className='gap-1 text-sm lg:gap-8 pb-10'>
      <div className={styles.c1}>
          <img src={rys} style={{height:"100px",width:"100%"}}/>
          <p> Register your shop </p>
          <button>Register</button>
      </div>
      <div className={styles.c2}>
          <img src={rys2} style={{height:"120px"}} />
          <p> Pick a plan </p>
          <button>Pick Plan</button>
      </div>
      <div className={styles.c1}  >
          <img src={rys3} style={{height:"100px",width:"100%"}}/>
          <p>Upload Products</p>
          <button>Upload</button>
      </div>
    </div>
    </>
  )
}

export default SellWithUs