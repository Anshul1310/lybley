const router=require("express").Router();
const Transaction =require("../models/Transaction");
const Withdrawal =require("../models/Withdrawal");
const Jimp=require("jimp");
const path=require("path");

router.get("/find/seller/:id",async (req,res)=>{
	try{
		console.log(req.params);
		const transactions=await Transaction.find({seller:req.params.id}).sort({"_id":-1});;
		console.log(transactions);
		res.status(200).json(transactions);
	}catch(e){
		console.log(e);
		res.status(200).json("error");
	}

})


router.get("/initiated",async (req,res)=>{
	try{
		const withdrawal=await Withdrawal.find({status:"initiated"}).sort({"_id":-1});
		res.status(200).json(withdrawal);
	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})

router.get("/info",async (req,res)=>{
	const initiated=await Withdrawal.find({status:"initiated"}).countDocuments();
	const success=await Withdrawal.find({status:"success"}).countDocuments();
	res.status(200).json({"initiated":initiated, "success":success});
})

router.get("/success",async (req,res)=>{
	try{
		const withdrawal=await Withdrawal.find({status:"success"}).sort({"_id":-1});
		res.status(200).json(withdrawal);
	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})

router.post("/get/:id",async (req,res)=>{
	try{
		const withdrawal=await Withdrawal.findOne({_id:req.params.id})
		res.status(200).json(withdrawal);
	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})

router.get("/all",async (req,res)=>{
	try{
		const withdrawal=await Withdrawal.find().sort({"_id":-1});
		res.status(200).json(withdrawal);
	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})


router.get("/find/seller/walletBalance/:id",async (req,res)=>{
	try{
		const transactions=await Transaction.find({seller:req.params.id}).sort({"_id":-1});;
		console.log(transactions);
		let walletBalance=0;
		transactions.map((data)=>{
			console.log(data.type);
			if(data.type==="credit"){
				walletBalance=walletBalance+data.payout;
			}else{
				walletBalance=walletBalance-data.payout;
			}
		})
		res.status(200).json(walletBalance);
	}catch(e){
		console.log(e);
		res.status(200).json("error");
	}

})

router.post("/find/seller/walletBalance/:id",async (req,res)=>{
	try{
		const transactions=await Transaction.find({seller:req.params.id}).sort({"_id":-1});;
		console.log(transactions);
		let walletBalance=0;
		transactions.map((data)=>{
			console.log(data.type);
			if(data.type==="credit"){
				walletBalance=walletBalance+data.payout;
			}else{
				walletBalance=walletBalance-data.payout;
			}
		})
		res.status(200).json(walletBalance);
	}catch(e){
		console.log(e);
		res.status(200).json("error");
	}
})





router.post("/withdrawal/initiate",async (req,res)=>{
	try{
		const withdrawal=await Withdrawal.create({
			...req.body
		});
		const transaction=await Transaction.create({
				payout:req.body.payout,
				seller:req.body.seller,
				type:"debit"
		})
		console.log(transaction);
		res.status(200).json("success");
	}catch(e){
		console.log(e);
		res.status(200).json("error");
	}
})

router.post("/withdrawal/update",async (req,res)=>{
	try{

		const {transactionSlip} =req.body;
		console.log(req.body)
		if(!transactionSlip.includes("wangari")){
const buffer = Buffer.from(
            transactionSlip.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
            'base64'
    	);
		 const imagePath = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}.png`;
		  const jimpRes=await Jimp.read(buffer);
    	jimpRes.resize(470, Jimp.AUTO).write(path.resolve(__dirname, `../images/${imagePath}`));
   		const avatar=`/images/${imagePath}`;	

		const withdrawal=await Withdrawal.updateOne({_id:req.body.id},{
			transactionId:req.body.transactionId, transactionSlip:avatar, status:"success"
		});
		}else{
			const withdrawal=await Withdrawal.updateOne({_id:req.body.id},{
			transactionId:req.body.transactionId, status:"success"
		});
		}
		
		if(req.body.status=="success"){
			const transaction=await Transaction.create({
				payout:req.body.payout,
				seller:req.body.seller,
				type:"debit"
			})
		}
		res.status(200).json("success");
	}catch(e){
		console.log(e);
		res.status(200).json("error");
	}
})
module.exports=router;