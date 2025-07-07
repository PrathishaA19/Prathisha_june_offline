import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import logo from '/logo.png';
import facebook from '/facebook1.jpeg';
import instagram from '/instagram.jpeg';
import whatsapp from '/whatsapp.jpeg';
import youtube from '/youtube.png';
import telegram from '/telegram.png';
import cart from '/cart.png';
import video from '/video1.mp4.mp4';
import kids1 from '/kids1.jpg';
import kids2 from '/kids2.jpg';
import kids3 from '/kids3.png';
import kids4 from '/kids4.jpeg';
import kids5 from '/kids5.jpeg';
import kids6 from '/kids6.jpeg';
import Sign from './sign.jsx';


export default function App(){
  return(
    <Routes>
      <Route path='/sign' element={<Sign />} />
      <Route path='*' element={
    <>
    <center>
        <h1 className="box">Welcome to Jersha's Kids Learning Hub</h1>
      </center>
      <hr/>
      <img className='logostyle' src={logo} width={50} height={50}></img>
      <h1 className='prathi'> Jersha's Kids Learning Hub</h1>
      <img className='facebook' src={facebook} width={25} height={25}></img>
      <img className='instagram' src={instagram} width={25} height={25}></img>
      <img className='whatsapp' src={whatsapp} width={25} height={25}></img>
      <img className='youtube' src={youtube} width={25} height={25}></img>
      <img className='telegram' src={telegram} width={25} height={25}></img>
      <input  className='search' type='search' placeholder='Search'></input>
      <Link to="/sign" className='sign'>Sign Up</Link>

      <img className='cart' src={cart} width={25} height={25}></img>
      <hr>
      </hr>
       <center>
        <h1>Children must be taught how to think,not what to think</h1>
        <video className="video" width="900" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </center>
      <hr></hr>
      <h1>Services</h1>
      <div className="g">
        <div className='g1'><img src={kids1} width={260} height={170}></img><br/><h3>Story World</h3><p> Activities like creating a story box, using puppets, making storyboards, or even acting out stories with props can bring narratives to life and engage children in the storytelling process. </p></div>
        <div className='g1'><img src={kids2} width={260} height={170}></img><br/><h3>Brain Boosters</h3><p>Strategy games are a great way to teach planning and critical thinking. </p></div>
        <div className='g1'><img src={kids3} width={260} height={170}></img><br/><h3>Language Buddy</h3><p>Fun and interactive buddy-based activities help kids improve their language skills through teamwork. Children pair up to practice speaking, listening, reading, and writing in a playful and supportive way. Activities like picture talk, role play, story building, and word games make learning enjoyable and build communication confidence.</p></div>
        <div className='g1'><img src={kids4} width={260} height={170}></img><br/><h3>Tinker Time Projects</h3><p>Tinker Time encourages hands-on learning where kids explore, build, and create using everyday materials. These fun projects boost creativity, critical thinking, and problem-solving skills. Children can design simple machines, craft models, build mini bridges, or explore science experiments</p></div>
        <div className='g1'><img src={kids5} width={260} height={170}></img><br/><h3>Gamification</h3><p>Gamification turns learning into a fun and engaging experience by using game-like elements such as points, rewards, levels, and challenges. It motivates kids to participate actively, stay focused, and enjoy the learning process.</p></div>
        <div className='g1'><img src={kids6} width={260} height={170}></img><br/><h3>Happy Minds</h3><p>Happy Minds focuses on building emotional well-being, positivity, and resilience in kids. Through mindfulness activities, gratitude exercises, and joyful learning, children learn to express feelings, handle stress, and stay calm.</p></div>
      </div>
      <footer>
        <center><hr></hr>
        <h1>Contact Us</h1>
        <h3>E-mail: jersha2025@gmail.com</h3><br/>
        <h4 >Whatsapp Channel: jersha's kids learning hub</h4>
         <img className='facebook' src={facebook} width={25} height={25}></img>
      <img className='instagram' src={instagram} width={25} height={25}></img>
      <img className='whatsapp' src={whatsapp} width={25} height={25}></img>
      <img className='youtube' src={youtube} width={25} height={25}></img>
      <img className='telegram' src={telegram} width={25} height={25}></img>
        </center>
      </footer>
      </>
      } />
      </Routes>
  );
}
