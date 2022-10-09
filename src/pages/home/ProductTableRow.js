import React from 'react'

function ProductTableRow(props) {
	return (
		<tr>
			<td>{props.seller}</td>
			<td><img src={props.image}/></td>
			
			<td className="StockOut">{props.price}</td>
			<td>{props.measuringUnit}</td>
			<td>{props.category}</td>		
		</tr>
	)
}

export default ProductTableRow