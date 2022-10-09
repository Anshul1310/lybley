import axios from "axios";
import React from "react";

const api = axios.create({
	baseURL: "http://localhost:4000",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json"
	}
})



export default api;