const Settings=require("../models/Settings");
const router=require("express").Router();
const Product =require("../models/Product");
const Order=require("../models/Order");
const Buyer=require("../models/Buyer");
const Seller=require("../models/Seller");
const Jimp=require("jimp");
const path=require("path");

router.post("/index/create",async (req, res)=>{
	const settings=await Settings.create({})

})

router.post("/zone",async (req, res)=>{
	try{
		console.log(req.body);
const settings=await Settings.updateOne({"_id":"setingsOfTheApp"},{
		"$set":{zone:req.body.zone}
	})
	res.status(200).json(settings);
	}catch(e){
		console.log(e);
	}
	

})

router.get("/info",async (req,res)=>{
	try{
		let data=[];
		for(let i=1;i<=12;i++){
		const buyers=await Buyer.aggregate([
			  {$project: {name: 1, month: {$month: '$createdAt'}}},
			  {$match: {month: i}}
			]);
		const orders=await Order.aggregate([
			  {$project: {name: 1, month: {$month: '$createdAt'}}},
			  {$match: {month: i}}
			]);
		const products=await Product.aggregate([
			  {$project: {name: 1, month: {$month: '$createdAt'}}},
			  {$match: {month: i}}
			]);
		const data2={buyers:buyers.length, orders:orders.length, products:products.length}
		data.push(data2);
		}
		let products=[];
		let orders=[];
		let buyers=[];

		for(let i=0;i<12;i++){
			products.push(data[i].products);
			orders.push(data[i].orders);
			buyers.push(data[i].buyers);
		}
		res.status(200).json({products, sellers:orders, buyers});
	}catch(e){
		console.log(e);
	}
	
	

})

router.get("/cards",async(req,res)=>{
	const setting=await Settings.findOne();

	const buyerNo=await Buyer.countDocuments();

	const orderNo=await Order.countDocuments();

	const productNo=await Product.countDocuments();
	const earning=await Order.find();
	
	let totalPrice=0;
	earning.map((data)=>{
		totalPrice+=Number(data.totalPrice);
	})
	
	res.status(200).json({totalPrice, buyerNo, productNo, orderNo});

})

router.get("/zone",async (req,res)=>{
	const setting=await Settings.findOne();
	res.status(200).json(setting.zone);
})

router.post("/banner",async (req,res)=>{
	try{
		console.log(req.body);
		const banners=await Settings.updateOne({
		"$set":{
			...req.body
		}
		});
		res.status(200).json("success");
	}catch(e){
		console.log(e);
		res.status(400).json("err");
	}
	
})

router.get("/banner",async (req,res)=>{
	try{
		const banners=await Settings.findOne();
		res.status(200).json(banners);
	}catch(e){
		res.status(400).json("err");
		console.log(e)
	}
	

})


router.post("/upload",async (req,res)=>{
	try{
		const {image} =req.body;
		const buffer = Buffer.from(
            image.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
            'base64'
    	);
		 const imagePath = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}.png`;
		const jimpRes=await Jimp.read(buffer);
		if(req.body.type!==undefined){
			jimpRes.resize(400, Jimp.AUTO).write(path.resolve(__dirname, `../images/${imagePath}`));
		}else{
			jimpRes.resize(800, Jimp.AUTO).write(path.resolve(__dirname, `../images/${imagePath}`));

		}
   		const avatar=`/images/${imagePath}`;	
		res.status(200).json(avatar);
	}catch(e){
		res.status(400).json("err");
		console.log(e)
	}
	

})


module.exports=router;