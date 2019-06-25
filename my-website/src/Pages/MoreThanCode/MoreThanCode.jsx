import React from 'react';
import './MoreThanCode.css';
import Navbar from '../../Components/NavigationBar/Navbar';
import Photography from '../../Components/Photography/Photography';
import SiteMap from '../../Components/SiteMap/SiteMap';

export default class MoreThanCode extends React.Component{

  render(){
    return (
      <div className="MoreThanCode">           
        <Navbar/>
        <Photography />
        <SiteMap />
      </div>
    );
  }
}

