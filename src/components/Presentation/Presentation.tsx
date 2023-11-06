import React from "react";
import styles from "./Presentation.module.css";
import Image from "next/image";
import fullGarage from "../../../public/images/fullGarage.png";
import Contact from "../Contact/Contact";

export default function Presentation() {
  return (
    <div className={styles.container}>
      <div className={styles.separator}>
        <svg
          viewBox="0 0 1000 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M500 50L1067.25 102.5H-67.2466L500 50Z"
            fill="#601E1E"
          ></path>
          <path
            opacity="0.15"
            d="M1011 2.70583L500 50.0001L-12 2.61328V105H1011V2.70583Z"
            fill="#601E1E"
          ></path>
          <path
            opacity="0.3"
            d="M-13 50H1010V105H-13V50Z"
            fill="#601E1E"
          ></path>
        </svg>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3 style={{ backgroundColor: "#601E1E" }}>Qui sommes-nous ?</h3>
        </div>
        <div className={styles.presentation}>
          <div className={styles.leftContent}>
            <h2>Présentation</h2>
            <p>
              AGN detailing est né en Mars 2020 avec comme dirigeant Adrien
              Garabedian. Passionné d’automobiles, dynamique et pointilleux.
              Basé sur Sainte Maxime, nous pouvons nous déplacer à travers le
              Golfe de Saint-Tropez et ses alentours.
            </p>
            <p>
              Nous proposons nos services pour les particuliers comme pour les
              professionnels, en se déplaçant à domicile, sur vos lieux de
              travail ou directement dans nos locaux.
            </p>
            <p>
              Nous travaillons avec des produits professionnels que nous
              proposons aussi à la vente. Spécialisés dans le detailing, nous
              pouvons intervenir pour tout autre type de prestations : polish/
              rénovation phares/ rénovation des cuirs/ shampouinage sièges et
              moquettes/ ...
            </p>
            <p>
              Chez AGN detailing nous favorisons la rapidité, l'efficacité et la
              qualité.
            </p>
            <p>
              Que pouvons nous avoir comme meilleure sensation, que de rentrer
              dans sa voiture comme si c’était de nouveau la première fois ?{" "}
            </p>
            <p>
              C'est avec plaisir que nous redonnerons une beauté à votre
              véhicule !
            </p>
          </div>
          <div className={styles.rightContent}>
            <Image src={fullGarage} alt={""} />
          </div>
        </div>
        <svg
          viewBox="0 0 1000 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M1000 100V0L-40 100H1000Z" fill="#AC8F8F"></path>
        </svg>
        <div className={styles.prestations}>
          <div className={styles.title}>
            <h3 style={{ backgroundColor: "#ac8f8f" }}>Nos prestations</h3>
          </div>
          <ul className={styles.prestationsList}>
            <li>
              <h4>Intérieur</h4>
              <ul>
                <li>✔ Aspiration de l'habitacle.</li>
                <li>✔ Dépoussiérage complet.</li>
                <li>✔ Nettoyage vitres intérieur.</li>
                <li>✔ Nettoyage du pédalier.</li>
                <li>✔ Brillant plastique.</li>
              </ul>
              <p>
                à partir de <span>50€</span>
              </p>
            </li>
            <li>
              <h4>Extérieur</h4>
              <ul>
                <li>✔ Lavage carrosserie au gant.</li>
                <li>✔ Nettoyage des jantes.</li>
                <li>✔ Séchage à la microfibre.</li>
                <li>✔ Brillant pneu.</li>
              </ul>
              <p>
                à partir de <span>40€</span>
              </p>
            </li>
            <li>
              <h4>Complète</h4>
              <ul>
                <li>Intérieur + Extérieur</li>
              </ul>
              <p>
                à partir de <span>80€</span>
              </p>
            </li>
            <li>
              <h4>Prestations supplémentaires</h4>
              <ul>
                <li>
                  ○ <span>Décontamination</span> carrosserie.
                </li>
                <li>
                  ○ <span>Shampouinage</span> des sièges et moquettes.
                </li>
                <li>
                  ○ <span>Entretien et nettoyages</span> des cuirs.
                </li>
                <li>
                  ○ <span>Rénovation</span> optiques de phares.
                </li>
              </ul>
              <p style={{ fontStyle: "italic" }}>Tarifs sur devis.</p>
            </li>
          </ul>
        </div>
        <svg
          viewBox="0 0 1000 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            transform: "rotateZ(180deg)",
            position: "relative",
            bottom: "2px",
          }}
        >
          <path d="M1000 100V0L-40 100H1000Z" fill="#AC8F8F"></path>
        </svg>
        <div className={styles.contact}>
          <div className={styles.title}>
            <h3 style={{ backgroundColor: "#601E1E" }}>Contact</h3>
          </div>
          <Contact/>
        </div>
      </div>
    </div>
  );
}
