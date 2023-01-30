import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

import './contact.css'

// json url: http://localhost:8000/records
const Contact = () => {
  

  const [name, setName] = useState('');
  const [ email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [check, setCheck] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();


  const handleSubmit = (e)=> {
    e.preventDefault();
    
    const input = {name, email, message, check};

    setIsPending(true);

    fetch('http://localhost:8000/records', {
      method:'POST',
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(input)
    }).then(()=>{
      console.log('Message Sent');
      setIsPending(false);
      alert('Message sent succesfully.')
      history('/');
    })
  }

  return (

    <div>
            
        <div className='contact-container'>
          <div className='contact'>
            <form onSubmit={handleSubmit}>
              <h3>Got Message</h3>
              <label htmlFor=''> Name</label>
              <input type="text" required value={name} onChange={(e)=>setName(e.target.value)}/>
              <label>Email</label>
              <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <label>Message</label>
              <textarea 
              required
              value={message} 
              onChange={(e)=>setMessage(e.target.value)}
              ></textarea>
              <div className='checkbox'>
                <input type="checkbox" id="check" name="checkbox-signup"
                value={check} onClick={(e)=>setCheck(!check)}/>
                <label htmlFor="check" className='check-info'> Sign Up For News and Events </label>   
              </div>        
              {!isPending && <button type='submit'>Submit</button>}
              {isPending && <button disabled type='submit'>Sending Msg...</button>} 

            </form>
          </div>

          <div className='divider'>

          </div>

          <div className='social'>
            <h3> Follow Us:</h3>

            <div className='social-link'>
              <a href='https://www.instagram.com/thestupidbandnepal/'><button><BsInstagram /></button> <p>@thestupidbandnepal</p></a>
              <a href=''><button><BsTwitter /></button> <p>@thestupidbandnepal</p>  </a>
            </div>

            
          </div>
        </div>
        
    </div>
  )
}

export default Contact

