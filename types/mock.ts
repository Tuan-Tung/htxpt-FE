export interface Gardener {
  _id: string;
  first_name: string;
  last_name: string;
  rating_avg: number;
  image: string;
  location: string;
  phone: string;
  product_category: string[];
}
export interface Fruit {
  key: string;
  _id: string;
  isFruit: boolean;
  category_name: string;
  image: string;
  range_price: string;
  shape: string;
  dimeter: string;
  weight: string;
}
export interface Bonsai {
  _id: string;
  tree_name: string;
  image: string;
  quantity: number;
  description: string;
}
export interface Blog {
  key: string;
  _id?: string;
  image: string;
  short_description: string;
  title: string;
}