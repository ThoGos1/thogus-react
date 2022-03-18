import React, { useEffect, useState } from 'react';
import script from './python/main.py';
import './App.css';
import './index.css';

var bruh;

const runScript = async (code) => {
  const pyodide = await window.loadPyodide({
    indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
  });

  return await pyodide.runPythonAsync(code);
}



function Welcome() {
    const [output, setOutput] = useState("(loading...)");
    const [hydg, setHydg] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${hydg}`);
    }

    useEffect(() => {
      const run = async () => {
        const scriptText = await (await fetch(script)).text();
        const out = await runScript(scriptText);
        setOutput(out);
      }
      run();
  
    }, []);





    return(
        <div>
            <h1>Hello, from welcome file</h1>

            <p>bruh var = {bruh}</p>

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