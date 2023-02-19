
import {  Layout } from 'antd';
import React,{useState} from 'react';
import {isMobile} from './const';
import Navbar from './components/navbar';
import SidebarFixed from './components/sidebarFixed';
import SidebarDrawer from './components/sidebarDrawer';
import "./App.css";
import {CustomerHoldingsWidget} from './components/box'
import {CustomerHoldingsWidget1} from './components/box1'
import {TablesWidget11} from "./components/table.tsx";
import { TablesWidget } from "./components/table1.tsx";
import { ChartsWidget1 } from "./components/chart.tsx";
import { InvReport } from "./components/InvReport.tsx";
import {useEffect} from 'react';
const { Content, Footer } = Layout;



const Home = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout hasSider>
      <SidebarFixed/>
      {isMobile(props.width) && <SidebarDrawer open={open} onClose={onClose}/>}
      <Layout
        className="site-layout"
        style={{  marginLeft: isMobile(props.width)?0: 150 }}>
        <Content>
          <Navbar width={props.width} showDrawer={showDrawer}/>
        </Content>
        <div className="App">
      <header className="App-header">
      
      <div className='row g-5 g-xl-10'>
      
      <div className='col-xl-2'>
        <div className='row g-5 g-xl-0'>
          <CustomerHoldingsWidget className='card-xl-stretch mb-xl-8'/>
        </div>
        <div className='row g-5 g-xl-0'>
          <CustomerHoldingsWidget1  className='card-xl-stretch mb-xl-8'/>
        </div>
      </div>
      <div className='col-xl-10'>
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
    
      
      </header>
    </div>
        <Footer style={{ textAlign: 'center' }} >
          Metfolio ©2023. All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;