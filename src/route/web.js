import express from "express";
import homeController from "../controller/homeController"

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/about', (req, res) => {
        res.send('about')
    })

    router.get('/detail/user/:id', homeController.getDetailPage)

    return app.use('/', router)
}

export default initWebRoutes