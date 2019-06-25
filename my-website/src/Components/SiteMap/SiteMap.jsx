import React from 'react';
import './SiteMap.css';

export default class SiteMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0, sideBar: false};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.toggleSideBar = this.toggleSideBar.bind(this);
    }

    toggleSideBar(){
        this.setState( state => ({
            sideBar: !state.sideBar
        }));
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions (){
        this.setState({width: window.innerWidth, height: window.innerHeight });
    }
    
    render(){
        if (this.state.width >  425){
            return (
                <div className="HorizontalSiteMap">
                    <div className="HorizontalLeftSiteMap">
                        <div className="HorizontalContainerSiteMap">
                            <div className="HorizontalHeadingSiteMap">
                                <h1>Quick Links</h1>
                            </div>
                            <div className="HorizontalDivSiteMap">
                                <a href="/">Home</a>
                            </div>
                            <div className="HorizontalDivSiteMap">
                                <a href="/MyWork">My Work</a>
                            </div>
                            <div className="HorizontalDivSiteMap">
                                <a href="/MoreThanCode">More than Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="HorizontalRightSiteMap">
                        <div className="HorizontalContainerSiteMap">
                            <div className="HorizontalHeadingSiteMap">
                                <h1>Contact</h1>
                            </div>
                            <div className="HorizontalDivSiteMap">
                                <a href="https://www.linkedin.com/in/joseph-lipinski-37a61712b/">LinkedIn</a>
                            </div>
                            <div className="HorizontalDivSiteMap">
                                <a href="https://github.com/JosephLipinski">GitHub</a>
                            </div>
                            <div className="HorizontalDivSiteMap">
                                <a href="https://twitter.com/Discrete_Logic">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="VerticalSiteMap">
                    <div className="VerticalSiteMapContainer">
                        <div className="VerticalSiteMapDiv">
                            <div className="VerticalSiteMapHeading">
                                <h1>Quick Links</h1>
                            </div>
                            <div className="VerticalSiteMapLink">
                                <a href="/">Home</a>
                            </div>
                            <div className="VerticalSiteMapLink">
                                <a href="/MyWork">My Work</a>
                            </div>
                            <div className="VerticalSiteMapLink">
                                <a href="/MoreThanCode">More than Code</a>
                            </div>
                        </div>    
                        <div className="VerticalSiteMapDiv">
                            <div className="VerticalSiteMapHeading">
                                <h1>Contact</h1>
                            </div>
                            <div className="VerticalSiteMapLink">
                                <a href="https://www.linkedin.com/in/joseph-lipinski-37a61712b/">LinkedIn</a>
                            </div>
                            <div className="VerticalSiteMapLink">
                                <a href="https://github.com/JosephLipinski">GitHub</a>
                            </div>
                            <div className="VerticalSiteMapLink">
                                <a href="https://twitter.com/Discrete_Logic">Twitter</a>
                            </div>
                        </div>    
                    </div>           
                </div>
            )
        }
    }
}