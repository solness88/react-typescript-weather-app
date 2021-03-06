import React from 'react';
import { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

type ResultsStateType = {
  country: string,
  cityName: string,
  temperature: string,
  conditionText: string,
  icon: string
}

function App() {

  const [city, setCity] = useState<string>("");

  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });

  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(`http://api.weatherapi.com/v1/current.json?key=3204271950ce4cdabe355332222304&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        });
      });
  };

  return (
    <div className="w-full h-screen bg-cover bg-center bg-cover-image">
      <div className="h-screen w-screen flex justify-center items-center flex-col">
        <div className="bg-slate-200 bg-opacity-75 rounded-3xl p-12 h-1/2 w-1/2">
          <Title />
          <Form setCity={setCity} getWeather={getWeather} />
          <Results results={results} />
        </div>
      </div>
    </div>
  );
}

export default App;
