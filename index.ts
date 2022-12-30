import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {getEnv} from "./utils/getEnv";
import startMock from './mocks/stats.json'
import feedMock from './mocks/feed.json'
import tabView from './mocks/tab_view.json'

import {mockPromise} from "./utils/mockPromise";


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

// @Todo(siradji: Isolate api calls from page render to improve loading speed.)
app.get('/', async (req: Request, res: Response) => {
    const feed = await mockPromise<any>(feedMock)
    const stats = await mockPromise<any>(startMock, 500) // to mock a real life situation, timeout reduced to 500 MS.
    const tabStats = await mockPromise<any>(tabView, 500)
    res.render('index', {
        stats,
        feed,
        tabStats
    });
});



app.listen(port, () => {
    console.log(`️[server]: Server is running at http://localhost:${port}`);
});
