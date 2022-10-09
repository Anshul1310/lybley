const mongoose=require("mongoose");
const schema=mongoose.Schema({
	seller:String,
	status:String,
	phone:Number,
	type:String,
	payout:Number,
	transactionSlip:String,
	transactionId:String
},{ timestamps: true})

module.exports= mongoose.models.transaction || mongoose.model('transaction', schema);
