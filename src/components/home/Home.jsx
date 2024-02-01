import React from 'react'
import './Home.css'
import Me from "../../asserts/avatar-1.svg"
import { ScrollDown } from './ScrollDown'
import {HeaderSocial} from '../home/HeaderSocial';





export const Home = () => {
  return (
    <section className="home__container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Mohana Prawin</h1>
        <span className="home__education">I'm a Front-End developer</span>
          <HeaderSocial />
        <a href="#contact" className="btn" >Hire Me</a>
      
        <ScrollDown />
      </div>
      
      
    </section>
  )
}
