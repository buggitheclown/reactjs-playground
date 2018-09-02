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
  render(){
    let content =
    <div>
    <svg width="200px" height="200px">
    <defs>
    <linearGradient id="Gradient2" x1="0" x2="0.75" y1="0" y2="0.3">
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
  AEmbeddedIFrame
}
