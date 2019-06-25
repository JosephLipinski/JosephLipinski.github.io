import React from 'react';
import './Navbar.css';
import SideBar from './SideBar/SideBar';

export default class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {width: 0, height: 0, isHide: false};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.toggleSideBar = this.toggleSideBar.bind(this);
        this.hideNavBar = this.hideNavBar.bind(this);
        
    }

    hideNavBar(){
        let {isHide} = this.state
        window.scrollY > this.prev?!isHide && this.setState({isHide:true}):isHide&&this.setState({isHide:false})
        this.prev = window.scrollY;
    }

    toggleSideBar(){
        this.setState( state => ({
            sideBar: !state.sideBar
        }));
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.hideNavBar);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('scroll', this.hideNavBar);
    }

    updateWindowDimensions (){
        
        this.setState({width: window.innerWidth, height: window.innerHeight });
    }

    render(){

        let shouldHide=this.state.isHide?"hide":"Navbar";
        if (this.state.width > 425){
            return (
                <div className={shouldHide}>
                    <div className="CurrentPage"><a href="/">Joseph Lipinski</a></div>
                    <div className="Link"><a href="/Contact">Contact</a></div>
                    <div className="Link"><a href="/MoreThanCode">More than Code</a></div>   
                    <div className="Link"><a href="/MyWork">My Work</a></div>                   
                </div>
            );
        } else {
            return (
                <div className={shouldHide}>
                    <div className="CurrentPage"><a href="/">Joseph Lipinski</a></div>    
                    <SideBar />
                </div>
            );
        }
    }
}