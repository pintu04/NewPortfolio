import React from 'react'
import './Home.css';
// import bg from '../../Assets/user.png';
import iicon from '../../Assets/bag.png';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm &nbsp;
          <span className='introName'>Rashmiranjan Chainy
          </span><br />Full Stack Developer</span>
        <p className='introPara'>As a full stack developer fresher,
          I bring a diverse skill set and a passion for creating innovative and user-friendly web applications. With a solid foundation in both front-end and back-end development.</p>
        <Link to='contact'><button className='introBtn'><img src={iicon} alt='Hire' className='introIcon' />Hire Me</button></Link>
      </div>
      
    </section>
  )
}

export default Home;