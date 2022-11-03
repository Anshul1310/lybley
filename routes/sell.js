const router=require("express").Router();
const Sell=require("../models/Sell");

router.post("/add", async (req, res) => {
    try{
        const sell=await Sell.create(req.body);
        res.status(200).json(sell);
    }catch( e){
        console.log(e);
        res.status(400).json(e)
    }
})

router.get("/all", async (req, res) => {
    try{
        const sell=await Sell.find().sort({"_id":-1});;
        res.status(200).json(sell);
    }catch( e){
        console.log(e);
        res.status(400).json(e)
    }
})

router.get("/find/:id", async (req, res) => {
    try{
        const sell=await Sell.find({buyer:req.params.id})
        res.status(200).json(sell);
    }catch( e){
        console.log(e);
        res.status(400).json(e)
    }
})

module.exports=router;
