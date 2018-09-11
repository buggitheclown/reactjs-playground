import React, { Component } from 'react';
import './App.css';
import logger from "./UtilityFiles/Logger.js";
import * as utils from "./UtilityFiles/UtilityFunctions.js";
import constants from "./UtilityFiles/Constants.js";
import CBanner from "./Components/CBanner";
import CNav from "./Components/CNav";
import * as Articles from "./Components/Articles.js";

class App extends Component {
  //to get id(0) and desc(1) of a section:
  //utils.getSectionInfo([1,3],constants.jsonFile,"",true)[0]
  //utils.getSectionInfo([1,3],constants.jsonFile,"",true)[1]
  id(hierarchy){
    return utils.getSectionInfo(hierarchy,constants.jsonFile,"",true)[0];
  }
  desc(hierarchy){
    return utils.getSectionInfo(hierarchy,constants.jsonFile,"",true)[1];
  }

  render() {
    return (
      <div>
        <CBanner/>
        <CNav/>
        <main role="main">
          <section id={this.id([0])}>
            <header><h1>{this.desc([0])}</h1></header>
            <Articles.ATextHeadings identifier={this.id([0,0])} desc={this.desc([0,0])}/>
            <Articles.ATextParagraphs identifier={this.id([0,1])} desc={this.desc([0,1])}/>
            <Articles.ATextBlockquotes identifier={this.id([0,2])} desc={this.desc([0,2])}/>
            <Articles.ATextLists identifier={this.id([0,3])} desc={this.desc([0,3])}/>
            <Articles.ATextHr identifier={this.id([0,4])} desc={this.desc([0,4])}/>
            <Articles.ATextTables identifier={this.id([0,5])} desc={this.desc([0,5])}/>
            <Articles.ATextCode identifier={this.id([0,6])} desc={this.desc([0,6])}/>
            <Articles.ATextInline identifier={this.id([0,7])} desc={this.desc([0,7])}/>
            <Articles.ATextComments identifier={this.id([0,8])} desc={this.desc([0,8])}/>
          </section>
          <section id={this.id([1])}>
            <header><h1>{this.desc([1])}</h1></header>
            <Articles.AEmbeddedImages identifier={this.id([1,0])} desc={this.desc([1,0])}/>
            <Articles.AEmbeddedAudio identifier={this.id([1,1])} desc={this.desc([1,1])}/>
            <Articles.AEmbeddedVideo identifier={this.id([1,2])} desc={this.desc([1,2])}/>
            <Articles.AEmbeddedCanvas identifier={this.id([1,3])} desc={this.desc([1,3])}/>
            <Articles.AEmbeddedMeter identifier={this.id([1,4])} desc={this.desc([1,4])}/>
            <Articles.AEmbeddedProgress identifier={this.id([1,5])} desc={this.desc([1,5])}/>
            <Articles.AEmbeddedSvg identifier={this.id([1,6])} desc={this.desc([1,6])}/>
            <Articles.AEmbeddedIFrame identifier={this.id([1,7])} desc={this.desc([1,7])}/>
          </section>
          <section id={this.id([2])}>
            <header><h1>{this.desc([2])}</h1></header>
            <form>
            <Articles.AInputText identifier={this.id([2,0])} desc={this.desc([2,0])}/>
            <Articles.AInputSelect identifier={this.id([2,1])} desc={this.desc([2,1])}/>
            <Articles.AInputCheckbox identifier={this.id([2,2])} desc={this.desc([2,2])}/>
            <Articles.AInputRadio identifier={this.id([2,3])} desc={this.desc([2,3])}/>
            <Articles.AInputTextareas identifier={this.id([2,4])} desc={this.desc([2,4])}/>
            <Articles.AInputHtml5 identifier={this.id([2,5])} desc={this.desc([2,5])}/>
            <Articles.AInputActionForms identifier={this.id([2,6])} desc={this.desc([2,6])}/>
            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
