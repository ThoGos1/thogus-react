import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import script from './python/main.py';
import '../App.js'; 
import '../index.css';


const runScript = async (code) => {
  const pyodide = await window.loadPyodide({
    indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
  });
  return await pyodide.runPythonAsync(code);
}


function Welcome() {
    const [output, setOutput] = useState("(loading...)");
    const [hydg, setHydg] = useState(0);
    const [hmmm, setHmmm] = useState(false);
    

    const handleSubmit = (event) => {
      console.log(hmmm);
      if(hmmm){
          window.location.reload();
        }
        event.preventDefault();
          const run = async () => {
            var scriptText = 'hello = ' + hydg + '\n';
            scriptText += await (await fetch(script)).text();
            console.log(scriptText);
            const out = await runScript(scriptText);
            setOutput(out);
            setHmmm(true);
          }
          run();
          console.log(hmmm);
    }





    return(
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome</title>
            </Helmet>

            <h1>Hello, from welcome file</h1>

            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input 
                    type="number" 
                    value={hydg}
                    onChange={(e) => setHydg(e.target.value)}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>

            <p>python = {output}   refresh page if it's stuck loading</p>
        </div>

    );
  }

export default Welcome;