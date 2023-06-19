import { api } from "./api";

export const getAllUsers = async () => {
    const { data } = await api.get('/user', {headers: {token: localStorage.getItem( 'token' ) } } )
    return data
}