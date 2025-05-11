import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  const handleClothClick = () => {
    router.push({ pathname: "/cloth", query: { category: "bag" } });
  };

  return (
    <div>
      <Link href="/best">Best 100</Link>
      <div onClick={handleClothClick}>Cloth</div>
    </div>
  );
};

export default Header;
