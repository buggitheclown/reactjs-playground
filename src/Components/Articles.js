import React, { Component } from 'react';
import logger from "../UtilityFiles/Logger.js";

class ATemplate extends Component{
  render(){
    return(
      <article id={this.props.identifier}>
        <header>
          <h1>{this.props.desc}</h1>
        </header>
        {this.props.content}
      </article>
    );
  }
}

class AFormTemplate extends Component{
  render(){
    return(
      <fieldset id={this.props.identifier}>
        <legend>{this.props.desc}</legend>
        {this.props.content}
      </fieldset>
    );
  }
}

class ATextHeadings extends Component{
  render(){
    let content =
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class ATextParagraphs extends Component{
  render(){
    let content =
    <div>
      <p>A paragraph (from the Greek paragraphos, “to write beside” or “written beside”) is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
    </div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class ATextBlockquotes extends Component{
  render(){
    let content = <div>
      <blockquote>
        <p>A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text.</p>
        <p>It is typically distinguished visually using indentation and a different typeface or smaller size quotation. It may or may not include a citation, usually placed at the bottom.</p>
        <cite><a href="#!">Said no one, ever.</a></cite>
      </blockquote>
    </div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class ATextLists extends Component{
  render(){
    let content =
    <div>
      <h3>Definition list</h3>
      <dl>
        <dt>Definition List Title</dt>
        <dd>This is a definition list division.</dd>
      </dl>
      <h3>Ordered List</h3>
      <ol>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ol>
      <h3>Unordered List</h3>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>
    </div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class ATextHr extends Component{
  render(){
    let content =
    <div>
      <hr></hr>
    </div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class ATextTables extends Component{
  render(){
    let content =
    <table>
      <caption>Table Caption</caption>
      <thead>
        <tr>
          <th>Table Heading 1</th>
          <th>Table Heading 2</th>
          <th>Table Heading 3</th>
          <th>Table Heading 4</th>
          <th>Table Heading 5</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Table Footer 1</th>
          <th>Table Footer 2</th>
          <th>Table Footer 3</th>
          <th>Table Footer 4</th>
          <th>Table Footer 5</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
      </tbody>
    </table>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class ATextCode extends Component{
  render(){
    let content =
    <div>
      <p><strong>Keyboard input:</strong> <kbd>Cmd</kbd></p>
      <p><strong>Inline code:</strong> <code>&lt;div&gt;code&lt;/div&gt;</code></p>
      <p><strong>Sample output:</strong> <samp>This is sample output from a computer program.</samp></p>
      <h2>Pre-formatted text</h2>
      <pre>P R E F O R M A T T E D T E X T
! " # $ % &amp; ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
` a b c d e f g h i j k l m n o
p q r s t u v w x y z {  } ~ </pre>
    </div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class ATextInline extends Component{
  render(){
    let content =
    <div>
      <p><a href="#!">This is a text link</a>.</p>
      <p><strong>Strong is used to indicate strong importance.</strong></p>
      <p><em>This text has added emphasis.</em></p>
      <p>The <b>b element</b> is stylistically different text from normal text, without any special importance.</p>
      <p>The <i>i element</i> is text that is offset from the normal text.</p>
      <p>The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual annotation.</p>
      <p><del>This text is deleted</del> and <ins>This text is inserted</ins>.</p>
      <p><s>This text has a strikethrough</s>.</p>
      <p>Superscript<sup>®</sup>.</p>
      <p>Subscript for things like H<sub>2</sub>O.</p>
      <p><small>This small text is small for for fine print, etc.</small></p>
      <p>Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></p>
      <p><q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">This text is a short inline quotation.</q></p>
      <p><cite>This is a citation.</cite></p>
      <p>The <dfn>dfn element</dfn> indicates a definition.</p>
      <p>The <mark>mark element</mark> indicates a highlight.</p>
      <p>The <var>variable element</var>, such as <var>x</var> = <var>y</var>.</p>
      <p>The time element: <time dateTime="2013-04-06T12:32+00:00">2 weeks ago</time></p>
    </div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class ATextComments extends Component{
  render(){
    let content =
    <div>
      <p>There is comment here: {/*This comment should not be displayed*/}</p>
      <p>There is a comment spanning multiple tags and lines below here.</p>
      {/*<p><a href="#!">This is a text link.</a>.</p>
      <p><strong>Strong is used to indicate strong importance. </strong></p>
      <p><em>This text has added emphasis.</em></p>*/}
    </div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AEmbeddedImages extends Component{
  constructor(props){
    super(props);

    this.state=({img1: "http://placekitten.com/480/480", img2: "http://placekitten.com/420/420", img3: "http://placekitten.com/420/420"})
    this.switchImage = this.switchImage.bind(this);
  }

  switchImage(imageIndex){
    switch (imageIndex){
      case 1:
      let link = this.state.img1;
      if (link === "http://placekitten.com/480/480"){
        link = "https://i.pinimg.com/originals/f6/e9/f1/f6e9f16677ef864836f4b5bc2bc25b54.jpg";
      }
      else{
        link = "http://placekitten.com/480/480";
      }
      this.setState({img1: link});
      break;
      default:
      break;
    }
  }

  render(){
    let content =
    <div>
      <h3>No <code>&lt;figure&gt;</code> element</h3>
      <p><img src={this.state.img1} alt="Alt text" onClick={this.switchImage.bind(this, 1)}/></p>
      <h3>Wrapped in a <code>&lt;figure&gt;</code> element, no <code>&lt;figcaption&gt;</code></h3>
      <figure><img src={this.state.img2} alt="Alt text"/></figure>
      <h3>Wrapped in a <code>&lt;figure&gt;</code> element, with a <code>&lt;figcaption&gt;</code></h3>
      <figure>
        <img src={this.state.img3} alt="Alt text"/>
        <figcaption>Here is a caption for this image.</figcaption>
      </figure>
    </div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AEmbeddedAudio extends Component{
  render(){
    let content =
  <div><audio controls src="https://www.mfiles.co.uk/mp3-downloads/rachmaninoff-prelude-in-c-sharp-minor.mp3">audio</audio></div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AEmbeddedVideo extends Component{
  render(){
    let content =
    <div><video controls src="http://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4">video</video></div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AEmbeddedCanvas extends Component{
  /*
   Source:
   https://blog.cloudboost.io/using-html5-canvas-with-react-ff7d93f5dc76?gi=2fb0e509e969
   */
  constructor(props){
    super(props);

    this.state = ({cheese: "https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2015/08/cheese.jpg?fit=1200%2C800"})
  }

  componentDidMount() {
      const canvas = this.refs.canvas;
      const ctx = canvas.getContext("2d");
      const img = this.refs.image;

      img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = "40px Courier";
      ctx.fillText(this.props.text, 210, 75);
    }
    }

  render(){
    let content =
    <div>
    <canvas width={640} height={425} ref="canvas">canvas</canvas>
    <img alt="cheese" ref="image" src={this.state.cheese} className="hidden" />
    </div>

    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AEmbeddedMeter extends Component{
  constructor(props){
    super(props);
    this.state = ({meter: 1});

    this.loadMeter = this.loadMeter.bind(this);
  }

  componentDidMount(){
    var interval = setInterval(this.loadMeter, 2000);
    this.setState({interval: interval});
  }

  componentWillUnmount(){
    clearInterval(this.state.interval);
  }

  loadMeter(){
    let newMeter = Math.floor((Math.random() * 11));

    this.setState({meter: newMeter});
  }

  render(){
    let content =
    <div>
    <meter value={this.state.meter} min="0" max="10" low="4" high="8">{this.state.meter+" out of 10"}</meter>
    <p>{this.state.meter}</p>
    </div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AEmbeddedProgress extends Component{
  constructor(props){
    super(props);
    this.state = ({meter: 10});

    this.loadMeter = this.loadMeter.bind(this);
  }

  componentDidMount(){
    var interval = setInterval(this.loadMeter, 2000);
    this.setState({interval: interval});
  }

  componentWillUnmount(){
    clearInterval(this.state.interval);
  }

  loadMeter(){
    let currentMeter = parseInt(this.state.meter,10);
    let newProgress = Math.floor((Math.random() * (50-5))+5);
    let newMeter = currentMeter;
    if (currentMeter===100){
      newMeter=0;
    }
    else if (currentMeter+newProgress>100){
      newMeter=100;
    }
    else {
      newMeter = currentMeter+newProgress;
    }
    this.setState({meter: newMeter.toString()});
  }

  render(){
    let content =
    <div><progress value={this.state.meter} max="100">progress</progress></div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AEmbeddedSvg extends Component{
  constructor(props){
    super(props);

    this.state = ({x1: 0, x2: 1, y1: 0, y2: 1});
    this.randomizeSvg = this.randomizeSvg.bind(this);
  }

  componentDidMount(){
    var interval = setInterval(this.randomizeSvg, 2000);
    this.setState({interval: interval});
  }

  componentWillUnmount(){
    clearInterval(this.state.interval);
  }

  randomizeSvg(){
    let x1 = Math.random().toFixed(2);
    let x2 = Math.random().toFixed(2);
    let y1 = Math.random().toFixed(2);
    let y2 = Math.random().toFixed(2);
    this.setState({x1: x1, x2: x2, y1: y1, y2: y2});
  }

  render(){
    let content =
    <div>
    <svg width="200px" height="200px">
    <defs>
    <linearGradient id="Gradient2" x1={this.state.x1} x2={this.state.x2} y1={this.state.y1} y2={this.state.y2}>
        <stop offset="0%" stopColor="red"/>
        <stop offset="50%" stopColor="black" stopOpacity="0"/>
        <stop offset="100%" stopColor="blue"/>
      </linearGradient>
   </defs>
    <circle cx="100" cy="100" r="100" fill="url(#Gradient2)"></circle>
    </svg>
    </div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AEmbeddedIFrame extends Component{
  //Avoid IFrames: https://www.ostraining.com/blog/webdesign/against-using-iframes/
  render(){
    let content =
    <div>
    <iframe title="This frame's title" src="index.html" height="300"></iframe>
    {/* To link another site using an IFrame (note: most dont allow this):
      <iframe src="demo_iframe.htm" name="iframe_a"></iframe>

    <p><a href="https://www.leo.org" target="iframe_a">W3Schools.com</a></p> */}
    </div>
    return(
      <ATemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AInputText extends Component{
  constructor(props){
    super(props);

    this.state = ({iText: "",iNumber: "", iPassword: ""})
    this.handleChange = this.handleChange.bind(this);
    this.spellInput = this.spellInput.bind(this);
  }

  handleChange(event){
    let newValue = event.target.value;
    if (event.target.id === "input__text"){
      newValue = newValue.replace(' ','');
      this.setState({iText: newValue});
    }
    else if(event.target.id === "input__password"){
      if (newValue==="asdfg12345!"){
        window.location = "https://fineleatherjackets.net/realhuman/bean/";
      }
      this.setState({iPassword: newValue});
    }
    //When someone enters a non-numerical input into a input type=number field the value is ""
    //This means as long as the new value isn't "" you can update the state
    else if (event.target.id === "input__text2"&&newValue!==""){
      this.setState({iNumber: newValue})
    }
  }

  spellInput(){
    let result = "";
    let input = this.state.iText.toUpperCase();
    for (let i=0; i<input.length; i++){
      result+=" "+input.charAt(i);
    }
    return result;
  }

  render(){
    let content =
        <div>
        <p>
          <label htmlFor="input__text">The word </label>
          <input id="input__text" type="text" placeholder="Text Input" value={this.state.iText} onChange={this.handleChange}/>
           {" is spelled"+this.spellInput()}
        </p>
        <p>
          <label htmlFor="input__password">Password </label>
          <input id="input__password" value={this.state.iPassword} onChange={this.handleChange} type="password" placeholder="Type your Password"/>
        </p>
        <i>Type asdfg12345! to prove that you are a real human bean</i>
        <p>
          <label htmlFor="input__webaddress">Web Address </label>
          <input id="input__webaddress" type="url" placeholder="https://fineleatherjackets.net/realhuman/"/>
        </p>
        <p>
          <label htmlFor="input__emailaddress">Email Address </label>
          <input id="input__emailaddress" type="email" placeholder="name@email.com"/>
        </p>
        <p>
          <label htmlFor="input__phone">Phone Number </label>
          <input id="input__phone" type="tel" placeholder="(999) 999-9999"/>
        </p>
        <p>
          <label htmlFor="input__search">Search </label>
          <input id="input__search" type="search" placeholder="Enter Search Term"/>
        </p>
        <p>
          <label htmlFor="input__text2">Number Input</label>
          <input id="input__text2" value={this.state.iNumber} onChange={this.handleChange} type="number" placeholder="Enter a Number"/>
        </p>
        <p>
          <label htmlFor="input__text3" className="error">Error </label>
          <input id="input__text3" className="is-error" type="text" placeholder="Text Input"/>
        </p>
        <p>
          <label htmlFor="input__text4" className="valid">Valid </label>
          <input id="input__text4" className="is-valid" type="text" placeholder="Text Input"/>
        </p>
        </div>
    return(
      <AFormTemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AInputSelect extends Component{
  constructor(props){
    super(props);
    this.state=({optionsExist: true, iFood: "", iOption: "", selectedOption: 1, optionsAndValues: [[0,"Fruit","Apples"],[1,"Veggies","Carrots"],[2,"Berries","Raspberry"]]});

    this.createOption=this.createOption.bind(this);
    this.deleteOption=this.deleteOption.bind(this);
    this.changeOption=this.changeOption.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.renderOptions=this.renderOptions.bind(this);
  }

  handleChange(event){
    let newValue = event.target.value;
    if (event.target.id === "input__foodOption"){
      this.setState({iOption: newValue});
    }
    else if(event.target.id === "input__food"){
      this.setState({iFood: newValue});
    }
  }

  changeOption(event){
    this.setState({selectedOption: event.target.value});
  }

  createOption(event){
    event.preventDefault();
    let options = this.state.optionsAndValues;
    let index;
    if (options!=null){
      index = options.length
    }
    else {
      index = 0;
    }
    let option = this.state.iOption;
    let food = this.state.iFood;
    let newEntry = [index,option,food];
    if(food.length>0&&option.length>0){
      if(options!=null){
        options.push(newEntry);
      }
      else {
        options=[newEntry];
      }
    }
    this.setState({optionsAndValues: options});
    if(!this.state.optionsExist){
      this.setState({optionsExist: true});
    }
  }

  deleteOption(event){
    event.preventDefault();
    let index = this.state.selectedOption;
    let options = this.state.optionsAndValues;
    if (options.length>1){
      options.splice(index, 1);
      this.setState({optionsAndValues: options, selectedOption: 0});
    }
    else {
      options=null;
      this.setState({optionsAndValues: options, optionsExist: false});
    }


  }

  renderOptions(){
    if (this.state.optionsExist){
      return(
      <p>
        <label htmlFor="select">Select a food option </label>
        <br></br>
        <select onChange={this.changeOption} value={this.state.selectedOption} id="select">
          <optgroup label="Your Options">
            {this.state.optionsAndValues.map((tuple) =>
              <option key={tuple[0]} value={tuple[0]}>{tuple[1]}</option>
            )}
          </optgroup>
        </select>
        {" "+this.state.optionsAndValues[this.state.selectedOption][2]+" "}
        <button onClick={this.deleteOption}>Delete this option</button>
      </p>
    );
    }
    else return null;
  }

  render(){
    let renderedOptions =this.renderOptions();
    let content =
    <div>
    {renderedOptions}
    <p>
      {"Add a new option!"}
      <br></br>
      <label htmlFor="input__foodOption">Option name: </label>
      <input id="input__foodOption" type="text" placeholder="Text Input" value={this.state.iOption} onChange={this.handleChange}/>
      <label htmlFor="input__food"> Food name: </label>
      <input id="input__food" type="text" placeholder="Text Input" value={this.state.iFood} onChange={this.handleChange}/>
      <button onClick={this.createOption}>Create this option</button>
    </p>
    </div>

    return(
      <AFormTemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AInputCheckbox extends Component{
  constructor(props){
    super(props);
    this.state = ({c1: false, c2: true, c3: false})

    this.toggleBoxes = this.toggleBoxes.bind(this);
  }

  toggleBoxes(event){
    event.preventDefault();
    let c1;
    let c2;
    let c3;
    switch (event.target.id){
      case "checkbox1":
      c1 = this.state.c1;
      c2 = !this.state.c2;
      c3 = false;
      break;
      case "checkbox2":
      c1 = true;
      c2 = true;
      c3 = this.state.c2;
      break;
      case "checkbox3":
      c1 = false;
      c2 = !this.state.c1;
      c3 = !this.state.c1&&this.state.c3;
      break;
    }
    this.setState({c1: c1, c2: c2, c3: c3});
  }

  render(){
    let content =
    <ul className="list list--bare">
      <li><label htmlFor="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked={this.state.c1} onChange={this.toggleBoxes}/> Choice A</label></li>
      <li><label htmlFor="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox" checked={this.state.c2} onChange={this.toggleBoxes}/> Choice B</label></li>
      <li><label htmlFor="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox" checked={this.state.c3} onChange={this.toggleBoxes}/> Choice C</label></li>
    </ul>
    return(
      <AFormTemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AInputRadio extends Component{
  constructor(props){
    super(props);
    this.state = ({options: ["1","2","3","4"], checked: [false, true, false, false, false, false, false, false, false, false, false, false],
    desc: ["Option 1","Option 2","Option 3","Option 4","Option 5","6","Option 7","Option 8","6","6"], sixCounter: 0, imageOn: false});

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    let options;
    let checked;
    let desc = this.state.desc;
    let sixCounter = this.state.sixCounter;
    switch(event.target.id.substring(5)){
      case "1":
      options = ["1","8"];
      checked = [true, false, false, false, false, false, false, false, false, false];
      break;
      case "2":
      options = ["1","2","3","4","5","6","7","8"];
      checked = [false, true, false, false, false, false, false, false, false, false];
      break;
      case "3":
      options = ["1","3","6","7","8"];
      checked = [false, false, true, false, false, false, false, false, false, false];
      break;
      case "4":
      options = ["4","5"];
      checked = [false, false, false, true, false, false, false, false, false, false];
      break;
      case "5":
      options = ["1","4","5","7"];
      checked = [false, false, false, false, true, false, false, false, false, false];
      break;
      case "6":
      options = ["6","9","10"];
      checked = [false, false, false, false, false, true, false, false, false, false];
      sixCounter===null ? sixCounter=1 : sixCounter++;
      if (sixCounter===3){
        options = ["1","2","3","4","5","6","7","8"];
        checked = [false, false, false, false, false, true, false, false, false, false];
        desc = ["Why","Have","You","Done","This","B̷̧̗̼̖̈́͌̓͛̀̂̊͑̅͑͌̓̋̇͝r̷̭̦̖̥͗̂̈̍̏͆͂̅̚o̶̫͔̜̯̺̞̹̺͙͉̩̔͊̂̈̽̏̃͛́̅͆̈́͝ṯ̸̨̢̯̜̳͕̱͙̝̫̜̻͂͑͜ͅh̸̡͓̭̑͘é̸̠̫̻̹̪͉̩̮̙̦̐̊͒̓͗̃̊̓̇̌̍̇̎r̶͙̺̦̼͖͉͖͚̟̿̉͊","Run","Now","6","6"];
        this.setState({imageOn: true});
      }
      else{
        this.setState({sixCounter: sixCounter});
      }
      break;
      case "7":
      options = ["7","8"];
      checked = [false, false, false, false, false, false, true, false, false, false];
      break;
      case "8":
      options = ["2","8"];
      checked = [false, false, false, false, false, false, false, true, false, false];
      break;
      case "9":
      options = ["6","9","10"];
      checked = [false, false, false, false, false, false, false, false, true, false];
      sixCounter = this.state.sixCounter +1;
      if (sixCounter===3){
        options = ["1","2","3","4","5","6","7","8"];
        checked = [false, false, false, false, false, true, false, false, false, false];
        desc = ["Why","Have","You","Done","This","B̷̧̗̼̖̈́͌̓͛̀̂̊͑̅͑͌̓̋̇͝r̷̭̦̖̥͗̂̈̍̏͆͂̅̚o̶̫͔̜̯̺̞̹̺͙͉̩̔͊̂̈̽̏̃͛́̅͆̈́͝ṯ̸̨̢̯̜̳͕̱͙̝̫̜̻͂͑͜ͅh̸̡͓̭̑͘é̸̠̫̻̹̪͉̩̮̙̦̐̊͒̓͗̃̊̓̇̌̍̇̎r̶͙̺̦̼͖͉͖͚̟̿̉͊","Run","Now","6","6"];
        this.setState({imageOn: true});
      }
      else{
        this.setState({sixCounter: sixCounter});
      }
      break;
      case "10":
      options = ["6","9","10"];
      checked = [false, false, false, false, false, false, false, false, false, true];
      sixCounter = this.state.sixCounter +1;
      if (sixCounter===3){
        options = ["1","2","3","4","5","6","7","8"];
        checked = [false, false, false, false, false, true, false, false, false, false];
        desc = ["Why","Have","You","Done","This","B̷̧̗̼̖̈́͌̓͛̀̂̊͑̅͑͌̓̋̇͝r̷̭̦̖̥͗̂̈̍̏͆͂̅̚o̶̫͔̜̯̺̞̹̺͙͉̩̔͊̂̈̽̏̃͛́̅͆̈́͝ṯ̸̨̢̯̜̳͕̱͙̝̫̜̻͂͑͜ͅh̸̡͓̭̑͘é̸̠̫̻̹̪͉̩̮̙̦̐̊͒̓͗̃̊̓̇̌̍̇̎r̶͙̺̦̼͖͉͖͚̟̿̉͊","Run","Now","6","6"];
        this.setState({imageOn: true});
      }
      else{
        this.setState({sixCounter: sixCounter});
      }
      break;
    }
    this.setState({options: options, checked: checked, desc: desc});
  }

  render(){
    let image;
    if (this.state.imageOn){
      image = <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/601/591/9c3.gif" alt="Alt text"/>
    }
    let defaultDesc = "Option ";
    let content =
    <ul className="list list--bare">
      {this.state.options.map((option)=>
        <li key={"radio"+option}><label htmlFor={"radio"+option}><input id={"radio"+option} name="radio" type="radio" className="radio" checked={this.state.checked[parseInt(option)-1]} onChange={this.handleChange}/> {this.state.desc[parseInt(option)-1]} </label></li>
      )}
      {image}
    </ul>
    return(
      <AFormTemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AInputTextareas extends Component{
  constructor(props){
    super(props);

    this.state = ({input: ""});
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event){
    if (event.target.value.length>this.state.input.length){
      let newChar = event.target.value.slice(-1);
      if (newChar.match(/[a-z]/i)){
        let randomizer = Math.floor(Math.random() * 2);
        if (randomizer===0){
          newChar = newChar.toUpperCase();
        }
        else{
          newChar = newChar.toLowerCase();
        }
      }
      let newValue = this.state.input+newChar;
      this.setState({input: newValue});
    }
    else {
      this.setState({input: event.target.value});
    }
  }

  render(){
    let content =
    <p>
      <label htmlFor="textarea">Textarea</label>
      <textarea id="textarea" rows="8" cols="48" placeholder="Enter your message here" onChange={this.handleInput} value={this.state.input}></textarea>
    </p>
    return(
      <AFormTemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

class AInputHtml5 extends Component{
  constructor(props){
    super(props);

    this.state = ({color: "#000000", number: 5 ,range: 10, rangeMax: 100, date: "1970-01-01",
    month: "1970-01", week: "1970-W01", dateTime: "1970-01-01T00:00:00Z", dateTimeLocal: "1970-01-01T00:00"});
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event){
    switch (event.target.id){
      case "ic":
      this.setState({color: event.target.value});
      break;
      case "in":
      this.setState({number: event.target.value});
      break;
      case "ir":
      let rangeIncrease = event.target.value-this.state.range;
      let newMax = this.state.rangeMax+rangeIncrease;
      this.setState({range: event.target.value, rangeMax: newMax});
      break;
      case "idd":
      this.setState({date: event.target.value});
      break;
      case "idm":
      this.setState({month: event.target.value});
      break;
      case "idw":
      this.setState({week: event.target.value});
      break;
      case "idt":
      this.setState({dateTime: event.target.value});
      break;
      case "idtl":
      this.setState({dateTimeLocal: event.target.value});
      break;
    }
  }

  render(){
    let content =
    <div>
    <p>
      <label htmlFor="ic">Color input</label>
      <input type="color" id="ic" value={this.state.color} onChange={this.handleInput}/>
    </p>
    <p>
      <label htmlFor="in">Number input</label>
      <input type="number" id="in" min="0" max="10" value={this.state.number} onChange={this.handleInput}/>
    </p>
    <p>
      <label htmlFor="ir">Range input</label>
      <input type="range" id="ir" value={this.state.range} min="0" max={this.state.rangeMax} onChange={this.handleInput}/>
      Range = {this.state.range}
    </p>
    <p>
      <label htmlFor="idd">Date input</label>
      <input type="date" id="idd" value={this.state.date} onChange={this.handleInput}/>
    </p>
    <p>
      <label htmlFor="idm">Month input</label>
      <input type="month" id="idm" value={this.state.month} onChange={this.handleInput}/>
    </p>
    <p>
      <label htmlFor="idw">Week input</label>
      <input type="week" id="idw" value={this.state.week} onChange={this.handleInput}/>
    </p>
    <p>
      <label htmlFor="idt">Datetime input</label>
      <input type="datetime" id="idt" value={this.state.dateTime} onChange={this.handleInput}/>
    </p>
    <p>
      <label htmlFor="idtl">Datetime-local input</label>
      <input type="datetime-local" id="idtl" value={this.state.dateTimeLocal} onChange={this.handleInput}/>
    </p>
  </div>
    return(
      <AFormTemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}


class AInputActionForms extends Component{
  render(){
    let content =
    <div>
      <p>
        <input type="submit" value="submit"/>
        <input type="button" value="button"/>
        <input type="reset" value="reset"/>
        <input type="submit" value="disabled" disabled />
      </p>
      <p>
        <button type="submit">submit</button>
        <button type="button">button</button>
        <button type="reset">reset</button>
        <button type="button" disabled>disabled</button>
      </p>
    </div>
    return(
      <AFormTemplate identifier={this.props.identifier} desc={this.props.desc} content={content}/>
    );
  }
}

export {
  ATextHeadings,
  ATextParagraphs,
  ATextBlockquotes,
  ATextLists,
  ATextHr,
  ATextTables,
  ATextCode,
  ATextInline,
  ATextComments,
  AEmbeddedImages,
  AEmbeddedAudio,
  AEmbeddedVideo,
  AEmbeddedCanvas,
  AEmbeddedMeter,
  AEmbeddedProgress,
  AEmbeddedSvg,
  AEmbeddedIFrame,
  AInputText,
  AInputSelect,
  AInputCheckbox,
  AInputRadio,
  AInputTextareas,
  AInputHtml5,
  AInputActionForms
}
