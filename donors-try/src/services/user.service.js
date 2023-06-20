import { api } from "./api";

export const getAllUsers = async () => {
    console.log("get All users")
    const { data } = await api.get('/user', {headers: {token: localStorage.getItem( 'token' ) } } )
    console.log(data)
    return data
}