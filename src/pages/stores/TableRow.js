import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import api from "../../http";
 import React from 'react'
const TableRow=(props)=>{

    const handleDelete=(e)=>{
            api.post("/api/stores/delete",{
                id:props.id
                }).then((data)=>{
                     window.location.reload();
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }

    const handleEdit=(e)=>{
        localStorage.setItem("lastStore", props.id);
        props.modalOpen();
    }

	return(
		<tr>
                   
                    <td>{props.name}</td>
                    <td>{props.location}</td>
                    <td>{props.capacity}</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={handleEdit} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon" onClick={(e)=>handleDelete(e)}><DeleteIcon /></div>
                    </td>
                </tr>
	);
}

export default TableRow;