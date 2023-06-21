# Donantes-React

en user.router quitar el checkDonante de --
    userRouter.get('/:id', checkAuth, getOneUser)
    userRouter.put('/:id', checkAuth, updateUser)

--> en el back 
controller - auth.controller.js - 
fila 32---    /*TOKEN*/   const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' })
              /*ROLE*/    const role = user.role
              /*ID*/      const id = user.id

--> Cambiar en BBDD
users - crear localidad y direccion
cita - crear hora_cita



