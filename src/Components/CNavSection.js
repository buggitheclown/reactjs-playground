import React, { Component } from 'react';

class CNavSection extends Component{

  render(){
    let children = null;
    if (this.props.children!==undefined) {
      children=this.props.createChildren(this.props.children, this.props.identifier+"__");
    }
    return(
      <li>
        <a href={"#"+this.props.identifier}>{this.props.desc}</a>
        {children}
      </li>
    )
  }
}

export default CNavSection
