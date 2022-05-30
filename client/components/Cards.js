import React from 'react';
import './Cards.css';
//import CardItem from './CardItem';
import Textcard from './Textcard';
import Icon from './Icon';
import Hobby from './Hobby';

function Cards() {
  return (
    <div className='cards'>
      <h1>About Me</h1>

        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className='cards__portrait'>
            <img
              src='images/goodlookin.jpg'
              alt=''
            />
            </div>

            <Textcard
              text="As someone who has been coding since the age of 14, I consider myself an experienced programmer. I’ve done a variety of projects in different fields in Computer Science, my most notable ones are the Note taking android app(Checkmate) and an interactive web book website. 
              What I can bring to the table is a deep understanding in Object Oriented Programming,HTML/CSS,  javascript, typescript, MongoDB and Firebase. 
              I also have experience in python, R, and the agile development workflow from my past internships and courses at Boston University."
              path="/experience"
              text1="I am a fast learner, especially when I come to develop a passion for the subject. My favorite method of learning is pair programming as we can not only share and exchange our knowledge but also create a sense of understanding and comradeship. 
              One of my strengths is having the ability to recognize who is best at doing what while working in a team environment and I often use that intuition to maximize efficiency and productivity."
            />
          </ul>

          </div>
          <div className='cards'>
          <h1>My Hobbies</h1>
          <br></br>
          <div className='cards__container'>
          <ul className='cards__items'>
            <Hobby
              src='images/ski1.png'
              text='From basketball to skiing, theres no sport that I would elude from competing in.'
              label='Sports'
              path='https://www.instagram.com/itskevinguo/'
            />
            <Hobby
              src='images/aerial.png'
              text='I can do both portrait and aerial photography, contact me if you want to do a photoshoot!'
              label='Photography'
              path='https://www.instagram.com/itskevinguo/'
            />
            <Hobby
              src='images/webdesign.png'
              text='If you would like me to help you design your website, contact me, I give friends discounts!'
              label='Web Design'
              path='https://www.instagram.com/itskevinguo/'
            />
          </ul>
        </div>
      </div>
      </div>
  );
}

export default Cards;
