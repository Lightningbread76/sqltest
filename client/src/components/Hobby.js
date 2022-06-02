import React from 'react';

function Hobby(props) {
  return (
    <>
      <li className='cards__item'>
      <a className = 'cards__item__link' href={props.path} title = "Instagram">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cards__item__infotext'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default Hobby;