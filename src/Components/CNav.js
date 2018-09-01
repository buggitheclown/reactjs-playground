import React, { Component } from 'react';
import constants from "../UtilityFiles/Constants.js";
import CNavSection from "./CNavSection";

class CNav extends Component{
  constructor(props){
    super(props);

    this.createChildren = this.createChildren.bind(this);
  }
  createChildren(children, myId){
    return (
      <ul>
      {children.map((child) =>
      <CNavSection key={myId+child.id} identifier={myId+child.id} desc={child.desc} children={child.children} createChildren={this.createChildren}/>
    )}
  </ul>
    )
  }

  render(){
    let sections = null;
    if (constants.jsonFile.sections.length>0){
      sections = this.createChildren(constants.jsonFile.sections, "");
    }
    return(
      <nav>
       {sections}
      </nav>
    );
  }
}

export default CNav

/*

*/
