import './App.css'
import {useState, useEffect} from "react"

function App() {
  let [value, setValue]=useState("");

  const [ischarClicked, setIsCharClicked]=useState(false);
  const [iswordClicked, setIsWordClicked]=useState(false);
  const [isdensityClicked, setisDensityClicked]=useState(false);
  const [isBold, setIsBold]=useState(false);
  const [isItalic, setIsItalic]=useState(false);

  const [charcount, setCharCount]=useState(0);
  const [wordcount, setWordCount]=useState(0);
  const [wordFrequency, setWordFrequency]=useState({});
  

  function resetInput(){
    setValue("");
    setIsCharClicked(false);
    setIsWordClicked(false);
    setisDensityClicked(false)
    setIsBold(false);
    setIsItalic(false);
  }
  

  function displayDensity(){
    // console.log("inside displey");
    if(value){
       setisDensityClicked(!isdensityClicked);
    //array of words of sentence
    const words=value.split(" ");
    console.log(words);
    const frequencyarr={};

    words.forEach(word=>{
      const lowerwords=word.toLowerCase();
      if(frequencyarr[lowerwords]){
        frequencyarr[lowerwords]++;
      }
      else{
        frequencyarr[lowerwords]=1;
      }
    })
    setWordFrequency(frequencyarr);
  }

    // console.log(wordFrequency);
    


  }


  function displayCheck()
  {
    if(value)
    {
      if((ischarClicked && iswordClicked) || (!ischarClicked && !iswordClicked)){
        setIsCharClicked(!ischarClicked);
        setIsWordClicked(!iswordClicked);
      }
      else if(ischarClicked){
        setIsWordClicked(true);
      }
      else if(iswordClicked){
        setIsCharClicked(true);
      }
      value=value.trim();
      const wordArray=value.split(/\s+/);
      setWordCount(wordArray.length);
    }
  }

  function displayItalic()
  {
    if(value)
    setIsItalic(!isItalic);
  }

  function displayBold()
  {
    if(input)
    setIsBold(!isBold);
  }

  function displayFirstUpper()
  {
    if(value)
    {
      const words=value.split(" ");
      const capitalwords=words.map(word=>{
        if(word.length>0){
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        else
        {
          return "";
        }
      });
      setValue(capitalwords.join(" "));
    }

  }

  function displayLower()
  {
    if(value)
    setValue(value.toLowerCase());
  }

  function displayUpper()
  {
    if(value)
    setValue(value.toUpperCase());
  }

  function displaywords()
  {
    if(input){
      setIsWordClicked(!iswordClicked);
      value=value.trim();
      const wordArray=value.split(/\s+/);
      setWordCount(wordArray.length);
    }
    // console.log(wordcount);
  }


  function setOnChange(e)
  {
    setCharCount((charcount)=>charcount+1);
    // console.log(charcount);

    setValue(e.target.value);
  }
  
  
  // To see the updated value of enteredData in the console, you should log it within a useEffect hook that listens for changes to enteredData:
  useEffect(() => {
    const myInput=document.getElementById("myInput");
    if(myInput){
      if(isBold){
        myInput.classList.add("font-bold");
      }
      else{
        myInput.classList.remove("font-bold")
      }
      if(isItalic){
        myInput.classList.add("italic")
      }
      else{
        myInput.classList.remove("italic");
      }
      
    }
  }, [value, isBold, isItalic]);

  function displayCharacters(){
    if(value)
    setIsCharClicked(!ischarClicked);
  }





  



  return (
    <div className='bg-orange-300 h-screen w-full flex items-center justify-center'>
      <div className='bg-orange-200 h-auto w-4/5 rounded-2xl px-3 py-3'>


        <input
        className='h-16 text-lg px-1.5 py-1.5 bg-orange-100 w-10/12 bg-transparent rounded-2xl'
        // className={"h-16 text-lg px-1.5 py-1.5 bg-orange-100 w-10/12 bg-transparent rounded-2xl" + (isBold ? "font-bold" : "")}
        // className={"icon" + ((lightTheme)?"" : " dark")}
        type='text'
        placeholder='Start Typing'
        // disabled={checkDisabled}
        onChange={setOnChange}  //entered data will get the entered value in the input field
        // onChange={onInputChange}
        value={value}
        id='myInput'

        // style={{fontWeight:"bold"}}
        ></input>


        
        <button className='bg-sky-400 mx-7 rounded-lg h-12 w-28 text-slate-100'
        onClick={displayCheck}
        >Check</button>



        <div className='w-10/12 h-14 mt-5 flex items-center justify-evenly'>
          <button className='bg-sky-400 h-8 w-24 rounded-md text-slate-100'
          onClick={displayCharacters}
          >
            Characters
          </button>
          
          <button className='bg-sky-400 h-8 w-24 rounded-md text-slate-100'
          onClick={displaywords}
          >
            Words
          </button>
          <button className='bg-sky-400 h-8 w-24 rounded-md text-slate-100'
          onClick={displayUpper}
          >
            To Upper
          </button>
          <button className='bg-sky-400 h-8 w-24 rounded-md text-slate-100'
          onClick={displayLower}
          >
            To lower
          </button>
          <button className='bg-sky-400 h-8 w-24 rounded-md text-slate-100'
          onClick={displayFirstUpper}
          >
            First Upper
          </button>
          <button className='bg-sky-400 h-8 w-24 rounded-md text-slate-100'
          onClick={displayDensity}
          >
            Density
          </button>
          <button className='bg-sky-400 h-8 w-24 rounded-md text-slate-100'
          onClick={displayBold}
          >
            Bold
          </button>
          <button className='bg-sky-400 h-8 w-24 rounded-md text-slate-100'
          onClick={displayItalic}
          >
            Italic
          </button>
          <button className='bg-sky-400 h-8 w-24 rounded-md text-slate-100'
          onClick={resetInput}
          >
            Reset
          </button>
        </div>
        {ischarClicked && <div className='w-full h-auto  rounded-2xl'>Char count is: {charcount}</div>}
        {iswordClicked && <div className='w-full h-auto rounded-2xl'>Word count is: {wordcount}</div>}
        {isdensityClicked && (
          
          <ul>
            <p><strong>Density: </strong></p>
            {Object.entries(wordFrequency).map(([word, frequency])=>(
              <li>
                {word} : {frequency}
              </li>
            ))}
          </ul>
        )}




      </div>


    </div>
  )
}

export default App


// no of characters
// no of words
// density of words
// bold
// italic
// uppercase
// lowercase
// firstuppercase
//reset

// we will use usestate for all these things