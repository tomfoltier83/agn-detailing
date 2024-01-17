import React from "react";
import styles from "./Realisations.module.css";
import coffre1 from "../../../public/images/beforeAfter/coffre1.jpg";
import coffre2 from "../../../public/images/beforeAfter/coffre2.jpg";
import inter1 from "../../../public/images/beforeAfter/inter1.jpg";
import inter2 from "../../../public/images/beforeAfter/inter2.jpg";
import jante1 from "../../../public/images/beforeAfter/jante1.jpg";
import jante2 from "../../../public/images/beforeAfter/jante2.jpg";
import moteur1 from "../../../public/images/beforeAfter/moteur1.jpg";
import moteur2 from "../../../public/images/beforeAfter/moteur2.jpg";
import phare1 from "../../../public/images/beforeAfter/phare1.jpg";
import phare2 from "../../../public/images/beforeAfter/phare2.jpg";
import volant1 from "../../../public/images/beforeAfter/volant1.jpg";
import volant2 from "../../../public/images/beforeAfter/volant2.jpg";
import ImageSwitch from "./ImageSwitch";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function Realisations() {
  const beforeAfterImages = [
    { before: inter1, after: inter2 },
    { before: jante1, after: jante2 },
    { before: coffre1, after: coffre2 },
    { before: moteur1, after: moteur2 },
    { before: phare1, after: phare2 },
    { before: volant1, after: volant2 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3 style={{ backgroundColor: "#601E1E" }}>Quelques réalisations</h3>
        </div>
        <ul className={styles.beforeAfterList}>
          {beforeAfterImages.map((images, index) => {
            return <ImageSwitch images={images} key={index}/>;
          })}
        </ul>
        <div className={styles.seeMore}>
          <a href="gallery">Voir plus...</a>
        </div>
      </div>
      <div className={styles.waveSeparator}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 1" preserveAspectRatio="none"><path d="M0 0h10L5 1z" fill="#601e1e"></path></svg>
      </div>
    </div>
  );
}

export default Realisations;
