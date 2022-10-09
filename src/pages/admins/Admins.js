import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import AdminsTable from '../admins/AdminsTable'
import './admins.css'

const Admins = () => {
    const modalOpen = () => {
        const modal = document.getElementById('modal');
        const container = document.getElementById('Container');
        container.style.opacity = '0.3'
        modal.style.display = 'flex'
    }
    const modalClose = () => {
        const modal = document.getElementById('modal');
        const container = document.getElementById('Container');
        container.style.opacity = '1'
        modal.style.display = 'none'
    }
    return (
        <div className="admins_main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="box" id="Container">
                <Navbar />
                <div className="adminsPage">
                    <div className="sortAndActions">
                        <h2>All Admins</h2>
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
                        <div className="addAdminBtn">
                            <Link to='/admins/addAdmin'>
                                <span>Add Admin</span>
                            </Link>
                        </div>
                    </div>
                    <div className="admins">
                        <AdminsTable modalOpen={modalOpen} />
                    </div>
                    {/*<div className="pageNum">
                        <KeyboardDoubleArrowLeftIcon />
                        <NavLink to='#'>1</NavLink>
                        <NavLink to='#'>2</NavLink>
                        <NavLink to='#'>3</NavLink>
                        <KeyboardDoubleArrowRightIcon />
                    </div>*/}
                </div>
            </div>
            <div id="modal">
                <h2>Edit Admin Details</h2>
                <div className="editFields2">
                    <div className="editAdmin">
                        <label>Name</label>
                        <input type="text" placeholder="Ex-John Doe" />
                    </div>
                    <div className="editAdmin">
                        <label>User Name</label>
                        <input type="text" placeholder="Ex-john_Doe" />
                    </div>
                    <div className="editAdmin">
                        <label >Password</label>
                        <input type="text" placeholder="Ex-johnode@1234" />
                    </div>
                    <div className="admin">
                        <label>Access</label>
                        <div className="checkBoxes">
                            <div className="check1">
                                <h3>Add Product</h3>
                                <input type="checkbox" name="" id="" />
                            </div>
                            <div className="check2">
                                <h3>Add Seller</h3>
                                <input type="checkbox" name="" id="" />
                            </div>
                            <div className="check3">
                                <h3>Add Buyer</h3>
                                <input type="checkbox" name="" id="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="editAndCloseBtn">
                    <div className="editBtn"><EditIcon /> Edit Details</div>
                    <div className="closeBtn" onClick={() => modalClose()}><CloseIcon /> Close</div>
                </div>
            </div>
        </div>
    )
}

export default Admins