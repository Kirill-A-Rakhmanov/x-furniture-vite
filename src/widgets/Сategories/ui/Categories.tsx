import React from "react";

import styles from "./Categories.module.scss";
import clsx from "clsx";

const categories = [
  { title: "All", value: "", id: 0 },
  { title: "Bedroom", value: "bedroom", id: 1 },
  { title: "Living room", value: "living room", id: 2 },
  { title: "Kitchen", value: "kitchen", id: 3 },
];

export const Categories = () => {
  const [categoryId, setCategoryId] = React.useState(0);

  const choseCategory = (index: number) => {
    setCategoryId(index);
  };

  React.useEffect(() => {}, []);

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((obj, index) => (
          <li
            key={index}
            onClick={() => choseCategory(index)}
            className={clsx(obj.id === categoryId && styles.active)}
          >
            {obj.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
