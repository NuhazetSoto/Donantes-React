import { api } from "./api";


export const getOneSanitario = async (id) => {
    console.log(id)
    const { data } = await api.get(`/user/${id}`, {
        headers: { token: localStorage.getItem('token') }  
    })
    return data
}

export const updateOneSanitario = async (id,email,telefono,direccion,localidad, userData) => {
    console.log(userData)
    if (email.length === 0) {
        email=userData.email
    }
    if (telefono.length === 0) {
        telefono=userData.telefono
    }
    if (direccion.length === 0) {
        direccion=userData.direccion
    }
    if (localidad.length === 0) {
        localidad=userData.localidad
    }
    console.log(id, email,telefono,direccion,localidad)
    const { data } = await api.put(`user/${id}`,
        {   
            "email": email,
            "phone": telefono,
            "direction": direccion,
            "location": localidad
        }, 
        {
        headers: { token: localStorage.getItem('token') }  
        }
    )
    console.log(data)
    return data
}
