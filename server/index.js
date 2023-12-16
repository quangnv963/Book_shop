import userRouter from "./routes/user";
import newRouter from "./routes/new";
import productRouter from "./routes/product";

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://test:cuong123456@companycv.rr6odbl.mongodb.net/companycv');


app.get("/", (req, res) => {
    res.json("Tao là Quang đây, tao test backend");
})

app.use("/api", productRouter);
app.use("/api", newRouter);
app.use("/api", userRouter);

app.listen(3001, () => {
    console.log("Server is Running")
})
