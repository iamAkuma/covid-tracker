import React, { useEffect } from 'react'

const Covid = () => {

    const getCovidData = async() => {
        try{
            const res = await fetch('https://api.covid19india.org/data.json')
            const actualData = await res.json();
            console.log(actualData.statewise)

        }catch(error){
            console.log(error)
        }
    }
    useEffect(() =>
    {
        getCovidData();
    }, [])
  return (
    <div>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 TRACKER</h2>
    </div>
  )
}

export default Covid
