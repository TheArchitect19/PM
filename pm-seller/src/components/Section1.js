import React from 'react'
import styles from "./Section1.module.css";
import heroImg from "../assets/svg/wws.png";
import rect from "../assets/img/rect.png";
import vecr from "../assets/img/vecr.png";
import vecy from "../assets/img/vecy.png";
import btn from "../assets/img/btn.png";
import bys from "../assets/img/bys.png";
import coo from "../assets/img/coo.png";
import mem from "../assets/img/mem.png";
import np from "../assets/img/np.png";
import pap from "../assets/img/pap.png";


const Section1 = () => {
  
  return (
    <>
        <div className={styles.s1}>
        <div className={styles.frontimg}>
            <img src={rect} alt="" />
          </div>
          <div className={styles.s1left}>
            <div>
            <div>
            <img src={heroImg} alt="" />
            </div>
            </div>
          </div>
          <div className={styles.s1right}>
          <div className={styles.txt}>
          <p>MEMBERSHIP</p>
          <p>BUILD YOUR STORE WITH US</p>
          <p>
            CHECKOUT OUT OUR <a>New Plans</a>
          </p>
          <button className={styles.btn}>PICK A PLAN</button>
        </div>
          </div>
        </div>
    </>
  )
}

export default Section1

{/* <div>
<div className={styles.section1Container}>

<img src={rect} />

    <div className={styles.section1Left}>
<img src={vecr} />
       
       <img src={heroImg} style={mystyle} />
    </div>
    
    <div className={styles.section1Right}>
<img src={vecy} />
<img src={mem} style={mystyl}/>
<img src={bys} style={mysty}/>
<img src={coo} style={myst}/>
<img src={np} style={mys}/>

<img src={pap}  style={my}/>
<img src={btn} style={m}/>
       
    </div>
</div>
</div> */}