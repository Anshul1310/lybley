import cookie from '../home/cookie.jpg'
import glass from '../home/glass.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import React,{useState} from 'react'
import api from "../../http";
import dayjs from 'dayjs';

import {Link} from "react-router-dom";
import headPhone from '../home/headPhone.jpg'
const TableRow=(props)=>{
    const [date,setDate] =useState(dayjs(props.createdAt).format('DD/MM/YY'));

    const handleEdit=(e)=>{

    }
    const handleClick=(e)=>{
        api.post("/api/news/delete",{
                id:props.id
                }).then((data)=>{
                     window.location.reload();
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }
	return(
		<tr>
                    <td>
                        <img src={props.image} alt="cookie" />
                    </td>
                    <td>{props.title}</td>
                     <td>{props.category}</td>
                     <td>{date}</td>
                    <td>{props.description}</td>
                    <td>
                        <div onClick={(e)=>handleClick(e)} className="deleteIcon"><DeleteIcon /></div>
                    </td>
                    <td>
                        <Link to='/news/edit' state={{ from: props }}>Edit</Link>
                    </td>
                </tr>
	);
}

export default TableRow;