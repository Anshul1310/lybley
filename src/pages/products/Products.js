import React, { useState } from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink, Link } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './Products.css'
import ProductsTable from '../productsTable/ProductsTable';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const Products = () => {
    const modalOpen = () => {
        const modal = document.getElementById('modal');
        const container = document.getElementById('Container');
        container.style.opacity = '0.3'
        modal.style.display = 'flex'
    }
    const modalClose = () => {
        const modal = document.getElementById('modal');
        const container = document.getElementById('Container');
        container.style.opacity = '1'
        modal.style.display = 'none'
    }
    
    const [readMore, setReadMore] = useState(true)
    const [readMore1, setReadMore1] = useState(true)
    const [readMore2, setReadMore2] = useState(true)
    const [readMore3, setReadMore3] = useState(true)
    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container" id="Container">
                <Navbar />
                <div className="productsPage">
                    <div className="sortAndActions">
                        <h2>All Products</h2>
                        {/*<div className="sortBox">
                            <select name="sorting" id="sorting">
                                <option value="sort">Sort By</option>
                                <option value="desc">Desc</option>
                                <option value="asc">Asc</option>
                            </select>
                        </div>*/}
                        {/* <div className="NumOfItems">
                            <select name="itemNum" id="itemNum">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                            </select>
                        </div> */}
                        {/* <div className="actionBox">
                            <input type="checkbox" name="action4" id="action4" />
                            <label htmlFor="action4" className="drop">Action <ArrowDropDownIcon /></label>
                            <div className="dropDown4">
                                <ul className="dropUl4">
                                    <li>
                                        <a href="/">Action</a>
                                    </li>
                                    <li>
                                        <a href="/">Another Action</a>
                                    </li>
                                    <li>
                                        <a href="/">Something else here</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                    <div className="productsAndFilter">
                        <ProductsTable modalOpen={modalOpen} lastCat="all" />
                        <div className="filterProducts">
{/*                            <h2>Filter Products</h2>
*/}                            <div className="filters">
                                {/*<div className="keywordFilter">
                                    <div className="filterHeading" onClick={() => setReadMore(!readMore)}>
                                        <h3>Keywords</h3>
                                        <FaAngleDown />
                                    </div>
                                    {readMore &&
                                        <div className="searchBox">
                                            <input type="text" name="filter" id="filter" />
                                            <SearchIcon />
                                        </div>
                                    }
                                </div>*/}
                                <div className="categoryFilter">
                                    {/*<div className="filterHeading" onClick={() => setReadMore1(!readMore1)}>
                                        <h3>Categories</h3>
                                        <FaAngleDown />
                                    </div>*/}
                                    {/*{readMore1 &&
                                        <div className="categoriesCheckBox">
                                            <div className="allCategoryCheck">
                                                <input type="checkbox" name="all" id="all" />
                                                <label htmlFor="all">All</label>
                                            </div>
                                            <div className="accessoriesCheck">
                                                <input type="checkbox" name="accessories" id="accessories" />
                                                <label htmlFor="accessories">Accessories</label>
                                            </div>
                                            <div className="phoneCheck">
                                                <input type="checkbox" name="phone" id="phone" />
                                                <label htmlFor="phone">Phone</label>
                                            </div>
                                            <div className="headPhoneCheck">
                                                <input type="checkbox" name="headphone" id="headphone" />
                                                <label htmlFor="headphone">HeadPhone</label>
                                            </div>
                                            <div className="cameraCheck">
                                                <input type="checkbox" name="camera" id="camera" />
                                                <label htmlFor="camera">Camera</label>
                                            </div>
                                        </div>
                                    }*/}
                                </div>
                                 {/*<div className="priceFilter">
                                    <div className="filterHeading" onClick={() => setReadMore2(!readMore2)}>
                                        <h3>Price</h3>
                                        <FaAngleDown />
                                    </div>
                                    {readMore2 &&
                                        <div className="priceInput">
                                            <input type="text" name="pricInput" id="pricInput" />
                                        </div>
                                    }
                                </div> */}
                                {/* <div className="colorFilter">
                                    <div className="filterHeading" onClick={() => setReadMore3(!readMore3)}>
                                        <h3>Colors</h3>
                                        <FaAngleDown />
                                    </div>
                                    {readMore3 &&
                                        <div className="colorBox">
                                            <div className="color1">
                                                <input type="checkbox" name="colorBox1" id="colorBox1" />
                                                <label htmlFor="colorBox1"></label>
                                            </div>
                                            <div className="color2">
                                                <input type="checkbox" name="colorBox2" id="colorBox2" />
                                                <label htmlFor="colorBox2"></label>
                                            </div>
                                            <div className="color3">
                                                <input type="checkbox" name="colorBox3" id="colorBox3" />
                                                <label htmlFor="colorBox3"></label>
                                            </div>
                                            <div className="color4">
                                                <input type="checkbox" name="colorBox4" id="colorBox4" />
                                                <label htmlFor="colorBox4"></label>
                                            </div>
                                            <div className="color5">
                                                <input type="checkbox" name="colorBox5" id="colorBox5" />
                                                <label htmlFor="colorBox5"></label>
                                            </div>
                                            <div className="color6">
                                                <input type="checkbox" name="colorBox6" id="colorBox6" />
                                                <label htmlFor="colorBox6"></label>
                                            </div>
                                        </div>
                                    }
                                </div> */}
                            </div>
                            
                            <div className="addProductBtn">
                                <Link to='/Products/addProduct'>
                                    <AddCircleOutlineIcon />
                                    <span>Add Product</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/*<div className="pageNum">
                        <KeyboardDoubleArrowLeftIcon />
                        <NavLink to='#'>1</NavLink>
                        <NavLink to='#'>2</NavLink>
                        <NavLink to='#'>3</NavLink>
                        <KeyboardDoubleArrowRightIcon />
                    </div>*/}
                </div>
            </div>

            <div id="modal">
                <h2>Edit Product Details</h2>
                <div className="editFields2">
                    <div className="editProductName">
                        <label htmlFor="modalProduct">Product Name</label>
                        <input type="text" name="modalProduct" id="modalProduct" placeholder="Ex-Iphone13" />
                    </div>
                    <div className="editProductCate">
                        <label htmlFor="modalCategory">Category</label>
                        <select name="category" id="modalCategory">
                            <option value="select">Select Catgeory</option>
                            <option value="NewArrival">New Arrival</option>
                            <option value="MostPopular">Most Popular</option>
                            <option value="Trending">Trending</option>
                        </select>
                    </div>
                    <div className="editProductExpiry">
                        <label htmlFor="modalExpiryDate">Expiry Date</label>
                        <input type="text" name="modalExpiryDate" id="modalExpiryDate" placeholder="Ex-No Expiry Date" />
                    </div>
                    <div className="editStockUnits">
                        <label htmlFor="modalStock">Units in Stock</label>
                        <input type="text" name="modalStock" id="modalStock" placeholder="Ex-100" />
                    </div>
                    <div className="editProductPrice">
                        <label htmlFor="modalPrice">Price</label>
                        <input type="text" name="modalPrice" id="modalPrice" placeholder="Ex-$750" />
                    </div>
                </div>
                <div className="editAndCloseBtn">
                    <div className="editBtn"><EditIcon /> Edit Order</div>
                    <div className="closeBtn" onClick={() => modalClose()}><CloseIcon /> Close</div>
                </div>
            </div>
        </div>
    )
}

export default Products