import express, {Request, Response} from "express";


const app = express()

async function startServer() {
    app.get('/api/v1/data', (req: Request, res: Response) => {
        return res.status(200).json({
            data: [{
                name: "hamda",
                description: "y3lb"
            }]
        })
    })
    app.get('/health', (req: Request, res: Response) => {
        return res.status(200).json()
    })

    const port = 8000
    app.listen(port, () => {
        console.log("application is running on port " + port);
    })
}

startServer()

export default app;