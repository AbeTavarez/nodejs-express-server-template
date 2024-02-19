import { Router } from "express";


const router = new Router();

/**
 * @method GET
 */
router.get('/', (req, res) => {
    res.status(200).json({
        status: "Healthy",
        date: new Date().toISOString(),
        method: req.method,
        service: 'API',
        protocol: req.protocol
    });
});


/**
 * @method POST
 */
router.post('/', (req, res) => {
    const { payload } = req.body;

    res.status(200).json({
        status: "Received",
        date: new Date().toISOString(),
        method: req.method,
        service: 'API',
        protocol: req.protocol,
        payload
    });
});


export default router;