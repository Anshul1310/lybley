import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import React from 'react'
import ReactDOM from 'react-dom'

const ProtectedRoute=(props)=>{
	const navigate=useNavigate();
	const {Component, name}=props;
	useEffect(()=>{
		console.log(name)
		if(localStorage.getItem("token")===null ){
			navigate("/login");
		}else{
			if(localStorage.getItem(name)!=null){
				if(localStorage.getItem(name)=="false"){
				navigate("/home");
				alert("Sorry, You have no access to this page2.")
			}
		}
		}
	},[])
	return (
		<Component/>
	)

}

export default ProtectedRoute;
