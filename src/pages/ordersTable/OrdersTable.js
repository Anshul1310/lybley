import React,{useState, useEffect} from 'react'
import TableRow from "./TableRow";
import api from "../../http";
import baseUrl from "../../http/Constant";

import { Link } from 'react-router-dom'

const OrdersTable = (props) => {
    const [orders,setOrders] =useState([]);

    useEffect(()=>{
        api.get("/api/order/"+props.status).then((data)=>{
                    console.log(data.data);
                    setOrders(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    },[props.status])
    return (
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>BUYER</td>
                    <td>DATE</td>
                    <td>STATUS</td>
                    <td>TOTAL</td>
                    <td>VIEW</td>
                </tr>
            </thead>
            <tbody>
                 {
                    orders.map((data, id, index)=>{
                        return <TableRow orderId={data.orderId} totalPrice={data.totalPrice} status={data.status} address={data.address} phone={data.phone} items={data.items} buyer={data.buyer} seller={data.seller} note={data.note} key={id} title={data.title} description={data.description} image={baseUrl + "" + data.image}/>
                    })
                }
            
            </tbody>
        </table>
    )
}

export default OrdersTable