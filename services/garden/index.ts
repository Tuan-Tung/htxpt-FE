
import { IFormParamGarden } from "@/utils/type";

import { api } from "../api";

class GardenServices {
    handleFetchGarden = (param: IFormParamGarden) => {
        return api.get('/gardeners', param);
    };
 
    handleFetchGardenById = (id: string | string[]) => {
        return api.get(`/gardeners/${id}`);
    };
    
}

const gardenServices = new GardenServices();

export default gardenServices;
