import React from "react";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <p>Fermeture exceptionelle du <b>28/12/2024</b> au <b>01/01/2025</b> (inclus). </p>
      <p>A.G.N Detailing vous souhaite de <b>bonnes fêtes de fin d'année</b> !</p>
    </div>
  );
}
