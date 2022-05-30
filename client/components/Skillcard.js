import React from 'react';
import './Cards.css';

function Project(props) {
  return (
    <>
      <li className='icons__item'>
      <a className = 'cards__item__link' href={props.path} title = {props.path}>
            <img
              className='cards__item__icon'
              alt=''
              src={props.src}
            />
          <div className='cards__item__info'>
            <h1 className='cards__item__largetext'>{props.text}</h1>
          </div>
        </a>
      </li>
    </>
  );
}

export default Project;
