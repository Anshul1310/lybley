import React from 'react'
import api from "../../http";


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const NewsTableRow = (props) => {

    const handleDelete = (e) => {
        api.post("/api/newscategories/delete", {
            id: props.id
        }).then((data) => {
            window.location.reload();
        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }

    const hEdit=()=>{
        localStorage.setItem("lastNewsCategory", props.id);
        props.editOpen();
    }

     return (
        <tr>
            <td>
                <img src={props.image} alt="cookie" />
            </td>
            <td>{props.name}</td>
            <td>
                <div onClick={(e) => hEdit()} className="deleteIcon">Edit</div>
            </td>
            <td>
                <div onClick={(e) => handleDelete(e)} className="deleteIcon"><DeleteIcon /></div>
            </td>
        </tr>
    )
}

export default NewsTableRow;