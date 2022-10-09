import React from 'react'
import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import baseUrl from "../../http/Constant";

import perfume from '../home/perfume.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import api from "../../http";

const CategoriesTable = ({ deleteModalOpen, modalOpen, editModalOpen }) => {
    const functio = () => {
        modalOpen()
    }
    const functio1 = () => {
        deleteModalOpen()
    }

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get("/api/categories/all").then((data) => {
            setCategories(data.data);
        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }, [])

    return (
        <table>
            <thead>
                <tr>

                    <td>PHOTO</td>
                    <td>CATEGORIES</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                </tr>
            </thead>
            <tbody>
               {/* <td><img src={perfume} alt="" /></td>
                <td>Vegetables</td>
                <td>
                    <div className="editIcon" onClick={() => editModalOpen()}><EditIcon /></div>
                </td>
                <td>
                    <div className="deleteIcon" onClick={() => functio1()}><DeleteIcon /></div>
                </td>*/}
                 {
                categories.map((data, key)=>{
                   return <TableRow key={key} id={data._id} editModalOpen={editModalOpen} deleteModalOpen={deleteModalOpen} image={baseUrl+""+data.image} name={data.name}/>
                })
                
            } 
            </tbody>
        </table>
    )
}

export default CategoriesTable