import React from 'react'
import './Skill.css';
import html from '../../Assets/html.png';
import css from '../../Assets/css-3.png';
import js from '../../Assets/js.png';
import bootstrap from '../../Assets/bootstrap.png';
import act from '../../Assets/atom.png';
import jquery from '../../Assets/pngwing.com (1).png';
import node from '../../Assets/pngwing.com (2).png';
import ex from '../../Assets/folder_express_icon_161294.png';
import mongo from '../../Assets/mongodb_original_wordmark_logo_icon_146425.png';
import c from '../../Assets/c.png';
import java from '../../Assets/java.png';
import git from '../../Assets/github.png';


const Skill = () => {
  return (
    <section id='skill'>
      <span className='skillName'>Skills</span>
      <div className='skillContainer'>

        <div className='skillItemName'>
          <img src={html} alt='html' className='skillItem' />
          <span>HTML</span>
        </div>
        <div className='skillItemName'>
          <img src={css} alt='css' className='skillItem' />
          <span>CSS</span>
        </div>
        <div className='skillItemName'>
          <img src={js} alt='javaScript' className='skillItem' />
          <span>JavaScript</span>
        </div>
        <div className='skillItemName'>
          <img src={bootstrap} alt='bootstrap' className='skillItem' />
          <span>Bootstrap</span>
        </div>

        <div className='skillItemName'>
          <img src={act} alt='react' className='skillItem' />
          <span>React</span>
        </div>
        <div className='skillItemName'>
          <img src={jquery} alt='jQuery' className='skillItem' />
          <span>jQuery</span>
        </div>
        <div className='skillItemName'>
          <img src={node} alt='node js' className='skillItem' />
          <span>Node js</span>
        </div>
        <div className='skillItemName'>
          <img src={ex} alt='express' className='skillItem' />
          <span>Express</span>
        </div>

        <div className='skillItemName'>
          <img src={mongo} alt='mongo' className='skillItem' />
          <span>Mongo db</span>
        </div>
        <div className='skillItemName'>
          <img src={c} alt='c language' className='skillItem' />
          <span>Ansi c</span>
        </div>
        <div className='skillItemName'>
          <img src={java} alt='java' className='skillItem' />
          <span>Java</span>
        </div>
        <div className='skillItemName'>
          <img src={git} alt='github' className='skillItem' />
          <span>Github</span>
        </div>

      </div>
    </section>
  )
}

export default Skill;
