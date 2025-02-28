import React, { useState } from "react";
import styles from "./Contact.module.css";
import { sendContactForm } from "../lib/api";

type StateType = {
  values: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  isLoading: boolean;
  error: string | null;
};

const initValues = {
  name: "tom",
  email: "tom",
  subject: "efg",
  message: "erd",
};

const initState = { values: initValues, error: null, isLoading: false };

export default function Contact() {
  const [state, setState] = useState<StateType>(initState);
  const { values, error } = state;
  const onSubmit = async (e: any) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error: unknown) {
      let errorMessage = "An unknown error occurred";

      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subTitle} id="contact">
        <h1>Besoin d'un devis personnalisé ?</h1>
        <h3>D'un rendez-vous ?</h3>
        <p>
          Appelez-nous ou laissez-nous un message, notre équipe se chargera de
          votre demande dans les plus brefs délais.
        </p>
        {/* <h3>Ou besoin d'informations supplémentaires ?</h3>
        <p>
          Contactez-nous ci-dessous, notre équipe se chargera de votre demande
          dans les plus brefs délais.
        </p> */}
      </div>
      <div className={styles.title}>
        <h2>- 06 22 95 44 07 -</h2>
      </div>
      <div className={styles.content}>
        <p>{error}</p>
        {/* <form
          action=""
          className={styles.contactForm}
          onSubmit={(e) => onSubmit(e)}
          method="POST"
        >
          <div className={styles.formField}>
            <label htmlFor="">Nom</label>
            <input type="text" name="" id="" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="">Numéro de téléphone</label>
            <input type="tel" name="" id="" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="">Je souhaite être recontacté par :</label>
            <ul>
              <li>
                <input
                  type="radio"
                  value="Téléphone"
                  name="contactePreference"
                />
                <label>Téléphone</label>
              </li>
              <li>
                <input type="radio" value="Mail" name="contactePreference" />
                <label>Mail</label>
              </li>
            </ul>
          </div>
          <div className={styles.formField}>
            <label htmlFor="">Formulez votre demande</label>
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </div>
          <div className={styles.formField}>
            <input type="submit" value="Envoyer" />
          </div>
        </form> */}
        <div className={styles.contactMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.4272068312075!2d6.615395176541553!3d43.326248773515374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ceb85428d002cb%3A0xfc4676186774cadf!2s164%20Rte%20du%20Plan%20de%20la%20Tour!5e0!3m2!1sen!2sfr!4v1709243820091!5m2!1sen!2sfr"
            style={{
              border: 0,
              borderRadius: "10px",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
