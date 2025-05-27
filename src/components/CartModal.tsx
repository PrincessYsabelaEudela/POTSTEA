"use client"

import styles from "./CartModal.module.css";
import Image from "next/image"

const CartModal = () => {

  const cartItems = true

    return (
      <div className={styles.cart}>{!cartItems ? (
        <div className="/">Cart is Empty</div>
      ) : (
        <>
          <h2>My Cart</h2>
          {/* //LIST */}
          <div className={styles.wrapper}>
            {/* ITEM */}
            <div className={styles.card}>
              <Image className={styles.product} src="https://images.pexels.com/photos/13726800/pexels-photo-13726800.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={80} height={110} />
              <div className={styles.content}>
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className={styles.title}>
                    <h3>Product Name</h3>
                    <p>AED 21</p>
                  </div>
                  {/* DESC */}
                  <div>
                    Available
                  </div>
                </div>
                {/* BOTTOM */}
                <div className={styles.bottom}>
                  <span>Qty. 2</span>
                  <span>Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className={styles.card}>
              <Image className={styles.product} src="https://images.pexels.com/photos/13726800/pexels-photo-13726800.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={80} height={110} />
              <div className={styles.content}>
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className={styles.title}>
                    <h3>Product Name</h3>
                    <p>AED 21</p>
                  </div>
                  {/* DESC */}
                  <div>
                    Available
                  </div>
                </div>
                {/* BOTTOM */}
                <div className={styles.bottom}>
                  <span>Qty. 2</span>
                  <span>Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className={styles.bottomCard}>
            <div className={styles.subtotal}>
              <h3>Subtotal</h3>
              <span>AED 21</span>
            </div>
            <p>Discounts and delivery calculated at checkout.</p>
            <div className={styles.buttons}>
              <button className={styles.viewCart}>View Cart</button>
              <button className={styles.checkOut}>Check Out</button>
            </div>
          </div>
        </>
      )} 
    </div>
  );
};
  
export default CartModal