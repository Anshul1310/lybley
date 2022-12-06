const router = require("express").Router();
const crypto = require("crypto");
const http = require("http");
require('dotenv').config()

router.post("/generate-otp/:phone", (req, res) => {
	try {
		const phone = req.params.phone;
		const otp = crypto.randomInt(100000, 999999);
		const maxTime = 1000 * 60 * 2;
		const expiresIn = Date.now() + maxTime;
		const hash = createHashedString(`${phone}.${otp}.${expiresIn}`);
		sendOtp(phone, otp);
		// for production just remove from res send and uncomment send sms
		res.status(200).json({ hash: `${hash}.${expiresIn}` });
	} catch (e) {
		console.log(e)
		res.status(400).json({ msg: "Netwok Connection Error2" });
	}

})


router.post("/verify-otp/:details", async (req, res) => {
	try {
		console.log(req.params)
		const details = req.params.details.split("&");
		const phone = details[0];
		const hash = details[1];
		const otp = details[2];

		const [oldHash, expiresIn] = hash.split(".");
		if (expiresIn < Date.now()) {
			res.status(400).json({ status: "failed", msg: "OTP Expired" });
		}
		const newHash = createHashedString(`${phone}.${otp}.${expiresIn}`);
		if (newHash != oldHash) {
			res.status(400).json({ status: "failed", msg: "OTP Expired" });
		}
		res.status(200).json({ status: "success" });
	} catch (e) {
		res.status(400).json({ status: "error" });
		console.log(e);
	}

})


const createHashedString = (data) => {
	const hashedStr = crypto.createHmac("sha256", "secret")
		.update(data).digest("hex");
	return hashedStr;
}

const sendOtp = async (phone, otp) => {
	const options = {
		"method": "POST",
		"hostname": "api.msg91.com",
		"port": null,
		"path": "/api/v5/flow/",
		"headers": {
			"authkey": process.env.AUTHTOKEN,
			"content-type": "application/json"
		}
	};

	const req = http.request(options, function (res) {
		const chunks = [];

		res.on("data", function (chunk) {
		  chunks.push(chunk);
		});
	  
		res.on("end", function () {
		  const body = Buffer.concat(chunks);
		  console.log(body.toString());
		});
	});
	req.write(`\n{\n  \"flow_id\": \"${process.env.FLOWIDOTP}\",\n  \"recipients\": [\n    {\n      \"mobiles\": \"${phone}\",\n      \"var\": \"${otp}\"\n    }\n  ]\n}`);
	req.end();
}

module.exports = router;