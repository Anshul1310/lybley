import React from 'react'
import cookie from '../home/cookie.jpg'
import glass from '../home/glass.jpg'
import TableRow from "./TableRow";
import headPhone from '../home/headPhone.jpg'
import perfume from '../home/perfume.jpg'
import api from "../../http";
import baseUrl from "../../http/Constant";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState, useEffect} from "react";

const StaticProductsTable = ({ modalOpen}) => {
    const functio = () => {
        modalOpen()
    }
    const [products, setProducts]=useState([]);

    useEffect(()=>{
                api.get("/api/product-price/all",{
                
                }).then((data)=>{
                    console.log(data.data)
                    setProducts(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    },[])

    return (
        <table>
            <thead>
                <tr>
                    <td>PHOTO</td>
                    <td>NAME</td>
                    <td>UNIT OF MEASUREMENT</td>
                    <td>DATE</td>
                    <td>LOCATION</td>
                    <td>PRICE AT</td>
                    <td>EDIT</td>
                    <td>REMOVE</td>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((data, key)=>{
                        return <TableRow  price={data.price} location={data.location} createdAt={data.updatedAt} id={data._id} image={baseUrl + "" + data.image} title={data.title} measuringUnit={data.measuringUnit} description={data.description} key={key} modalOpen={modalOpen} />
                    })
                }
               
            </tbody>
        </table>
    )
}

export default StaticProductsTable