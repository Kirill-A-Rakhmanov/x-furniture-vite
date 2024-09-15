import React from "react";

// import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";
import { Trending } from "@/pages/pages";
import { ProductBlock } from "./blocks/blocks";
import { useAppDispatch } from "@/app/store/hooks";
import { clearItemData, fetchItemData } from "@/entities/entities";

export const Product = () => {
  const dispatch = useAppDispatch();
  const { article } = useParams();

  React.useEffect(() => {
    dispatch(fetchItemData(article));
    return () => {
      dispatch(clearItemData());
    };
  }, [article]);

  return (
    <>
      <ProductBlock article={article} />
      <Trending />
    </>
  );
};
