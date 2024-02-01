import React from 'react'
import './Resume.css'
import Data from './Data'
import './Resume.css'
import { Card } from './Card'

export const Resume = () => {
  return (
    <section className="resume container section" id='resume'>
      <h2 className="section__title">Education</h2>

      <fic className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) =>{
            if(val.category === "education"){
              return (
                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
              )
            }
          })}
        </div>
      </fic>
    </section>
  )
}
