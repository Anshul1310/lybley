import React,{useState} from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SearchIcon from '@mui/icons-material/Search';
import SellersTable from './SellersTable';

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink, Link } from 'react-router-dom';
import './seller.css'

const Sellers = () => {
    const [status, setStatus]=useState("verified");

    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container" id='bigContainer'>
                <Navbar />
                <div className="sellersPage">
                    <div className="sortAndActions">
                        <h2>Sellers List</h2>
                        <div className="sortBox">
                            <select name="sorting" value={status} onChange={(e)=>setStatus(e.target.value)} id="sorting">
                                <option value="pending">Pending</option>
                                <option value="rejected">Rejected</option>
                                <option value="verified">Verified</option>
                            </select>
                        </div>
                       {/* <div className="NumOfItems">
                            <select name="itemNum" id="itemNum">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                            </select>
                        </div>*/}
                        <div className="searchBox">
                            <input type="text" name="filter" id="filter" />
                            <SearchIcon />
                        </div>
                        <div className="addSellerBtn">
                            <Link to='/sellers/addSeller'>
                                <span>Add Seller</span>
                            </Link>
                        </div>
                    </div>
                    <div className="allSellers">
                        <SellersTable status={status} />
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

export default Sellers