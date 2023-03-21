import express from "express";
import homeController from "../controller/homeController"

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', (req, res) => {
        res.send('about')
    })
    router.get('/detail/user/:id', homeController.getDetailPage)
    router.post('/create-new-user', homeController.createNewUser)
    router.post('/delete-user', homeController.deleteUser)
    router.get('/update-user/:id', homeController.getUser)
    router.post('/update-user', homeController.updateUser)

    return app.use('/', router)
}

export default initWebRoutes