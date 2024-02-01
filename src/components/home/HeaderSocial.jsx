import React from 'react';
import './HeaderSocial.css';
import { AiFillGithub, AiFillGoogleCircle, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

export const HeaderSocial = () => {
  return (
    <div className='topapp'>
      <div className='topappinside'>
        <a href="https://github.com/pepwin123" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/mohana-prawin-e-46a260274/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/_.praw1n__?igsh=MXdzdjd1dDZnbWF0dA==" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/PrawinMohana" target="_blank" rel="noopener noreferrer">
          <AiFillTwitterCircle />
        </a>
      </div>
    </div>
  );
};
