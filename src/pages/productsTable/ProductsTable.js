import React from 'react'
import cookie from '../home/cookie.jpg'
import glass from '../home/glass.jpg'
import headPhone from '../home/headPhone.jpg'
import perfume from '../home/perfume.jpg'
import EditIcon from '@mui/icons-material/Edit';
import {useEffect, useState} from "react";
import TableRow from "./TableRow";
import api from "../../http";
import baseUrl from "../../http/Constant";


import DeleteIcon from '@mui/icons-material/Delete';

const ProductsTable = ({ modalOpen ,lastCat}) => {
    const functio = () => {
        modalOpen()
    }

    const [products, setProducts]=useState([]);

    useEffect(()=>{
        console.log(lastCat+"");
 api.get(`/api/product/${lastCat}`).then((data)=>{
                    console.log(data.data);
                    setProducts(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    },[lastCat])
    
    return (
        <table>
            <thead>
                <tr>
                    <td>PHOTO</td>
                    <td>NAME</td>
                    <td>Measuring Unit</td>
                    <td>Available Stock</td>
                    <td>PRICE</td>

                    <td>SELLER</td>
                    <td>STOCK</td>
                    <td>STORE</td>

                    <td>CREATED AT</td>
                    <td>EDIT</td>
                    <td>REMOVE</td>
                </tr>
            </thead>
            <tbody>
              {products.map((data,id)=>{
                return <TableRow key={id} stock={data.stock} moq={data.moq} store={data.store} seller={data.seller} createdAt={data.createdAt} _id={data._id} title={data.title} description={data.description}
                category={data.category} image={baseUrl + "" + data.image} price={data.price} slashedPrice={data.slashedPrice}
                measuringUnit={data.measuringUnit} />
            })}
            </tbody>
        </table>
    )
}

export default ProductsTable