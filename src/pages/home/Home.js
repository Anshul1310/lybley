import LineChart from '../../components/chart/LineChart';
import PieChart from '../../components/chart/PieChart';

import DetailsBox from "../../components/detailsBox/DetailBox";
import Navbar from "../../components/navbar/Navbar";
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import api from "../../http/"
import OrderTableRow from "./OrderTableRow";
import baseUrl from "../../http/Constant";

import ProductTableRow from "./ProductTableRow";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";

const Home = () => {

	const [transaction, setTransaction] = useState({ initiated: 1, success: 1 });
	const [products, setProducts] = useState([]);
	const [orders, setOrders] = useState([]);
	const [isChanged, setIsChanged] = useState(false)
	const [isChanged2, setIsChanged2] = useState(false)

	const [barChart, setBarChart] = useState({ sellers: [], buyers: [], products: [] });
	useEffect(() => {
		api.get("/api/transaction/info").then((data) => {
			setTransaction(data.data)
			setIsChanged(true);

			api.get("/api/order/recent").then((data) => {
				setOrders(data.data)

				api.get("/api/product/recent").then((data) => {

					setProducts(data.data)

					api.get("/api/settings/info", { query: 7 }).then((data) => {
						setIsChanged2(true);

						setBarChart(data.data);

					}).catch((err) => {
						alert("Network Conncetion Error");
						console.log(err);
					});

				}).catch((err) => {
					alert("Network Conncetion Error");
					console.log(err);
				});


			}).catch((err) => {
				alert("Network Conncetion Error");
				console.log(err);
			});


		}).catch((err) => {
			alert("Network Conncetion Error");
			console.log(err);
		});
	}, [])

	return (
		<div className="main">
			<Sidebar />
			<div style={{ width: '174px' }}></div>
			<div className="container">
				<Navbar />
				<div className="top_info">
					<DetailsBox className="detail_box" />
				</div>
				<div className="charts">
					<PieChart transaction={transaction} />
					<LineChart barCharts={barChart} />
				</div>

				<div className="section">
					<div className="recentProducts">
						<h2>Recent Products</h2>
						<p>Products added today. Click <Link to='/products'>here</Link> for more details </p>
						<table>
							<thead>
								<tr className="head">
									<td>SELLER ID</td>
									<td>IMAGE</td>
									<td>PRICE</td>
									<td>MEASURING UNIT</td>
									<td>CATEGORY</td>
								</tr>
							</thead>
							<tbody>
								{
									products.map((data,id) => {
										return <ProductTableRow key={id} image={baseUrl + "" + data.image} seller={data.seller}
											price={data.price} category={data.category} measuringUnit={data.measuringUnit} />
									})
								}

							</tbody>
						</table>
					</div>

					<div className="recentProducts">
						<h2>Recent Orders</h2>
						<p>Orders ordered today. Click <Link to='/orders'>here</Link> for more details </p>
						<table>
							<thead>
								<tr className="head">

									<td>ORDER ID</td>
									<td>STATUS</td>
									<td>BUYER</td>
									<td>PRICE</td>
									<td>DATE</td>
								</tr>
							</thead>
							<tbody>

								{
									orders.map((data, id) => {
										return <OrderTableRow key={id} buyer={data.buyer} createdAt={data.createdAt}
											totalPrice={data.totalPrice} orderId={data.orderId} status={data.status} />
									})
								}

							</tbody>
						</table>
					</div>

					{/* <div className="notification">
						<div className="notificationMain">
							<h2>Notification</h2>
							<Link to='/notification'> <ArrowForwardIcon style={{ cursor: 'pointer', color: '#000' }} /></Link>
						</div>
						<div className="notifi">
							<PersonIcon className='user' />
							<div className="detail">
								<p className="info">You joined a group</p>
								<p className="time"><AccessTimeIcon /> Today</p>
							</div>
						</div>
						<div className="notifi">
							<InventoryIcon className='storage' />
							<div className="detail">
								<p className="info">Storage is running low!</p>
								<p className="time"><AccessTimeIcon /> Today</p>
							</div>
						</div>
						<div className="notifi">
							<InsertDriveFileIcon className='file' />
							<div className="detail">
								<p className="info">1 person sent a file</p>
								<p className="time"><AccessTimeIcon /> Yesterday</p>
							</div>
						</div>
						<div className="notifi">
							<FileDownloadIcon className="download" />
							<div className="detail">
								<p className="info">Reports ready to download</p>
								<p className="time"><AccessTimeIcon /> Yesterday</p>
							</div>
						</div>
						<div className="notifi">
							<LockIcon className="secure" />
							<div className="detail">
								<p className="info">2 steps verification</p>
								<p className="time"><AccessTimeIcon /> 20min ago</p>
							</div>
						</div>
						<div className="buttons" style={{ marginTop: '20px' }}>
							<div className="readAllBtn"><DoneIcon /> Make all read</div>
							<div className="deleteAllBtn"><DeleteIcon /> Delete all</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>);
}

export default Home;