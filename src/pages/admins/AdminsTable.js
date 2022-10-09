import React, { useEffect, useState } from 'react';
import api from "../../http";
import TableRow from "./TableRow";
 
const AdminsTable = ({ modalOpen }) => {
    const functio = () => {
        modalOpen()
    }
    const [admins, setAdmin]=useState([]);

    useEffect(()=>{
        api.get("/api/admin/all").then((data)=>{
                    
                    setAdmin(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    },[]);

    return (
        <table>
            <thead>
                <tr>
                    
                    <td>ID</td>
                    <td>NAME</td>
                    <td>PASSWORD</td>
                    
                    <td>DELETE</td>
                    <td>EDIT</td>
                </tr>
            </thead>
            <tbody>
            {admins.map((data,id)=>{
                return <TableRow access={data.access} key={id} password={data.password} id={data._id} name={data.name} email={data.email} functio={functio}/>;
            })}
            </tbody>
        </table>
    )
}

export default AdminsTable