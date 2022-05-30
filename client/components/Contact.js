import React from 'react'
import './Cards.css';
import Card from 'react-bootstrap/Card'
import Skillcard from './Skillcard'
function Contact() {
    return (
        <div className='cards'>
        <div className='cards__wrapper'>
            <div className='cards__portrait'>
            <img
              src='images/goodlookin.jpg'
              alt=''
            />
            <br></br>
            <Card className="category-title">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="card-title">Contact Info: (I will most likely respond to emails)</Card.Title>
                <hr />
                <Card.Text className="card-text">
                <Skillcard
                  src = 'images/insta.png'
                  text = "itskevinguo"
                  path = "https://www.instagram.com/itskevinguo/"
                  />
                  <Skillcard
                  src = 'images/gmaillogo.png'
                  text = "kg76@bu.edu"
                  path = "gmail.com"
                  />
                  <Skillcard
                  src = 'images/linkedin.png'
                  text = ""
                  path = "https://www.linkedin.com/in/kevin-guo-a24123196/"
                  />
                  </Card.Text>
              </Card.Body>
            </Card>
          </div>
          </div>
      </div>
    )
}

export default Contact
