import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import applePay from "../../../public/images/applepay.svg";
import masterCard from "../../../public/images/mastercard.svg";
import visa from "../../../public/images/visa.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerMenu}>
        <li>
          <a href="gallery">Nos réalisations</a>
        </li>
        <li>
          <a href="comingSoon">Nos produits</a>
        </li>
        <li>
          <a href="comingSoon">Mentions légales</a>
        </li>
      </ul>
      <p>©2024, AGN Detailing</p>
      <ul className={styles.paymentMethods}>
        <li>
          <Image src={applePay} alt={""} />
        </li>
        <li>
          <Image src={masterCard} alt={""} />
        </li>
        <li>
          <Image src={visa} alt={""} />
        </li>
      </ul>
      <h5>
        Website created by <a href="https://techpulse-dev.com/">TechPulse</a>
      </h5>
    </footer>
  );
}
