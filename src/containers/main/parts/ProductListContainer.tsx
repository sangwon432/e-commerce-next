import React from "react";
import ProductCard from "@/components/card/product/ProductCard";

type TProduct = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  stock: number;
  createdAt: string;
};

const ProductListContainer: React.FC = () => {
  const dummyProductList: TProduct[] = [
    {
      id: "product_001",
      name: "멋진 티셔츠",
      price: 25000,
      description:
        "편안하고 스타일리시한 기본 티셔츠입니다. 어떤 옷에도 잘 어울립니다.",
      category: "의류",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 50,
      createdAt: "2025-05-01T10:00:00Z",
    },
    {
      id: "product_002",
      name: "무선 블루투스 이어폰",
      price: 79000,
      description:
        "고음질 사운드와 편안한 착용감을 제공하는 최신 무선 이어폰입니다.",
      category: "전자기기",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 30,
      createdAt: "2025-05-02T11:30:00Z",
    },
    // …the rest of your items…
    {
      id: "product_015",
      name: "모던 디자인 스탠드 조명",
      price: 68000,
      description:
        "어떤 공간에도 잘 어울리는 심플하고 모던한 디자인의 스탠드 조명입니다.",
      category: "가구/인테리어",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 12,
      createdAt: "2025-05-04T20:30:00Z",
    },
  ];

  return (
    <>
      {dummyProductList.map((product) => (
        <ProductCard
          key={product.id}
          img={product.imageUrl}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </>
  );
};

export default ProductListContainer;
