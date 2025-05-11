import React from "react";

type TProductCardProps = {
  img: string;
  name: string;
  rating?: number;
  price: number;
  description?: string;
};

const ProductCard = ({
  img,
  name,
  rating,
  price,
  description,
}: TProductCardProps) => {
  return (
    <section className="product-wrapper">
      <div className="product-img">
        <img src={img} />
      </div>
      <div className="product-content">
        <div>{name}</div>
        <div>{rating}</div>
        <div>{price}</div>
        <div>{description}</div>
      </div>
    </section>
  );
};

export default ProductCard;
