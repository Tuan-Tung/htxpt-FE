import { IPropInfoGarden } from "@/components/DetailProduct/DetailInfoGarden";

export interface IFormLogin {
  user_name: string;
  password: string;
}
export interface IFormParamGarden {
  first_name: string;
}

export interface PropsDetailProduct extends IPropInfoGarden {
  title: string;
  quantity: number;
  productImg: [] | any;
  CommonProduct? : React.ReactNode
}