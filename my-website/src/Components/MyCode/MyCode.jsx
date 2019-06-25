import React from 'react';
import './MyCode.css';

export default class MyCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
        if (this.state.width > 425) {
            return (
                <div className="HorizontalMyCodeRow">
                    <h1 className="HorizontalTextHeading">
                        Over the past few years I've had a lot of wonderful projects to work on!
                    </h1>
                    <div className="HorizontalTextContainer">
                        First, is this website. Which I coded from scratch using React.js! It's still a work a progress so if you have any comments or concerns feel free to contact me!
                    </div>
                    <div className="HorizontalTextContainer">
                        <a href="https://twitter.com/PointFilter"> I am also working with some friends to develop the second title for Point Filter Games. If you would like to learn more we usually keep our twitter up to date @PointFilter </a>
                    </div>
                    <div className="HorizontalTextContainer">
                        <a href="http://www.cci.drexel.edu/SeniorDesign/2018_2019/UnityASL/index.html">
                            I also had the oppertunity to lead my senior project team. Click here to learn more!
                        </a>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="VerticalMyCodeRow">
                    <h1 className="VerticalTextHeading">
                        Over the past few years I've had a lot of wonderful projects to work on!
                    </h1>
                    <div className="VerticalTextContainer">
                    First, is this website. Which I coded from scratch using React.js! It's still a work a progress so if you have any comments or concerns feel free to contact me!
                    </div>
                    <div className="VerticalTextContainer">
                        <a href="https://twitter.com/PointFilter"> I am also working with some friends to develop the second title for Point Filter Games. If you would like to learn more we usually keep our twitter up to date @PointFilter </a>
                    </div>
                    <div className="VerticalTextContainer">
                        <a href="http://www.cci.drexel.edu/SeniorDesign/2018_2019/UnityASL/index.html">
                            I also had the oppertunity to lead my senior project team. Click here to learn more!
                        </a>
                    </div>
                </div>
            )
        }
    }
}