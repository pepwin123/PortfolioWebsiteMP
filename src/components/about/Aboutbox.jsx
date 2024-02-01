import React from 'react'

export const Aboutbox = () => {
  return (
    <div className='about__boxes grid'>
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">2</h3>
                <span className="about__subtitle">Project Completed</span>
            </div>
        </div>
        
        
        <div className="about__box">
            <i className="about__icon icon-clock"></i>
            <div>
                <h3 className="about__title">2</h3>
                <span className="about__subtitle">Porject Going on</span>
            </div>
        </div>

       
    </div>
  )
}
