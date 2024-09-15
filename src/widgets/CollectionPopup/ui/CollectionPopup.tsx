import React from "react";

import styles from "./CollectionPopup.module.scss";
import { tCollection } from "@/entities/entities";
import CloseIcon from "@/assets/icons/close.svg";
import { CollectionCard } from "@/widgets/widgets";

type tProps = {
  collection: tCollection;
  actionOnClose: () => void;
};

export const CollectionPopup = ({ collection, actionOnClose }: tProps) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (!e.composedPath().includes(containerRef.current) && collection) {
  //       closePopup();
  //       console.log("close");
  //     }
  //   };
  //   document.body.addEventListener("click", handleClickOutside);
  //   return () => document.body.removeEventListener("click", handleClickOutside);
  // }, []);

  React.useEffect(() => {
    if (!collection) return;

    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";

    dialogRef.current.addEventListener("close", closePopup);

    return () => {
      closePopup();
      dialogRef.current?.removeEventListener("close", closePopup);
    };
  }, [collection]);

  const closePopup = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
    actionOnClose();
  };

  return (
    <dialog ref={dialogRef} className={styles.backdrop}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.top}>
          <div className={styles.header}>
            More ideas and inspiration from your great value furniture store
          </div>
          <CloseIcon onClick={() => closePopup()} className={styles.close} />
        </div>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={collection?.image} alt={collection?.collection} />
          </div>
          <div className={styles.list}>
            {collection?.items.map((article, index) => (
              <CollectionCard key={index} article={article} />
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
};
