import { api } from "./api";

export const getAllPuntos = async () => {
    const { data } = await api.get('/puntoextraccion', {headers: {token: localStorage.getItem( 'token' ) } } )
    return data
}

