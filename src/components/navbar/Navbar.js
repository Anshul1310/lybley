import "./Navbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SaveIcon from '@mui/icons-material/Save';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
import React, {useState, useEffect} from "react";
import api from "../../http";

import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

    const [rate, setRate] = useState(0);

    useEffect(()=>{
         api.get("/api/settings/rate").then((data)=>{
                    setRate(data.data);
                }).catch((err)=>{
                    alert("Network Error")
                });
    },[])

    const handleChange=(e)=>{
        api.post("/api/settings/rate",{rate
                }).then((data)=>{
                    console.log(data.data)
                    modalClose();
                    alert("Upload Successfull");
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }

    const modalOpen = () => {
        const modal = document.getElementById('modal');
        // const container = document.getElementById('UsersPage');
        // container.style.opacity = '0.3'
        modal.style.display = 'flex'
    }
    const modalClose = () => {
        const modal = document.getElementById('modal');
        // const container = document.getElementById('UsersPage');
        // container.style.opacity = '1'
        modal.style.display = 'none'
    }
    return (
        <>
            <div className="main" id="MainNav">
                <div className="left">
                    <input placeholder="Search.."></input>
                    <SearchIcon style={{ cursor: 'pointer' }} />
                </div>
                <div className="right">
                    {/* <div className="icon">
                    <DarkModeOutlinedIcon />

                </div> */}
                    <div className="icon">
                        <SettingsIcon onClick={() => modalOpen()} />
                    </div>
                    <Link to='/notification'>
                        <div className="icon">
                            <NotificationsNoneIcon />
                            <div className="notificationNumber">
                                1
                            </div>
                        </div>
                    </Link>
                </div>
            </div >
            <div id="modal">
                <h2>Enter Commission Percent</h2>
                <div className="editFields2">
                    <div className="editCommission1">
                        <label htmlFor="modalCommission">Commission Percent</label>
                        <input type="text" onChange={(e)=>setRate(e.target.value)} name="modalCommission" id="modalCommission" placeholder={rate} />
                    </div>
                </div>
                <div className="editAndCloseBtn">
                    <div className="editBtn" onClick={(e) => handleChange(e)}><SaveIcon /> Save</div>
                </div>
            </div >
        </>
    );

}

export default Navbar;