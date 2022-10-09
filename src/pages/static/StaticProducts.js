import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link, NavLink } from 'react-router-dom'
import './staticProducts.css'
import api from "../../http";
import {useState} from "react";
import StaticProductsTable from '../static/StaticProductsTable';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const StaticProducts = () => {

    const [title,setTitle]=useState("");
    const [price,setPrice]=useState("");
        const [image, setImage]=useState(null);

    const [id, setId]=useState(localStorage.getItem("lastProduct"));
    const [measuringUnit,setMeasuringUnit]=useState("");
    const [location,setLocation]=useState("");
    const [flag,setFlag]=useState(1);

    const setModelDetail=(id)=>{
        api.post("/api/product-price/find",{id}).then((data)=>{
                    console.log(data.data)
                    setTitle(data.data.title);
                    setPrice(data.data.price);
                    setMeasuringUnit(data.data.measuringUnit);
                    setLocation(data.data.location);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }

const handleEdit=(e)=>{
    api.post("/api/product-price/update",{id, title, image, measuringUnit, price, location}).then((data)=>{
                    
                    modalClose();
                    window.location.reload();
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
}
    const modalOpen = () => {
        setId(localStorage.getItem("lastProduct"));
        setModelDetail(localStorage.getItem("lastProduct"));
        console.log(localStorage.getItem("lastProduct"));
        const modal = document.getElementById('modal3');
        const container = document.getElementById('Container');
        container.style.opacity = '0.3'
        modal.style.display = 'flex'


    }

    const handleChange=(e)=>{
const file=e.target.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=function(){
            setImage(reader.result);
        }
}
    const modalClose = () => {
        const modal = document.getElementById('modal3');
        const container = document.getElementById('Container');
        container.style.opacity = '1'
        modal.style.display = 'none'
    }
    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container" id="Container">
                <Navbar />
                <div className="staticProductsPage">
                    <div className="sortAndActions">
                        <h2>All Products</h2>
                        {/*<div className="sortBox">
                            <select name="sorting" id="sorting">
                                <option value="sort">Sort By</option>
                                <option value="desc">Desc</option>
                                <option value="asc">Asc</option>
                            </select>
                        </div>*/}
                        {/*<div className="NumOfItems">
                            <select name="itemNum" id="itemNum">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                            </select>
                        </div>*/}
                        <div className="addSProducts">
                            <Link to='/staticProducts/addProduct'>
                                <span>Add Products</span>
                            </Link>
                        </div>
                    </div>
                    <div className="staticProducts">
                        <StaticProductsTable  modalOpen={modalOpen} />
                    </div>
                    <div className="pageNum">
                        <KeyboardDoubleArrowLeftIcon />
                        <NavLink to='#'>1</NavLink>
                        <NavLink to='#'>2</NavLink>
                        <NavLink to='#'>3</NavLink>
                        <KeyboardDoubleArrowRightIcon />
                    </div>
                </div>
            </div>

            <div id="modal3">
                <h2>Edit Product Details</h2>
                <div className="editFields2">

                 <div className="staticProductsInput">
                        <label>Image</label>
                        <input type="file"  onChange={(e)=>handleChange(e)} />
                    </div>
                    <div className="staticProductsInput">
                        <label>Product Name</label>
                        <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Ex-Cookie" />
                    </div>
                    <div className="staticProductsInput">
                        <label>Unit Of Measurement</label>
                        <input onChange={(e)=>setMeasuringUnit(e.target.value)} value={measuringUnit} type="text" placeholder="Ex-kg" />
                    </div>
                    <div className="staticProductsInput">
                        <label>Price</label>
                        <input onChange={(e)=>setPrice(e.target.value)} value={price} type="text" placeholder="Ex-$750" />
                    </div>
                    <div className="staticProductsInput">
                        <label>Location</label>
                        <input value={location} onChange={(e)=>setLocation(e.target.value)} type="text" placeholder="Ex-30/06/2022" />
                    </div>
                </div>
                <div className="editAndCloseBtn">
                    <div className="editBtn" onClick={(e)=>handleEdit(e)}><EditIcon /> Edit Product</div>
                    <div className="closeBtn" onClick={() => modalClose()}><CloseIcon /> Close</div>
                </div>
            </div>
        </div>
    )
}

export default StaticProducts