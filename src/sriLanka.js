import React from "react";
import Axios from "axios";
import "./style.css";

export default class sriLanka extends React.Component
{
   /* constructor(props){
        super();

        this.getCountryData = this.getCountryData.bind(this);
    }*/
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
        //const resApi = await Axios.get("https://covid19.mathdro.id/api");
        //const resCountries = await Axios.get("https://covid19.mathdro.id/api/countries");
      //  const countries = Object.keys(resCountries.data.countries);
     /* const countries = [];
      for (var i=0; i < resCountries.data.countries.length; i++) {
          countries.push(resCountries.data.countries[i].name);
      }*/

       /* this.setState({
            confirmed: resApi.data.confirmed.value,
            recovered: resApi.data.recovered.value,
            deaths: resApi.data.deaths.value,
            countries
        });*/
        this.setState({
            UpdateTime: SLapi.data.data.update_date_time,
            LocalNewCases: SLapi.data.data.local_new_cases,
            LocalTotalCases: SLapi.data.data.local_total_cases,
            LocalDeaths: SLapi.data.data.local_deaths,
            LocalNewDeaths: SLapi.data.data.local_new_deaths,
            LocalRecovered: SLapi.data.data.local_recovered,
            LocalActiveCases: SLapi.data.data.local_active_cases,
            TotalPCRcount: SLapi.data.data.total_pcr_testing_count
        });
    }
    

    
    
    render()
    {
        return (<div className="container">
            <h1>Covid-19 Updates : Sri Lanka</h1>

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