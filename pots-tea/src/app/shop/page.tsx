import ProductList from "@/components/ProductList";
import styles from "./page.module.css";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

const ShopPage = () => {
    return (
      <div>

        {/* BANNER */}

        <div className={styles.banner} style={{
        backgroundImage: "url(/banner01.png)" , 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
          <div>
            <h1>SHOP</h1>
          </div>
        </div>


        <div className={styles.wrapper}>
          <ProductList categoryId={process.env.SHOP_CATEGORY_ID!}/>
        </div>

      </div>
    )
  }
  
export default ShopPage