 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import background from './images/background.jpeg';


function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    
    <div className="App">
      
    <ul className="navigation-menu">
        <li><a id = "home" href="#">Home</a></li>
        <li><a href="#myStory">My Story</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#">Hobbies</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div id = "name"  >
      
        <p id ="name1">Hi, I am Alimurat</p>
        <p id = "info1">A guy who loves adventures</p>
      </div>
      <div id= "myStory"  
      >
          <p className = "story">My Story</p>
          <p  className={`text ${isHovered ? 'zoomed' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>I was always curious about discovering the new features in life. I first started coding in Python when I was in College.
          When I first wrote my "Hello World" program, I felt the power in my hands such that I can code everything. This was just the beginning of my long code 
          learning adventure. I cointinued learning how to code by learning, Java, C#, HTML, CSS, JavaScript, PHP and React</p>
      </div>

      <div id= "about">
          <p className = "aboutMe">About Me</p>
          <p className = "aboutMeStory">I like to talk to people and work in the group projects so that I can hear other opinions about different topics.
          I am a trumpet player and I am so passionated about Jazz Music,especially Blue Jazz. Moreover, I like sports such as Football, Tennis and Ping-Pong. My dream is to go and watch
          a Champions League final one day.</p>
      </div>

      <div id = "education">
        <p className = "story">Education</p>
        
        <div className="container">
  <div className="box">
    <h2 className="title">Ecole Secondaire Saint-Luc</h2>
    <p className="enlarge-text">It is a French high-school that is located in NDG Montreal.</p>
    <p className= "year">2017-2020</p>
  </div>
</div>

<div className="container">
  <div className="box">
    <h2 className="title">Marianopolis College</h2>
    <p className="enlarge-text">It is an anglophone college loacted in west-mount. I completed the health science program</p>
    <p className= "year">2020-2022</p>
  </div>
</div>

<div className="container">
  <div className="box">
    <h2 className="title">Concordia University</h2>
    <p className="enlarge-text">I went to Bachelor of Software Engineering.</p>
    <p className= "year">2022-Present</p>
  </div>
</div>
</div>

<div className="container0 container1">
  
  <div className="box1">
    <h2 className = "title1">Football</h2>
  </div>
</div>

<div className="container0 container2">
  <div className="box1">
    <h2 className = "title1">Jazz</h2>
  </div>
</div>

<div className="container0 container3">
  <div className="box1">
    <h2 className = "title1">Mathematics</h2>
  </div>
</div>
      
      </div>

  )
}

export default App
