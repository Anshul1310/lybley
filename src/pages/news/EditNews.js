import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link,useNavigate,useLocation } from 'react-router-dom'
import api from "../../http";
import { useState, useEffect} from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PushNews = () => {
    const location = useLocation()

 const { from } = location.state;
    const navigate=useNavigate();
    const [title, setTitle]=useState(from.title);
    const [image, setImage]=useState(null);
    const [description, setDescription]=useState(from.description);
 

 const handleChange=(e)=>{
        const file=e.target.files[0];
        //to convert file to base64 string
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=function(){
            setImage(reader.result);
        }
    }

    const handleClick=(e)=>{
            api.post("/api/news/update",{title, id:from.id,image, description
                }).then((data)=>{
                   navigate("/news")
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }

 //    useEffect(()=>{
 // api.get("/api/newscategories/all").then((data)=>{
                    
 //                    setCategories(data.data);
 //                }).catch((err)=>{
 //                    alert("Network Conncetion Error");
 //                    console.log(err);
 //                });
 //    },[])

    return (
        <div className="news_main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="box">
                <Navbar />
                <div className="mainNotifiContainer">
                    <div className="borderContainer">
                        <div className="viewNewsHead">
                            <Link to='/news'><ArrowBackIcon className="arrowBack" /></Link>
                            <h2>Push News</h2>
                        </div>
                        <div className="information">
                            <div className="fields">
                                <div className="newsInput">
                                    <label>Title</label>
                                    <input required type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Ex-Most purchased item" />
                                </div>
                                {/*<div className="editProductCate">
                                <label htmlFor="modalCategory" onChange={(e)=>setCategory(e.target.value)}>Category</label>
                                    <select onChange={(e)=>setCategory(e.target.value)} name="category" id="modalCategory">
                                       {categories.map((data)=>{
                                            return <option value={data.name}>{data.name}</option>
                                        })} 
                                        return <option value="buyer">Buyer</option>
                                    </select>
                                </div>*/}
                                <div className="newsInput">
                                    <label >Description</label>
                                    <textarea required rows='7' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Ex-John doe products are the most purchased items"></textarea>
                                </div>
                                <div className="newsInput">
                                    <label >Upload Image</label>
                                    <input required type="file" onChange={(e)=>handleChange(e)}/>
                                </div>
                            </div>
                        </div>
                        <div className="pushBtn" onClick={(e)=>handleClick(e)}>
                            <button>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PushNews