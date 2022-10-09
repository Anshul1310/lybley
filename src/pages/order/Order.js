import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import React from 'react'
import Datatable from "../../components/datatable/Datatable"
import "./Order.css";

const Order = () => {
	return (
		<div className="order_container">
			<Sidebar />
			<div style={{ width: '174px' }}></div>
			<div className="box">
				<Navbar />
				<div className="user_info">
					<div className="user_info_left">
						<img width="120px" height="120px" src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg" alt="" />
					</div>
					<div className="user_info_right">
						<h1>Jane Doe</h1>
						<p>Email : johndoe@gmail.com</p>
						<p>Phone : (+91) 6483 438 7637</p>
						<p>Business Name : My Grocery Store</p>
						<p>Shop Type : SuperMarket</p>

						<p>Address College Road, Chamba, tehri Garhwal</p>
					</div>

				</div>
				<Datatable className="order_table" />

			</div>
		</div>);
}

export default Order;