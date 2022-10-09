import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import ReactDOM from 'react-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";
const TableRow=(props)=>{

    const {organization, name, _id,email, phone, additional_number, contact_person, address, tin, level, type}=props;

	return (
		     <tr>
                    
                    <td className='id'>{_id}</td>
                    <td>{organization}</td>
                    <td>{name}</td>
                    {/* <td>Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512</td> */}
                    <td>{phone}</td>
                    <td>{type}</td>
                    <td>{level}</td>
                    {/* <td>NNN-NN-NNNN</td> */}
                    <td className="activeUser">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewUser' state={{ from: props }}>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
);
}

export default TableRow;