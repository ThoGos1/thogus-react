import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import script from './python/mech.py';
import './styles/solv.css';
import { initPyodide } from './Expenses';




const main = async (kw) => {
  let pyodide = await initPyodide;
  
  return await pyodide.runPythonAsync(kw);
}

function refreshPage() {
  window.location.reload(false);
}




export default function MechSolv() {
  const [output, setOutput] = useState("(enter a value above)");
  const [angle, setAngle] = useState(0);



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('angle: ' + angle);
    var scriptText = 'hello = ' + angle + '\n';

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
                <title>Mechanics Solve</title>
            </Helmet>

        <h3>Mechanics Solve</h3>


        <button onClick={refreshPage}>If something isn't working, press this button.</button>



        <div class="container" style={{marginLeft: '0px', paddingLeft: '0px'}}>
            <div id="rcorners2">Solve for angle
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input 
                    type="number" 
                    value={angle}
                    onChange={(e) => setAngle(e.target.value)}
                    class="solvbox"
                />
              </label>
              <input type="submit" value="Submit" style={{marginLeft: '10px'}} maxLength='10'/>
            </form>

            <p>python = {output} moles of Hydrogen<br/>refresh page if it's stuck loading</p>
      
            </div>
        </div>

      </main>
    );
  }