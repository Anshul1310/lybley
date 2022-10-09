import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import api from "../../http";
import {Link} from "react-router-dom";

const TableRow=(props)=>{
    const handleDelete=()=>{
         api.post("/api/admin/delete",{
                id:props.id
                }).then((data)=>{
                     window.location.reload();
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }


	const {functio, email,name,id, password, access}=props;
	return (
		<tr>
                   
                    <td className='id'>{props.id}</td>
                    <td>{name}</td>
                    <td>{password}</td>
                    
                    <td>
                        <div onClick={(e)=>handleDelete(e)}  className="deleteIcon"><DeleteIcon /></div>
                    </td>
                    <td className="view">
                         <Link to='/viewAdmin' state={{ from: {name, email, password,id, access} }}>View</Link>
                    </td>

                </tr>);
}

export default TableRow;