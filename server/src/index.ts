import express, { Application, Request, Response} from "express";
import "dotenv/config";

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.get("/", (req: Request, res: Response) => {
    return res.send("Hey I'm UP and Working...");
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})

