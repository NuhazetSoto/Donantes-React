import { api } from "./api";

export const getAllUsers = async () => {
    const { data } = await api.get('/user', {headers: {token: localStorage.getItem( 'token' ) } } )
    return data
}
export const createUser = async (newUser) => {
    console.log(newUser)
    try {
        const res = await api.post(
            '/auth/singup',
            {
                dni: newUser.dni,
                name:newUser.name,
                lastname: newUser.lastname,
                phone: newUser.phone,
                fecha_nacimiento: newUser.fecha_nacimiento,
                email: newUser.email,                             
                password: newUser.password,
            },
            {
                headers: { token: localStorage.getItem('token') },
            }
            )
            console.log(res)
            return res
        
    } catch (error) {
        console.error('Fallo al crear Usuario')
        
    }
}