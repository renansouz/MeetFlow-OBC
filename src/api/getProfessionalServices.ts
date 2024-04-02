import { api } from ".";

interface GetProfileParams {
    _id?: string;
}

export async function getProfessionalServices(_id: GetProfileParams) {
    try{
        const response = await api.get(`/service/load?_id=${_id}`);
        return response.data;
    }catch(error){
        throw error
    }
}
