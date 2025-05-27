import styles from "./page.module.css";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <div className=''>

        {/* BANNER */}

        <div className={styles.banner} style={{
        backgroundImage: "url(/banner01.png)" , 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
          <div>
            <h1>GALLERY</h1>
          </div>
        </div>

        <section id="headerpots" className={styles.headerpots}>
        <div id="desc" className={styles.desc}>
            <h2>Pots & Tea</h2>
            <h4>Boardgames - Library - Café  -Restaurant</h4>
            
            <p>Our gallery offers a glimpse into the heart of our establishment, showcasing our gourmet dishes served in pots, healthy teas, specialty coffees, and the inviting ambiance that makes every visit special. Each photo reflects our commitment to quality and the warm, family-friendly atmosphere we cherish. Explore our visual journey and experience the essence of Pots & Tea.</p>
        </div>
        </section>

        <nav className={styles.navgal}>
            <a href="#" data-target="catering">Catering</a>
            <a href="#" data-target="food">Food</a>
            <a href="#" data-target="staff">Staff</a>
            <a href="#" data-target="popup">Pop-Up Booths</a>
        </nav>


        <section className={styles.gallerybody}>
        
      
        <div className={styles.gallerygroup} data-section="catering">
            <h1>Catering Gallery</h1>

            <div className={styles.gallerysection}>
                <img src="https://placehold.co/235x236" alt="Catering 1"/>
                <img src="Images/GG.png" alt="Catering 2"/>
                <img src="https://placehold.co/235x236" alt="Catering 2"/>
                <img src="GG.png" alt="Catering 2"/>
                <img src="https://placehold.co/235x236" alt="Catering 1"/>
                <img src="GG.png" alt="Catering 2"/>
                <img src="https://placehold.co/235x236" alt="Catering 2"/>
                <img src="https://placehold.co/235x236" alt="Catering 2"/>
                <img src="GG.png" alt="Catering 2"/>
            
            </div>
        </div>

        <div className={styles.gallerygroup} data-section="food">
        <h1>Food Gallery</h1>
        <div className={styles.gallerysection} >
            <img src="GG.png" alt="Catering 2"/>
            <img src="https://placehold.co/235x236" alt="Catering 2"/>
            <img src="GG.png" alt="Catering 2"/>
            <img src="https://placehold.co/235x236" alt="Catering 2"/>
            <img src="https://placehold.co/235x236" alt="Catering 2"/>
        </div>
    </div>
      
        <div className={styles.gallerygroup} data-section="staff">
        <h1>Staff Gallery</h1>
        <div className={styles.gallerysection}>
          <img src="https://placehold.co/235x236" alt="Staff 1"/>
          <img src="Images/img6.jpg" alt="Staff 2"/>
          <img src="img5.jpg" alt="Staff 3"/>
          <img src="https://placehold.co/235x236" alt="Staff 4"/>
          <img src="Images/img5.jpg" alt="Staff 5"/>
          <img src="Images/img6.jpg" alt="Staff 6"/>
          <img src="Images/img6.jpg" alt="Staff 6"/>
        </div>
    </div>
      
        <div className={styles.gallerygroup} data-section="popup">
        <h1>Popup Booth Gallery</h1>
        <div className={styles.gallerysection} >
          <img src="img7.jpg" alt="Popup Booth 1"/>
          <img src="https://placehold.co/235x236" alt="Popup Booth 2"/>
          <img src="img7.jpg" alt="Popup Booth 3"/>
          <img src="img8.jpg" alt="Popup Booth 4"/>
          <img src="https://placehold.co/235x236" alt="Popup Booth 5"/>
          <img src="img8.jpg" alt="Popup Booth 6"/>
        </div>
    </div>

        {/* <!-- The Modal --> */}
        <div id="myModal" className={styles.modal}>
            <span className={styles.close}>&times;</span>
            <img className={styles.modalcontent} id="img01"/>
            <div id="caption" className={styles.caption}></div>
          </div>
        
    </section>


    </div>
  )
}

export default GalleryPage