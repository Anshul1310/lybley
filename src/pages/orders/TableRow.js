import React from 'react'

function TableRow(props) {
	return (
		 <tr>
            <td><img src={props.image}/></td>
                                <td>{props.title}</td>
                                <td>{props.price}</td>
                                <td>{props.measuringUnit}</td>
                                <td>{props.quantity}</td>
                                <td>{props.seller}</td>
         </tr>
	)
}

export default TableRow