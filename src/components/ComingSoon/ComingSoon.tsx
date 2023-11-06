import React from 'react';
import styles from './ComingSoon.module.css';

export default function ComingSoon() {
  return (
    <div className={styles.comingSoon}>
      <h1 className={styles.headlin}>Bientôt disponible...</h1>
      <p className={styles.subTitle}>
        Cette page est en cours de construction et sera lancée prochainement.
      </p>
      <p className={styles.notice}>
        Revenez pour découvrir nos nouveautés !
      </p>
      <a href="/">Accueil</a>
    </div>
  );
}
