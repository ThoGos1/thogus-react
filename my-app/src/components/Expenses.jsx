import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import script from './python/main.py';
import '../App.css'; 
import '../index.css';


const initPyodide = window.loadPyodide({
  indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
})

const main = async (kw) => {
  let pyodide = await initPyodide;
  
  return await pyodide.runPythonAsync(kw);
}

function refreshPage() {
  window.location.reload(false);
}




export default function Expenses() {
  const [output, setOutput] = useState("(enter a value above)");
  const [hydg, setHydg] = useState(0);



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('hydg: ' + hydg);
    var scriptText = 'hello = ' + hydg + '\n';

    const run = async () => {
      scriptText += await (await fetch(script)).text();


      const out = await main(scriptText);
      setOutput(out);
      console.log(out);
      
    }
    run();
  }


  


    return (
      <main style={{ padding: "1rem 0", marginLeft: '10px' }}>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Expenses</title>
            </Helmet>

        <h3>Expenses</h3>



        <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input 
                    type="number" 
                    value={hydg}
                    onChange={(e) => setHydg(e.target.value)}
                    class="solvbox"
                />
              </label>
              <input type="submit" value="Submit" style={{marginLeft: '10px'}} />
            </form>

            <p>python = {output} moles of Hydrogen<br/>refresh page if it's stuck loading</p>
      
        <button onClick={refreshPage}>If something isn't working, press this button.</button>
      </main>
    );
  }