import React from 'react'
import { useState, useEffect } from "react";
import NewsTableRow from "./NewsTableRow";
import baseUrl from "../../http/Constant";

import api from "../../http";

const NewsCategoryTable = ({ editOpen }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get("/api/newscategories/all").then((data) => {
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
                    <td>NAME</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map((data, key) => {
                        return <NewsTableRow key={key} id={data._id} image={baseUrl + "" + data.image} name={data.name} editOpen={editOpen} />
                    })

                }
            </tbody>
        </table>
    )
}

export default NewsCategoryTable