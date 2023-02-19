import * as React from "react";
import "./App.css";
import {CustomerHoldingsWidget} from './components/box'
import {CustomerHoldingsWidget1} from './components/box1'
import {TablesWidget11} from "./components/table.tsx";
import { TablesWidget } from "./components/table1.tsx";
import { ChartsWidget1 } from "./components/chart.tsx";
import { InvReport } from "./components/InvReport.tsx";
import Home from './Home';
import {useEffect, useState} from 'react';
const App = () => {
  const [width, setWindowWidth] = useState(0);

  useEffect( () => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return (
    <div className="App">
      <Home width={width}/>
      {/*<header className="App-header">
      
      <div className='row g-5 g-xl-10'>
      
      <div className='col-xl-2'>
        <div className='row g-5 g-xl-0'>
          <CustomerHoldingsWidget className='card-xl-stretch mb-xl-8'/>
        </div>
        <div className='row g-5 g-xl-0'>
          <CustomerHoldingsWidget1  className='card-xl-stretch mb-xl-8'/>
        </div>
      </div>
      <div className='col-xl-9'>
        <div className='row-xl-10'>
          <InvReport  className='card-xl-stretch mb-xl-8'/>
        </div>
        <div className='row-xl-8'>
          <ChartsWidget1 className='card-xl-stretch mb-xl-8'/>
        </div>
      </div>
      </div>
        <div className="col">
          
          
          <TablesWidget11/>
          <TablesWidget/>
          </div>
    
      
      </header>*/}
  </div>
  );
};
export default App;
