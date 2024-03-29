type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng]; //지도 좌표

export type Menu = { name: string; price: string }; //메뉴

//매장 위치
export type Store = {
  id: number;
  latitude: number;
  longitude: number;
};

//매장 상세 정보
export type DetailStore = {
  cafeId: number;
  imageUrl: string;
  cafeName: string;
  avgStar: number;
  coffeeDetail: {
    name: string;
    flavours: string[];
    intensity: string;
    acidity: string;
    price: number;
  };
  reviews: [{ [key: string]: any }];
  hasLike: boolean;
};

//내 취향 매장 정보
export type MyTasteStore = {
  id: number;
  imageUrl: string;
  cafeName: string;
  avgStar: number;
  flavours: [{ [key: string]: string }];
  intensity: string;
  acidity: string;
  hasLike: boolean;
};

// 좋아요 누른 카페 정보

export type preferStore = {
  cafeId: number;
  cafeName: string;
  imageUrl: string;
  coffeeDetail: {
    intensity: string;
    acidity: string;
    flavours: any;
  };
  avgStar: number;
  hasLike: boolean;
};
