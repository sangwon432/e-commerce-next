import { useRouter } from "next/router";
import React from "react";

const ProductContainer = () => {
  const router = useRouter();

  const { productCode } = router.query;

  // productCode 를 바탕으로

  return <div>{productCode}</div>;
};

export default ProductContainer;
