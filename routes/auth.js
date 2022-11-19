const router=require("express").Router();
const crypto=require("crypto");
require('dotenv').config()

const twilio=require("twilio")("ACe81b3e9154a9f3dac04677603ddac4dd",
	"4b193a95e1b3f4a430bc62c9a8598f06",{lazyLoading:true});

router.post("/generate-otp/:phone",(req,res)=>{
	try{
		const phone =req.params.phone;
		const otp=crypto.randomInt(100000,999999);
		const maxTime=1000*60*2;
		const expiresIn=Date.now()+maxTime;
		const hash=createHashedString(`${phone}.${otp}.${expiresIn}`);
		sendOtp(phone, otp);
		// for production just remove from res send and uncomment send sms
		res.status(200).json({hash:`${hash}.${expiresIn}`});
	}catch(e){
        console.log(e)
		res.status(400).json({msg:"Netwok Connection Error2"});
	}
	
})


router.post("/verify-otp/:details",async (req,res)=>{
	try{
    console.log(req.params)
		const details=req.params.details.split("&");
		const phone=details[0];
		const hash=details[1];
		const otp=details[2];

		const [oldHash, expiresIn]=hash.split(".");
		if(expiresIn<Date.now()){
			res.status(400).json({status:"failed", msg:"OTP Expired"});
		}
		const newHash=createHashedString(`${phone}.${otp}.${expiresIn}`);
		if(newHash!=oldHash){
			res.status(400).json({status:"failed", msg:"OTP Expired"});
		}
		res.status(200).json({status:"success"});
	}catch(e){
		res.status(400).json({msg:"Netwok Connection Error"});
		console.log(e);
	}
	
})


const createHashedString=(data)=>{
	const hashedStr=crypto.createHmac("sha256", "secret")
	.update(data).digest("hex");
	return hashedStr;
}

const sendOtp=async (phone,otp)=>{
    console.log(phone)
	return await twilio.messages.create({
		to:phone,
		from:"+18165788289",
		body:`You OTP for Lybley is ${otp}`
	})
}

module.exports=router;