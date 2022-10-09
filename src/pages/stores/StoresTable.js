import React from 'react'
import TableRow from "./TableRow";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import api from "../../http";
import {useEffect, useState} from "react";

const StoresTable = ({ modalOpen }) => {

    const [stores, setStores] =useState([]);
    useEffect(()=>{
         api.get("/api/stores/all").then((data)=>{
                    console.log(data.data);
                    setStores(data.data)
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    },[])
    const functio = () => {
        modalOpen()
    }
    return (
        <table>
            <thead>
                <tr>
                    <td>STORE NAME</td>
                    <td>STORE LOCATION</td>
                    <td>STORE CAPACITY</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                </tr>
            </thead>
            <tbody>{
                stores.map((data,key)=>{
                    return <TableRow id={data._id} key={key}modalOpen={modalOpen} name={data.name} location={data.location} capacity={data.capacity} />
                })
               
            }
            </tbody>
        </table>
    )
}

export default StoresTable