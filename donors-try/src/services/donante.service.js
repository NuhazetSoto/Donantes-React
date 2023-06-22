import { api } from "./api";

export const getOneDonante = async () => {
    const { data } = await api.get(`/user/${localStorage.id}/cita/eager`, {
        headers: { token: localStorage.getItem('token') }  
    })
    console.log(data)
    return data
}