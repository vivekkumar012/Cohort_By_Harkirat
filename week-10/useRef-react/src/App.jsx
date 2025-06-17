
import {  useRef, useState } from 'react';
import './App.css'

function App() {
  // const inputRef = useRef();

  // function focus() {
  //   inputRef.current.focus();
  // }
  // Build a clock with start and stop
  //let timer = 0; // Every time components rerender so that stopClock function not working because it clear time 0 every re rendering

  const [currentClock, setCurrentClock] = useState(1);
  //const [timer, setTimer] = useState(0); // In this case also re rendering happens so we cant use it so we use useRef to avoid re-rendering
  // The more re render happens the less optimal is the website so we avoid re rendering to optimise our sites
  const timer = useRef();

  function startClock(){
    let value = setInterval(function(){
      setCurrentClock(c => c + 1);
    }, 1000)
    timer.current = value;
  }

  function stopClock() {
    clearInterval(timer.current);
  }

  return (
    <div>
      {/* <input ref={inputRef} type={"text"}/>
      <input type={"text"}/>
      <button onClick={focus}>SUbmit</button> */}
      {currentClock}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  )
}

export default App
