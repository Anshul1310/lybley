import React,{useState} from "react";
import headPhone from '../home/headPhone.jpg'
import perfume from '../home/perfume.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";
import dayjs from 'dayjs';
import api from "../../http";


import EditIcon from '@mui/icons-material/Edit';
const TableRow=(props)=>{
        const [date,setDate] =useState(dayjs(props.createdAt).format('DD/MM/YYYY'));

const handleDelete=()=>{
         api.post("/api/product/delete",{
                id:props._id
                }).then((data)=>{
                     window.location.reload();
                     console.log(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }
    return (
        <tr>
        <td>
            <img src={props.image} />
        </td>
        <td>{props.title}</td>
        <td className="StockIn">{props.measuringUnit}</td>
        <td>{props.stock}</td>
        <td>{props.price}</td>

        <td>{props.seller}</td>
        <td>{props.stock}</td>
        <td>{props.store}</td>
        
        <td>{date}</td>
        <td>
            <div className="editIcon">
            <Link to='/Products/addProduct' state={{ from: props }}><EditIcon/></Link>
           
            </div>
        </td>
        <td>
            <div className="deleteIcon" onClick={(e)=>handleDelete(e)}><DeleteIcon /></div>
        </td>
    </tr>
    )
}

export default TableRow;