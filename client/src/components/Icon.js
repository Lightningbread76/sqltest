import React from 'react';
import { Link } from 'react-router-dom';

function Icon(props) {
    return (
        <>
          <li className='icons__item'>
            <Link className='cards__item__link' to={props.path}>
                <img
                  className='cards__item__img'
                  alt=''
                  src={props.src}
                />
              <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
              </div>
            </Link>
          </li>
        </>
      );
}

export default Icon;