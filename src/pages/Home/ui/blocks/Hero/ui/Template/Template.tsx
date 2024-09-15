import React from "react";

import styles from "./Template.module.scss";
import { Link } from "react-router-dom";
import { queryParams } from "@/entities/entities";
import qs from "query-string";
import clsx from "clsx";

type tProps = {
  collection: string;
  img: string;
  alt: string;
  header: string;
  size?: string;
};

const Template: React.FC<tProps> = ({ img, alt, header, size, collection }) => {
  const params: queryParams = {
    collection,
  };

  const queryParams = qs.stringify(params);

  return (
    <Link
      to={`/catalog?${queryParams}`}
      className={clsx(styles.template, size && styles[size])}
    >
      <img className={styles.cover} src={img} alt={alt} />
      <h2 className={styles.title}>{header}</h2>
    </Link>
  );
};

export default Template;
