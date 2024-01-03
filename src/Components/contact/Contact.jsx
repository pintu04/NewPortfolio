import React, { useRef } from 'react'
import './Contact.css'
import fb from '../../Assets/facebook.png'
import ld from '../../Assets/linkedin.png'
import tw from '../../Assets/twitter.png'
import gh from '../../Assets/github.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_311ln8l', 'template_t6nz2hs', form.current, 'E4MzXkhflGXziNh0kaj-4')
      .then((result) => {
         console.log(result.text);
      }, (error) => {
         console.log(error.text);
        // prompt('error')
      });
  };
  return (
    <section id='contact'>
      <div>

        <span className='contactTitle'>Contact Me</span>
        <div className='conp'>
          <p className='contactDesc'>Please fill out the form below to discuss any work opportunity.</p>
        </div>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='your_name' />
          <input type='email' className='email' placeholder='Your Email' name='your_email' />
          <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>

          <div className='links'>
           <a href='https://www.linkedin.com/in/forme04/' >
            <img src={ld} alt='facebook' className='link' />

           </a>
           <a href='https://www.facebook.com/rashmiranjan.chainy.12'>
            <img src={fb} alt='linkedin' className='link' />
           </a>
           <a href='https://twitter.com/Rashmir35306045' >
            <img src={tw} alt='twitter' className='link' />
           </a>
           <a href='https://github.com/pintu04'>
            <img src={gh} alt='github' className='link' />
           </a>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact;
