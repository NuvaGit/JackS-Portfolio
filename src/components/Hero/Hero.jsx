import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Jack Neilan</h1>
        <p className={styles.description}>
          I'm a University student set to graduate in 2025 looking for work in the FinTech Space
        </p>
        <a href="mailto:jackneilan02@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl("hero/View recent photos.jpeg")} // You'll need to add this image to your assets folder
          alt="Jack Neilan on a coastal path"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};