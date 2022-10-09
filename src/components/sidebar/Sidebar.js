import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedIcon from '@mui/icons-material/Feed';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import React from "react";

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import { Link, useNavigate } from 'react-router-dom';
import "./Sidebar.scss";

const Sidebar = () => {
	const navigate = useNavigate();
	const logoutUser = (e) => {
		localStorage.removeItem("token")
		navigate("/login");
	}
	return (
		<div className="Sidebar">
			<div className="top">
				<span className="heading">Ecom_Admin</span>
			</div>

			<div className="center">
				<ul>
					<span className="labels">MAIN</span>
					<li className="item">
						<a href='/'>
							<DashboardIcon className="icon" />
							<span className="spanList">Dashboard</span>
						</a>
					</li>

					<p id="label2" className="labels">LISTS</p>
					<li className="item">
						<a href='/users'>
							<PersonOutlineIcon className="icon" />
							<span className="spanList">Users</span>
						</a>
					</li>
					<li className="item">
						<a href='/products'>
							<StoreMallDirectoryIcon className="icon" />
							<span className="spanList">Products</span>
						</a>
					</li>
					<li className="item">
						<a href='/banner'>
							<StoreMallDirectoryIcon className="icon" />
							<span className="spanList">Banner Images</span>
						</a>
					</li>
					<li className="item">
						<a href='/categories'>
							<CategoryOutlinedIcon className="icon" />
							<span className="spanList">Categories</span>
						</a>
					</li>
					<li className="item">
						<a href='/sellers'>
							<LocalShippingOutlinedIcon className="icon" />
							<span className="spanList">Sellers</span>
						</a>
					</li>
					<li className="item">
						<a href='/stores'>
							<StoreMallDirectoryIcon className="icon" />
							<span className="spanList">Stores</span>
						</a>
					</li>
					<li className="item">
						<a href='/newsCategory'>
							<CategoryOutlinedIcon className="icon" />
							<span className="spanList">News Category</span>
						</a>
					</li>
					<li className="item">
						<a href='/earnings'>
							<PersonOutlineIcon className="icon" />
							<span className="spanList">Earnings</span>
						</a>
					</li>
					<li className="item">
						<a href='/orders'>
							<ShoppingBasketIcon className="icon" />
							<span className="spanList">Orders</span>
						</a>
					</li>
					<li className="item">
						<a href='/staticProducts'>
							<StoreMallDirectoryIcon className="icon" />
							<span className="spanList">Static Products</span>
						</a>
					</li>

					<p className="labels">MAIN</p>

					<li className="item">
						<a href='/notification'>
							<NotificationsNoneIcon className="icon" />
							<span className="spanList">Notifications</span>
						</a>
					</li>
					<li className="item">
						<a href='/news'>
							<FeedIcon className="icon" />
							<span className="spanList">News</span>
						</a>
					</li>
					<li className="item">
						<a href='/admins'>
							<SettingsIcon className="icon" />
							<span className="spanList">Admins</span>
						</a>
					</li>

					<li className="item" onClick={(e) => logoutUser(e)}>

						<LogoutIcon className="icon" />
						<span className="spanList">Logout</span>

					</li>
				</ul>
			</div>

			{/* <div className="bottom">
				<div className="containerOne">

				</div>
				<div className="containerTwo">

				</div>
			</div> */}
		</div>
	);
}

export default Sidebar;