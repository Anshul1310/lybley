import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import api from "../../http";

import CategoriesTable from '../categories/CategoriesTable';
import ProductsTable from '../productsTable/ProductsTable'

import EditIcon from '@mui/icons-material/Edit';
import './Categories.css';


const Categories = () => {

const [lastCat, setlastCat]=useState("all");
	const [image, setImage] = useState(null);
	const [name, setName] = useState(null);

	const modalOpen = () => {
		const modal = document.getElementById('modal3');
		const container = document.getElementById('Container');
		container.style.opacity = '0.3'
		modal.style.display = 'flex'
	}
	const modalClose = () => {
		const modal = document.getElementById('modal3');
		const container = document.getElementById('Container');
		container.style.opacity = '1'
		modal.style.display = 'none'
	}


	const editModalOpen = () => {
		const modal = document.getElementById('modalEdit');
		const container = document.getElementById('Container');
		container.style.opacity = '0.3'
		modal.style.display = 'flex'
	}
	const editModalClose = () => {
		const modal = document.getElementById('modalEdit');
		const container = document.getElementById('Container');
		container.style.opacity = '1'
		modal.style.display = 'none'
	}

const updateData=()=>{
	 api.post("/api/categories/update",{
                id:localStorage.getItem("lastCategory"), image, name
                }).then((data)=>{
                   editModalClose();
                   setImage(null)
                   setName(null)
                    window.location.reload();
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
}

	const deleteModalOpen = () => {
		setlastCat(localStorage.getItem("lastCat"))
		const modal = document.getElementById('deleteModal');
		const container = document.getElementById('Container');
		container.style.opacity = '0.3'
		modal.style.display = 'flex'
	}
	const deleteModalClose = () => {
		const modal = document.getElementById('deleteModal');
		const container = document.getElementById('Container');
		container.style.opacity = '1'
		modal.style.display = 'none'
	}
	const deleteCategory=()=>{
		api.post("/api/categories/delete", {
            id: lastCat
        }).then((data) => {
            window.location.reload();
        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
	}

	const handleClick = (e) => {
		api.post("/api/categories/add", {
			name, image
		}).then((data) => {
			modalClose();
			window.location.reload();
		}).catch((err) => {
			alert("Network Conncetion Error");
			console.log(err);
		});
	}
	const handleImageChnage = (e) => {
		const file = e.target.files[0];
		//to convert file to base64 string
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = function () {
			setImage(reader.result);
		}
	}
	return (
		<div className="notification_main">
			<Sidebar />
			<div style={{ width: '174px' }}></div>
			<div className="box" id="Container">
				<Navbar />
				<div className="categoriesPage">
					<div className="sortAndActions">
						<h2>All Categories</h2>
						{/*<div className="searchBox">
							<input type="text" name="filter" id="filter" />
							<SearchIcon />
						</div>*/}
						<div className="addCategoryBtn" onClick={() => modalOpen(this)}>
							<span>Add Category</span>
						</div>
						{/* <div className="sortBox">
                            <select name="sorting" id="sorting">
                                <option value="sort">Sort By</option>
                                <option value="desc">Desc</option>
                                <option value="asc">Asc</option>
                            </select>
                        </div>
                        <div className="NumOfItems">
                            <select name="itemNum" id="itemNum">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                            </select>
                        </div> */}
					</div>
					<div className="categories">
						<CategoriesTable deleteModalOpen={deleteModalOpen} modalOpen={modalOpen} editModalOpen={editModalOpen} />
					</div>
					<div className="pageNum">
						<KeyboardDoubleArrowLeftIcon />
						<NavLink to='#'>1</NavLink>
						<NavLink to='#'>2</NavLink>
						<NavLink to='#'>3</NavLink>
						<KeyboardDoubleArrowRightIcon />
					</div>
				</div>
			</div>
			<div id="modal3">
				<h2>Add Category</h2>
				<div className="editFields2">
					<div className="addCategory">
						{/*<select>
							<option value="Select Category">Select Category</option>
							<option value="food">Food</option>
							<option value="electronics">Electronics</option>
							<option value="decorative">Decorative</option>
							<option value="dailyUse">DailyUse</option>
							<option value="grocery">Grocery</option>
						</select>*/}
						<input type="text" onChange={(e) => setName(e.target.value)} placeholder="E.g. Vegetables" />
					</div>
					<div className="addCategory">
						<input type="file" onChange={(e) => handleImageChnage(e)} />
					</div>
				</div>
				<div className="editAndCloseBtn">
					<div className="editBtn" onClick={(e) => handleClick(e)}><AddCircleOutlineIcon /> Add</div>
					<div className="closeBtn" onClick={() => modalClose()}><CloseIcon /> Close</div>
				</div>
			</div>
			<div id="modalEdit">
				<h2>Edit Category</h2>
				<div className="editFields2">
					<div className="editCategory">
						<input type="text" onChange={(e) => setName(e.target.value)} placeholder="E.g. Vegetables" />
					</div>
					<div className="editCategory">
						<input type="file" onChange={(e) => handleImageChnage(e)} />
					</div>
				</div>
				<div className="editAndCloseBtn">
					<div className="editBtn" onClick={()=>updateData()}><EditIcon /> Edit</div>
					<div className="closeBtn" onClick={() => editModalClose()}><CloseIcon /> Close</div>
				</div>
			</div>
			<div id="deleteModal">
				<h2>Delete Category</h2>
				<div className='modalTable'><ProductsTable lastCat={lastCat}/></div>
				<div className="editAndCloseBtn">
					<div className="editBtn" onClick={()=>deleteCategory()}><EditIcon /> Confirm</div>
					<div className="closeBtn" onClick={() => deleteModalClose()}><CloseIcon /> Close</div>
				</div>
			</div>
		</div>
	)
}

export default Categories