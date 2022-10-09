const mongoose=require("mongoose");

const schema=mongoose.Schema({
	seller:String,
	status:{
		type:String,
		default:"initiated"
	},
	payout:Number,
	transactionSlip:String,
	transactionId:String
},{ timestamps: true})

module.exports=mongoose.model("withdrawals",schema);