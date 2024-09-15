import React from "react";

import styles from "./Measurements.module.scss";
import { tMeasurements } from "@/entities/entities";
import ArrowIcon from "@/assets/icons/arrow-right.svg";
import clsx from "clsx";

type tProps = {
  measurements: tMeasurements;
};

export const Measurements = ({ measurements }: tProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={() => togglePopup()} className={styles.button}>
        <span className={styles.title}>Measurements</span>
        <ArrowIcon className={clsx(styles.icon, isOpen && styles.active)} />
      </button>
      <div className={clsx(styles.popup, isOpen && styles.active)}>
        <div className={styles.content}>
          <div className={styles.measurements}>
            {measurements.length && (
              <div className={styles.measurement}>
                Length:
                <span className={styles.number}> {measurements.length}</span>
              </div>
            )}
            {measurements.depth && (
              <div className={styles.measurement}>
                Depth:
                <span className={styles.number}> {measurements.depth}</span>
              </div>
            )}
            {measurements.height && (
              <div className={styles.measurement}>
                Heigth:
                <span className={styles.number}> {measurements.height}</span>
              </div>
            )}
            {measurements.width && (
              <div className={styles.measurement}>
                Width:
                <span className={styles.number}> {measurements.width}</span>
              </div>
            )}
          </div>
          <div className={styles.image}>
            <img src={measurements.image} alt="dimentions" />
          </div>
        </div>
      </div>
    </div>
  );
};
