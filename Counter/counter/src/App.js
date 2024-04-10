import './App.css';
import './mystyle.css';
import {useState} from 'react';

function App() {

  // let counter=19;
  let [counter, setcounter]=useState(20);

  const incrementcounter=() => {
    setcounter((counter)=>counter+1);
    setcounter(counter=>counter+1);
    setcounter(counter=>counter+1);
    setcounter(counter=>counter+1);
  }

  const decrementcounter=()=>{
    setcounter(counter-1);
    console.log(counter);
  }
  


  return (
    <>
      <center>
      <h1>Counter:{counter}</h1>
      <button
      onClick={incrementcounter}
      >Increase</button>
      <br></br>
      <button
      onClick={decrementcounter}
      >Decrease</button>
      </center>
    </>
  );
}

export default App;
