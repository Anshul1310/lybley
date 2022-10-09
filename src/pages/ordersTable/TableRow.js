import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs';



function TableRow(props) {
            const [date,setDate] =useState(dayjs(props.createdAt).format('DD/MM/YY'));

    return (
        <tr>
                    
                    <td className='id'>{props.orderId}</td>
                    <td>{props.buyer}</td>
                    <td>{date}</td>
                    <td className={props.status}>
                        <span>{props.status}</span>
                    </td>
                    <td>{props.totalPrice}</td>
                    <td className="view">
                        <Link to='/viewOrder' state={{ from: {...props, date} }}>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
    )
}

export default TableRow