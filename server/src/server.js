import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'
import productRouter from './routes/product'
import categoriRouter from './routes/category'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import mongoose from 'mongoose'
import cors from 'cors';
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const app = express()
const port = 8080
app.use(cors());

// app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// Static
app.use(express.static('src/public'))

// Routing
app.get('/', function (req, res) {
    // const html = fs.readFileSync(join(__dirname, '/pages/home.html'), 'utf-8')
    // res.send(html)
    res.end(__dirname)
})

// Router
app.use("/api/", productRouter)
app.use("/api/", categoriRouter)

mongoose.connect("mongodb+srv://test:cuong123456@companycv.rr6odbl.mongodb.net/book")
    .then(() => console.log("Connect to DB Alat successfully"))

app.listen(port, function () {
    console.log(`Server is running on ${port}`);
})