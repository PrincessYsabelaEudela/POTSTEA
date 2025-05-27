import styles from "./page.module.css";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import MenuList from "@/components/MenuList";
import { wixClientServer } from "@/lib/wixClientServer";

export const dynamic = "force-dynamic";

const MenuPage = async () =>  {
    return (
      <div>

        {/* BANNER */}

        <div className={styles.banner} style={{
        backgroundImage: "url(/banner01.png)" , 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
          <div>
            <h1>MENU</h1>
          </div>
        </div>

        <div className={styles.wrapper}>

          <div className={styles.sidebar}>
            <Sidebar/>

          </div>
          <div className={styles.menu}>
            <MenuList/>
          </div>

        </div>


      </div>
    )
  }
  
export default MenuPage

// 00000000-000000-000000-000000000001