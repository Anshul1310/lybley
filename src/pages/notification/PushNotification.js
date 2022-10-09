import "./Notification.css";
import React,{useState} from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link , useNavigate} from 'react-router-dom'
import api from "../../http";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from "axios";

const PushNotification = () => {
    const [title, setTitle] = useState("");
    const navigate=useNavigate();
    const [description, setDescription] = useState("");
    const [topic, setTopic] = useState("buyers");
    const handleClick=(e)=>{
            api.post("/api/notification/send",{body:description, title, topic}).then((data)=>{
                   alert("Sent successfully")
                    navigate("/notification")
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }
    return (
        <div className="notification_main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="box">
                <Navbar />
                <div className="mainNotifiContainer">
                    <div className="borderContainer">
                        <div className="pushNotificationHead">
                            <Link to='/notification'><ArrowBackIcon className="arrowBack" /></Link>
                            <h2>Push Notification</h2>
                        </div>
                        <div className="information">
                            <div className="fields">
                                <div className="notificationTitle">
                                    <label htmlFor="notifiTitle">Title</label>
                                    <input type="text" onChange={(e)=>setTitle(e.target.value)} name="notifiTitle" id="notifiTitle" placeholder="Ex-Out Of Stock" />
                                </div>
                                <div className="editProductCate">
                                <label htmlFor="modalCategory">To</label>
                                    <select onChange={(e)=>setTopic(e.target.value)} name="category" id="modalCategory">
                                       <option value="buyers">Buyers</option>
                                       <option value="sellers">Sellers</option>
                                    </select>
                                </div>
                                <div className="notificationDes">
                                    <label htmlFor="notifiDesc">Message</label>
                                    <textarea name="notifiDesc"  onChange={(e)=>setDescription(e.target.value)} id="notifiDesc" rows='7' placeholder="Ex-Your listed items are out of stock"></textarea>
                                </div>
                            </div>
                        </div>
                        <div onClick={(e)=>handleClick(e)} className="pushBtn">
                          Push Notification
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PushNotification