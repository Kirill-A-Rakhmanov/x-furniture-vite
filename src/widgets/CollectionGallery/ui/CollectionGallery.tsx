import React from "react";

import styles from "./CollectionGallery.module.scss";
import { CollectionPopup } from "@/widgets/widgets";
import { useAppSelector } from "@/app/store/hooks";
import { selectCollection, tCollection } from "@/entities/entities";

export const CollectionGallery = () => {
  const { items } = useAppSelector(selectCollection);
  const [activeCollection, setActiveCollection] = React.useState<
    tCollection | undefined
  >();
  const [randomIndex, setRandomIndex] = React.useState(0);

  const handleClick = (collection: tCollection) => {
    setActiveCollection(collection);
  };

  const clearCollection = () => {
    setActiveCollection(undefined);
  };

  React.useEffect(() => {
    const randomIntFromInterval = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    setRandomIndex(randomIntFromInterval(0, 6));
  }, []);

  return (
    <>
      <div className={styles.gallery}>
        {items.slice(randomIndex, randomIndex + 6).map((obj, index: number) => (
          <button
            onClick={() => handleClick(obj)}
            key={index}
            className={styles.image}
          >
            <img src={obj.image} alt={obj.collection} />
          </button>
        ))}
      </div>
      <CollectionPopup
        actionOnClose={clearCollection}
        collection={activeCollection!}
      />
    </>
  );
};
