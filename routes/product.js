const router = require("express").Router();
const Product =require("../models/Product");
const Jimp=require("jimp");
const path=require("path");
const { json } = require("express");

router.post("/checkOrders",(req,res)=>{
	console.log(req.body);
})



router.post("/add",async (req,res)=>{
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
    	jimpRes.write(path.resolve(__dirname, `../images/${imagePath}`));
   		const avatar=`/images/${imagePath}`;	
		const product=await Product.create({...req.body, image:avatar});
		res.status(200).json(product);
	}catch(e){
		console.log(e);
		res.status(400).json("error")
	}
})

router.post("/update",async (req,res)=>{
	try{
		const {image} =req.body;
		console.log(req.body);
		if(req.body.isChanged){
			const buffer = Buffer.from(
            image.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
            'base64'
	    	);
			 const imagePath = `${Date.now()}-${Math.round(
	            Math.random() * 1e9
	        )}.png`;
			  const jimpRes=await Jimp.read(buffer);
	    	jimpRes.write(path.resolve(__dirname, `../images/${imagePath}`));
	   		const avatar=`/images/${imagePath}`;
	   		const product=await Product.updateOne({_id:req.body.id},{
	   			"$set":{
	   				...req.body, image:avatar
	   			}
	   		})
	   		console.log(product)
	   		res.status(200).json(product);
		}else{
			const product=await Product.updateOne({_id:req.body.id},{
				"$set":{...req.body}
			})
			res.status(200).json(product);
		}
	}catch(e){
		console.log(e);
		res.status(400).json({msg:"error"})
	}
})



router.post("/product/:id",async (req,res)=>{
	try{
		const product=await Product.find({_id:req.params.id});
		console.log(product);
		res.status(200).json({msg:"success"});
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.get("/recent",async (req,res)=>{
	try{
		const product=await Product.find().sort("createdAt : -1").limit(5);
		res.status(200).json(product);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})


router.post("/delete",async (req,res)=>{
	try{
		const product=await Product.deleteOne({_id:req.body.id});
		res.status(200).json(product);
		
	}catch(e){
		res.status(400).json("error");
	}
})


router.get("/all",async (req,res)=>{
	try{
		const product=await Product.find().sort({"_id":-1});
		res.status(200).json(product);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})




router.get("/:category",async (req,res)=>{
	try{
		console.log(req.params.category);
		const product=await Product.find({category:req.params.category}).sort("createdAt : -1");
		res.status(200).json(product);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.post("/favourites", async (req, res) => {
	try{
		const arr=req.query.list.split(",");
		const product=await Product.find(
			// Find documents matching any of these values
			{$or:[
				{"_id":{"$in":arr}},
				{"_id":{"$in":arr}}
			]}
		)
		res.status(200).json(product);
	}catch(e){
		res.status(400).json("err");
		console.log(e)
	}
	
})


module.exports=router;