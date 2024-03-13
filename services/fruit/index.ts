import { api } from "../api";

class FruitServices {
    handleFetchFruit = (param: any) => {
        return api.get('/fruit', param);
    };
    handleFetchFruitById = (id: string) => {
        return api.get(`/fruit/${id}`);
    };
    handleFetchFruitByCategory = (id: string) => {
        return api.get(`/fruit/category/${id}`);
    };
    handleFetchFruitCategory = () => {
        return api.get(`/fruit-category`);
    }
    
}

const fruitServices = new FruitServices();

export default fruitServices;
