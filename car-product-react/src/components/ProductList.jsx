import ProductItem from "./ProductItem";
import React from "react";

const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
  return (
    <>
      {products.map((item) => {
        return <ProductItem key={item.id} nama={item.nama} deskripsi={item.deskripsi} imageURL={item.imageURL} id={item.id} onDeleteProduct={onDeleteProduct} onEditProduct={onEditProduct} />;
      })}
    </>
  );
};

export default ProductList;
