import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState,useEffect } from 'react';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import api from "../../http";
import './admins.css';


const EditAdmin = () => {
    const location=useLocation();
    const { from } = location.state;
    console.log(from);
    const [name, setName]=useState(from.name);
    const [email, setEmail]=useState(from.email);
    const [password, setPassword]=useState(from.password);
    let access=from.access;
    const navigate=useNavigate();

    const handleClick=(e)=>{
         api.post("/api/admin/update",{
                    name, email,id:from.id ,password, access
                }).then((data)=>{
                    navigate("/admins");
                    
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }

    useEffect(()=>{
        console.log(from.access)
    })

    const handleAccessChange=(e)=>{
        console.log(access);
        let key=e.target.name;
        let value=e.target.checked;
       access[key]=value
        console.log(access);
    }

    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="addAdminContainer">
                    <div className="borderContainer">
                        <div className="addAdminHead">
                            <Link to='/admins'><ArrowBackIcon className="arrowBack" /></Link>
                            <h2>Add Admin</h2>
                        </div>
                        <div className="information">
                            <div className="fields1">
                                <div className="admin">
                                    <label >Name</label>
                                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Ex-Steve Smith" />
                                </div>
                                <div className="admin">
                                    <label>Email</label>
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Ex-steve_Smith" />
                                </div>
                                <div className="admin">
                                    <label>Password</label>
                                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Ex-#strongpPassword" />
                                </div>
                                <div className="admin">
                                    <label>Access</label>
                                    <div className="checkBoxes">

                                        <div className="check1">
                                            <h3>Add Product</h3>
                                            <input defaultChecked={access.products} onChange={(e)=>handleAccessChange(e)} type="checkbox" name="products" id="" />
                                        </div>
                                        <div className="check2">
                                            <h3>Add Seller</h3>
                                            <input defaultChecked={access.sellers} onChange={(e)=>handleAccessChange(e)} type="checkbox" name="sellers" id="" />
                                        </div>
                                        <div className="check3">
                                            <h3>Add Buyer</h3>
                                            <input defaultChecked={access.buyers} onChange={(e)=>handleAccessChange(e)} type="checkbox" name="buyers" id="" />
                                        </div>
                                        <div className="check3">
                                            <h3>Add Admin</h3>
                                            <input defaultChecked={access.admin} onChange={(e)=>handleAccessChange(e)} type="checkbox" name="admin" id="" />
                                        </div>
                                        <div className="check3">
                                            <h3>Earnings Page</h3>
                                            <input defaultChecked={access.earnings} onChange={(e)=>handleAccessChange(e)} type="checkbox" name="earnings" id="" />
                                        </div>
                                        <div className="check3">
                                            <h3>Push Notification</h3>
                                            <input defaultChecked={access.notifications} onChange={(e)=>handleAccessChange(e)} type="checkbox" name="notifications" id="" />
                                        </div>
                                        <div className="check3">
                                            <h3>Add News</h3>
                                            <input defaultChecked={access.news} onChange={(e)=>handleAccessChange(e)} type="checkbox" name="news" id="" />
                                        </div>
                                         <div className="check3">
                                            <h3>Add Categories</h3>
                                            <input defaultChecked={access.categories} onChange={(e)=>handleAccessChange(e)} type="checkbox" name="categories" id="" />
                                        </div>
                                        <div className="check3">
                                            <h3>Add Stores</h3>
                                            <input defaultChecked={access.stores} onChange={(e)=>handleAccessChange(e)} type="checkbox" name="stores" id="" />
                                        </div>
                                          <div className="check3">
                                            <h3>Orders</h3>
                                            <input defaultChecked={access.orders} onChange={(e)=>handleAccessChange(e)} type="checkbox" name="orders" id="" />
                                        </div>
                                          <div className="check3">
                                            <h3>Static Products</h3>
                                            <input defaultChecked={access.staticProducts} onChange={(e)=>handleAccessChange(e)} type="checkbox" name="staticProducts" id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="addAdminButton" onClick={(e)=>handleClick(e)}>SAVE ADMIN</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditAdmin