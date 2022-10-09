import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import NewsTable from '../news/NewsTable'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink } from 'react-router-dom'
import './news.css'

const News = () => {
    return (
        <div className="notification_main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="box">
                <Navbar />
                <div className="newsPage">
                    <div className="sortAndActions">
                        <h2>All News</h2>
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
                        </div>*/}
                        <div className="addNewsBtn">
                            <Link to='/news/push'>
                                <span>Push News</span>
                            </Link>
                        </div>
                    </div>
                    <div className="news">
                        <NewsTable />
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
        </div>
    )
}

export default News