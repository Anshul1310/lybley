import React,{useState} from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink } from 'react-router-dom'
import './earnings.css'
import EarningsTable from '../earnings/EarningsTable';
import api from "../../http";
import baseUrl from "../../http/Constant";

import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const Earnings = () => {
    const [payout,setPayout]=useState()
    const [seller, setSeller]=useState()
    const [transactionSlip, setTransactionSlip]=useState();
    const [transactionId, setTransactionId]=useState();

    const [status, setStatus] = useState("all")
    const modalOpen = () => {
        const modal = document.getElementById('modal2');
        const container = document.getElementById('Container');
        container.style.opacity = '0.3'
        modal.style.display = 'flex'

         api.post("/api/transaction/get/"+localStorage.getItem("lastPayment")).then((data)=>{
                    setPayout(data.data.payout);
                    setSeller(data.data.seller);
                    setTransactionSlip(baseUrl+data.data.transactionSlip);
                    setTransactionId(data.data.transactionId)
                    console.log(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }

    const handleUpload=(e)=>{
        api.post("/api/transaction/withdrawal/update",{transactionId:transactionId,id:localStorage.getItem("lastPayment"), transactionSlip}).then((data)=>{
                   modalClose();
                    window.location.reload();
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    }
    const modalClose = () => {
        const modal = document.getElementById('modal2');
        const container = document.getElementById('Container');
        container.style.opacity = '1'
        modal.style.display = 'none'
    }

    const handleChange=(e)=>{
        const file=e.target.files[0];
        //to convert file to base64 string
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=function(){
            setTransactionSlip(reader.result);
            console.log(reader.result);
        }
    }

    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container" id="Container">
                <Navbar />
                <div className="earningsPage">
                    <div className="sortAndActions">
                        <h2>All Earnings</h2>
                        <div className="sortBox">
                            <select name="sorting" onChange={(e)=>setStatus(e.target.value)} id="sorting">
                                <option value="all">All</option>
                                <option value="initiated">Inititiated</option>
                                <option value="success">Success</option>
                            </select>
                        </div>
                        {/*<div className="NumOfItems">
                            <select name="itemNum" id="itemNum">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                            </select>
                        </div>*/}
                        {/*<div className="earningHeading">
                            <h3>Total Earnings:$7000</h3>
                        </div>*/}
                    </div>
                    <div className="productsAndEarnings">
                        <EarningsTable modalOpen={modalOpen} status={status} />
                    </div>
                   {/* <div className="pageNum">
                        <KeyboardDoubleArrowLeftIcon />
                        <NavLink to='#'>1</NavLink>
                        <NavLink to='#'>2</NavLink>
                        <NavLink to='#'>3</NavLink>
                        <KeyboardDoubleArrowRightIcon />
                    </div>*/}
                </div>
            </div>

            <div id="modal2">
                <h2>Edit Earning Details</h2>
                <div className="editFields2">
                    <div className="editProductName">
                        <label htmlFor="modalProduct">Seller Name</label>
                        <input type="text" value={seller} name="modalProduct" id="modalProduct" />
                    </div>
                    {/*<div className="editProductCate">
                        <label htmlFor="modalCategory">Category</label>
                        <select name="category" id="modalCategory">
                            <option value="select">Select Catgeory</option>
                            <option value="NewArrival">New Arrival</option>
                            <option value="MostPopular">Most Popular</option>
                            <option value="Trending">Trending</option>
                        </select>
                    </div>*/}
                    <div className="editProductExpiry">
                        <label htmlFor="modalExpiryDate">Payout</label>
                        <input type="text" name="modalExpiryDate" value={payout} id="modalExpiryDate" placeholder="Ex-No Expiry Date" />
                    </div>
                    <div className="editStockUnits">
                        <label htmlFor="modalStock">Transaction ID</label>
                        <input type="text" name="modalStock" value={transactionId} onChange={(e)=>setTransactionId(e.target.value)} id="modalStock" placeholder="Ex-100" />
                    </div>
                   {/* <div className="editProductPrice">
                        <label htmlFor="modalPrice">Price</label>
                        <input type="text" name="modalPrice" id="modalPrice" placeholder="Ex-$750" />
                    </div>*/}
                    {/*<div className="editCommission">
                        <label htmlFor="modalCommission">Commission</label>
                        <input type="text" name="modalCommission" id="modalCommission" placeholder="Ex-$1000" />
                    </div>*/}
                </div>

                <div className="productImage1">
                    <div className="img1" >
                        <input type="file" onChange={(e)=>{handleChange(e)}} name="fileInput" id="fileInput" />
                        <img width="100%" src={transactionSlip} height="100%" />
                    </div>
                    <div className="upload" ><label htmlFor="fileInput">UPLOAD</label></div>
                </div>

                <div className="editAndCloseBtn">
                    <div className="editBtn" onClick={(e)=>handleUpload(e)}><EditIcon /> Edit Order</div>
                    <div className="closeBtn" onClick={() => modalClose()}><CloseIcon /> Close</div>
                </div>
            </div>
        </div>
    )
}

export default Earnings