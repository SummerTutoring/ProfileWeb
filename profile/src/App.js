
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment } from './redux/action';

function App() {
  const [count,setCount] =useState(0)
  
  useDispatch()
  useSelector()
  받아오는거
  return (
    <div className="App">
        <h1>Hello World</h1> 
    </div>
  );
}

export default App;
