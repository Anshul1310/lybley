import React from 'react'

import api from "../../http";
import {useEffect, useState} from "react";
import TableRow from "./TableRow";

import baseUrl from "../../http/Constant";


import perfume from '../home/perfume.jpg'

const NewsTable = () => {
    const [news, setNews]=useState([]);

    useEffect(()=>{
        api.get("/api/news/all").then((data)=>{
                    console.log(data.data);
                    setNews(data.data);
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
                    <td>Title</td>
                    <td>Category</td>
                    <td>Date</td>
                    <td>Description</td>
                    <td>Delete</td>
                    <td>Edit</td>
                </tr>
            </thead>
            <tbody>
                {
                    news.map((data, id, index)=>{
                        return <TableRow key={id} date={data.createdAt} id={data._id} category={data.category} title={data.title} description={data.description} image={`${baseUrl}${data.image}`}/>
                    })
                }
            </tbody>
        </table>
    )
}

export default NewsTable