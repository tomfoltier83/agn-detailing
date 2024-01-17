import React from "react";
import styles from "./Gallery.module.css";
import Footer from "../Footer/Footer";
import Image from "next/image";
import logo from "../../../public/images/logoWhiteWithoutBackground.png"
import Link from "next/link";

//TODO: change images showing system

export default function Gallery() {
  let images = [];

  for (let i = 1; i <= 27; i++) {
    images.push(
        <div
          key={i}
          style={{ backgroundImage: `url(/images/gallery/image${i}.jpg)` }}
          className={styles.galleryImage}
        ></div>
    );
  }
  return (
    <div className={styles.gallery}>
      <h1>Les réalisations by</h1>
      <Image src={logo} alt={""} className={styles.logo}/>
      <div className={styles.images}>{images}</div>
      <div className={styles.goBack}>
          <Link href="/">Retour</Link>
        </div>
      <Footer/>
    </div>
  );
}
