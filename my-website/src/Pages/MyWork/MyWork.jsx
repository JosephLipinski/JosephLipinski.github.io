import React from 'react';
import './MyWork.css';
import Navbar from '../../Components/NavigationBar/Navbar';
import MyCode from '../../Components/MyCode/MyCode';
import SiteMap from '../../Components/SiteMap/SiteMap';
 
export default class MyWork extends React.Component{
  render(){
    return (
      <div className="MyWork">     
        <Navbar/>
        <MyCode />  
        <SiteMap />
      </div>
    );
  }
}

