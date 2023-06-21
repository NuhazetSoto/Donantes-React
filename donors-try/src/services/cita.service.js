addUserCita
import { api } from "./api";

export const createCita = async () => {
    const { data } = await api.create(`/`, {
        headers: { token: localStorage.getItem('token') }  
    })
    return data
}