import React,{useEffect, useState} from 'react'
import cookie from '../home/cookie.jpg'
import glass from '../home/glass.jpg'
import headPhone from '../home/headPhone.jpg'
import perfume from '../home/perfume.jpg'
import api from "../../http";
import TableRow from "./TableRow";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const EarningsTable = ({ modalOpen, status }) => {
    const [payments, setPayments]=useState([]);
     useEffect(()=>{
        api.get("/api/transaction/"+status).then((data)=>{
                    setPayments(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    },[status])


    const functio = () => {
        modalOpen()
    }
    return (
        <table>
            <thead>
                <tr>
                   
                    <td>Seller ID</td>
                    <td>PAYOUT</td>
                    <td>CREATED AT</td>
                    <td>STATUS</td>
                    <td>EDIT</td>
                </tr>
            </thead>
            <tbody>
                 {
                    payments.map((data, id, index)=>{
                        return <TableRow key={id} functio={modalOpen} id={data._id} status={data.status} createdAt={data.createdAt} seller={data.seller} payout={data.payout}/>
                    })
                }
            </tbody>
        </table>
    )
}

export default EarningsTable