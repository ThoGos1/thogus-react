import React from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import './index.css';
import lajolla from './images/beach.jpg';
import water from './images/waher.jpg';



const App = () => {




  return (
    <div className="App">

            <Helmet>
                <meta charSet="utf-8" />
                <title>App/Home</title>
            </Helmet>

      <header className="App-header">

        <div class="parentClass">
          <img src={lajolla} alt="jalolla" class="ucsd"/>
            
            <div class="childClass child1">
            
            <p></p><br/>
            </div>

            <div class="childClass child2">
            <p class='apptit'>Welcome to<br/>ThoGus</p>
            </div>
        </div>


        <div class="container" style={{marginLeft: '0px', paddingLeft: '0px'}}>
            <div id="rcorners2" class='corntxt'>About Me:
              <p class="aboutme">My name is Thomas Gosvig and I'm currently an undergraduate at UC San Diego majoring in Biochemistry and graduating in 2025. Even though I study Chemistry, I'm very passionate about Computer Science and Engineering and have been taking courses since 8th grade.<br/>I was born and grew up in Denmark, but for my last two years in high school I moved to the U.S. and continued into college.<br/>In middle school I started my computer science 'career' with Swift and Xcode and created an app for the App Store. Then in high school I learned Python in both Denmark and the U.S. and then Java only in the U.S.<br/>However right now I'm not currently taking any courses in CS, but I'm getting back into Swift and App Development, and trying to learn javaScript too.</p>
            </div>
            
            <img src={water} class="sanmateo" alt="bluegreen"/>
        </div>

        <div class="container" style={{marginLeft: '0px', paddingLeft: '0px'}}>
            <div id="rcorners2" class='corntxt'>About Me:
              <p class="aboutme">My name is Thomas Gosvig and I'm currently an undergraduate at UC San Diego majoring in Biochemistry and graduating in 2025. Even though I study Chemistry, I'm very passionate about Computer Science and Engineering and have been taking courses since 8th grade.<br/>I was born and grew up in Denmark, but for my last two years in high school I moved to the U.S. and continued into college.<br/>In middle school I started my computer science 'career' with Swift and Xcode and created an app for the App Store. Then in high school I learned Python in both Denmark and the U.S. and then Java only in the U.S.<br/>However right now I'm not currently taking any courses in CS, but I'm getting back into Swift and App Development, and trying to learn javaScript too.</p>
            </div>
        </div>

        <div class="container" style={{marginLeft: '0px', paddingLeft: '0px'}}>
            <div id="rcorners2">suiii
              <textarea class='abotme' maxLength='1500'></textarea>
              <p>Max word limit: 1500 characters, or maybe have a counter so it's like x out of 1500</p>
            </div>
        </div>




      </header>
    </div>
  );
}


export default App;