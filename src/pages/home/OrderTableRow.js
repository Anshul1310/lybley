import React,{useState} from 'react'
import dayjs from 'dayjs';

export default function OrderTableRow(props) {
	            const [date,setDate] =useState(dayjs(props.createdAt).format('DD/MM/YY'));

	return (
		<tr>
									
									
									<td>{props.orderId}</td>
									<td className="StockOut">{props.status}</td>
									<td>{props.buyer}</td>
									<td>{props.totalPrice}</td>
									<td>{date}</td>
								</tr>
	)
}