const app =require("express")();
const express=require("express");
const server=require("http").createServer();
const mongoose =require("mongoose");
const cors=require("cors");
require('dotenv').config()
const sellers=require("./routes/sellers");
const news=require("./routes/news");
const buyers=require("./routes/buyers");
const notification=require("./routes/notification");
const product=require("./routes/product");
const transaction=require("./routes/transaction");
const path=require("path");

const Settings=require("./routes/settings");

const order=require("./routes/order");
const product_price=require("./routes/product_price");
const category=require("./routes/category");
const store=require("./routes/store");

const admin=require("./routes/admin");

const MONGO_USERNAME = 'anshul';
const MONGO_PASSWORD = 'anshul10';
const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '5321';
const MONGO_DB = 'hi';

mongoose.connect("mongodb://localhost:27017/ecom_app",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((data)=>{
	console.log("dsd")
});

const corsOption = {
    origin: ['http://localhost:80'],
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
};
app.use(express.json({ limit: '10mb' }));
app.use(express.static("build"));


app.use(cors(corsOption));

app.use("/images",express.static("images"));
app.use(express.static("build"));

app.use(express.json());
app.use("/api/sellers", sellers);
app.use("/api/buyers", buyers);
app.use("/api/settings", Settings);
app.use("/api/product-price", product_price);
app.use("/api/product", product);
app.use("/api/categories", category);
app.use("/api/news", news);
app.use("/api/stores", store);
app.use("/api/transaction", transaction)
app.use("/api/notification", notification);
app.use("/api/order",order);
app.use("/api/admin",admin);
const port = process.env.PORT || 4000;

app.listen(4000,()=>{
    console.log(`Listening to the port`)
})

app.use("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

// server.listen(port,()=>{console.log(`Listening to the port ${port}`)})

