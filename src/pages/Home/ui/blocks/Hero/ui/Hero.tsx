// import React from "react";

import bedroomImg from "@/assets/img/01 hero/bedroom.png";
import kitchenImg from "@/assets/img/01 hero/kitchen.png";
import livingroomImg from "@/assets/img/01 hero/living room.png";
import electronicsImg from "@/assets/img/01 hero/electronics.jpg";

import styles from "./Hero.module.scss";
import Template from "./Template/Template";
import { Container } from "@/shared/shared";

export const Hero = () => {
  const templates = [
    {
      collection: "living room",
      img: livingroomImg,
      alt: "living room image",
      header: "Live Comfortably",
      size: "x4",
    },
    {
      collection: "bedroom",
      img: bedroomImg,
      alt: "bedroom image",
      header: "Bedroom",
      size: "x2",
    },
    {
      collection: "kitchen",
      img: kitchenImg,
      alt: "kitchen image",
      header: "Kitchen",
      size: "x1",
    },
    {
      collection: "electronics",
      img: electronicsImg,
      alt: "electronics image",
      header: "Electronics",
    },
  ];

  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          {templates.map((obj, index) => (
            <Template
              key={index}
              collection={obj.collection}
              img={obj.img}
              alt={obj.alt}
              header={obj.header}
              size={obj.size}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
