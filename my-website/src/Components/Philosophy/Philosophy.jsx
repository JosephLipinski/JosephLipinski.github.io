import React from 'react';
import './Philosophy.css'

export default class Philosophy extends React.Component{
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
        if (this.state.width > 425){
            return (
                <div className="Test">
                    <div className="PhilosophyContainer">
                        <div className="PhilosophyIntroductionHorizontal">
                            <h1>My programming philosophy</h1>
                        </div>
                        <div className="PhilosophyBodyHorizontal">
                            1) Code written today should be understood tomorrow
                        </div>
                        <div className="PhilosophyBodyHorizontal">
                            2) Commit code early and commit often 
                        </div>
                        <div className="PhilosophyBodyHorizontal">
                            3) Always be willing to learn more
                        </div>
                        
                    </div>
                </div>
            );
        } else {
            return (
                <div className="Test">
                    <div className="PhilosophyContainer">
                        <div className="PhilosophyIntroductionVertical">
                            <h1>My programming philosophy</h1>
                        </div>
                        <div className="PhilosophyBodyVertical">
                            1) Code written today should be understood tomorrow
                        </div>
                        <div className="PhilosophyBodyVertical">
                            2) Commit code early and commit often 
                        </div>
                        <div className="PhilosophyBodyVertical">
                            3) Always be willing to learn more
                        </div>
                    </div>
                </div>
            );
        }
    }
}

