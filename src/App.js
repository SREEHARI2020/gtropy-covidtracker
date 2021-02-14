import {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Tables from './components/Tables';

function App() {
  const [country,setCountry]=useState([]);
 const [states,setStates]=useState([]);
 
 
  useEffect(() => {
   
    const FetchCountry=async()=>{

      const {data}= await axios('https://api.covid19india.org/data.json')
     setCountry(data);
     console.log(data.statewise)
    }
    FetchCountry();

  }, [])
  useEffect(() => {
   
    const Fetchstates=async()=>{

      const {data}= await axios('https://api.covid19india.org/states_daily.json')
      setStates(data)
      console.log(data)
    }
    Fetchstates();

  }, [])

  
  return (
    <div className="App">
      <Tables statewise={country.statewise}/>
    </div>
  );
}

export default App;
