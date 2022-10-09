import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import api from "../../http";
import './addUser.css';


const AddUser = () => {
    const navigate=useNavigate();

    const handleClick=(e)=>{

     api.post("/api/buyers/add",{
                    name, email, tin, additional_number, organization
                    ,address, phone, type, contact_person, level, status:"verified"
                }).then((data)=>{
                    navigate("/users");
                    console.log(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }


    const [email, setEmail]=useState();
    const [name, setName]=useState();
    const [tin, setTin]=useState();
    const [additional_number, setAdditionalNumber]=useState();
    const [organization,setOrganisation]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");
    const [type,setType]=useState("");
    const [contact_person,setContactPerson]=useState("");
    const [level,setLevel]=useState("");

    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="addUserContainer">
                    <div className="borderContainer">
                        <div className="addUserHead">
                            <Link to='/users'><ArrowBackIcon className="arrowBack" /></Link>
                            <h2>Add User</h2>
                        </div>
                        <div className="information">
                            <div className="fields1">
                                <div className="orgName">
                                    <label htmlFor="org"> Organization</label>
                                    <input onChange={(e)=>{setOrganisation(e.target.value)}} type="text" name="org" id="org" placeholder="Ex-orgXYZ" />
                                </div>
                                <div className="orgName">
                                    <label htmlFor="org">Name</label>
                                    <input onChange={(e)=>{setName(e.target.value)}} type="text" name="org" id="org" placeholder="Ex-John Doe" />
                                </div>
                                <div className="personName">
                                    <label htmlFor="person_name">Contact Person</label>
                                    <input type="text" onChange={(e)=>{setContactPerson(e.target.value)}} name="person_name" id="person_name" placeholder="Ex-Susan Bond" />
                                </div>
                                <div className="buyerAddress">
                                    <label htmlFor="address"> Address</label>
                                    <textarea name="address" onChange={(e)=>{setAddress(e.target.value)}} id="address" rows='3' placeholder="Ex-Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512"></textarea>
                                </div>
                                <div className="buyerNumber">
                                    <label htmlFor="buyerPhoneNum"> Phone Number</label>
                                    <input type="text" onChange={(e)=>{setPhone(e.target.value)}} name="buyerPhoneNum" id="buyerPhoneNum" placeholder="Ex - +251 398198287 " />
                                </div>
                                <div className="buyerAddiNumber">
                                    <label htmlFor="buyerAddiNum"> Additional Phone Number</label>
                                    <input type="text" onChange={(e)=>{setAdditionalNumber(e.target.value)}} name="buyerAddiNum" id="buyerAddiNum" placeholder="Ex - +251 398198287 " />
                                </div>
                                <div className="buyerEmail">
                                    <label htmlFor="buyerEmal">Email</label>
                                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="buyerEmal" id="buyerEmal" placeholder='Ex-johndoes@example.com ' />
                                </div>
                                <div className="buyerCate">
                                    <label htmlFor="buyerCategory">Buyer Type</label>
                                    <select onChange={(e)=>{setType(e.target.value)}} name="buyerCategory" id="buyerCategory">
                                        <option value="select">Select Category</option>
                                        <option value="Multi Farmer">Retailer</option>
                                        <option value="Producer">Supermarket</option>
                                        <option value="Importer">Unions</option>
                                        <option value="Distributor">Other groups</option>
                                    </select>
                                </div>
                                <div className="buyerCate">
                                    <label htmlFor="buyerCategory">Buyer Level</label>
                                    <select onChange={(e)=>{setLevel(e.target.value)}} name="buyerCategory" id="buyerCategory">
                                        <option value="Level 1">Level 1</option>
                                        <option value="Level 2">Level 2</option>
                                        <option value="Level 3">Level 3</option>
                                    </select>
                                </div>
                                <div className="buyerTinNum">
                                    <label htmlFor="buyerTin">TIN</label>
                                    <input onChange={(e)=>{setTin(e.target.value)}} type="text" name="buyerTin" id="buyerTin" />
                                </div>
                            </div>
                        </div>
                        <div onClick={(e)=>{handleClick(e)}} className="addUserButton">ADD USER</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser