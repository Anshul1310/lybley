import "./Users.css";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { useLocation , useNavigate} from 'react-router-dom'
import {useEffect, useState} from "react";
import api from "../../http";


import { Link } from 'react-router-dom'

const ViewUser = () => {

const location = useLocation()
    const { from } = location.state;
    const [email, setEmail]=useState(from.email);
    const [name, setName]=useState(from.name);
    const [tin, setTin]=useState(from.tin);
    const navigate=useNavigate();
    const [id,setId]=useState(from._id);
        const [status, setStatus]=useState(from.status);

    const [additional_number, setAdditionalNumber]=useState(from.additional_number);
    const [organization,setOrganisation]=useState(from.organization);
    const [address,setAddress]=useState(from.address);
    const [phone,setPhone]=useState(from.phone);
    const [type,setType]=useState(from.type);
    const [contact_person,setContactPerson]=useState(from.contact_person);
    const [level,setLevel]=useState(from.level);
    
   

    const editUser = () => {
         api.post("/api/buyers/update",{
                    name, email, id,status, tin, additional_number, organization
                    ,address, phone, type, contact_person, level
                }).then((data)=>{
                    navigate("/users");
                    console.log(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }

    const closeEdit = () => {
        const input = document.querySelectorAll('input');
        const select = document.querySelectorAll('select');
        document.getElementById('cls').style.display = "none"
        document.querySelectorAll('textarea')[0].disabled= true;
        for (let i = 0; i < input.length; i++) {
            input[i].disabled = true
        }
        for (let i = 0; i < select.length; i++) {
            select[i].disabled = true
        }
    }
    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="borderContainer">
                    <div className="viewHead">
                        <Link to='/users'><ArrowBackIcon className="arrowBack" /></Link>
                        <h2>User Details</h2>
                    </div>
                    <div className="information1">
                        <div className="editFields1">
                            <div className="viewUser">
                                <label> Organization</label>
                                <input type="text" onChange={(e)=>setOrganisation(e.target.value)} value={organization} placeholder="Ex-orgXYZ" />
                            </div>
                            <div className="viewUser">
                                <label>Contact Person</label>
                                <input type="text" onChange={(e)=>setContactPerson(e.target.value)} value={contact_person} placeholder="Ex-Susan Bond" />
                            </div>
                            <div className="viewUser">
                                <label > Address</label>
                                <textarea  rows='3' onChange={(e)=>setAddress(e.target.value)} value={address} placeholder="Ex-Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512"></textarea>
                            </div>
                            <div className="viewUser">
                                <label > Phone Number</label>
                                <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder="Ex - +251 398198287 " />
                            </div>
                            <div className="viewUser">
                                <label > Additional Phone Number</label>
                                <input type="text" onChange={(e)=>setAdditionalNumber(e.target.value)} value={additional_number}  placeholder="Ex - +251 398198287 " />
                            </div>
                            <div className="viewUser">
                                <label >Email</label>
                                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}  placeholder='Ex-johndoes@example.com ' />
                            </div>
                            <div className="viewUser">
                                <label>Buyer Type</label>
                                <select onChange={(e)=>setType(e.target.value)} value={type} >
                                    <option value="select">Select Category</option>
                                    <option value="Multi Farmer">Retailer</option>
                                    <option value="Producer">Supermarket</option>
                                    <option value="Importer">Unions</option>
                                    <option value="Distributor">Other groups</option>
                                </select>
                            </div>
                            <div className="viewUser">
                                <label >Buyer Level</label>
                                <select value={level} onChange={(e)=>setLevel(e.target.value)} >
                                    <option value="Level 1">Level 1</option>
                                    <option value="Level 2">Level 2</option>
                                    <option value="Level 3">Level 3</option>
                                </select>
                            </div>
                            <div className="viewUser">
                                <label >Status</label>
                                <select value={status} onChange={(e)=>setStatus(e.target.value)} >
                                    <option value="pending">Pending</option>
                                    <option value="verified">Verified</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </div>
                            <div className="viewUser">
                                <label >TIN</label>
                                <input type="text" onChange={(e)=>setTin(e.target.value)} value={tin}  placeholder="NNN-NNN-NNN" />
                            </div>
                        </div>
                        <div className="editAndCloseBtn">
                            <div className="editBtn" onClick={() => editUser()}><EditIcon /> Edit Details</div>
                            <div className="closeBtn" id="cls" onClick={() => closeEdit()}><CloseIcon /> Close</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser;
