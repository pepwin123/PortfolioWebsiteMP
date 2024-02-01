import React from 'react'
import './Services.css'
import Image1 from "../../asserts/service-1.svg";
import Image2 from "../../asserts/service-2.svg";
import Image3 from "../../asserts/service-2.svg";



const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Passionate UI/UX Designer dedicated to creating engaging and user-centric digital experiences. A keen eye for aesthetics coupled with a deep understanding of user behavior allows me to design interfaces that are not only visually appealing but also intuitive and functional.S",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Frontend Developer specializing in React.js, I have a proven track record of building dynamic and responsive user interfaces. Proficient in leveraging the power of React components, state management, and virtual DOM to create efficient and interactive web applications.",
  },
  {
    id: 3,
    image: Image3,
    title: "Java Project",
    description:
      "Experienced Java Developer with a strong foundation in object-oriented programming. Proficient in developing scalable and efficient applications using Java technologies. ",
  },
];


export const Services = () => {
  return (
     <sectiom className="services container section" id="services">
      <h2 className="section__title">Skills</h2>
      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return(
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
     </sectiom>
  )
}
