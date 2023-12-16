import React from 'react'
import styled from './Cart.module.css'
import coupon from "../assets/img/coupon.png";
import imag from '../assets/multicar3.png'
const Cart = () => {
  return (
    <div className={styled.main}>
        <div className={styled.carta}>
            <div className={styled.ca}  style={{display:'flex'}}>
                <img src={imag} style={{height:'200px'}} />
                <div className={styled.txt}>
                    <div className={styled.txt1}>
                       <p>Casual T-Shirt</p>
                       <p>Rs.1010</p>
                    </div>
                    <div>
                       <p>Color: Black</p>
                       <p>Size: XL</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className={styled.ca}  style={{display:'flex'}}>
                <img src={imag} style={{height:'200px'}} />
                <div className={styled.txt}>
                    <div className={styled.txt1}>
                       <p>Casual T-Shirt</p>
                       <p>Rs.1010</p>
                    </div>
                    <div>
                       <p>Color: Black</p>
                       <p>Size: XL</p>
                    </div>
                    <div>
                       
                    </div>
                </div>
            </div>
            <div className={styled.ca}  style={{display:'flex'}}>
                <img src={imag} style={{height:'200px'}} />
                <div className={styled.txt}>
                    <div className={styled.txt1}>
                       <p>Casual T-Shirt</p>
                       <p>Rs.1010</p>
                    </div>
                    <div>
                       <p>Color: Black</p>
                       <p>Size: XL</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
        <div className={styled.payment}>
            
            <div>
                <div className={styled.cupon}>
                <img src={coupon} style={{width:'30px'}} />
                <h5>Gift Card or Discount Coupon</h5>
                </div>
                <form action="">
          <div className={styled.labelInloc}>
            <div className={styled.inloc}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Cupon Code"
              />
            </div>
            <button>Apply</button>
          </div>
        </form>
            </div>
          <hr/>
          <div className={styled.pay} style={{display:'flex', width:'100%'}}>
            <p style={{fontWeight:'500'}}>Subtotal </p>
            <p style={{fontWeight:'700'}}>Rs. 3300</p>
          </div>
          <div className={styled.pay} style={{display:'flex', width:'100%'}}>
            <p style={{fontWeight:'500'}}>Tax </p>
            <p style={{fontWeight:'700'}}>Rs. 10</p>
          </div>
          <div className={styled.pay} style={{display:'flex', width:'100%'}}>
            <p style={{fontWeight:'500'}}>Delivery </p>
            <p style={{fontWeight:'700'}}>Rs. 30</p>
          </div>
          <hr/>
          <div className={styled.pay} style={{display:'flex', width:'100%'}}>
            <p style={{fontWeight:'500'}}>Total </p>
            <p style={{fontWeight:'700'}}>Rs. 3340</p>
          </div>
          <div className={styled.cpay}>
          <button>Buy Now</button>
          </div>
        </div>
    </div>
  )
}

export default Cart