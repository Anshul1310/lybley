import React, { Component, useState,useEffect } from 'react';
import Chart from 'react-apexcharts'

const PieChart=(props)=>{
     const [data,setData]=useState({
            options: {
                labels: ["Initiated","Success"],
                legend: {
                    position: 'bottom'
                }
            },
            series: [props.transaction.initiated, props.transaction.success],
        });

     useEffect(() => {
        console.log(props.transaction)
         setData({
            options: {
                labels: ["Initiated","Success"],
                legend: {
                    position: 'bottom'
                }
            },
            series: [props.transaction.initiated, props.transaction.success],
        })
         return () => {
            
         };
     }, [props.transaction.initiated,props.transaction.success])

  return (
            <div className="donut">
                { !((props.transaction.success == 1) && (props.transaction.success == 1)) && <Chart options={data.options} series={data.series} type="pie" width="380" /> }
                
            </div>
        );
}
export default PieChart;