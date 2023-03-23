import express from 'express';
import APIController from '../controller/APIController'

const router = express.Router()

const initAPIRoutes = (app) => {
    router.get('/users', APIController.getALlUsers)
    router.post('/create-user', APIController.createNewUser)
    router.put('/update-user', APIController.updateUser)
    router.delete('/delete-user/:id', APIController.deleteUser)

    return app.use('/api/v1', router)
}

export default initAPIRoutes