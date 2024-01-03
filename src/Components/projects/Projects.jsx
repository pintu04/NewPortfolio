import React from 'react'
import './Projects.css'
import { Link } from 'react-scroll';
import cofee from '../../Assets/coffee.png';
import tic from '../../Assets/tic-tac-toe.png';
import dice from '../../Assets/dice.png';
import chart from '../../Assets/mobile-app.png';
import formm from '../../Assets/form.png';
import port from '../../Assets/curriculum.png';


const Projects = () => {
  return (
    <section id='project'>
      <span className='projectName'>Portfolio</span>
      <span className='title'>Click on click here button to preview projects.</span>

      <div className='projectContainer'>
        <div className='projectBox'>
          <img src={tic} alt='Tic tac toe' className='projectImage' />
          <span className='nm'>Tic Tac Toe</span>
          <a className='projectLink' href='https://pintu04.github.io/TicTacToe/'>Click Here</a>
        </div>
        <div className='projectBox'>
          <img src={dice} alt='dice game' className='projectImage' />
          <span className='nm'>Dice Game</span>
          <a className='projectLink' href='https://dice-game-pb7q.onrender.com/'>Click Here</a>
        </div>
        <div className='projectBox'>
          <img src={chart} alt='chart app' className='projectImage' />
          <span className='nm'>Chart App</span>
          <a className='projectLink' href='https://chat-application-qbc0.onrender.com/'>Click Here</a>
        </div>
        <div className='projectBox'>
          <img src={formm} alt='form validation' className='projectImage' />
          <span className='nm'>Google Form</span>
          <a className='projectLink' href='https://github.com/pintu04/Application-form'>Click Here</a>
        </div>
        <div className='projectBox'>
          <img src={port} alt='portfolio' className='projectImage' />
          <span className='nm'>Portfolio</span>
          <a className='projectLink' href='https://github.com/pintu04/portfolio'>Click Here</a>
        </div>
        <div className='projectBox'>
          <img src={cofee} alt='coffe shop' className='projectImage' />
          <span className='nm'>Cofee Shop</span>
          <Link className='projectLink'>Click Here</Link>
        </div>
      </div>
      <button className='submitBtnn'>See more</button>
    </section>
  )
}

export default Projects;
