import React from 'react';
import './SideBar.css';

export default class SideBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {sideBar:true};
        this.toggleSideBar = this.toggleSideBar.bind(this);
    }

    toggleSideBar(){
        this.setState (state => ({
            sideBar: !state.sideBar
        }));
    }

    render(){
        if (this.state.sideBar){
            return (
                <div>
                    <button className="normal-button" onClick={this.toggleSideBar} title="Click here to open the side board"></button>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="FadedColumn">
                        <div className="SideBarColumn">
                            <div className="button-column">
                                <button className="button-inline" onClick={this.toggleSideBar} title="Click here to open the side boadrd"></button>
                            </div>
                            <div className="SideDrawer">
                                <ul className="SideBar-ul">
                                    <li className="SideBar-li">
                                        <a className="sideBarText"href="/MyWork">My Work</a>
                                    </li>
                                    <li className="SideBar-li">
                                        <a className="sideBarText"href="/MoreThanCode">More than Code</a>
                                    </li>
                                    <li className="SideBar-li">
                                        <a className="sideBarText" href="/Contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                </div>
            )
        }
    }
}