import React from 'react'
import './About.css'
import About1 from '../../asserts/avatar-2.svg';
import { Aboutbox } from './Aboutbox';
import resume from '../../components/about/Mohana_Prawin.pdf';

export const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={About1} alt="" className="about__img" />
        
        <div className='about__data grid'>
          <div className="about__info">
            <p className="about__description">I’m an independent Front- End Developer who is passionate about bringing client’s visions to life. I can adapt onto any technology rapidly making myself flexible upon any tech stack. A passionate, diligent person who wants to learn continuously. My strongest skill is my creativity. Being able to gather client’s requirements and translate those into an engaging, effective and unique websites.</p>
              <a href={resume} download='Mohana Prawin' className="btn">Download Resume</a>
          </div>
          <div className="about__skills grid">
          <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Java Programming</h3>
                <span className="skills__numbers">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage java"></span>
              </div>

            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__numbers">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__numbers">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage uiux"></span>
              </div>

            </div>

            


          </div>
        
        </div>
      </div>
      <Aboutbox/>
    </section>
  )
}
