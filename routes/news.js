const News=require("../models/News");
const router=require("express").Router();
const Jimp=require("jimp");
const path=require("path");


router.post("/add",async (req,res)=>{
	try{
		const {image, title,category, description} =req.body;
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

		const news=await News.create({image:avatar, title, category,description});
		res.status(200).json(news);

	}catch(e){
		res.status(400).json({msg:"error"});
		console.log(e);
	}
})


router.get("/all",async (req,res)=>{
	try{
		const news=await News.find().sort({"_id":-1});;
		res.status(200).json(news);
		
	}catch(e){
		res.status(400).json({msg:"error"});
		console.log(e);
	}
})



router.post("/update",async (req,res)=>{
	try{
		const {image, title, description} =req.body;
		if(image==null){
			const product=await News.updateOne({_id:req.body.id},{
	   			"$set":{
	   				title, description
	   			}
	   		})
	   		res.status(200).json({msg:"success"});
		}else{

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
	   		const product=await News.updateOne({_id:req.body.id},{
	   			"$set":{
	   				title, description, image:avatar
	   			}
	   		})
	   		res.status(200).json({msg:"success"});
		}
	}catch(e){
		console.log(e)
		res.status(400).json({msg:"error"});
	}
})



router.post("/delete",async (req,res)=>{
	try{
		const news=await News.deleteOne({_id:req.body.id});
		res.status(200).json(news);
		
	}catch(e){
		res.status(400).json({msg:"error"});
		console.log(e);
	}
})


module.exports=router;