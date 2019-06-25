import React from 'react';
import './Home.css';
import Navbar from '../../Components/NavigationBar/Navbar';
import Introduction from '../../Components/Introduction/Introduction';
import Philosophy from '../../Components/Philosophy/Philosophy';
import SiteMap from '../../Components/SiteMap/SiteMap';
 
export default class Home extends React.Component{
  render(){
    return (
      <div className="App">           
        <Navbar/>
        <Introduction />
        <Philosophy />
        <SiteMap />
      </div>
    );
  }
}

