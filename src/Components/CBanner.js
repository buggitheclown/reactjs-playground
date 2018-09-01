import React, { Component } from 'react';

class CBanner extends Component{
  constructor(props){
    super(props);

    this.state = ({hoverBanner: false, bannerColor: "#FFFFFF",hoverDesc: false, descColor: "#FFFFFF"});
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(element){
    if(element === "banner"){
      let hoverStatus = this.state.hoverBanner;
      //If mouse is being hovered pick some color
      if (!hoverStatus===true){
        this.setState({hoverBanner: !hoverStatus, bannerColor: "#117590"});
      }
      //If mouse is moving away go back to white
      else{
        this.setState({hoverBanner: !hoverStatus, bannerColor: "#FFFFFF"});
      }
    }
    else{
      let hoverStatus = this.state.hoverDesc;
      //If mouse is being hovered pick some color
      if (!hoverStatus===true){
        this.setState({hoverDesc: !hoverStatus, descColor: "#0f830f"});
      }
      //If mouse is moving away go back to white
      else{
        this.setState({hoverDesc: !hoverStatus, descColor: "#FFFFFF"});
      }
    }
  }

  render(){
    let banner;
    //if no hover use default CSS
    if (!this.state.hoverBanner){
      banner = <h1 className="Banner-header" onMouseEnter={this.changeColor.bind(this, "banner")} onMouseLeave={this.changeColor.bind(this, "banner")}>HTML5+Reactjs Test Page</h1>
    }
    else{
      banner = <h1 className="Banner-header" style={{backgroundColor: this.state.bannerColor}} onMouseEnter={this.changeColor.bind(this, "banner")} onMouseLeave={this.changeColor.bind(this, "banner")}>HTML5+Reactjs Test Page</h1>
    }
    return(
      <header role="banner">
        {banner}
        <p style={{backgroundColor: this.state.descColor}} onMouseEnter={this.changeColor.bind(this, "desc")} onMouseLeave={this.changeColor.bind(this, "desc")}>This is a test page filled with common HTML elements embedded with Reactjs functionalities to be used to provide visual feedback whilst building CSS systems and frameworks.</p>
      </header>
    );
  }
}

export default CBanner
