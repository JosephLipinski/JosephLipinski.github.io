(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(47)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(21),r=a.n(o),s=(a(29),a(1)),l=a(2),c=a(4),m=a(3),d=a(5),h=(a(30),a(11)),u=(a(31),a(6)),p=(a(32),a(33),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={sideBar:!0},a.toggleSideBar=a.toggleSideBar.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggleSideBar",value:function(){this.setState(function(e){return{sideBar:!e.sideBar}})}},{key:"render",value:function(){return this.state.sideBar?i.a.createElement("div",null,i.a.createElement("button",{className:"normal-button",onClick:this.toggleSideBar,title:"Click here to open the side board"})):i.a.createElement("div",null,i.a.createElement("div",{className:"FadedColumn"},i.a.createElement("div",{className:"SideBarColumn"},i.a.createElement("div",{className:"button-column"},i.a.createElement("button",{className:"button-inline",onClick:this.toggleSideBar,title:"Click here to open the side boadrd"})),i.a.createElement("div",{className:"SideDrawer"},i.a.createElement("ul",{className:"SideBar-ul"},i.a.createElement("li",{className:"SideBar-li"},i.a.createElement("a",{className:"sideBarText",href:"/MyWork"},"My Work")),i.a.createElement("li",{className:"SideBar-li"},i.a.createElement("a",{className:"sideBarText",href:"/MoreThanCode"},"More than Code")),i.a.createElement("li",{className:"SideBar-li"},i.a.createElement("a",{className:"sideBarText",href:"/Contact"},"Contact")))))))}}]),t}(i.a.Component)),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={width:0,height:0,isHide:!1},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(u.a)(a)),a.toggleSideBar=a.toggleSideBar.bind(Object(u.a)(a)),a.hideNavBar=a.hideNavBar.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"hideNavBar",value:function(){var e=this.state.isHide;window.scrollY>this.prev?!e&&this.setState({isHide:!0}):e&&this.setState({isHide:!1}),this.prev=window.scrollY}},{key:"toggleSideBar",value:function(){this.setState(function(e){return{sideBar:!e.sideBar}})}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),window.addEventListener("scroll",this.hideNavBar)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions),window.removeEventListener("scroll",this.hideNavBar)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this.state.isHide?"hide":"Navbar";return this.state.width>425?i.a.createElement("div",{className:e},i.a.createElement("div",{className:"CurrentPage"},i.a.createElement("a",{href:"/"},"Joseph Lipinski")),i.a.createElement("div",{className:"Link"},i.a.createElement("a",{href:"/Contact"},"Contact")),i.a.createElement("div",{className:"Link"},i.a.createElement("a",{href:"/MoreThanCode"},"More than Code")),i.a.createElement("div",{className:"Link"},i.a.createElement("a",{href:"/MyWork"},"My Work"))):i.a.createElement("div",{className:e},i.a.createElement("div",{className:"CurrentPage"},i.a.createElement("a",{href:"/"},"Joseph Lipinski")),i.a.createElement(p,null))}}]),t}(i.a.Component),v=(a(34),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={width:0,height:0,sideBar:!1},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(u.a)(a)),a.toggleSideBar=a.toggleSideBar.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggleSideBar",value:function(){this.setState(function(e){return{sideBar:!e.sideBar}})}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return this.state.width>425?i.a.createElement("div",{className:"HorizontalIntroductionRow"},i.a.createElement("div",null,i.a.createElement("img",{className:"HorizontalImage",src:"Joe_Photo.JPG",alt:"CSC_0370.JPG"})),i.a.createElement("div",{className:"HorizontalTextColumn"},i.a.createElement("div",{className:"HorizontalTextContainer"},i.a.createElement("p",{className:"HorizontalIntroduction"},"Hi, welcome to my website!"),i.a.createElement("p",{className:"HorizontalBody"},"My name is Joseph Lipinski. I'm a programming generalist, AI enthusiast, and independent game developer."),i.a.createElement("a",{className:"HorizontalBody",href:"./JosephLipinskiResume.pdf",download:!0},"You can grab a copy of my resume here")))):i.a.createElement("div",{className:"VerticalRow"},i.a.createElement("img",{className:"VerticalImage",src:"Joe_Photo.JPG",alt:"Joe"}),i.a.createElement("div",{className:"VerticalTextContainer"},i.a.createElement("p",{className:"VerticalIntroduction"},"Hi, welcome to my website!"),i.a.createElement("p",{className:"VerticalBody"},"My name is Joseph Lipinski and I'm a programming generalist, AI enthusiast, and independent game developer. "),i.a.createElement("a",{className:"VerticalBody",href:"./JosephLipinskiResume.pdf",download:!0},"You can grab a copy of my resume here")))}}]),t}(i.a.Component)),E=(a(35),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={width:0,height:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return this.state.width>425?i.a.createElement("div",{className:"Test"},i.a.createElement("div",{className:"PhilosophyContainer"},i.a.createElement("div",{className:"PhilosophyIntroductionHorizontal"},i.a.createElement("h1",null,"My programming philosophy")),i.a.createElement("div",{className:"PhilosophyBodyHorizontal"},"1) Code written today should be understood tomorrow"),i.a.createElement("div",{className:"PhilosophyBodyHorizontal"},"2) Commit code early and commit often"),i.a.createElement("div",{className:"PhilosophyBodyHorizontal"},"3) Always be willing to learn more"))):i.a.createElement("div",{className:"Test"},i.a.createElement("div",{className:"PhilosophyContainer"},i.a.createElement("div",{className:"PhilosophyIntroductionVertical"},i.a.createElement("h1",null,"My programming philosophy")),i.a.createElement("div",{className:"PhilosophyBodyVertical"},"1) Code written today should be understood tomorrow"),i.a.createElement("div",{className:"PhilosophyBodyVertical"},"2) Commit code early and commit often"),i.a.createElement("div",{className:"PhilosophyBodyVertical"},"3) Always be willing to learn more")))}}]),t}(i.a.Component)),f=(a(36),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={width:0,height:0,sideBar:!1},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(u.a)(a)),a.toggleSideBar=a.toggleSideBar.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggleSideBar",value:function(){this.setState(function(e){return{sideBar:!e.sideBar}})}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return this.state.width>425?i.a.createElement("div",{className:"HorizontalSiteMap"},i.a.createElement("div",{className:"HorizontalLeftSiteMap"},i.a.createElement("div",{className:"HorizontalContainerSiteMap"},i.a.createElement("div",{className:"HorizontalHeadingSiteMap"},i.a.createElement("h1",null,"Quick Links")),i.a.createElement("div",{className:"HorizontalDivSiteMap"},i.a.createElement("a",{href:"/"},"Home")),i.a.createElement("div",{className:"HorizontalDivSiteMap"},i.a.createElement("a",{href:"/MyWork"},"My Work")),i.a.createElement("div",{className:"HorizontalDivSiteMap"},i.a.createElement("a",{href:"/MoreThanCode"},"More than Code")))),i.a.createElement("div",{className:"HorizontalRightSiteMap"},i.a.createElement("div",{className:"HorizontalContainerSiteMap"},i.a.createElement("div",{className:"HorizontalHeadingSiteMap"},i.a.createElement("h1",null,"Contact")),i.a.createElement("div",{className:"HorizontalDivSiteMap"},i.a.createElement("a",{href:"https://www.linkedin.com/in/joseph-lipinski-37a61712b/"},"LinkedIn")),i.a.createElement("div",{className:"HorizontalDivSiteMap"},i.a.createElement("a",{href:"https://github.com/JosephLipinski"},"GitHub")),i.a.createElement("div",{className:"HorizontalDivSiteMap"},i.a.createElement("a",{href:"https://twitter.com/Discrete_Logic"},"Twitter"))))):i.a.createElement("div",{className:"VerticalSiteMap"},i.a.createElement("div",{className:"VerticalSiteMapContainer"},i.a.createElement("div",{className:"VerticalSiteMapDiv"},i.a.createElement("div",{className:"VerticalSiteMapHeading"},i.a.createElement("h1",null,"Quick Links")),i.a.createElement("div",{className:"VerticalSiteMapLink"},i.a.createElement("a",{href:"/"},"Home")),i.a.createElement("div",{className:"VerticalSiteMapLink"},i.a.createElement("a",{href:"/MyWork"},"My Work")),i.a.createElement("div",{className:"VerticalSiteMapLink"},i.a.createElement("a",{href:"/MoreThanCode"},"More than Code"))),i.a.createElement("div",{className:"VerticalSiteMapDiv"},i.a.createElement("div",{className:"VerticalSiteMapHeading"},i.a.createElement("h1",null,"Contact")),i.a.createElement("div",{className:"VerticalSiteMapLink"},i.a.createElement("a",{href:"https://www.linkedin.com/in/joseph-lipinski-37a61712b/"},"LinkedIn")),i.a.createElement("div",{className:"VerticalSiteMapLink"},i.a.createElement("a",{href:"https://github.com/JosephLipinski"},"GitHub")),i.a.createElement("div",{className:"VerticalSiteMapLink"},i.a.createElement("a",{href:"https://twitter.com/Discrete_Logic"},"Twitter")))))}}]),t}(i.a.Component)),y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(w,null),i.a.createElement(v,null),i.a.createElement(E,null),i.a.createElement(f,null))}}]),t}(i.a.Component),g=(a(37),a(38),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={width:0,height:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return this.state.width>425?i.a.createElement("div",{className:"HorizontalMyCodeRow"},i.a.createElement("h1",{className:"HorizontalTextHeading"},"Over the past few years I've had a lot of wonderful projects to work on!"),i.a.createElement("div",{className:"HorizontalTextContainer"},"First, is this website. Which I coded from scratch using React.js! It's still a work a progress so if you have any comments or concerns feel free to contact me!"),i.a.createElement("div",{className:"HorizontalTextContainer"},i.a.createElement("a",{href:"https://twitter.com/PointFilter"}," I am also working with some friends to develop the second title for Point Filter Games. If you would like to learn more we usually keep our twitter up to date @PointFilter ")),i.a.createElement("div",{className:"HorizontalTextContainer"},i.a.createElement("a",{href:"http://www.cci.drexel.edu/SeniorDesign/2018_2019/UnityASL/index.html"},"I also had the oppertunity to lead my senior project team. Click here to learn more!"))):i.a.createElement("div",{className:"VerticalMyCodeRow"},i.a.createElement("h1",{className:"VerticalTextHeading"},"Over the past few years I've had a lot of wonderful projects to work on!"),i.a.createElement("div",{className:"VerticalTextContainer"},"First, is this website. Which I coded from scratch using React.js! It's still a work a progress so if you have any comments or concerns feel free to contact me!"),i.a.createElement("div",{className:"VerticalTextContainer"},i.a.createElement("a",{href:"https://twitter.com/PointFilter"}," I am also working with some friends to develop the second title for Point Filter Games. If you would like to learn more we usually keep our twitter up to date @PointFilter ")),i.a.createElement("div",{className:"VerticalTextContainer"},i.a.createElement("a",{href:"http://www.cci.drexel.edu/SeniorDesign/2018_2019/UnityASL/index.html"},"I also had the oppertunity to lead my senior project team. Click here to learn more!")))}}]),t}(i.a.Component)),b=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"MyWork"},i.a.createElement(w,null),i.a.createElement(g,null),i.a.createElement(f,null))}}]),t}(i.a.Component),k=(a(39),a(40),a(41),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={width:0,height:0,images:["Bridge-BW.jpg","Castle-Color.jpg","CityHall-Color.jpg"],currentIndex:0,translateValue:0},a.IncrementIndex=a.IncrementIndex.bind(Object(u.a)(a)),a.DecrementIndex=a.DecrementIndex.bind(Object(u.a)(a)),a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"IncrementIndex",value:function(){var e=this.state.currentIndex===this.state.images.length-1?0:this.state.currentIndex+1;this.setState(function(t){return{currentIndex:e}})}},{key:"DecrementIndex",value:function(){var e=0===this.state.currentIndex?this.state.images.length-1:this.state.currentIndex-1;this.setState(function(t){return{currentIndex:e}})}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){return this.state.width>425?i.a.createElement("div",{className:"HorizontalCarouselRow"},i.a.createElement("div",{className:"HorizontalButtonLeftColumn"},i.a.createElement("img",{onClick:this.DecrementIndex,src:"LeftArrow.png",alt:""})),i.a.createElement("div",{className:"HorizontalImageColumn"},i.a.createElement("img",{src:this.state.images[this.state.currentIndex],alt:""})),i.a.createElement("div",{className:"HorizontalButtonRightColumn"},i.a.createElement("img",{onClick:this.IncrementIndex,src:"RightArrow.png",alt:""}))):i.a.createElement("div",{className:"VerticalCarouselRow"},i.a.createElement("div",{className:"VerticalImageColumn"},i.a.createElement("img",{onClick:this.IncrementIndex,src:this.state.images[this.state.currentIndex],alt:""})))}}]),t}(i.a.Component)),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={width:0,height:0,sideBar:!1},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return this.state.width>425?i.a.createElement("div",{className:"HorizontalPhotography"},i.a.createElement("div",{className:"HorizontalPhotographyText"},"Besides coding, I also do photography in my free time. Below are some of my photos!"),i.a.createElement(k,null),i.a.createElement("div",null,i.a.createElement("a",{className:"HorizontalPhotographyLink",href:"https://www.instagram.com/jlipinskiphoto/"},"If you would like to see more of photography you can click here!"))):i.a.createElement("div",{className:"VerticalPhotography"},i.a.createElement("div",{className:"VerticalPhotographyText"},"Besides coding, I'm very passionate about photography. Below are some of my photos!"),i.a.createElement(k,null),i.a.createElement("div",null,i.a.createElement("a",{className:"HorizontalPhotographyLink",href:"https://www.instagram.com/jlipinskiphoto/"},"If you would like to see more of photography you can click here!")))}}]),t}(i.a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"MoreThanCode"},i.a.createElement(w,null),i.a.createElement(N,null),i.a.createElement(f,null))}}]),t}(i.a.Component),O=(a(42),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Contact"},i.a.createElement(w,null),i.a.createElement("div",{className:"ContactDiv"},i.a.createElement("div",{className:"ContactText"},"If you would like to connect, you can reach me on the following platforms!"),i.a.createElement("div",{className:"HorizontalContainer"},i.a.createElement("div",{className:"HorizontalDiv"},i.a.createElement("div",null,"Email: contact@josephslipinski.com")),i.a.createElement("div",{className:"HorizontalDiv"},i.a.createElement("a",{href:"https://www.linkedin.com/in/joseph-lipinski-37a61712b/"},"LinkedIn")),i.a.createElement("div",{className:"HorizontalDiv"},i.a.createElement("a",{href:"https://twitter.com/Discrete_Logic"},"Twitter")))))}}]),t}(i.a.Component)),C=function(){return i.a.createElement(h.c,null,i.a.createElement(h.a,{exact:!0,path:"/",component:y}),i.a.createElement(h.a,{exact:!0,path:"/MyWork",component:b}),i.a.createElement(h.a,{exact:!0,path:"/MoreThanCode",component:j}),i.a.createElement(h.a,{exact:!0,path:"/Contact",component:O}))},D=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(C,null))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(15);r.a.render(i.a.createElement(W.a,null,i.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.3bb00476.chunk.js.map