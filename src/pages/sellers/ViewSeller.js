import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import api from "../../http";
import "./seller.css";



const ViewSeller = () => {
    const location = useLocation();
    const { from } = location.state;

const navigate=useNavigate();
    const [name, setName]=useState(from.name);
    const [gender, setGender]=useState(from.gender);
    const [age,setAge]=useState(from.age);
    const [status, setStatus]=useState(from.status);
    const [region,setRegion]=useState(from.region);
    const [zone, setZone]=useState(from.zone);
    const [woreda,setWoreda]=useState(from.woreda);
    const [kebele,setKebele]=useState(from.kebele);
    const [phone,setPhone]=useState(from.phone);
    const [additional_number,setAdditionalNumber]=useState(from.additional_number);
    const [email,setEmail]=useState(from.email);
    const [id]=useState(from.id);
    const [type,setType]=useState(from.type);
    const [level,setLevel]=useState(from.level);
    const [bookNumber,setBookNumber]=useState(from.bookNumber);
    const [tin,setTin]=useState(from.tin);

    
   const handleClick=(e)=>{
         api.post("/api/sellers/update",{
                    name, id,email, gender,status, bookNumber, zone,woreda, kebele, tin, additional_number, phone, type, level, age
                }).then((data)=>{
                    console.log(data);
                    navigate("/sellers");
                    
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
   }
    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="borderContainer">
                    <div className="viewHead">
                        <Link to='/sellers'><ArrowBackIcon className="arrowBack" /></Link>
                        <h2>Seller Details</h2>
                    </div>
                    <div className="information1">
                        <div className="editFields1">
                            <div className="viewSeller">
                                <label> Name</label>
                                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Ex-John Doe" />
                            </div>
                            <div className="viewSeller">
                                <label> Email</label>
                                <input  onChange={(e)=>setEmail(e.target.value)} type="email" value={email}  placeholder="Ex-johndoe@gmail.com" />
                            </div>

                            <div className="viewSeller">
                                <label>Category</label>
                                <select  onChange={(e)=>setType(e.target.value)} value={type}  >
                                    <option value="select">Select Catgeory</option>
                                    <option value="MultiFarmer">Multi Farmer</option>
                                    <option value="Producer">Producer</option>
                                    <option value="Importer">Importer</option>
                                    <option value="Distributor">Distributor</option>
                                    <option value="Wholesaler">Wholesaler</option>
                                </select>
                            </div>

                            <div className="viewSeller">
                                <label>Status</label>
                                <select  onChange={(e)=>setStatus(e.target.value)} value={status}  >
                                    <option value="pending">Pending</option>
                                    <option value="verified">Verified</option>
                                    <option value="rejected">Rejected</option>
                                   
                                </select>
                            </div>

                            <div className="viewSeller">
                                <label>Gender</label>
                                <input  onChange={(e)=>setGender(e.target.value)} type="email" value={gender}  placeholder="Ex-Male" />
                            </div>
                            <div className="viewSeller">
                                <label> Age</label>
                                <input  onChange={(e)=>setAge(e.target.value)} type="text" value={age}  placeholder="Ex-28" />
                            </div>

                            <div className="viewSeller">
                                <label >Category</label>
                                <select  onChange={(e)=>setRegion(e.target.value)} value={region} >
                                    <option value="select">Select Region</option>
                                    <option value="Tigray">Tigray</option>
                                    <option value="Afar">Afar</option>
                                    <option value="Amhara">Amhara</option>
                                    <option value="Oromia">Oromia</option>
                                    <option value="Somali">Somali</option>
                                    <option value="Benishangul-Gumuz">Benishangul-Gumuz</option>
                                    <option value="SNNPR">SNNPR</option>
                                    <option value="Gambella ">Gambella </option>
                                    <option value="Harari  ">Harari  </option>
                                </select>
                            </div>
                            <div className="viewSeller">
                                <label> Zone</label>
                                <input  onChange={(e)=>setZone(e.target.value)} type="text" value={zone}  placeholder="North Gondar" />
                            </div>
                            <div className="viewSeller">
                                <label > Woreda</label>
                                <input  onChange={(e)=>setWoreda(e.target.value)} type="text" value={woreda}  placeholder="Woreda" />
                            </div>
                            <div className="viewSeller">
                                <label> Kebele</label>
                                <input  onChange={(e)=>setKebele(e.target.value)} type="text" value={kebele}  placeholder="Kebele" />
                            </div>
                            <div className="viewSeller">
                                <label > Phone Number</label>
                                <input  onChange={(e)=>setPhone(e.target.value)} type="text" value={phone}  placeholder='Ex - +251 398198287 ' />
                            </div>
                            <div className="viewSeller">
                                <label >Additional Phone Number</label>
                                <input  onChange={(e)=>setAdditionalNumber(e.target.value)} type="text" value={additional_number}  placeholder='Ex - +251 398198287 ' />
                            </div>

                            <div className="viewSeller">
                                <label >Seller Level</label>
                                <select  onChange={(e)=>setLevel(e.target.value)} value={level} >
                                    <option value="Level 1">Level 1</option>
                                    <option value="Level 2">Level 2</option>
                                    <option value="Level 3">Level 3</option>
                                </select>
                            </div>
                            <div className="viewSeller">
                                <label >Book Number</label>
                                <input  onChange={(e)=>setBookNumber(e.target.value)} type="text" value={bookNumber}  placeholder="NNNN-NNNN-NNNN" />
                            </div>
                            <div className="viewSeller">
                                <label >TIN</label>
                                <input  onChange={(e)=>setTin(e.target.value)} type="text" value={tin}  placeholder="NNN-NNN-NNN" />
                            </div>
                        </div>
                        <div onClick={(e)=>handleClick(e)}><button className="ebtn">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewSeller;
