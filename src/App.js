import React, { Component } from 'react';
import MenuBar from './Components/MenuBar';
import Kartochka from './Components/Kartochka';
import Iphone from './Components/Iphone';
import DemoNews2 from './Components/DemoNews2';

import {Switch, Route, BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div style ={{backgraund:"green",  marginRight:5, marginTop:10, width: "100%",  height: "100%", display:"flex"}}>
            <MenuBar/>
            <Switch>
                        <Route path="/iphone" component={Iphone} />                     
                        <Route path="/Kartochka" component={Kartochka} />
                        <Route path="/DemoNews2" component={DemoNews2} />
      
                     
             </Switch>
        </div>
       </BrowserRouter>
    );
  }
}

export default App;