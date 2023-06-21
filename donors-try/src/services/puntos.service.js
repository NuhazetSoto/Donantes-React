import { api } from "./api";

export const getAllPuntos = async () => {
    const { data } = await api.get('/puntoextraccion', {headers: {token: localStorage.getItem( 'token' ) } } )
    return data
}
export const createPunto = async (newPunto) => {
    console.log(newPunto)
    try {
        const res = await api.post(
            '/puntoextraccion',
            {
                pextraccion_name:newPunto.pextraccion_name,
                pextraccion: newPunto.pextraccion,
                pextraccion_horario: newPunto.pextraccion_horario,
                pextraccion_tlf: newPunto.pextraccion_tlf,
                loc_gps: newPunto.loc_gps,
                pextraccion_isla: newPunto.pextraccion_isla,                               
                pextraccion_direccion: newPunto.pextraccion_direccion,
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