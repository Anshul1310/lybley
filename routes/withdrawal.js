const router = require("express").Router();
const Withdrawal=require("../models/Withdrawal");


router.get("/all",async (req,res)=>{
	try{
		const withdrawal=Withdrawal.find().sort({"_id":-1});
		res.status(200).json(withdrawal);
	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})

router.get("/initiated",async (req,res)=>{
	try{
		const withdrawal=Withdrawal.find({status:"initiated"}).sort({"_id":-1});
		res.status(200).json(withdrawal);
	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})

router.get("/success",async (req,res)=>{
	try{
		const withdrawal=Withdrawal.find({status:"success"}).sort({"_id":-1});
		res.status(200).json(withdrawal);
	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})

router.post("/update",async (req,res)=>{
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
    	jimpRes.resize(100, Jimp.AUTO).write(path.resolve(__dirname, `../images/${imagePath}`));
   		const avatar=`/images/${imagePath}`;	
		const withdrawal=await Withdrawal.create({...req.body, image:avatar});
		res.status(200).json(withdrawal);



	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})
module.exports=router;