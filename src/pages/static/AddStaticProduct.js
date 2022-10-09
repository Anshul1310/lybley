import "./staticProducts.css";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {useState, useEffect} from "react";
import api from "../../http";
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link , useNavigate} from 'react-router-dom'

const AddStaticProduct = () => {
    const navigate=useNavigate();
    const [title, setTitle]=useState();
    const [measuringUnit, setMeasuringUnit] =useState();
    const [image, setImage]=useState();
    const [price,setPrice]=useState();
    const [location,setLocation]=useState();

const handleClick=(e)=>{
    
    api.post("/api/product-price/add",{
                title, measuringUnit, image, price,location
                }).then((data)=>{
                    navigate("/staticProducts")
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
}

const handleChange=(e)=>{
const file=e.target.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=function(){
            setImage(reader.result);
        }
}
    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="borderContainer">
                    <div className="addProductHead">
                        <Link to='/staticProducts'><ArrowBackIcon className="arrowBack" /></Link>
                        <h2>Add Product</h2>
                    </div>
                    <div className="information">
                        <div className="fields">
                            <div className="staticProductsInput">
                                <label>Product Name</label>
                                <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Ex-Cookie" />
                            </div>
                            <div className="staticProductsInput">
                                <label>Unit Of Measurement</label>
                                <input type="text" onChange={(e)=>setMeasuringUnit(e.target.value)} placeholder="Ex-kg" />
                            </div>
                            <div className="staticProductsInput">
                                <label>Price</label>
                                <input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="Ex-$750" />
                            </div>
                            <div className="staticProductsInput">
                                <label>Location</label>
                                <input type="text" onChange={(e)=>setLocation(e.target.value)} placeholder="Ex-$750" />
                            </div>
                        </div>
                        <div className="productImage">
                            <div className="img" >
                                <input type="file" name="fileInput" onChange={(e)=>handleChange(e)} id="fileInput" />
                                <img width="100%" height="100%" src={image}/>
                            </div>
                            <div className="upload" ><label htmlFor="fileInput">UPLOAD PRODUCT IMAGE</label></div>
                        </div>
                    </div>
                    <div className="addButton" onClick={(e)=>handleClick(e)}>ADD PRODUCT</div>
                </div>

            </div>
        </div>
    )
}

export default AddStaticProduct;
