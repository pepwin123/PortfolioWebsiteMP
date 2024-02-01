import React, {useState} from 'react'
import './Portfolio.css'
import Menu from './Menu'

export const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) =>{
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updateItems);
  }

  return (
    <section className='work container section' id='work'>
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item" onClick={()=> setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={()=> filterItem("Web Development")}>MERN</span>
        <span className="work__item" onClick={()=> filterItem("Java")}>Java</span>
        <span className="work__item" onClick={()=> filterItem("UI Design")}>UI Design</span>
        <span className="work__item" onClick={()=> filterItem("Research")}>Research</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) =>{
            const{id, image, title, category} = elem;
            return(
              <div className="work__card" id={id}>
                <div className='work__thumbnail'>
                  <img src={image} alt="" className="work__img" />
                  <div className="work__mask"></div>
                </div>
                <span className="work__category">{category}</span>
                <h3 className="work__title">{title}</h3>
                <a href="#" className="work__button">
                  <i className="icon-link work_button-icon"></i>
                </a>
              </div>
            )
        })}
      </div>
    </section>
    
  )
}
