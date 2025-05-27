// "use client"

import styles from "./page.module.css";
import Image from "next/image";
import CategoryList from "@/components/CategoryList";
import Link from "next/link";
// import { useContext, useEffect } from "react";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";

const HomePage = async () => {

  return (
    <div>
      {/* HERO */}

      <div className={styles.hero}>
        <Image className={styles.img} alt="" width={1600} height={1} src="/banner.png" />

        <div className={styles.heroContent}>
          <Image className={styles.logo} alt="" width={1} height={1} src="/logo.svg" />
          <h1>POTS & TEA</h1>
          <h2>Boardgames  •  Library  •  Community Café  •  Restaurant</h2>
        </div>
      </div>

      {/* ABOUT US */}

      <div className={styles.ourStory}>
        <Image className={styles.halfImg} src="/ourstory.png" width={720} height={1} alt=""/>

        <div>
          <h1>OUR STORY</h1>
          <p>
            The brand name originated from a celebration of life, particularly during Maria's birthday in March 2023, while Maria was still employed, Traditionally, their daughter would plan something special every year to honor her mother's birthday, a wish she held dear during the years her mother worked overseas.</p>
          <Link href={`/about`}>
            <button>About Us</button>
          </Link>
        </div>
      </div>

    

      {/*  MENU CATEGORY */}

      <div className={styles.menuCategory}>

        <h1>WHAT WE HAVE</h1>

        <Suspense fallback={"loading"}>

          <CategoryList limit={4}/>

        </Suspense>

        <Link href="/menu?cat=test">
          <button>View More</button> 
        </Link>

      </div>

      {/* TEA LEAVES */}


      <div className={styles.tea} 
      style={{
        backgroundImage: "url(/tealeavesbg.png)" , 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
        <h1>SPECIALTY LOOSE <br/> TEA LEAVES</h1>

        <div className={styles.teaContent}>
          <p>
            Live a health-tea life! Sip a cup of our variety of healthful tea options specially curated for a sophisticated palate
          </p>

          <Image className={styles.teaImg} src="/tea leaves.png" width={720} height={1} alt=""/>

          <p>
            Explore our premium selection of health-boosting teas, crafted for those who crave both flavor and wellness. Shop now and elevate your tea experience!
          </p>
          
        </div>

        <Link href={`/shop`}>
          <button>Browse Shop</button>
        </Link>

        

      </div>

      {/* BANNER */}

      <div className={styles.banner} style={{
        backgroundImage: "url(/banner01.png)" , 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
        <div>
          <h1>Let the good things grow</h1>
        </div>
      </div>

      {/* BOARDGAMES */}

      <div className={styles.boardgames}>

        <div className={styles.boardgamesContent}>
          <h1>BOARDGAMES</h1>
          <p>
            At Pots & Tea, the joy of connection goes beyond just food and drinks—our dedicated boardgames corner invites friends, families, and solo guests to unwind and engage in friendly competition or collaborative play. 
          </p>
          <button>View List</button>

        </div>

        <Image className={styles.halfImg} src="/boardgames.png" width={720} height={1} alt=""/>
      </div>

      {/* SERVICES */}

      <div className={styles.services}>
        <h1>OUR SERVICES</h1>

        <div className={styles.servicesContainer}>
          <div className={styles.servicesCard}>
            <Image className={styles.servicesImg} alt="" width={300} height={250} src="/intimategathering.png" />
            <h1>Intimate Gathering</h1>
          </div>
          <div className={styles.servicesCard}>
            <Image className={styles.servicesImg} alt="" width={300} height={250} src="/meetings.png" />
            <h1>Meetings</h1>
          </div>
          <div className={styles.servicesCard}>
            <Image className={styles.servicesImg} alt="" width={300} height={250} src="/reunions.png" />
            <h1>Reunions</h1>
          </div>
          <div className={styles.servicesCard}>
            <Image className={styles.servicesImg} alt="" width={300} height={250} src="/popup.png" />
            <h1>Pup-Up Booths</h1>
          </div>
          <div className={styles.servicesCard}>
            <Image className={styles.servicesImg} alt="" width={300} height={250} src="/birthdays.png" />
            <h1>Birthday Parties</h1>
          </div>
          <div className={styles.servicesCard}>
            <Image className={styles.servicesImg} alt="" width={300} height={250} src="/corporateevents.png" />
            <h1>Corporate Events</h1>
          </div>
          <div className={styles.servicesCard}>
            <Image className={styles.servicesImg} alt="" width={300} height={215} src="/privateevents.png" />
            <h1>Private Events</h1>
          </div>
        </div>
        <button>View Services</button>
      </div>

      {/* CONTACT US */}

      <div className={styles.contact} style={{backgroundImage: "url(/contactusbg.png"}}>
        <div className={styles.contactContent}>
          <div className={styles.contactText}>
            <h1>Contact Us</h1>
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

export default HomePage