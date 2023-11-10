import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

import webImg from './img/web.png';
import htmlImg from './img/html.png';
import cssImg from './img/css.png';
import jsImg from './img/javascript.png';
import reactImg from './img/react.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'welcome',
      selected_content_id: 0,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!', image: webImg},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information', image: htmlImg},
        {id:2, title:'CSS', desc:'CSS is for desing', image: cssImg},
        {id:3, title:'JavaScript', desc:'JS is for interactive', image: jsImg},
        {id:4, title:'React', desc:'React is for UI', image: reactImg}
      ],
      images:{
        Welcome: webImg,
        HTML: htmlImg,
        CSS: cssImg,
        JavaScript: jsImg,
        React: reactImg
      }
    }
  }
  render() {    
    var _title, _desc, _image = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          _image = this.state.images[data.title];
          break;
        }
        i = i + 1;
      }      
    }    
    return (
      <div className='App'>        
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode: 'welcome'});
          }.bind(this)}></Subject>        
        <TOC onChangePage={function(id){          
          this.setState({
            mode: 'read',
            selected_content_id: Number(id)
          });          
        }.bind(this)}
        data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc} img={_image}></Content>
      </div>
    );
  }  
}

export default App;