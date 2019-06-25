import React from 'react';
import './Carousel.css';

export default class Carousel extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            width:0,
            height:0,
            images: [
                "Bridge-BW.jpg",
                "Castle-Color.jpg",
                "CityHall-Color.jpg",
            ],
            currentIndex: 0,
            translateValue: 0
        }

        this.IncrementIndex = this.IncrementIndex.bind(this);
        this.DecrementIndex = this.DecrementIndex.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    IncrementIndex(){
        let newIndex = (this.state.currentIndex === this.state.images.length - 1)?0:(this.state.currentIndex + 1);
        this.setState( state => ({
            currentIndex: newIndex
        }))
    }

    DecrementIndex(){
        let newIndex = (this.state.currentIndex === 0)?(this.state.images.length - 1):(this.state.currentIndex - 1);
        this.setState( state => ({
            currentIndex: newIndex
        }))
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight });
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    render() {
        if (this.state.width > 425) {
            return (
                <div className="HorizontalCarouselRow">
                    <div className="HorizontalButtonLeftColumn">
                        <img onClick={this.DecrementIndex} src="LeftArrow.png" alt=""></img>
                    </div>
                    <div className="HorizontalImageColumn">
                        <img src={this.state.images[this.state.currentIndex]} alt=""></img>
                    </div>
                    <div className="HorizontalButtonRightColumn">
                    <img onClick={this.IncrementIndex} src="RightArrow.png" alt=""></img>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="VerticalCarouselRow">
                    <div className="VerticalImageColumn">
                        <img onClick={this.IncrementIndex} src={this.state.images[this.state.currentIndex]} alt=""></img>
                    </div>
                </div>
            )
        } 
    }
}