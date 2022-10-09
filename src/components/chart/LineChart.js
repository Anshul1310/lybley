import React, { Component, useState,useEffect } from "react";
import Chart from "react-apexcharts";
import './chart.css'

const LineChart=(props)=>{

    const [data,setData]=useState({
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: ["January","February","March","April","May","June","July","August","September","October","November","December"]
                },
                stroke: {
                    curve: "smooth"
                }
            },
            series: [
                {
                    name: "Users",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                },
                {
                    name: "Orders",
                    data: [20, 25, 35, 57, 45, 62, 74, 92]
                },
                {
                    name: "Earnings",
                    data: [10, 23, 32, 45, 59, 66, 79, 99]
                },
            ],

        })

    useEffect(()=>{
        setData({
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: ["January","February","March","April","May","June","July","August","September","October","November","December"]
                },
                stroke: {
                    curve: "smooth"
                }
            },
            series: [
                {
                    name: "Users",
                    data: props.barCharts.buyers
                },
                {
                    name: "Sellers",
                    data: props.barCharts.sellers
                },
                {
                    name: "Products",
                    data: props.barCharts.products
                },
            ],

        });
    },[props.barCharts])
    return (
            <div className="app">
                { <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={data.options}
                            series={data.series}
                            type="line"
                            width="500"
                        />
                    </div>
                </div> }
            </div>
        );
}

export default LineChart;