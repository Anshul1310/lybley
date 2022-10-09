const router = require("express").Router();
const Store=require("../models/Store");

router.get("/all",async (req,res)=>{
try{
	const store=await Store.find().sort({"_id":-1});;
		res.status(200).json(store);
	}catch(e){
		res.status(400).json("error");
	}
})

router.post("/add",async (req,res)=>{
	try{
	const store=await Store.create({
		...req.body
	})
	res.status(200).json(store);
	}catch(e){
res.status(400).json("error");
	}
	
})

router.post("/find",async (req,res)=>{
	try{
	const store=await Store.findOne({_id:req.body.id});
	res.status(200).json(store);
	}catch(e){
res.status(400).json("error");
console.log(e);
	}
	
})

router.post("/delete",async (req,res)=>{
try{
		console.log(req.body.id);
		const store=await Store.remove({_id:req.body.id});
		res.status(200).json(store);
	}catch(e){
		console.log(e);
		res.status(400).json("failed");
	}
})

router.post("/update",async (req,res)=>{
try{
		console.log(req.body);
		const store=await Store.updateOne({_id:req.body.id},{
			"$set":{...req.body}
		});
		res.status(200).json(store);
	}catch(e){
		console.log(e);
		res.status(400).json("failed");
	}
})

module.exports=router;