import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

function App() {
  const myobj={
    name:"orange",
    color:"orange"
  }
  const arr=["one", "two", "three", "four"];
  return (
    <>
    <center>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello Tailwind</h1>
    </center>
    <Card name="khushi" btntext="thisbtn"/>
    <Card name="verma" btntext="secondbtn"/>
    <Card name="khushi"/>
  
    

    </>
  );
}

export default App;
