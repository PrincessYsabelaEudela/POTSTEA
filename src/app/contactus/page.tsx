import styles from "./page.module.css";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className=''>

        {/* BANNER */}

        <div className={styles.banner} style={{
        backgroundImage: "url(/banner01.png)" , 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
          <div>
            <h1>CONTACT US</h1>
          </div>
        </div>


        <div className={styles.contact} style={{backgroundImage: "url(/contactusbg.png"}}>
        <div className={styles.contactContent}>
          <div className={styles.contactText}>
            <p><b>Location: </b>
              Abdullah Abdul Rasool Bldg, <br/>Shop #3 - behind NMC - Al Nahda 2 - Dubai
            </p>
            <p><b>Whatsapp: </b> +971 12 345 6789</p>
            <p><b>Email: </b> pottea.dxb@gmail.com</p>
            <p>
              <b>Opening Hours:</b> <br/>
              Sunday - Thursday | 9 - 10 PM<br/>
              Friday - Saturday | 9 - 12 AM
            </p>
            <div className={styles.icons}>
              <Image width={512} height={1} src="/instagramdark.png" alt="Instagram" className={styles.icon}/>
              <Image width={512} height={1} src="/facebookdark.png" alt="Facebook" className={styles.icon}/>
              <Image width={512} height={1} src="/whatsappdark.png" alt="Whatsapp" className={styles.icon}/>
            </div>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4246304117555!2d55.36723937538474!3d25.289933677651348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d204ee52c29%3A0xc2d7bffa21926a23!2sPots%20%26%20Tea%20Boardgame%20Cafe%20Restaurant!5e0!3m2!1sen!2sae!4v1748204091324!5m2!1sen!2sae" width="450" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={styles.map}></iframe>
        </div>

      </div>

    </div>
  )
}

export default ContactPage