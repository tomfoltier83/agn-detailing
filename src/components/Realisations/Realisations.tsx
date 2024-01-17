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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#601E1E"
            fill-opacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,213.3C384,213,480,203,576,176C672,149,768,107,864,85.3C960,64,1056,64,1152,90.7C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Realisations;
