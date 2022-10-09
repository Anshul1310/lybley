import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'
import './stores.css'
import {useState} from "react";
import api from "../../http";
import {useNavigate} from "react-router-dom";


const AddStore = () => {
    const navigate=useNavigate();
    const [name, setName]=useState();
    const [location, setLocation]=useState();
    const [capacity, setCapacity]=useState();

    const handleClick=(e)=>{
  api.post("/api/stores/add",{
                name, location, capacity
                }).then((data)=>{
                    navigate("/stores")
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
                <div className="addStoreContainer">
                    <div className="borderContainer">
                        <div className="addStoreHead" style={{ alignSelf: 'center' }}>
                            <Link to='/stores'><ArrowBackIcon className="arrowBack" /></Link>
                            <h2>Add Store</h2>
                        </div>
                        <div className="information">
                            <div className="fields1" style={{ justifyContent: 'center' }}>
                                <div className="addStore">
                                    <label> Store Name</label>
                                    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Ex-JBM supermall" />
                                </div>
                                <div className="addStore">
                                    <label> Store Location</label>
                                    <input onChange={(e)=>setLocation(e.target.value)} type="text" placeholder="Ex-street 13 near sun's hotel" />
                                </div>
                                <div className="addStore">
                                    <label> Store Capacity</label>
                                    <input onChange={(e)=>setCapacity(e.target.value)} type="text" placeholder="Ex-10000 items" />
                                </div>
                            </div>
                        </div>
                        <div className="addStoreButton" onClick={(e)=>handleClick(e)}>ADD STORE</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStore