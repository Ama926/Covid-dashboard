import React from "react";
import Axios from "axios";
import "./style.css";

export default class sriLanka extends React.Component
{
     constructor(props){
        super();

        this.getHospitalData = this.getHospitalData.bind(this);
    }
    state = 
    {
        UpdateTime: 0,
        LocalNewCases: 0,
        LocalTotalCases: 0,
        LocalDeaths: 0,
        LocalNewDeaths: 0,
        LocalRecovered: 0,
        LocalActiveCases: 0,
        TotalPCRcount: 0

    }
    componentDidMount()
    {
        this.getData();
    
    }

    async getData()
    {
        const SLapi = await Axios.get("https://www.hpb.health.gov.lk/api/get-current-statistical");
 
        const hospitals = [];
      for (var i=0; i < SLapi.data.hospital_data.length; i++) {
        hospitals.push(SLapi.data.hospital_data[i].name);
      }

        this.setState({
            UpdateTime: SLapi.data.data.update_date_time,
            LocalNewCases: SLapi.data.data.local_new_cases,
            LocalTotalCases: SLapi.data.data.local_total_cases,
            LocalDeaths: SLapi.data.data.local_deaths,
            LocalNewDeaths: SLapi.data.data.local_new_deaths,
            LocalRecovered: SLapi.data.data.local_recovered,
            LocalActiveCases: SLapi.data.data.local_active_cases,
            TotalPCRcount: SLapi.data.data.total_pcr_testing_count,
            hospitals
        });
    }
    
    async getHospitalData(e)
    {
        if (e.target.value === "Islandwide")
        {
           return this.getData();
        }
        try{
            const res = await Axios.get(`https://www.hpb.health.gov.lk/api/get-current-statistical${e.target.value}`);
            this.setState({
                UpdateTime: res.data.data.update_date_time,
                LocalNewCases: res.data.data.local_new_cases,
                 LocalTotalCases: res.data.data.local_total_cases,
                LocalDeaths: res.data.data.local_deaths,
                 LocalNewDeaths: res.data.data.local_new_deaths,
                 LocalRecovered: res.data.data.local_recovered,
                 LocalActiveCases: res.data.data.local_active_cases,
                  TotalPCRcount: res.data.data.total_pcr_testing_count
            });
        }
        catch(err){
            if(err.response.status === 404)
            this.setState({
                UpdateTime:"No data available",
                LocalNewCases: "No data available",
                 LocalTotalCases: "No data available",
                LocalDeaths: "No data available",
                 LocalNewDeaths:"No data available",
                 LocalRecovered: "No data available",
                 LocalActiveCases:"No data available",
                  TotalPCRcount:"No data available"
            })
            console.log(err.reponse);
        }
       
    }

    renderHospitalOptions()
    {
        return this.state.hospitals.map((hospitals,i) => 
        {
            return <option key={i}>{hospitals}</option>
        });
    }
    
    render()
    {
        return (<div className="container">
            <h1>Covid-19 Updates : Sri Lanka</h1>

            <select className="dropdown" onChange={this.getHospitalData}>
                <option>Islandwide</option>
                {this.renderHospitalOptions()}
            </select>
            <div className="flex">
            <div className="box confirmed">
                <h2>Update time: </h2>
                <h3>{this.state.UpdateTime}</h3>
            </div>

            <div className="box recoverd">
            <h2>Local New Cases: </h2>
                <h3>{this.state.LocalNewCases}</h3>
            </div>

            <div className="box deaths">
            <h2>Local Total Cases: </h2>
                <h3>{this.state.LocalTotalCases}</h3>
            </div>

            <div className="box confirmed">
                <h2>Local Deaths: </h2>
                <h3>{this.state.LocalDeaths}</h3>
            </div>

            <div className="box recoverd">
            <h2>Local New Deaths: </h2>
                <h3>{this.state.LocalNewDeaths}</h3>
            </div>

            <div className="box deaths">
            <h2>Local Recovereds: </h2>
                <h3>{this.state.LocalRecovered}</h3>
            </div>

            <div className="box recoverd">
            <h2>Local Active Cases: </h2>
                <h3>{this.state.LocalActiveCases}</h3>
            </div>

            <div className="box deaths">
            <h2>Total PCR testing count: </h2>
                <h3>{this.state.TotalPCRcount}</h3>
            </div>
            </div>
            
        </div>);
    }
}