import { React} from "react";
import { AiOutlineMail } from "react-icons/ai";
import sale from '../assets/svg/sale.png';
import send from '../assets/svg/send.png';
import love from '../assets/svg/love.png';
import styles from "./Git.module.css"
const Navbar = () => {
  return (
    <>
    <div className={styles.maindiv}>
    <div className={styles.div1}>
      <div className={styles.div11}>
      <div className={styles.headertxt}>
         <h2>DESIGNS </h2>
         <p style={{textAlign:'center',marginLeft:'5px',marginRight:'5px',fontWeight:'600'}}> OF <br></br> THE </p>
         <h2> WEEK</h2>
       </div>
       <div className={styles.txt}>
       <h4>Special Launch Price</h4>
       <h2>At Rs. 899</h2>
       <p>From Parag Collection</p>
       </div>
       <div className={styles.headertxt} style={{marginLeft:'-15px'}}>
         <img src={sale} style={{width:'80px'}}/>
         <p style={{textAlign:'center',marginLeft:'5px',marginRight:'5px',fontWeight:'600',marginTop:'15px'}}> BUY 1 <br></br> GET 1 </p>
         <h2 style={{marginTop:'10px'}}> FREE</h2>
       </div>
       <div className={styles.headertxt1}>
         <a href="/men"><button style={{borderRadius:'8px',background:' linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.81) 100%)',color:'#2f2f2f'}}>SHOP MEN</button></a>
         <a href="/Women"><button className={styles.btn2} style={{borderRadius:'8px',background:' linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.81) 100%)',color:'#2f2f2f'}}>SHOP WOMEN</button></a>
       </div>
       </div>
       <div className={styles.sidebar} >
         <div className={styles.subbar} style={{marginTop:'-185px',marginLeft:'80px',display:'flex',flexDirection:'column'}}>
           <div style={{borderLeft: '4px solid white',height:'200px'}}></div>
           <img src={love}style={{width:'35px',marginLeft:'-15px'}} />
           <p style={{marginLeft:'-20px'}}>Wishlist</p>
           <img src={send}style={{width:'35px',marginLeft:'-15px'}} />
           <p style={{marginLeft:'-18px'}}>Share</p>
          
          </div> 
       </div>
    </div>
      <div className={styles.personalDetails}>
        <h3>Get Access To</h3>
        <h3>Exclusive Deals</h3>
        <h6>Only the best deals reach your inbox</h6>
        <form action="">
          <div className={styles.labelInloc}>
            <div className={styles.inloc}>
              <AiOutlineMail />
              <input
                type="email"
                name="name"
                placeholder="Enter your email ID here"
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            <button>Notify Me</button>
          </div>
        </form>
      </div>
      
    </div>
    
    </>
  );
};

export default Navbar;
