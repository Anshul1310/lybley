import React, {useState} from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import OrdersTable from '../ordersTable/OrdersTable';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';
import './Orders.css'

const Orders = () => {
	const [status, setStatus]=useState("all");
	const modalOpen = () => {
		const modal = document.getElementById('modal');
		const container = document.getElementById('bigContainer');
		container.style.opacity = '0.3'
		modal.style.display = 'flex'
	}
	const modalClose = () => {
		const modal = document.getElementById('modal');
		const container = document.getElementById('bigContainer');
		container.style.opacity = '1'
		modal.style.display = 'none'
	}
	return (
		<div className="main">
			<Sidebar />
			<div style={{ width: '174px' }}></div>
			<div className="container" id='bigContainer'>
				<Navbar />
				<div className="ordersPage">
					<div className="sortAndActions">
						<h2>All Orders</h2>
						<div className="sortBox">
							<select name="sorting" onChange={(e)=>setStatus(e.target.value)} id="sorting">
								<option value="all">All</option>
								<option value="dispatched">Dispatched</option>
								<option value="preparing">Preparing</option>
								<option value="onTheWay">OnTheWay</option>
								<option value="delivered">Delivered</option>
							</select>
						</div>
						
						{/*<div className="searchBox">
							<input type="text" name="filter" id="filter" />
							<SearchIcon />
						</div>*/}
						{/*<div className="actionBox">
							<input type="checkbox" name="action4" id="action4" />
							<label htmlFor="action4" className="drop">Action <ArrowDropDownIcon /></label>
							<div className="dropDown4">
								<ul className="dropUl4">
									<li>
										<a href="/">Action</a>
									</li>
									<li>
										<a href="/">Another Action</a>
									</li>
									<li>
										<a href="/">Something else here</a>
									</li>
								</ul>
							</div>
						</div>*/}
					</div>
					<div className="allOrders">
						<OrdersTable modalOpen={modalOpen} status={status} />
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
			{/* <div id="modal">
				<h2>Edit Order</h2>
				<div className="editFields">
					<div className="nameFields">
						<label htmlFor="personName">Name</label>
						<input type="text" name="personName" id="personName" placeholder='John Doe' />
					</div>
					<div className="priceFields">
						<label htmlFor="orderPrice">Price</label>
						<input type="text" name="orderPrice" id="orderPrice" placeholder='$1000' />
					</div>
					<div className="statusFields">
						<label htmlFor="orderStatus">Order</label>
						<input type="text" name="orderStatus" id="orderStatus" placeholder='Shipped' />
					</div>
				</div>
				<div className="editAndCloseBtn">
					<div className="editBtn"><EditIcon /> Edit Order</div>
					<div className="closeBtn" onClick={() => modalClose()}><CloseIcon /> Close</div>
				</div>
			</div> */}
		</div>
	)
}

export default Orders