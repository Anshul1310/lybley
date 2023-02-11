const router = require("express").Router();
const Product =require("../models/Product");
const Jimp=require("jimp");
const path=require("path");
const { json } = require("express");
const { info } = require("console");

router.post("/checkOrders",(req,res)=>{
	console.log(req.body);
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


router.post("/add",async (req,res)=>{
	try{
		if(req.body.isText==undefined){
			const buffer = Buffer.from(
				image.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
				'base64'
			);
			 const imagePath = `${Date.now()}-${Math.round(
				Math.random() * 1e9
			)}.png`;
			  const jimpRes=await Jimp.read(buffer);
			jimpRes.resize(400, Jimp.AUTO).write(path.resolve(__dirname, `../images/${imagePath}`));
			   const avatar=`/images/${imagePath}`;	
			const product=await Product.create({...req.body, image:avatar});
			res.status(200).json(product);
		}else{
			const product=await Product.create({...req.body});
			res.status(200).json(product);

		}
		
	}catch(e){
		res.status(400).json(e.message)
	}
})

router.post("/update",async (req,res)=>{
	try{
		if(req.body.isChanged){
			const buffer = Buffer.from(
            image.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
            'base64'
	    	);
			 const imagePath = `${Date.now()}-${Math.round(
	            Math.random() * 1e9
	        )}.png`;
			  const jimpRes=await Jimp.read(buffer);
			  jimpRes.resize(400, Jimp.AUTO).write(path.resolve(__dirname, `../images/${imagePath}`));
			  const avatar=`/images/${imagePath}`;
			 
			   const options = {
				upsert: true,
				new: true,
				
			};
	   		const product=await Product.findByIdAndUpdate({_id:req.body.id},{
	   			"$set":{
	   				...req.body, image:avatar
	   			}
	   		},options)
	   		res.status(200).json(product);
		}else{
			const options = {
				upsert: true,
				new: true,
				
			};
			const product=await Product.findByIdAndUpdate({_id:req.body.id},{
				"$set":{...req.body}
			},options)
			res.status(200).json(product);
		}
	}catch(e){
		console.log(e);
		res.status(400).json(e.message);
	}
})



router.get("/product/:id",async (req,res)=>{
	try{
		const product=await Product.findOne({_id:req.params.id});
		res.status(200).json(product);
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

router.get("/deals", async(req,res)=>{
	const product = await Product.find().sort({"_id":-1});
	let producttemp=[];
	let i=0;
	product.forEach(item => {

		let off=(Number(item.slashedPrice)-Number(item.price))/Number(item.slashedPrice)*100;
		item.of=off;
		producttemp.push({...item._doc,of:off});
		
		i++;
	  });
	  producttemp.sort(dynamicSort("of"))
	res.status(200).json(producttemp.slice(0,6));

})

router.get("/bestSelling", async(req,res)=>{
	try{
		const product = await Product.find().sort({"_id":-1});
		product.sort(dynamicSort("sold"))
		res.status(200).json(product);
	}catch(e){
		console.log(e)
		res.status(400).json(e);
	}
	

})

function dynamicSort(property) {
    var sortOrder = -1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

router.get("/all",async (req,res)=>{
	try{
		const product=await Product.find({}).sort({"_id":-1});
		res.status(200).json(product);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})





router.get("/categoryProducts",async (req,res)=>{
	try{
		const product = await Product.find().sort({"_id":-1});
		const cat=[];
		const temp={};
		product.map((item)=>{
			if(cat.includes(item.category)){
				if(temp[item.category].length<=4){
					temp[item.category].push(item);
				}
			}else{
				if(item.category!=null){
					cat.push(item.category);
					temp[item.category]=[];
					temp[item.category].push(item);
				}
				

			}
		})
		res.status(200).json(temp);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.get("/brand",async (req,res)=>{
	try{
		const product=await Product.find().sort({"_id":-1});
		const mySet = new Set();
		product.forEach(async (item)=>{
			mySet.add(item.brand);
			
		})
		const jk=[];
		for(let i=0;i<mySet.size;i++){
			jk[i]=Array.from(mySet)[i];
		}
		res.status(200).json(jk)
		
	}catch(e){
		res.status(400).json({msg:"error"});
		console.log(e);
	}
})
router.get("/search/:query",async (req,res)=>{
	var query=req.params.query.split("&")[0];
	var page=req.params.query.split("&")[1];
	
	try{
		if(query=="all"){
			const buyer=await Product.find().limit(10*Number(page));
			res.status(200).json(buyer);
		}else if(page=="all"){
			const buyer=await Product.find({$or:[{title:{'$regex': query,$options:'i'}},{category:{'$regex': query,$options:'i'}},{brand:{'$regex': query,$options:'i'}},{details:{'$regex': query,$options:'i'}},{description:{'$regex': query,$options:'i'}}]}).sort({"_id":-1});
			res.status(200).json(buyer);
		}else{
			const buyer=await Product.find({$or:[{title:{'$regex': query,$options:'i'}},{category:{'$regex': query,$options:'i'}},{brand:{'$regex': query,$options:'i'}},{details:{'$regex': query,$options:'i'}},{description:{'$regex': query,$options:'i'}}]}).sort({"_id":-1}).limit(10*Number(page));
			res.status(200).json(buyer);
		}
		
	}catch(er){
		console.log(er);
		res.send(er)
	}
	
})

router.get("/:category",async (req,res)=>{
	try{
		const product=await Product.find({category:req.params.category}).sort("createdAt : -1");
		res.status(200).json(product);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.post("/cart", async (req, res) => {
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