import React from "react";
import styles from "./MainVideo.module.css";
import Logo from "../../../public/images/logoWhiteWithoutBackground.png";
import Image from "next/image";

//TODO ajouter point forts: 5ans d'expérience/ +200 véhicules nettoyés/ 100% clients satisfaits

const MainVideo = () => {

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, section: string) => {
    e.preventDefault(); 
    const contactSection = document.getElementById(section);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoContent}>
        <div className={styles.videoOverlay}></div>
        <div className={styles.contentOverlay}>
          <Image className={styles.logo} src={Logo} alt={""} />
          <div className={styles.textOverlay}>
            <h1>Bienvenue</h1>
            <p>Redonnez à votre véhicule <b>l'éclat du premier jour</b> grâce à <b>l'expertise</b> et <b>la passion</b> de nos professionnels du <b>detailing</b>.</p>
          </div>
          <div className={styles.buttonsOverlay}>
            <a href="#prestations" onClick={(e) => scrollToSection(e, "prestations")}><span>Découvrez nos prestations</span></a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}><span>Prendre un rdv <i className="fa-regular fa-calendar"></i></span></a>
          </div>
        </div>
        <video playsInline autoPlay loop muted preload="true">
          <source src="/videos/main.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MainVideo;
