import React from "react";
import styles from "./ImagesWithShadow.module.css";
import Image from "next/image";
import products from "../../../public/images/products.png";
import garage from "../../../public/images/garage.png";
import redCar from "../../../public/images/redCar.png";

export default function ImagesWithShadow() {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageContent}>
        <Image src={redCar} alt={""} />
        <h3>Rapidité et efficacité</h3>
      </div>
      <div className={styles.imageContent}>
        <Image src={garage} alt={""} />
        <h3>A domicile ou dans nos locaux</h3>
      </div>
      <div className={styles.imageContent}>
        <Image src={products} alt={""} />
        <h3>Produits de qualité professionelle</h3>
      </div>
    </div>
  );
}
