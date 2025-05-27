import styles from "./page.module.css";
import Gallery from "@/components/Gallery";


const AboutPage = () => {
  return (
    <div className=''>
        {/* BANNER */}

        <div className={styles.banner} style={{
        backgroundImage: "url(/banner01.png)" , 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
          <div>
            <h1>ABOUT</h1>
          </div>
        </div>

        <div className={styles.secpadding}>

            <section className={styles.part1}>
                <div className={styles.text}>
                    <h2>Where Flavor Meets Comfort</h2>
                    <p>Welcome to Pots & Tea, a cozy café in the heart of Al Nahda, Dubai, where great food, aromatic teas, and a warm ambiance come together to create the perfect escape from the hustle and bustle of the city. Whether you're looking for a quiet place to unwind, a gathering spot with friends, or simply a delightful meal, we invite you to experience the charm and comfort of our café.</p>
                </div>
                
                <div className={styles.textWimg}>
                    <img src="Images/storyimg.png" alt="Cafe Image"/>
                    <div className={styles.text2}>
                        <h2>Our Story</h2>
                        <p>At Pots & Tea, we believe that food is more than just nourishment—it's an experience that brings people together. Inspired by a love for heartwarming meals and quality tea, we set out to create a café that blends tradition with modern flavors. Our menu features a curated selection of comforting dishes, refreshing teas, and expertly brewed coffee, all crafted with care to satisfy every craving.</p>
                    </div>
                </div>

                <div className={styles.textWimg}>
                    <div className={styles.text2}>
                        <h2>What We Offer</h2>
                        <p>At Pots & Tea, we combine the best of a café, board game hub, and library, offering a unique space to relax and unwind. Our menu features a variety of options, from hearty breakfasts and fresh pastries to comforting soups, vibrant salads, and delicious main dishes. Enjoy our bubble teas, milkshakes, expertly brewed coffee, and aromatic teas as you dive into a game or a good book. We also offer catering services and pop-up booths for events, bringing the Pots & Tea experience wherever you go. Whether you're here to eat, play, or relax, we’ve got something for everyone.</p>
                    </div>
                    <img src="Images/offerimg.png" alt="offer"/>
                </div>
            </section>

        </div>

        {/* <!-------- Section 2 = Team --------> */}
            <section className={styles.part2}>
                <div className={styles.team}>
                    <h2>Meet Our Team</h2>
                    <img src="https://placehold.co/600x300/808080/FFF" alt="Placeholder Image"/>
                    <p>Behind every flavorful dish and perfectly brewed cup of tea is a passionate team dedicated to making your experience memorable. Our talented chefs bring creativity and expertise to every recipe, ensuring that each meal is crafted with care. Meanwhile, our friendly staff is always ready to welcome you with a warm smile, making sure you feel at home from the moment you step in.</p>
                </div>
            </section>

        {/* <!-------- Section 3 --------> */}
        <div className={styles.secpadding}>
            <section className={styles.savor}>
                <div className={styles.textWimg2}>
                    <img src="Images/potsntea logo.png" alt="Logo"/>
                    <div className={styles.text3}>
                        <h2>A Space to Savor &<br/>
                            <span className={styles.connect}>Connect</span>
                        </h2>
                        <p>Step inside Pots & Tea, and you'll find a space designed for relaxation and connection. Whether you’re catching up with loved ones, enjoying a peaceful solo moment, or finding inspiration while working, our café provides the perfect setting. With cozy interiors, welcoming staff, and a friendly atmosphere, we aim to make every visit feel like home.</p>
                    </div>
                </div>
            </section>

        </div >

            {/* <!-------- Section 4 - Gallery --------> */}
        <div className={styles.secpadding}>
            <Gallery />
        </div>
    </div>
  )
}

export default AboutPage