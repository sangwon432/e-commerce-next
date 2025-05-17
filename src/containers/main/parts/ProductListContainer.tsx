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

const ProductListContainer = () => {
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
    {
      id: "product_003",
      name: "핸드드립 커피 원두",
      price: 18000,
      description:
        "풍부한 아로마와 깊은 맛을 자랑하는 스페셜티 커피 원두입니다.",
      category: "식품",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 100,
      createdAt: "2025-04-28T09:00:00Z",
    },
    {
      id: "product_004",
      name: "여행용 백팩",
      price: 120000,
      description:
        "가볍고 튼튼하며 수납 공간이 넉넉한 다용도 여행용 백팩입니다.",
      category: "가방/잡화",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 25,
      createdAt: "2025-05-05T14:15:00Z",
    },
    {
      id: "product_005",
      name: "데이터 과학 입문서",
      price: 32000,
      description:
        "초보자도 쉽게 따라 할 수 있는 친절한 데이터 과학 입문서입니다.",
      category: "도서",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 60,
      createdAt: "2025-04-20T16:00:00Z",
    },
    {
      id: "product_006",
      name: "스마트 워치",
      price: 250000,
      description:
        "건강 관리, 알림 확인 등 다양한 기능을 제공하는 스마트 워치입니다.",
      category: "전자기기",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 15,
      createdAt: "2025-05-10T10:30:00Z",
    },
    {
      id: "product_007",
      name: "유기농 샐러드 채소 믹스",
      price: 7500,
      description: "신선하고 건강한 유기농 채소로 구성된 샐러드 믹스입니다.",
      category: "식품",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 80,
      createdAt: "2025-05-15T08:00:00Z",
    },
    {
      id: "product_008",
      name: "무소음 무선 마우스",
      price: 22000,
      description:
        "조용한 환경에서도 사용하기 좋은 클릭 소음이 없는 무선 마우스입니다.",
      category: "전자기기",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 40,
      createdAt: "2025-04-25T13:20:00Z",
    },
    {
      id: "product_009",
      name: "아로마 디퓨저 세트",
      price: 35000,
      description:
        "은은한 향으로 공간을 채워주는 아로마 디퓨저와 오일 세트입니다.",
      category: "생활용품",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 33,
      createdAt: "2025-05-03T17:00:00Z",
    },
    {
      id: "product_010",
      name: "요가 매트",
      price: 45000,
      description: "미끄럼 방지 처리된 친환경 소재의 고품질 요가 매트입니다.",
      category: "스포츠용품",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 22,
      createdAt: "2025-05-08T11:00:00Z",
    },
    {
      id: "product_011",
      name: "빈티지 데님 자켓",
      price: 89000,
      description:
        "클래식한 디자인의 워싱 처리된 빈티지 스타일 데님 자켓입니다.",
      category: "의류",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 18,
      createdAt: "2025-04-22T15:45:00Z",
    },
    {
      id: "product_012",
      name: "휴대용 보조 배터리 10000mAh",
      price: 28000,
      description:
        "스마트폰 및 다양한 기기를 충전할 수 있는 대용량 보조 배터리입니다.",
      category: "전자기기",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 70,
      createdAt: "2025-05-12T09:20:00Z",
    },
    {
      id: "product_013",
      name: "수제 과일청 세트",
      price: 30000,
      description:
        "다양한 과일로 직접 만든 건강하고 맛있는 수제 과일청 3종 세트입니다.",
      category: "식품",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 28,
      createdAt: "2025-05-07T12:00:00Z",
    },
    {
      id: "product_014",
      name: "가죽 카드 지갑",
      price: 55000,
      description:
        "고급 천연 가죽으로 제작된 슬림하고 세련된 디자인의 카드 지갑입니다.",
      category: "가방/잡화",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      stock: 35,
      createdAt: "2025-04-30T18:00:00Z",
    },
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
      {dummyProductList.map(() => (
        <ProductCard />
      ))}
    </>
  );
};

export default ProductListContainer;
