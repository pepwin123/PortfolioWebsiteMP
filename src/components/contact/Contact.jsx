import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Result = () =>{
  return (
    <p>Your message is successfully sent. i will contact you soon!!!</p>
  )

}

export const Contact = () => {


  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yio50ld', 'template_ivmwhwt', e.target, 'TVhreeNRusVQvqCjp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      showResult(true);
  };


  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Contact</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk everything!</h3>

          <p className="contact__details">Don't like forms? Send me an email </p>
        </div>

        <form action="" className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Enter your name' name='fullName'/>
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Enter your Email' name='email'/>
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Enter your subject' name='subject'/>
            </div>

            <div className="contact__form-div">
              <input type="number" className="contact__form-input" placeholder='Enter your mobile number' name='phone'/>
            </div>

            <div className="contact__form-div">
              <textarea type="text" id='' rows="10" cols="30" className='contact__form-input' placeholder='Write your message' name='message'/>
            </div>

            <button className='btn'>Send</button>

            <div className='row'>{result ? <Result /> : null}</div>
        </form>
      </div>
    </section>
  )
}
