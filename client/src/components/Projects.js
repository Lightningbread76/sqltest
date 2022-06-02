import React from 'react'
import './Cards.css';
import Card from 'react-bootstrap/Card'
//import CardItem from './CardItem';
import Project from './Project';
function Projects() {
    return (
      
           <div className='cards'>
             <Card className="category-title">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="card-title">Projects</Card.Title>
                <hr />
                <Card.Text className="card-text">
                <div className='cards__container'>
          <ul className='cards__items'>
            <Project
              src='images/checkmate_logo.png'
              text='Checkmate - a Note taking android app'
              label='Checkmate'
              path='https://www.youtube.com/watch?v=zKhZutb--Yc'
            />
            <Project
              src='images/fractalist.png'
              text='Fractalist - Generate unique fractals with spotify playlists'
              label='Fractalist'
              path='https://quence-dev.github.io/fractalist/index.html'
            />
            <Project
              src='images/melspec.png'
              text='Social Sentiment Project - using machine learning to analyze sentiment in audio clips'
              label='Social Sentiment Project'
              path='https://github.com/ksapru/BU-SocialSentiment583'
            />
            <Project
              src='images/beahero.png'
              text='Be a Hero - a choose your own adventure book website'
              label='Be a Hero'
              path='https://kmi.eshuwu.net/'
            />
          </ul>
        </div>
                  </Card.Text>
              </Card.Body>
            </Card>
          
      </div> 

    )
}

export default Projects
