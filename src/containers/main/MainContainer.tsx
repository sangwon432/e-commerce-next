import ProductCard from "@/components/card/product/ProductCard";
import { useRouter } from "next/router";
import React from "react";

const MainContainer = () => {
  const router = useRouter();

  const products = [
    {
      productCode: 1,
      img: "",
      name: "시계",
      rating: 4,
      price: 5,
      description: "Good",
    },
    {
      productCode: 2,
      img: "",
      name: "가방",
      rating: 3,
      price: 2,
      description: "Good",
    },
    {
      productCode: 3,
      img: "",
      name: "옷",
      rating: 3,
      price: 1,
      description: "Good",
    },
    {
      productCode: 4,
      img: "",
      name: "바지",
      rating: 5,
      price: 3,
    },
  ];

  const handleProductCardClick = (productCode: number) => {
    router.push({
      pathname: "/product",
      query: {
        productCode: productCode,
      },
    });
  };

  return (
    <div>
      MainContainer
      {products.map((product) => (
        <div
          key={`product-${product.productCode}`}
          onClick={() => handleProductCardClick(product.productCode)}
        >
          <ProductCard
            img={product.img}
            name={product.name}
            rating={product.rating}
            price={product.price}
            description={product.description}
          />
        </div>
      ))}
    </div>
  );
};

export default MainContainer;
