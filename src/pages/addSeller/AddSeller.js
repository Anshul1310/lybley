import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import api from "../../http";
import './addSeller.css';



const AddSeller = () => {
    const navigate=useNavigate();
    const [name, setName]=useState();
    const [gender, setGender]=useState();
    const [age,setAge]=useState();
    const [region,setRegion]=useState();
    const [zone, setZone]=useState();
    const [woreda,setWoreda]=useState();
    const [kebele,setKebele]=useState();
    const [phone,setPhone]=useState();
    const [additional_number,setAdditionalNumber]=useState();
    const [email,setEmail]=useState();
    const [type,setType]=useState("Importer");
    const [level,setLevel]=useState("Level 1");
    const [bookNumber,setBookNumber]=useState();
    const [tin,setTin]=useState();

    const handleClick=(e)=>{
            api.post("/api/sellers/add",{
                    name, email, gender, bookNumber, zone,woreda, kebele,region, tin, additional_number, phone, type, level, age
                }).then((data)=>{
                    navigate("/sellers");
                    console.log(data.data);
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
                <div className="addSellerContainer">
                    <div className="borderContainer">
                        <div className="addSellerHead">
                            <Link to='/sellers'><ArrowBackIcon className="arrowBack" /></Link>
                            <h2>Add Seller</h2>
                        </div>
                        <div className="information">
                            <div className="fields1">
                                <div className="sellerName">
                                    <label htmlFor="seller"> Name</label>
                                    <input type="text" onChange={(e)=>{setName(e.target.value)}} name="seller" id="seller" placeholder="Ex-John Doe" />
                                </div>
                                <div className="sellerGender">
                                    <label htmlFor="Gender">Gender</label>
                                    <input onChange={(e)=>{setGender(e.target.value)}} type="email" name="Gender" id="Gender" placeholder="Ex-Male" />
                                </div>
                                <div className="sellerAge">
                                    <label htmlFor="age"> Age</label>
                                    <input type="text" onChange={(e)=>{setAge(e.target.value)}} name="age" id="age" placeholder="Ex-28" />
                                </div>

                                <div className="sellerCate">
                                    <label htmlFor="sellerCategory">Category</label>
                                    <select name="sellerCategory" onChange={(e)=>{setRegion(e.target.value)}} id="sellerCategory">
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
                                <div className="sellerZone">
                                    <label htmlFor="zone"> Zone</label>
                                    <input type="text" onChange={(e)=>{setZone(e.target.value)}} name="zone" id="zone" placeholder="North Gondar" />
                                </div>
                                <div className="sellerWoreda">
                                    <label htmlFor="woreda"> Woreda</label>
                                    <input type="text" onChange={(e)=>{setWoreda(e.target.value)}} name="woreda" id="woreda" placeholder="Woreda" />
                                </div>
                                <div className="sellerKebele">
                                    <label htmlFor="kebele"> Kebele</label>
                                    <input type="text" name="kebele" onChange={(e)=>{setKebele(e.target.value)}}  id="kebele" placeholder="Kebele" />
                                </div>
                                <div className="sellerNumber">
                                    <label htmlFor="number"> Phone Number</label>
                                    <input type="text" name="number" onChange={(e)=>{setPhone(e.target.value)}} id="number" placeholder='Ex - +251 398198287 ' />
                                </div>
                                <div className="sellerAddiNumber">
                                    <label htmlFor="addiNumber">Additional Phone Number</label>
                                    <input type="text" name="addiNumber" onChange={(e)=>{setAdditionalNumber(e.target.value)}} id="addiNumber" placeholder='Ex - +251 398198287 ' />
                                </div>
                                <div className="sellerEmail">
                                    <label htmlFor="emal">Email</label>
                                    <input type="email" name="emal" onChange={(e)=>{setEmail(e.target.value)}} id="emal" placeholder='Ex-johndoes@example.com ' />
                                </div>
                                <div className="sellerCate">
                                    <label htmlFor="sellerCategory" >Seller Type</label>
                                    <select name="sellerCategory" onChange={(e)=>{setType(e.target.value)}} id="sellerCategory">
                                        <option value="select">Select Category</option>
                                        <option value="Multi Farmer">Multi Farmer</option>
                                        <option value="Producer">Producer</option>
                                        <option value="Importer">Importer</option>
                                        <option value="Distributor">Distributor</option>
                                    </select>
                                </div>
                                <div className="sellerCate">
                                    <label htmlFor="sellerCategory">Seller Level</label>
                                    <select name="sellerCategory" onChange={(e)=>{setLevel(e.target.value)}} id="sellerCategory">
                                        <option value="Level 1">Level 1</option>
                                        <option value="Level 2">Level 2</option>
                                        <option value="Level 3">Level 3</option>
                                    </select>
                                </div>
                                <div className="sellerBookNum">
                                    <label htmlFor="bookNum">Book Number</label>
                                    <input type="text" onChange={(e)=>{setBookNumber(e.target.value)}} name="bookNum" id="bookNum" />
                                </div>
                                <div className="sellerTinNum">
                                    <label htmlFor="tin">TIN</label>
                                    <input type="text" onChange={(e)=>{setTin(e.target.value)}} name="tin" id="tin" />
                                </div>
                            </div>
                        </div>
                        <div className="addSellerButton" onClick={(e)=>handleClick(e)}>ADD SELLER</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSeller