import React, { useState,useEffect } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import './banner.css';
import api from "../../http";


const Banner = () => {

    const [banner1,setBanner1]=useState("")
    const [banner2,setBanner2]=useState("")
    const [banner3,setBanner3]=useState("")
    const [banner4,setBanner4]=useState("")
    const [banner5,setBanner5]=useState("")
    const [banner6,setBanner6]=useState("")

    useEffect(()=>{
         api.get("/api/settings/banner").then((data)=>{
            console.log(data.data);
            if(data.data.banner!=null){
                    setBanner1(data.data.banner.banner1);
                   setBanner2(data.data.banner.banner2);
                   setBanner3(data.data.banner.banner3);
                   setBanner4(data.data.banner.banner4);
                   setBanner5(data.data.banner.banner5);
                   setBanner6(data.data.banner.banner6);
            }
                 

                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    },[])

    const handleClick=(e)=>{
        api.post("/api/settings/banner",{banner:{banner1, banner2, banner3, banner4, banner5, banner6}}).then((data)=>{
                   alert("Saved successfully")
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }

    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="BannerContainer">
                    <div className="borderContainer">
                        <div className="BannerHead">
                            <h2>Banners</h2>
                        </div>
                        <div className="information">
                            <div className="fields3">
                                <div className="banner">
                                    <label> Banner 1</label>
                                    <input type="text" value={banner1} onChange={(e)=>setBanner1(e.target.value)}/>
                                </div>
                                <div className="banner">
                                    <label htmlFor="org">Banner 2</label>
                                    <input type="text" value={banner2} onChange={(e)=>setBanner2(e.target.value)}/>
                                </div>
                                <div className="banner">
                                    <label htmlFor="person_name">Banner 3</label>
                                    <input type="text" value={banner3} onChange={(e)=>setBanner3(e.target.value)}/>
                                </div>
                                <div className="banner">
                                    <label> Banner 4</label>
                                    <input type="text" value={banner4} onChange={(e)=>setBanner4(e.target.value)}/>
                                </div>
                                <div className="banner">
                                    <label> Banner 5</label>
                                    <input type="text" value={banner5} onChange={(e)=>setBanner5(e.target.value)}/>
                                </div>
                                <div className="banner">
                                    <label>Banner 6</label>
                                    <input type="text" value={banner6} onChange={(e)=>setBanner6(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="saveButton" onClick={(e)=>handleClick(e)}>Save</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner