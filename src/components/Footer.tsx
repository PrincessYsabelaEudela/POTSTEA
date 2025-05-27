import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
      <div>


        <div className={styles.footer}>

          <div className={styles.bottom}>
            <a href="">
              <img src="/officiallogo.svg" alt="Logo" className={styles.logo}/>
            </a>

            <div className={styles.location}>
              <h1>Location</h1>
              <p>Abdullah Abdul Rasool Bldg,<br/> Shop #3 - behind NMC - <br/>Al Nahda 2 - Dubai</p><br/>
              <h1>Contact Info</h1>
              <p>Whatsapp: +971 12 345 6789</p>
              <p>Email: pottea.dxb@gmail.com</p>
            </div>

            <div className={styles.hours}>
              <h1>Opening Hours</h1>
              <p>Sunday - Thursday <br/> 9 - 10 PM</p>
              <p>Friday - Saturday <br/> 9 - 12 AM</p>
            
              <div className={styles.icons}>
                <a href=""><img src="instagramlight.png" alt="Instagram" /></a>
                <a href=""><img src="facebooklight.png" alt="Facebook" /></a>
                <a href=""><img src="whatsapplight.png" alt="Whatsapp" /></a>
              </div>
            </div>

            

            <div className={styles.pages}>
              <h1>Pages</h1>
              <p>Home</p>
              <p>About</p>
              <p>Menu</p>
              <p>Services</p>
              <p>Contact Us</p>
              
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2023 by Pots & Tea Boardgame Cafe and Restaurant</p>
        </div>

      </div>
    )
  }
  
export default Footer