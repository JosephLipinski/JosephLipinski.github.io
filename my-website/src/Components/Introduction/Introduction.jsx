import React from 'react';
import './Introduction.css';

export default class Introduction extends React.Component{
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
                <div className="HorizontalIntroductionRow">
                    <div>
                        <img className="HorizontalImage" src="Joe_Photo.JPG"alt="CSC_0370.JPG"></img>
                    </div>
                    <div className="HorizontalTextColumn">
                        <div className="HorizontalTextContainer">
                            <p className="HorizontalIntroduction">Hi, welcome to my website!</p>
                            <p className="HorizontalBody">My name is Joseph Lipinski. I'm a programming generalist, AI enthusiast, and independent game developer.</p>
                            <a className="HorizontalBody" href="./JosephLipinskiResume.pdf" download>
                                You can grab a copy of my resume here
                            </a>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="VerticalRow">
                    <img className="VerticalImage" src="Joe_Photo.JPG" alt="Joe" ></img>
                    <div className="VerticalTextContainer">
                        <p className="VerticalIntroduction">Hi, welcome to my website!</p>
                        <p className="VerticalBody">My name is Joseph Lipinski and I'm a programming generalist, AI enthusiast, and independent game developer. </p>
                        <a className="VerticalBody" href="./JosephLipinskiResume.pdf" download>
                                You can grab a copy of my resume here
                            </a>
                    </div>              
                </div>
            )
        }
    }
}