const ProductPrice =require("../models/ProductPrice");
const router=require("express").Router();
const Jimp=require("jimp");
const path=require("path");

router.post("/add",async (req,res)=>{
try{
	const {title, price, measuringUnit, image}=req.body;
	const buffer = Buffer.from(
            image.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
            'base64'
    	);
		 const imagePath = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}.png`;
	const jimpRes=await Jimp.read(buffer);
    jimpRes.resize(100, Jimp.AUTO).write(path.resolve(__dirname, `../images/${imagePath}`));
   	const avatar=`/images/${imagePath}`;	

	const products=await ProductPrice.create({...req.body, image:avatar});
	res.status(200).json(products);
	}catch(e){
		console.log(e);
		res.status(400).json("error");
	}
});

router.post("/update",async (req,res)=>{
	const {title, measuringUnit, image, location,price}=req.body;
try{
	if(req.body.image!=null){

	const buffer = Buffer.from(
            image.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
            'base64'
    	);
		 const imagePath = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}.png`;
	const jimpRes=await Jimp.read(buffer);
    jimpRes.resize(100, Jimp.AUTO).write(path.resolve(__dirname, `../images/${imagePath}`));
   	const avatar=`/images/${imagePath}`;	

	const products=await ProductPrice.updateOne({_id:req.body.id},
			{
				"$set":{title, price, location, image:avatar}
			});
	res.status(200).json(products);
	}else{
		const products=await ProductPrice.updateOne({_id:req.body.id},
			{
				"$set":{title, price, location}
			});
			res.status(200).json(products);
	}
		
		
	}catch(e){
		console.log(e);
		res.status(400).json("fail");
	}
});

router.post("/delete",async (req,res)=>{
try{
		console.log(req.body.id);
		const products=await ProductPrice.remove({_id:req.body.id});
		res.status(200).json(products);
	}catch(e){
		console.log(e);
		res.status(400).json(products);
	}
});

router.get("/all",async (req,res)=>{
	try{
		const products=await ProductPrice.find().sort({"_id":-1});;
	res.status(200).json(products);
	}catch(e){
		console.log(e);
		res.status(400).json("error");
	}
	
});

router.post("/find",async (req,res)=>{
	try{
		console.log(req.body);
		const products=await ProductPrice.findOne({_id:req.body.id});
	res.status(200).json(products);
	}catch(e){
		console.log(e);
		res.status(400).json(products);
	}
	
});

module.exports=router;