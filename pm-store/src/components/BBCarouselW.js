import React from 'react'
import styles from './BBCW.module.css'
const BBCarousel = () => {
  return (
    <div className={styles.maindiv}>
       <div className={styles.smadiv1}>
          <div className={styles.innerdiv}>
           <h5>UNDER RS. 899</h5>
           <h6>Ethnic Wear</h6>
          </div> 
       </div>
       <div className={styles.smadiv2}>
       <div className={styles.innerdiv}>
           <h5>UNDER RS. 999</h5>
           <h6>Sneakers</h6>
          </div> 
       </div>
       <div className={styles.smadiv3}>
       <div className={styles.innerdiv}>
           <h5>UNDER RS. 699</h5>
           <h6>Casual Wear</h6>
          </div> 
       </div>
       <div className={styles.smadiv4}>
       <div className={styles.innerdiv}>
           <h5>UNDER RS. 899</h5>
           <h6>Handbags</h6>
          </div> 
       </div>
       <div className={styles.smadiv5}>
       <div className={styles.innerdiv}>
           <h5>UNDER RS. 799</h5>
           <h6>Kurtis</h6>
          </div> 
       </div>
       <div className={styles.smadiv6}>
       <div className={styles.innerdiv}>
           <h5>UNDER RS. 599</h5>
           <h6>T Shirts</h6>
          </div> 
       </div>
    </div>
  )
}

export default BBCarousel