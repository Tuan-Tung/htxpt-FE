import { api } from "../api";

class BonsaiServices {
    handleFetchBonsai = (param: any) => {
        return api.get('/bonsai', param);
    };
    handleFetchBonsaiById = (id: string) => {
        return api.get(`/bonsai/${id}`);
    };
}

const bonsaiServices = new BonsaiServices();

export default bonsaiServices;
