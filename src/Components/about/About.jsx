import React from 'react'
import './About.css'
import { Link } from 'react-scroll';
import user from '../../Assets/profile-pic (3).png' 
import prop from '../../Assets/right-chevron.png';
import resume from '../../Assets/personal-profile.png';
// import j from '../../Assets/file/j.pdf'



const About = () => {
  return (
    <section id='about'>
      <span className='aboutName'>About Me</span>
      <div className='aboutContent'>
        <p className='aboutStatement'>Fresher with having strong technical skills on Frontend and Backend Technology and also known Ansi C or Java. I am passionate for my work and i have positive thinks to complete any project. I am curious and enjoy working on challenging projects and learn new technologies to stretch in a different directions. <span className='fswd'>Looking for an opportunity as a full-stack web developer.</span></p>
      </div>
      <div className='aboutDefn'>
        <img src={user} alt='user' className='profileIcon'/>
        <div>
          <div className='userData'>
            <div className='firstAboutDiv'>
              <p><img src={prop} alt='arrow' /> Name : <span className='aboutSpanContent'>Rashmiranjan Chainy</span></p>
              <p><img src={prop} alt='arrow' /> Email : <span className='aboutSpanContent'>rashmiranjanchainy@gmail.com</span></p>
              <p><img src={prop} alt='arrow' /> Phone : <span className='aboutSpanContent'>+91 6370155038</span></p>
              <p><img src={prop} alt='arrow' /> Address : <span className='aboutSpanContent'>Kendrapara, Odisha</span></p>
            </div>
            <div className='secAboutDiv'>
              <p><img src={prop} alt='arrow' /> Degree : <span className='aboutSpanContent'>BCA</span></p>
              <p><img src={prop} alt='arrow' /> Age : <span className='aboutSpanContent'>23</span></p>
              <p><img src={prop} alt='arrow' /> Marital : <span className='aboutSpanContent'>Single</span></p>
              <p><img src={prop} alt='arrow' /> Birth : <span className='aboutSpanContent'>04 Aug 2001</span></p>
            </div>
          </div>
          <a href='https://drive.google.com/file/d/15x2VozSz26yfky2MnkgIOxthuyXyQAY4/view?usp=drive_link' className='a'><button className='resumeBtn'><img src={resume} alt='Hire' className='resumecon' /><span className='abtn'>resume</span></button></a>
        </div>
      </div>

    </section>
  )
}

export default About;
