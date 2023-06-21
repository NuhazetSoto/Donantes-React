import { api } from "./api";

export const getAllUsers = async () => {
    console.log("get All users")
    const { data } = await api.get('/user', {headers: {token: localStorage.getItem( 'token' ) } } )
    console.log(data)
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

export const deleteUser = async () => {
    try {
        const user = await api.delete(
            `ùser/${localStorage.id}`,
            {headers: { token: localStorage.getItem('token')}}
        )
        console.log('Usuario eliminado')
    } catch (error) {
        console.error('Error eliminando usuario')
    }
}