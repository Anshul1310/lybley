const Order=require("../models/Order");
const Settings =require("../models/Settings");
const Transaction =require("../models/Transaction");
const Buyer=require("../models/Buyer");

const Product =require("../models/Product");
const router = require("express").Router();
  var FCM = require('fcm-node');
  const Notification=require("../models/Notification");

    var serverKey = 'AAAA6cImtQQ:APA91bF7yvHb9UUP4rQSNzmnIdGDDHnS8K4xWWwhcoe2kfwcsBShrlf9knU-vVXCV3AxCqBTtqz3poVvQkTntkgFptCqhNqKOvx47aHWqbc8zg48pFSxsXJW-IzHzSBNU8IZcX96Ovmw';
    var fcm = new FCM(serverKey);



const sendOrderNotification=(orderId, status, fcmToken)=>{
	var message = {
		to:fcmToken,
			notification: {
				title: "Order Notification",
				body: "Your order("+orderId+") from Lybley is "+status
			},
	 };

fcm.send(message, async function (err, response) {
});
}
router.post("/add",async (req,res)=>{
	try{
		console.log(req.body);
		const obj=await Settings.findOne();
		const number=obj.orderIndex;
		await Settings.updateOne({
			orderIndex:number+1
		})
		const orderNumber="Order Id: #"+number;
		const order=await Order.create({...req.body, orderId:orderNumber});
		req.body.items.map(async (value)=>{
				const {seller, price, quantity, productId}=value;
				const productTemp=await Product.findOne({_id:productId});
				const quant=(productTemp.stock)-quantity;
				const sold=(productTemp.sold)+quantity;
				const product=await Product.updateOne({_id:productId},{
					"$set":{stock:quant, sold:sold}
				})
			})
		res.status(200).json(order);
	}catch(er){
		console.log(er);
		res.status(400).json({msg:"error"});
	}
})

router.get("/seller/stats/:id",async (req, res)=>{
	try{
		const obj=await Order.find( { _id:req.params.id,$where: function() { 
		    today = new Date(); //
		    today.setHours(0,0,0,0);
		    return (this._id.getTimestamp() >= today)
		} } );
	}catch(e){
		console.log(e);
	}
	
})

router.post("/cancelOrder",async (req, res)=>{
	try{
		console.log(req.body);
		req.body.items.map(async (value)=>{
				const {seller, price, quantity, productId}=value;
				const productTemp=await Product.findOne({_id:productId});
				const quant=parseInt(productTemp.stock)+parseInt(quantity);
				console.log(quant);
				const product=await Product.updateOne({_id:productId},{
					"$set":{stock:quant}
				})
			})
		const news=await Order.deleteOne({orderId:req.body.orderId});
		res.status(200).json("success");
	}catch(e){
		console.log(e);
	}
	
})

router.get("/recent",async (req,res)=>{
	try{
		const product=await Order.find().sort({"_id":-1}).limit(5);
		res.status(200).json(product);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})



router.post("/update",async (req,res)=>{
	try{
		await Order.updateOne({orderId:req.body.orderId},{
			"$set":{
				...req.body
			}
		});

		const buyer=await Buyer.findOne({_id:req.body.buyer});
		sendOrderNotification(req.body.orderId, req.body.status, buyer.fcmToken);
		const order=await Order.findOne({orderId:req.body.orderId});
		console.log(order)
		if(req.body.status=="delivered"){
			order._doc.items.map(async (value)=>{
				const {seller, price, quantity, productId}=value;

				const  transaction=await Transaction.create({
				payout:(price*quantity),
				seller,
				type:"credit",
				})

			})

			res.status(200).json("success");

		}else{
			res.status(200).json("success");

		}
	}catch(er){
		console.log(er);
		res.status(400).json("error");
	}
})


router.get("/all",async (req,res)=>{
	try{
		const order=await Order.find().sort({"_id":-1});;
		res.status(200).json(order);
	}catch(er){
		res.status(400).json("error");
	}
})
router.get("/find/user/:id",async (req,res)=>{
	try{
		const order=await Order.find({buyer:req.params.id}).sort({"_id":-1});;
		res.status(200).json(order);
	}catch(er){
		res.status(400).json({msg:"error"});
	}
})
router.get("/find/seller/:id",async (req,res)=>{
	try{
		const order=await Order.find({seller:req.params.id}).sort({"_id":-1});;
		res.status(200).json(order);
	}catch(er){
		res.status(400).json("error");
	}
})

router.get("/dispatched",async (req,res)=>{
	try{
		const order=await Order.find({status:"dispatched"}).sort({"_id":-1});;
		res.status(200).json(order);
	}catch(er){
		res.status(400).json("error");
	}
})

router.get("/delivered",async (req,res)=>{
	try{
		const order=await Order.find({status:"delivered"}).sort({"_id":-1});;
		res.status(200).json(order);
	}catch(er){
		res.status(400).json("error");
	}
})

router.get("/onTheWay",async (req,res)=>{
	try{
		const order=await Order.find({status:"preparing"}).sort({"_id":-1});;
		res.status(200).json(order);
	}catch(er){
		res.status(400).json("error");
	}
})

router.get("/preparing",async (req,res)=>{
	try{
		const order=await Order.find({status:"preparing"}).sort({"_id":-1});;
		res.status(200).json(order);
	}catch(er){
		res.status(400).json("error");
	}
})

router.get("/:id",async (req,res)=>{
	try{
		const order=await Order.find({_id:req.params.id}).sort({"_id":-1});;
		res.status(200).json(order);
	}catch(er){
		res.status(400).json({msg:"error"});
	}
})

module.exports=router;
