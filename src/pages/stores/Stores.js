import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SearchIcon from '@mui/icons-material/Search';
import api from "../../http";

import StoresTable from './StoresTable';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import { NavLink, Link } from 'react-router-dom';
import './stores.css'

const Stores = () => {

    const [name, setName] =useState();
    const [capacity, setCapacity]=useState();
    const [location, setLocation]=useState();
    const [id, setId]=useState();

    const setModelDetail=()=>{
            api.post("/api/stores/find",{id:localStorage.getItem("lastStore")}).then((data)=>{
                console.log(data.data);
                        setName(data.data.name);
                        setCapacity(data.data.capacity);
                        setLocation(data.data.location);
                    }).catch((err)=>{
                        alert("Network Conncetion Error");
                        console.log(err);
                    });
    }
    const modalOpen = () => {
        setModelDetail();
        const modal = document.getElementById('modal3');
        const container = document.getElementById('Container');
        container.style.opacity = '0.3'
        modal.style.display = 'flex'
    }

    const handleEdit=()=>{
        api.post("/api/stores/update",{name, location, capacity,id:localStorage.getItem("lastStore")}).then((data)=>{
                        modalClose();
window.location.reload();
                    }).catch((err)=>{
                        alert("Network Conncetion Error");
                        console.log(err);
                    });
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
            <div className="container" id='Container'>
                <Navbar />
                <div className="storesPage">
                    <div className="sortAndActions">
                        <h2>Stores List</h2>
                        {/* <div className="sortBox">
                            <select name="sorting" id="sorting">
                                <option value="sort">Sort By</option>
                                <option value="desc">Desc</option>
                                <option value="asc">Asc</option>
                            </select>
                        </div>
                        <div className="NumOfItems">
                            <select name="itemNum" id="itemNum">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                            </select>
                        </div> */}
                        <div className="searchBox">
                            <input type="text" name="filter" id="filter" />
                            <SearchIcon />
                        </div>
                        <div className="addStoreBtn">
                            <Link to='/stores/addStore'>
                                <span>Add Stores</span>
                            </Link>
                        </div>
                    </div>
                    <div className="allStores">
                        <StoresTable modalOpen={modalOpen} />
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
                <h2>Edit Store Details</h2>
                <div className="editFields2">
                    <div className="editStore">
                        <label>Store Name</label>
                        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Ex-JBM Supermall" />
                    </div>
                    <div className="editStore">
                        <label>Store Location</label>
                        <input onChange={(e)=>setLocation(e.target.location)} value={location} type="text" placeholder="Ex-Street 13 near hotel sun" />
                    </div>
                    <div className="editStore">
                        <label>Store Capacity</label>
                        <input onChange={(e)=>setCapacity(e.target.value)} value={capacity} type="text" placeholder="Ex-10000 items" />
                    </div>
                </div>
                <div className="editAndCloseBtn">
                    <div className="editBtn" onClick={(e)=>handleEdit(e)}><EditIcon /> Edit Details</div>
                    <div className="closeBtn" onClick={() => modalClose()}><CloseIcon /> Close</div>
                </div>
            </div>
            {/* <div id="modal1">
                <h2>Edit Seller Details</h2>
                <div className="editFields1">
                    <div className="editSellerName">
                        <label htmlFor="modalSeller"> Name</label>
                        <input type="text" name="modalSeller" id="modalSeller" placeholder="Ex-John Doe" />
                    </div>
                    <div className="editEmail">
                        <label htmlFor="modalEmal"> Email</label>
                        <input type="email" name="modalEmal" id="modalEmal" placeholder="Ex-johndoe@gmail.com" />
                    </div>

                    <div className="editSellerCate">
                        <label htmlFor="modalCategory">Category</label>
                        <select name="modalCategory" id="modalCategory">
                            <option value="select">Select Catgeory</option>
                            <option value="MultiFarmer">Multi Farmer</option>
                            <option value="Producer">Producer</option>
                            <option value="Importer">Importer</option>
                            <option value="Distributor">Distributor</option>
                            <option value="Wholesaler">Wholesaler</option>
                        </select>
                    </div>

                    <div className="editSellerGender">
                        <label htmlFor="modalGender">Gender</label>
                        <input type="email" name="modalGender" id="modalGender" placeholder="Ex-Male" />
                    </div>
                    <div className="editSellerAge">
                        <label htmlFor="modalAge"> Age</label>
                        <input type="text" name="modalAge" id="modalAge" placeholder="Ex-28" />
                    </div>

                    <div className="editSellerCate">
                        <label htmlFor="modalCategory">Category</label>
                        <select name="modalCategory" id="modalCategory">
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
                    <div className="editSellerZone">
                        <label htmlFor="modalZone"> Zone</label>
                        <input type="text" name="modalZone" id="modalZone" placeholder="North Gondar" />
                    </div>
                    <div className="editSellerWoreda">
                        <label htmlFor="woreda"> Woreda</label>
                        <input type="text" name="modalWoreda" id="modalWoreda" placeholder="Woreda" />
                    </div>
                    <div className="editSellerKebele">
                        <label htmlFor="kebele"> Kebele</label>
                        <input type="text" name="modalKebele" id="modalKebele" placeholder="Kebele" />
                    </div>
                    <div className="editSellerNumber">
                        <label htmlFor="modalNumber"> Phone Number</label>
                        <input type="text" name="modalNumber" id="modalNumber" placeholder='Ex - +251 398198287 ' />
                    </div>
                    <div className="editSellerAddiNumber">
                        <label htmlFor="modalAddiNumber">Additional Phone Number</label>
                        <input type="text" name="modalAddiNumber" id="modalAddiNumber" placeholder='Ex - +251 398198287 ' />
                    </div>

                    <div className="editSellerCate">
                        <label htmlFor="modalCategory">Seller Level</label>
                        <select name="modalCategory" id="modalCategory">
                            <option value="Level 1">Level 1</option>
                            <option value="Level 2">Level 2</option>
                            <option value="Level 3">Level 3</option>
                        </select>
                    </div>
                    <div className="editSellerBookNum">
                        <label htmlFor="modalBookNum">Book Number</label>
                        <input type="text" name="modalBookNum" id="modalBookNum" />
                    </div>
                    <div className="editSellerTinNum">
                        <label htmlFor="modalTin">TIN</label>
                        <input type="text" name="modalTin" id="modalTin" />
                    </div>
                </div>
                <div className="editAndCloseBtn">
                    <div className="editBtn"><EditIcon /> Edit Details</div>
                    <div className="closeBtn" onClick={() => modalClose()}><CloseIcon /> Close</div>
                </div>
            </div> */}

        </div>
    )
}

export default Stores