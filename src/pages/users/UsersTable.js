import React from 'react'
import { Link } from 'react-router-dom'
import TableRow from "./TableRow";
import ReactDOM from 'react-dom'
import {useState, useEffect} from "react";
import api from "../../http";

const UsersTable = (props) => {
        const [buyers, setBuyers] =useState([]);
        useEffect(()=>{
        api.get("/api/buyers/"+props.status).then((data)=>{
                    try{
                        
                        setBuyers(data.data);
                    }catch(e){

                    }
                    
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
                    <td>ORGANISATION</td>
                    <td>CONTACT PERSON</td>
                    {/* <td>ADDRESS</td> */}
                    <td>CONTACT NUMBER</td>
                    <td>CUSTOMER TYPE</td>
                    <td>CUSTOMER LEVEL</td>
                    {/* <td>TIN</td> */}
                  
                    <td>EDIT</td>
                </tr>
            </thead>
            <tbody>
               {buyers.map((data,id)=>{
                return <TableRow key={id} _id={data._id} name={data.name} organization={data.organization}
                    email={data.email} phone={data.phone} additional_number={data.additional_number}
                    contact_person={data.contact_person} status={data.status} address={data.address}
                    tin={data.tin} level={data.level} type={data.type} />
            })}
            </tbody>
        </table>
    )
}

export default UsersTable