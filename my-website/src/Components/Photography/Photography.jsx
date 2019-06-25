import React from 'react';
import './Photography.css';

import Carousel from '../Carousel/Carousel';

export default class Photography extends React.Component {

    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0, sideBar: false};
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
        if (this.state.width >  425){
            return (
                <div className="HorizontalPhotography">
                    <div className="HorizontalPhotographyText">
                        Besides coding, I also do photography in my free time. Below are some of my photos!
                    </div>
                    <Carousel />
                    <div>
                        <a className="HorizontalPhotographyLink" href="https://www.instagram.com/jlipinskiphoto/">If you would like to see more of photography you can click here!</a>
                    </div>
                    
                </div>
            )
        } else {
            return (
                <div className="VerticalPhotography">
                    <div className="VerticalPhotographyText">
                        Besides coding, I'm very passionate about photography. Below are some of my photos!
                    </div>
                    <Carousel />
                    <div>
                        <a className="HorizontalPhotographyLink" href="https://www.instagram.com/jlipinskiphoto/">If you would like to see more of photography you can click here!</a>
                    </div>
                </div>
            )
        }
    }
}