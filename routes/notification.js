const router = require("express").Router();
  var FCM = require('fcm-node');
  const Notification=require("../models/Notification");

    var serverKey = 'AAAA6cImtQQ:APA91bF7yvHb9UUP4rQSNzmnIdGDDHnS8K4xWWwhcoe2kfwcsBShrlf9knU-vVXCV3AxCqBTtqz3poVvQkTntkgFptCqhNqKOvx47aHWqbc8zg48pFSxsXJW-IzHzSBNU8IZcX96Ovmw';
    var fcm = new FCM(serverKey);

    router.post("/send",async (req,res)=>{
    		 var message = {
				to:"/topics/"+req.body.topic,
			        notification: {
			            title: req.body.title,
			            body: req.body.body,
			        },
			 };

		fcm.send(message, async function (err, response) {
        if (err) {
            console.log("Something has gone wrong!"+err);
			console.log("Respponse:! "+response);
			res.status(400).json("error")
        } else {
        	console.log(response)
            // showToast("Successfully sent with response");
            try{
				 const notification=await Notification.create({
	            	topic:req.body.topic,
	            	body:req.body.body,
	            	title:req.body.title
	            })
				res.status(200).json(notification)
            }catch(e){
				res.status(400).json("error")
            }

        }

    });
	})

	router.get("/all",async (req,res)=>{
		try{
			const notification=await Notification.find().sort({"_id":-1});
			console.log(notification);
			res.status(200).json(notification);
		}catch(e){
			res.status(400).json("error");
		}

	})
module.exports=router;