import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './Chart';
import Map from './Map';

function ChartsAndMapPage() {
  const [showMap, setShowMap] = useState(false);
  const [coronaCasesFluctuation, setCoronaCasesFluctuation] = useState([]);
  const [countryMap,setCountryMap] = useState([])

  const fetchData = () => {
    let cases = [];
    let data = [];
    axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        // console.log(res.data.cases);
        cases = Object.values(res.data.cases);
        // console.log(cases);
      }).then(() => {
        let j = 0;
        for (let i = 0; i < cases.length; i = i + 3) {
          //cases number increase than origional, just to show different lines on map as they were overlapping
          data.push({
            day: j,
            firstYear: cases[i],
            secondYear: cases[i + 1] + 11000000,
            thirdYear: cases[i + 2] + 15000000
          })
          j++;
        }
        setCoronaCasesFluctuation(data)
        setShowMap(true);
      })

      let countryData = []
      let countries = []
      axios.get("https://disease.sh/v3/covid-19/countries")
      .then((res)=>{
        console.log(res.data);
        countryData = res.data;
      }).then(()=>{
        countryData.map((data)=>{
          return countries.push({
            name:data.country,
            activeCases: data.active,
            recoveredCases : data.recovered,
            deaths : data.deaths,
            location : [data.countryInfo.lat,data.countryInfo.long]
          })
        })
        setCountryMap(countries);
        console.log(countries);
      })
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className='mapPage'>
      <h1 className="text-heading">CORONA cases fluctuations</h1>
      {showMap ? (<Chart coronaCasesFluctuation={coronaCasesFluctuation} />) : (<div>No data found</div>)}
      <Map countryMap={countryMap}/>
    </div>
  )
}

export default ChartsAndMapPage