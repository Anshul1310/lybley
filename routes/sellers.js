const router = require("express").Router();
const Seller=require("../models/Seller");
const Settings =require("../models/Settings");

router.post("/add",async (req,res)=>{
	try{
		console.log(req.body);
		const {name, gender,region, zone, category,woreda,status, kebele, phone,additional_number, email, level, tin,age, type, bookNumber,distanceDetail}=req.body;
		const obj=await Settings.findOne();
		const number=obj.sellerIndex;
		await Settings.updateOne({
			sellerIndex:number+1
		})
		const idIn="WS"+number;
		const password=phone;
		const seller=await Seller.create({
			name, gender,status,region,category,password, _id:idIn, zone, woreda, kebele,additional_number:additional_number, phone, email, level, tin,age, type, bookNumber,distanceDetail
		});
		res.status(200).json({msg:"success"});
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.get("/all",async (req,res)=>{
	try{
		const seller=await Seller.find().sort({"_id":-1});;
		res.status(200).json(seller);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.get("/find/phone/:phone",async (req,res)=>{
	try{
		const seller=await Seller.findOne({phone:req.params.phone});
		if(seller==null){
			res.status(404).json("Invalid Credentials")
		}else{
			res.status(200).json(seller);
		}
		
	}catch(er){
		res.status(404).json("Error Occured")
		console.log(er);
	}
})

router.post("/login",async (req,res)=>{
	try{
		const seller=await Seller.findOne({phone:req.body.phone});
		if(seller==null){
			res.status(404).json("Invalid Credentials");
		}else{
			res.status(200).json(seller);
		}
	}catch(er){
		res.status(404).json("Something went wrong")
		console.log(er);
	}
})

router.post("/delete",async (req,res)=>{
try{
		console.log(req.body.id);
		const products=await Seller.remove({_id:req.body.id});
		res.status(200).json(products);
	}catch(e){
		console.log(e);
		res.status(400).json(products);
	}
});

router.post("/changePassword",async (req,res)=>{
try{

	const seller=await Seller.findOne({_id:req.body.id, password:req.body.oldPassword});
	console.log(seller)
	if(seller==null){
		res.status(401).json({title:'failure'});
	}else{
		const products=await Seller.updateOne({_id:req.body.id, password:req.body.oldPassword},
			{
				"$set":{password:req.body.newPassword}
			});
		console.log(products);
		res.status(200).json({title:'success'});
	}
	}catch(e){
		console.log(e);
		res.status(400).json({title:'error'});
	}
});

router.post("/update",async (req,res)=>{
	try{

		const products=await Seller.updateOne({_id:req.body.id},
			{
				"$set":{...req.body}
			});
		console.log(products)
		res.status(200).json(products);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})



router.get("/seller/:id",async (req,res)=>{
	try{
		const seller=await Seller.find({_id:req.params.id}).sort({"_id":-1});;
		console.log(seller);
		res.status(200).json({msg:"success"});
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.get("/all/verified",async (req,res)=>{
	try{
		const seller=await Seller.find({status:"verified"}).sort({"_id":-1});;
		console.log(seller);
		res.status(200).json(seller);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})
router.get("/all/pending",async (req,res)=>{
	try{
		const seller=await Seller.find({status:"pending"}).sort({"_id":-1});;
		console.log(seller);
		res.status(200).json(seller);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})
router.get("/all/rejected",async (req,res)=>{
	try{
		const seller=await Seller.find({status:"rejected"}).sort({"_id":-1});;
		console.log(seller);
		res.status(200).json(seller);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})
module.exports=router;