const router = require("express").Router();
const Buyer=require("../models/Buyer");
const Settings =require("../models/Settings");

router.post("/add",async (req,res)=>{
	try{
		const {organization, address, phone,email, additional_number,status, type, tin, name, contact_person, level}=req.body;
		const obj=await Settings.findOne();
			const number=obj.buyerIndex;
			await Settings.updateOne({
				buyerIndex:number+1
			})
		const idIn="WB"+number;
		const buyer=await Buyer.create({organization, _id:idIn,status, address, phone,email, additional_number, type, tin, name, contact_person, level});
		console.log(buyer);
		res.status(200).json(buyer);
	}catch(er){
		res.status(404).json("Something went wrong")
		console.log(er);
	}
})
router.get("/all",async (req,res)=>{
	try{
		const buyer=await Buyer.find().sort({"_id":-1});;
		res.status(200).json(buyer);
	}catch(er){
		res.status(401).json({msg:"Something went wrong"})
		console.log(er);
	}
})





router.get("/search/:query",async (req,res)=>{
	var query=req.params.query;
	try{
	const buyer=await Buyer.find({$or:[{_id:  {'$regex': query,$options:'i'}},{name:{'$regex': query,$options:'i'}},{organization:{'$regex': query,$options:'i'}}]}).sort({"_id":-1});
	res.status(200).json(buyer);
	}catch(er){
		console.log(er);
		res.send(er)
	}
	
})




router.post("/update",async (req,res)=>{
	try{
		const buyer=await Buyer.updateOne({_id:req.body.id},{
			"$set":{
				...req.body
			}
		});
		console.log(buyer);
		res.status(200).json(buyer);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})
// Accessing via uid
router.get("/find/phone/:phone",async (req,res)=>{
	try{
		const buyer=await Buyer.findOne({phone:req.params.phone});
		if(buyer==null){
			res.status(404).json("Invalid Credentials")
		}else{
			res.status(200).json(buyer);
		}
		
	}catch(er){
		res.status(404).json("Error Occured")
		console.log(er);
	}
})

// Accessing via id
router.get("/find/id/:id",async (req,res)=>{
	try{
		const buyer=await Buyer.findOne({_id:req.params.id});
		if(buyer==null){
			res.status(404).json("Invalid Credentials")
		}else{
			res.status(200).json(buyer);
		}
	}catch(er){
		res.status(404).json("Error Occured")
		console.log(er);
	}
})

router.get("/verified",async (req,res)=>{
	try{
		const buyer=await Buyer.find({status:"verified"}).sort({"_id":-1});;
		console.log(buyer);
		res.status(200).json(buyer);
	}catch(er){
		res.status(401).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.get("/pending",async (req,res)=>{
	try{
		const buyer=await Buyer.find({status:"pending"}).sort({"_id":-1});;
		res.status(200).json(buyer);
	}catch(er){
		res.status(401).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.get("/rejected",async (req,res)=>{
	try{
		const buyer=await Buyer.find({status:"rejected"}).sort({"_id":-1});;
		console.log(buyer);
		res.status(200).json(buyer);
	}catch(er){
		res.status(401).json({msg:"Something went wrong"})
		console.log(er);
	}
})



module.exports=router;