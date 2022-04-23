import React from 'react';

import './App.css';
import {Header} from './molecules/Header';
import {Search} from "./molecules/Search";

function App() {
  return (
    <div className="App">
        <Header />
        <Search/>
    </div>
  )
}

export default App;
