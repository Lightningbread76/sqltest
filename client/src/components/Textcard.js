import React from 'react';
import { Link } from 'react-router-dom';

function Textcard(props) {
  return (
    <>
      <li className='cards__container'>
          <div className='cards__item__infotext'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <br></br>
            <Link className='cards__item__link' to={props.path}>
            <div className='btn--primary'>
          See Projects <i className='far fa-play-circle' />
        </div>
              </Link>
            <br></br>
            <h5 className='cards__item__text'>{props.text1}</h5>
          </div>
      </li>
    </>
  );
}

export default Textcard;
