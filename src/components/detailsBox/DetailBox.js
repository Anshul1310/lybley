import "./DetailBox.css";
import { Link } from "react-router-dom";
import { FaUsers, FaDollarSign } from 'react-icons/fa'
import { BsBox } from 'react-icons/bs'
import { AiFillShop } from 'react-icons/ai'
import React,{useEffect, useState} from "react";
import api from "../../http/index";

const DetailBox = () => {
	const [productNo,setProductNo]=useState("");
	const [orderNo,setOrderNo]=useState("");
	const [userNo,setUserNo]=useState("");
	const [earning,setEarning]=useState("");
	useEffect(()=>{
			api.get("/api/settings/cards",{
                	
                }).then((data)=>{
                  
                    setEarning(data.data.totalPrice);
                    setUserNo(data.data.buyerNo);
                    setProductNo(data.data.productNo);
                    setOrderNo(data.data.orderNo);
                }).catch((err)=>{
                    console.log(err);
                });
	},[])
	return (
		<>
			<div className="hi">
				<div className="left_detail">
					<span className="left_detaiL_heading">USERS
					</span>

					<span className="left_details_number">{userNo}
					</span>

					<Link to='/users'>
						<span className="left_deatail_see_all_user">See all users
						</span>
					</Link>
				</div>
				<div className="right_detail">
					<FaUsers />
				</div>
			</div>
			<div className="hi">
				<div className="left_detail">
					<span className="left_detaiL_heading">ORDERS
					</span>

					<span className="left_details_number">{orderNo}
					</span>

					<Link to='/orders'>
						<span className="left_deatail_see_all_user">See all orders
						</span>
					</Link>
				</div>
				<div className="right_detail">
					<BsBox />
				</div>
			</div>
			<div className="hi">
				<div className="left_detail">
					<span className="left_detaiL_heading">PRODUCTS
					</span>

					<span className="left_details_number">{productNo}
					</span>

					<Link to='/products'>
						<span className="left_deatail_see_all_user">See all products
						</span>
					</Link>
				</div>
				<div className="right_detail">
					<AiFillShop />
				</div>
			</div>
			<div className="hi">
				<div className="left_detail">
					<span className="left_detaiL_heading">EARNINGS
					</span>

					<span className="left_details_number">{earning}
					</span>

					<Link to='/earnings'>
						<span className="left_deatail_see_all_user">See all earnings
						</span>
					</Link>
				</div>
				<div className="right_detail">
					<FaDollarSign />
				</div>
			</div>
		</>
	)
}

export default DetailBox;