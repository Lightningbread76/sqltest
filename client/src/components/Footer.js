import React , {useEffect, useState} from 'react';
import './Footer.css';
import { Button } from './Button';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Footer() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(()=> { 
    fetch("/api").then(
      response =>response.json()
    ).then(
      data => {setBackendData(data)}
    )
  },[])

  const url = "http://localhost:5000/add/"
  const[data,setData] = useState({
    name:""
  })
  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function submit(e){
    e.preventDefault();
    Axios.post((url+data.name),{name: data.name}).then(res=>{
      console.log(res.data)
    })
  }
  

  return (
    <div className='footer-container'>

        <div className='input-areas'>
          <div className='footer-subscription'>
          <h2>Want to do a Photoshoot? Send your insta link and I'll get back to you!</h2>
          Queue: {(typeof backendData.users==='undefined')?(
            <p>Loading...</p>
            ):(
              backendData.users.length
            )}
          <form onSubmit={(e)=>submit(e)}>
            <input
              className='footer-input'
              onChange={(e)=>handle(e)}
              id = 'name'
              value = {data.name}
              type='text'
              placeholder='Your Instagram name'
            />
            <button>Submit</button>
            <Button onClick={() => {
              
    alert('data has been sent!');
  }}
  buttonStyle='btn--outline'>Send</Button>
          </form>
          </div>
        </div>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/itskevinguo/' title = "Instagram">Instagram</a>
            <a href='https://mkorostoff.github.io/1-pixel-wealth/?fbclid=IwAR3RTNt6OVmcrzYKjqOPzaYB0bpQPH_8hUtmeGjJ4rTWj6uhLCd1hOzC6pE' title = "Pixel Wealth"> Pixel Wealth</a>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <i class='fas fa-bolt' />B
            </Link>
          </div>
          <small class='website-rights'>Kevin Guo © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
  
}

export default Footer;
