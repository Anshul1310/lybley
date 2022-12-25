const router = require("express").Router();
const Buyer=require("../models/Buyer");
const Settings =require("../models/Settings");
const Jimp=require("jimp");
const path=require("path");

router.post("/add",async (req,res)=>{
	console.log(req.body)
	try{
		const {organization, address,userType, phone,email,shopInner, shopOuter,  additional_number,status, type,gst, pan, name, contact_person, level}=req.body;
		const obj=await Settings.findOne();
			const number=obj.buyerIndex;
			await Settings.updateOne({
				buyerIndex:number+1
			})
		const idIn="WB"+number;
		
		if(shopInner!==undefined && shopOuter!==undefined){
			const bufferInner = Buffer.from(
				shopInner.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
				'base64'
				);
				const bufferOuter = Buffer.from(
					shopOuter.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
					'base64'
					);
	
				 const imagePathInner = `${Date.now()}-${Math.round(
					Math.random() * 1e9
				)}.png`;
				const imagePathOuter = `${Date.now()}-${Math.round(
					Math.random() * 1e9
				)}.png`;
	
				const jimpResInner=await Jimp.read(bufferInner);
				const jimpResOuter=await Jimp.read(bufferOuter);
	
				jimpResInner.resize(400, Jimp.AUTO).write(path.resolve(__dirname, `../images/${imagePathInner}`));
				jimpResOuter.resize(400, Jimp.AUTO).write(path.resolve(__dirname, `../images/${imagePathOuter}`));
	
				   const avatarInner=`/images/${imagePathInner}`;
				const avatarOuter=`/images/${imagePathOuter}`;
				const buyer=await Buyer.create({organization, shopInner:avatarInner, shopOuter:avatarOuter, _id:idIn,status, address, phone,email, additional_number, type,gst, pan, name, contact_person, level});
				res.status(200).json(buyer);
			}else{
			const buyer=await Buyer.create({userType,organization,  _id:idIn,status, address, phone,email, additional_number, type, pan, name, contact_person, gst,level});
			res.status(200).json({...buyer,id:buyer._doc._id});
		}

		
	   		

		
		
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

router.post("/updateBusinessInfo",async (req,res)=>{
	try{
		const options = {
			upsert: true,
			new: true,
			setDefaultsOnInsert: true
	};
		const {dob, gender, name,type, sales,id}=req.body;
		const buyer=await Buyer.findByIdAndUpdate({_id:id},{
			"$set":{
				type, sales
			}
		}, options);
		res.status(200).json(buyer);
	}catch(er){ 
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})


router.post("/updateProfileInfo",async (req,res)=>{
	try{
		const options = {
			upsert: true,
			new: true,
			setDefaultsOnInsert: true
	};
		const {dob, gender, name,type, sales,id}=req.body;
		const buyer=await Buyer.findByIdAndUpdate({_id:id},{
			"$set":{
				dob, gender, name
			}
		}, options);
		res.status(200).json(buyer);
	}catch(er){ 
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})



router.post("/update",async (req,res)=>{
	try{
		console.log(req.body);
		const options = {
			upsert: true,
			new: true,
			setDefaultsOnInsert: true
		};
		const buyer=await Buyer.findByIdAndUpdate({_id:req.body.id},{
			"$set":{
				...req.body
			}
		}, options);
		res.status(200).json({...buyer, id:buyer._doc._id});
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.post("/updateToken",async (req,res)=>{
	try{
		const options = {
			upsert: true,
			new: true,
			setDefaultsOnInsert: true
		};
		const buyer=await Buyer.findByIdAndUpdate({_id:req.body.id},{
			fcmToken:req.body.fcmToken
		}, options);
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