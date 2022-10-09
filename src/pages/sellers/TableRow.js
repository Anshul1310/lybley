import {Link} from "react-router-dom";
import api from "../../http";
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const TableRow=(props)=>{

    const deleteSeller=(e)=>{
            api.post("/api/sellers/delete",{
                id:props.id
                }).then((data)=>{
                     window.location.reload();
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }

	return (
		<tr>
                    <td className='id'>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{props.phone}</td>
                    {/* <td>Male</td>
                    <td>23</td>
                    <td>Afar</td> */}
                    {/* <td>North Gondar</td> */}
                    <td>{props.type}</td>
                    <td>{props.level}</td>
                    
                    <td className="view">
                        <Link to='/viewSeller' state={{ from: props }}>View</Link>
                    </td>
                    <td><DeleteIcon onClick={(e)=>deleteSeller(e)}/></td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
	);
}

export default TableRow;