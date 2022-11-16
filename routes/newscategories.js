const NewsCategories=require("../models/NewsCategories");
const router=require("express").Router();
const Jimp=require("jimp");
const path=require("path");

router.post("/add",async (req,res)=>{
	try{
		console.log(req.body);
		const {name, image}=req.body;
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
		const newscategories=await NewsCategories.create({name, image:avatar} );
		res.status(200).json(newscategories);

	}catch(e){
		res.status(400).json({msg:"error"});
		console.log(e);
	}
})


router.post("/update",async (req,res)=>{
	try{
		const {image,name}=req.body;
	if(image==null){
		const newscategories=await NewsCategories.updateOne({_id:req.body.id},{
		"$set":{
			name
		}
		})
	}else{
		if(name==null){
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
   		console.log(avatar);
   		const newscategories=await NewsCategories.updateOne({_id:req.body.id},{
		"$set":{
			 image:avatar
		}
		})

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
   		
   		const newscategories=await NewsCategories.updateOne({_id:req.body.id},{
		"$set":{
			name, image:avatar
		}
		})

		}
		
	}
	res.status(200).json("done")
	}catch(e){
		console.log(e);
		res.status(400).json("fail")
	}
	
	
})



router.get("/all",async (req,res)=>{
	try{
		const newscategories=await NewsCategories.find().sort({"_id":-1});

		res.status(200).json(newscategories);
		
	}catch(e){
		console.log(e);
		res.status(400).json("error");
	}
})

router.get("/all/:category",async (req,res)=>{
	try{
		const newscategories=await NewsCategories.find({name:req.params.category});

		res.status(200).json(newscategories);
		
	}catch(e){
		console.log(e);
		res.status(400).json("error");
	}
})

router.post("/delete",async (req,res)=>{
	try{
		const newscategories=await NewsCategories.deleteOne({_id:req.body.id});

		res.status(200).json(newscategories);
		
	}catch(e){
		res.status(400).json({msg:"error"});
	}
})


module.exports=router;