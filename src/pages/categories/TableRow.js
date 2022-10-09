import React from 'react'
import api from "../../http";

import DeleteIcon from '@mui/icons-material/Delete';
const TableRow = (props) => {

    const handleDelete = (e) => {
        localStorage.setItem("lastCat",props.name);
        console.log(props.name)
        props.deleteModalOpen();
        // api.post("/api/categories/delete", {
        //     id: props.id
        // }).then((data) => {
        //     window.location.reload();
        // }).catch((err) => {
        //     alert("Network Conncetion Error");
        //     console.log(err);
        // });
    }

    const hEdit=()=>{
        localStorage.setItem("lastCategory", props.id);
        props.editModalOpen();
    }
    return (
        <tr>
            <td>
                <img src={props.image} />
            </td>
            <td>{props.name}</td>
            <td>
                            <div onClick={(e) =>hEdit()} className="deleteIcon">Edit</div>

{/*                <div onClick={(e) => handleDelete(e)} className="deleteIcon"><DeleteIcon /></div>
*/}            </td> 
            <td>
                            <div onClick={(e) =>handleDelete()} className="deleteIcon"><DeleteIcon /></div>

{/*                <div onClick={(e) => handleDelete(e)} className="deleteIcon"><DeleteIcon /></div>
*/}            </td> 
        </tr>
    )
}

export default TableRow;