import React from 'react'
import { Link } from 'react-router-dom'
import api from "../../http";
import DeleteIcon from '@mui/icons-material/Delete';

import {useState,useEffect} from "react";
import TableRow from "./TableRow";


const SellersTable = (props) => {



const [sellers, setSellers]=useState([]);
    useEffect(()=>{
        api.get("/api/sellers/all/"+props.status).then((data)=>{
                    console.log(data.data);
                    setSellers(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    },[props.status]);


    return (
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>EMAIL</td>
                    <td>NUMBER</td>
                    {/* <td>GENDER</td>
                    <td>AGE</td>
                    <td>REGION</td>
                    <td>ZONE</td> */}
                    <td>SELLER TYPE</td>
                    <td>SELLER LEVEL</td>
                    <td>VIEW</td>
                   
                </tr>
            </thead>
            <tbody>
                 {sellers.map((data,id)=>{
                return <TableRow key={id} id={data._id} name={data.name} 
                email={data.email} type={data.type} gender={data.gender}
                age={data.age} region={data.region} zone={data.zone}
                status={data.status}
                woreda={data.woreda} kebele={data.kebele} phone={data.phone}
                additional_number={data.additional_number}
                level={data.level} bookNumber={data.bookNumber} tin={data.tin}
                     />
            })}
            </tbody>
        </table>
    )
}

export default SellersTable