const Category=require("../models/Category");
const router=require("express").Router();
const Jimp=require("jimp");
const path=require("path");
const Product =require("../models/Product");


router.post("/add",async (req,res)=>{
	try{
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
		const category=await Category.create({name, image:avatar} );
		res.status(200).json(category);

	}catch(e){
		res.status(400).json({msg:"error"});
		console.log(e);
	}
})

router.post("/update",async (req,res)=>{
	try{
		const {image,name}=req.body;
	if(image==null){
		const category=await Category.updateOne({_id:req.body.id},{
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
   		const category=await Category.updateOne({_id:req.body.id},{
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
   		const category=await Category.updateOne({_id:req.body.id},{
		"$set":{
			name, image:avatar
		}
		})

		}
		
	}
	res.status(200).json("done")
	}catch(e){
		res.status(400).json("fail")
	}
	
	
})



router.get("/all",async (req,res)=>{
	try{
		const category=await Category.find().sort({"_id":-1});;

		res.status(200).json(category);
		
	}catch(e){
		res.status(400).json({msg:"error"});
	}
})

router.post("/delete",async (req,res)=>{
	try{
		console.log(req.body.id)
		const category=await Category.deleteOne({name:req.body.id});
		await Product.deleteMany({category:req.body.id});

		res.status(200).json(category);
		
	}catch(e){
		res.status(400).json({msg:"error"});
	}
})


module.exports=router;