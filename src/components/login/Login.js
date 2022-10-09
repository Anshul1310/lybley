import React from 'react'
import loginImg from './loginImg.png'
import './login.css'

import api from "../../http";
import {useState} from "react";
import { Link , useNavigate} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const navigate=useNavigate();
    const handleClick=(e)=>{
        api.post("/api/admin/login",{
			email:email, password:password
		}).then((data)=>{
           
            localStorage.setItem("token", data.data.accessToken);
            localStorage.setItem("home",data.data.admin.access.home);
             localStorage.setItem("buyers",data.data.admin.access.buyers);
              localStorage.setItem("sellers",data.data.admin.access.sellers);
               localStorage.setItem("products",data.data.admin.access.products);
                localStorage.setItem("orders",data.data.admin.access.orders);
                localStorage.setItem("news",data.data.admin.access.news);
                localStorage.setItem("banner",data.data.admin.access.news);
                 localStorage.setItem("earnings",data.data.admin.access.earnings);
                 localStorage.setItem("stores",data.data.admin.access.stores);
                 localStorage.setItem("staticProducts",data.data.admin.access.staticProducts);
                 localStorage.setItem("admin",data.data.admin.access.admin);
                 localStorage.setItem("categories",data.data.admin.access.categories);
                 localStorage.setItem("notifications",data.data.admin.access.notifications);

            navigate("/home");
		}).catch((err)=>{
            alert("Invalid Crdentials");
            
        });
    }


    return (
        <div className="login">
            <div className="loginBox">
                <img src={loginImg} alt="" />
                <div className="loginDetails">
                    <h1>Hello,Welcome!</h1>
                    <p>Please Enter Your Details Below To Continue</p>
                    <div className="input">
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Email Address' />
                        <svg className='emal' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483.3 483.3">
                            <path d="M424.3,57.75H59.1c-32.6,0-59.1,26.5-59.1,59.1v249.6c0,32.6,26.5,59.1,59.1,59.1h365.1c32.6,0,59.1-26.5,59.1-59.1    v-249.5C483.4,84.35,456.9,57.75,424.3,57.75z M456.4,366.45c0,17.7-14.4,32.1-32.1,32.1H59.1c-17.7,0-32.1-14.4-32.1-32.1v-249.5    c0-17.7,14.4-32.1,32.1-32.1h365.1c17.7,0,32.1,14.4,32.1,32.1v249.5H456.4z" data-original="#000000" className="active-path" data-old_color="#000000" fill="rgb(186 183 255)"></path><path d="M304.8,238.55l118.2-106c5.5-5,6-13.5,1-19.1c-5-5.5-13.5-6-19.1-1l-163,146.3l-31.8-28.4c-0.1-0.1-0.2-0.2-0.2-0.3    c-0.7-0.7-1.4-1.3-2.2-1.9L78.3,112.35c-5.6-5-14.1-4.5-19.1,1.1c-5,5.6-4.5,14.1,1.1,19.1l119.6,106.9L60.8,350.95    c-5.4,5.1-5.7,13.6-0.6,19.1c2.7,2.8,6.3,4.3,9.9,4.3c3.3,0,6.6-1.2,9.2-3.6l120.9-113.1l32.8,29.3c2.6,2.3,5.8,3.4,9,3.4    c3.2,0,6.5-1.2,9-3.5l33.7-30.2l120.2,114.2c2.6,2.5,6,3.7,9.3,3.7c3.6,0,7.1-1.4,9.8-4.2c5.1-5.4,4.9-14-0.5-19.1L304.8,238.55z" data-original="#000000" className="active-path" data-old_color="#000000" fill="rgb(186 183 255)">
                            </path>
                        </svg>

                        <input type="password" onChange={(e)=>setPassword(e.target.value)} name="pass" id="pass" placeholder='password' />
                        <svg className='lock' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.8 482.8"><path d="M395.95,210.4h-7.1v-62.9c0-81.3-66.1-147.5-147.5-147.5c-81.3,0-147.5,66.1-147.5,147.5c0,7.5,6,13.5,13.5,13.5    s13.5-6,13.5-13.5c0-66.4,54-120.5,120.5-120.5c66.4,0,120.5,54,120.5,120.5v62.9h-275c-14.4,0-26.1,11.7-26.1,26.1v168.1    c0,43.1,35.1,78.2,78.2,78.2h204.9c43.1,0,78.2-35.1,78.2-78.2V236.5C422.05,222.1,410.35,210.4,395.95,210.4z M395.05,404.6    c0,28.2-22.9,51.2-51.2,51.2h-204.8c-28.2,0-51.2-22.9-51.2-51.2V237.4h307.2L395.05,404.6L395.05,404.6z" data-original="#000000" className="active-path" data-old_color="#000000" fill="rgb(186 183 255)"></path><path d="M241.45,399.1c27.9,0,50.5-22.7,50.5-50.5c0-27.9-22.7-50.5-50.5-50.5c-27.9,0-50.5,22.7-50.5,50.5    S213.55,399.1,241.45,399.1z M241.45,325c13,0,23.5,10.6,23.5,23.5s-10.5,23.6-23.5,23.6s-23.5-10.6-23.5-23.5    S228.45,325,241.45,325z" data-original="#000000" className="active-path" data-old_color="#000000" fill="rgb(186 183 255)"></path></svg>
                    </div>
                    <div className="buttons">
                        <button className='adminBtn'><Link to='/'> Fill Admin Details</Link></button>
                        <button className='sellerBtn' onClick={(e)=>handleClick(e)} >Login</button>
                    </div>
                    <div className="check">
                        <label>
                            <input type="checkbox" name="remember_me" className="ad-checkbox" />
                            <span>Remember Me</span>
                        </label>
                    </div>
                    <p className='register'>Don't have a seller account? <a href="/">Click Here</a> </p>
                </div>
            </div>
        </div>
    )
}

export default Login