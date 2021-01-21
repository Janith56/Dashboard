import './App.css';
import React from 'react';
//import Camera from './component/Camera';
import Upperbar from './component/Upperbar';
//import Trafficchart from './component/Trafficchart';
import Blocks from './component/Blocks';
//import { Button } from '@material-ui/core';
import Data from './component/Data'

function App() {
  return (
    <div className="App">
       <Upperbar/>
       <Blocks/>
       <Data/>

    </div>
  );
}

export default App;
