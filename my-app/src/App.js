import React from 'react';
import './App.css';
import './index.css';
import lajolla from './images/beach.jpg';
import water from './images/waher.jpg';
import fav from './images/favlogo.png';

document.title = 'ThoGus Tester';



const App = () => {




  return (
    <div className="App">
      <header className="App-header">

        <div class="parentClass">
          <img src={lajolla} alt="jalolla" class="ucsd"/>
            
            <div class="childClass child1">
            
            <p></p><br/>
            </div>

            <div class="childClass child2">
            <h2>Welcome to<br/>ThoGus</h2>
            </div>

        </div>


        <div class="container">
            <div id="rcorners2">About Me:
              <p class="aboutme">My name is Thomas Gosvig and I'm currently an undergraduate at UC San Diego majoring in Biochemistry and graduating in 2025. Even though I study Chemistry, I'm very passionate about Computer Science and Engineering and have been taking courses since 8th grade.<br/>I was born and grew up in Denmark, but for my last two years in high school I moved to the U.S. and continued into college.<br/>In middle school I started my computer science 'career' with Swift and Xcode and created an app for the App Store. Then in high school I learned Python in both Denmark and the U.S. and then Java only in the U.S.<br/>However right now I'm not currently taking any courses in CS, but I'm getting back into Swift and App Development, and trying to learn javaScript too.</p>
            </div>
            <img src={water} class="sanmateo" alt="bluegreen"/>
        </div>


        <p><br/></p>



        <ul>
            <img src={fav} alt="Avatar" class="logocss"/>
            <li class="barname">ThoGus Tester</li>
            <li><a class="active" href="index.html">Home</a></li>
            <li><a href="projects.html">Projects</a></li>
        </ul>

      </header>
    </div>
  );
}


export default App;