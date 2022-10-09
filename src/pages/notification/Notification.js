import "./Notification.css";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'
import InventoryIcon from '@mui/icons-material/Inventory';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LockIcon from '@mui/icons-material/Lock';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";


const Notification = () => {
	const openTab = (tabName) => {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(tabName).style.display = "flex";
		// evt.currentTarget.className += " active";
	}
	return (
		<div className="notification_main">
			<Sidebar />
			<div style={{ width: '174px' }}></div>
			<div className="box">
				<Navbar />
				<div className="notificationContainer">
					<div className="pushNotificationBox">
						<div className="pushBtn">
							<Link to='/notification/push'>Push Notification</Link>
						</div>
					</div>
					<div className="notificationBox">
						<div className="notificationMain">
							<h2 className='tablinks' onClick={() => openTab('Notifications')}>Notifications</h2>
							{/* <h2 className='tablinks' onClick={() => openTab('Notes')}>Notes</h2> */}
							<h2 className='tablinks' onClick={() => openTab('Alerts')}>Alerts</h2>
							{/* <Link to='/notification'> <ArrowForwardIcon style={{ cursor: 'pointer', color: '#000' }} /></Link> */}
						</div>
						<div className="notification1 tabcontent" id='Notifications'>
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
						</div>

						{/* <div className="notes1 tabcontent" id='Notes'>
							<div className="notes">
								<p style={{ fontWeight: 'bold', color: '#05b171' }}>This month's report will be prepared</p>
								<p className="time"><AccessTimeIcon /> Today</p>
								<p className="notesBtn">
									<div className="notesEdit">Edit</div>
									<div className="notesDelete">Delete</div>
								</p>
							</div>
							<div className="notes">
								<p style={{ fontWeight: 'bold', color: '#05b171' }}>This month's report will be prepared</p>
								<p className="time"><AccessTimeIcon /> Today</p>
								<p className="notesBtn">
									<div className="notesEdit">Edit</div>
									<div className="notesDelete">Delete</div>
								</p>
							</div>
							<div className="notes">
								<p style={{ fontWeight: 'bold', color: '#05b171' }}>This month's report will be prepared</p>
								<p className="time"><AccessTimeIcon /> Today</p>
								<p className="notesBtn">
									<div className="notesEdit">Edit</div>
									<div className="notesDelete">Delete</div>
								</p>
							</div>
							<div className="notes">
								<p style={{ fontWeight: 'bold', color: '#05b171' }}>This month's report will be prepared</p>
								<p className="time"><AccessTimeIcon /> Today</p>
								<p className="notesBtn">
									<div className="notesEdit">Edit</div>
									<div className="notesDelete">Delete</div>
								</p>
							</div>
							<div className="notes">
								<p style={{ fontWeight: 'bold', color: '#05b171' }}>This month's report will be prepared</p>
								<p className="time"><AccessTimeIcon /> Today</p>
								<p className="notesBtn">
									<div className="notesEdit">Edit</div>
									<div className="notesDelete">Delete</div>
								</p>
							</div>
						</div> */}

						<div className="alerts1 tabcontent" id='Alerts'>
							<div className="alerts">
								<LockIcon style={{ background: '#faee42', padding: '0.5rem', borderRadius: '50%' }} />
								<div className="detail">
									<p style={{ fontWeight: 'bold', color: '#000' }}>Signed in with a new Device</p>
									<p className="time"><AccessTimeIcon /> Yesterday</p>
								</div>
							</div>
							<div className="alerts">
								<LockIcon style={{ background: '#faee42', padding: '0.5rem', borderRadius: '50%' }} />
								<div className="detail">
									<p style={{ fontWeight: 'bold', color: '#000' }}>Signed in with a new Device</p>
									<p className="time"><AccessTimeIcon /> Yesterday</p>
								</div>
							</div>
							<div className="alerts">
								<InsertDriveFileIcon style={{ background: '#faee42', padding: '0.5rem', borderRadius: '50%' }} />
								<div className="detail">
									<p style={{ fontWeight: 'bold', color: '#000' }}>Your billing information is not active</p>
									<p className="time"><AccessTimeIcon /> Yesterday</p>
								</div>
							</div>
							<div className="alerts">
								<PersonIcon style={{ background: '#faee42', padding: '0.5rem', borderRadius: '50%' }} />
								<div className="detail">
									<p style={{ fontWeight: 'bold', color: '#000' }}>Your subscription has expired</p>
									<p className="time"><AccessTimeIcon /> Today</p>
								</div>
							</div>
							<div className="alerts">
								<InventoryIcon style={{ background: '#faee42', padding: '0.5rem', borderRadius: '50%' }} />
								<div className="detail">
									<p style={{ fontWeight: 'bold', color: '#000' }}>Your storage space is running low</p>
									<p className="time"><AccessTimeIcon /> Today</p>
								</div>
							</div>
							<div className="buttons" style={{ marginTop: '20px' }}>
								<div className="readAllBtn"><DoneIcon /> Make all read</div>
								<div className="deleteAllBtn"><DeleteIcon /> Delete all</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>);
}

export default Notification;