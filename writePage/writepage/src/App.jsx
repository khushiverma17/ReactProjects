
import React, { useState } from 'react';

function App() {
  const [displayFreq, setDisplayFreq] = useState(false); // State to control display

  const arr = new Map([
      ['hello', 5],
      ['world', 3],
      ['example', 2],
    ]);


  const display = () => {
    setDisplayFreq(true);
  };

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      width:"100vw"
    }}>
      <div style={{
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
         flexDirection:"column",
         width:"100vw"
      }}>
        <h1>Word Frequencies</h1>
        <button onClick={display}>Display Frequencies</button>
        {displayFreq && ( // Display frequencies only if displayFreq is true
          <ul>
            {Array.from(arr).map(([word, frequency]) => (
              <li>
                {word}: {frequency}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
