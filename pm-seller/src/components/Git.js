import { React} from "react";
import man from "../assets/svg/man.png";
import gits from "../assets/svg/geit.png";
import styles from "./Git.module.css"
const Navbar = () => {
  return (
    <>
    <div className={styles.colnav}>
    <div className={styles.left}>
       <h5>Any Query ?</h5>
       <form>
  <label>
   Your Name
    <input type="text" name="name" placeholder="enter your name" className={styles.i1}/>
  </label>
  <label>
   Mobile no.
    <input type="text" name="name" placeholder="enter your phone number" className={styles.i2}/>
  </label>
  <label>
   Store Name
    <input type="text" name="name" placeholder="enter your store name here" className={styles.i3}/>
  </label>
  <label>
   Store Address
    <input type="text" name="name" placeholder="enter your store address here" className={styles.i4}/>
  </label>
  <label>
   Description
    <input type="text" name="name" placeholder="write your here" className={styles.i5}/>
  </label>
  <input type="submit" value="Send" className={styles.i6}/>
</form>  
</div>     
<div className={styles.right}>

<img className={styles.man} src={man} alt="" />
   
</div>
    </div>
    
    </>
  );
};

export default Navbar;
