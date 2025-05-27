"use client";

import { useRef } from "react";
import styles from "./Gallery.module.css";
import Link from "next/link";


const Gallery = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.gallery}>
      <h1>Our Gallery</h1>

      <div className={styles.gallerywrapper}>
        <button onClick={() => scroll(-300)} className={styles.prevarrow}>
          ❮
        </button>

        <div className={styles.galimages} ref={containerRef}>
          <div className={styles.imagegroup}>
            {[...Array(16)].map((_, index) => (
              <img key={index} src={`Images/img${index + 1}.png`} alt="gallery image" />
            ))}
          </div>
        </div>

        <button onClick={() => scroll(300)} className={styles.nextarrow}>
          ❯
        </button>
      </div>

        <Link href={"/gallery"} className={styles.view}>
            <button >View Gallery</button>
        </Link>
    </section>
  );
};

export default Gallery;
