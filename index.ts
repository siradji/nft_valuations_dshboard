import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {getEnv} from "./utils/getEnv";

dotenv.config();

const app: Express = express();
const port = getEnv<number>('PORT', 3000);

app.set('view engine', 'ejs')
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());
app.use(express.static("public"));

app.get('/', (req: Request, res: Response) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`️[server]: Server is running at http://localhost:${port}`);
});
