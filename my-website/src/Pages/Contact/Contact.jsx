import React from 'react';
import './Contact.css';
import Navbar from '../../Components/NavigationBar/Navbar';

 
export default class Contact extends React.Component{
    render(){
        return (
            <div className="Contact">           
                <Navbar/>
                <div className="ContactDiv">
                    <div className="ContactText">
                        If you would like to connect, you can reach me on the following platforms!
                    </div>
                    <div className="HorizontalContainer">
                      <div className="HorizontalDiv">
                          <div>Email: contact@josephslipinski.com</div>
                      </div>
                      <div className="HorizontalDiv">
                          <a href="https://www.linkedin.com/in/joseph-lipinski-37a61712b/">LinkedIn</a>
                      </div>
                      <div className="HorizontalDiv">
                          <a href="https://twitter.com/Discrete_Logic">Twitter</a>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

