// src/App.js

import React, { useState } from 'react';

function App() {
  const [covidData, setCovidData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/covid19data');
      const data = await response.json();
      setCovidData(data);
    } catch (error) {
      console.error('Error fetching COVID-19 data:', error);
    }
  };

  return (
    <div className="App">
      <h1>COVID-19 Data Viewer</h1>
      <button onClick={fetchData}>Fetch Data</button>

      {covidData && (
        <pre>{JSON.stringify(covidData, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;
