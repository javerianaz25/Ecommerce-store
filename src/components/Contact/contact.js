import React, { useState } from 'react';
import './contact.css';
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'

const Contact = () => {
  const [users, setUser] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
  });

  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...users, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your Message sent'); // Placeholder for the action you want after submission
  };

  return (
    <>
    <Navbar/>
      <div className='contact_container'id='contact'>
        <div className='contant'>
          <h2># contact us</h2>
          <div className='form'>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                name='Name'
                value={users.Name}
                placeholder='Enter Your Full Name'
                required
                autoComplete='off'
                onChange={data}
              />
              <input
                type='email'
                name='Email'
                value={users.Email}
                placeholder='Enter Your E-mail'
                autoComplete='off'
                onChange={data}
              />
              <input
                type='text'
                name='Subject'
                value={users.Subject}
                placeholder='Enter Your Subject'
                autoComplete='off'
                onChange={data}
              />
              <textarea
                name='Message'
                value={users.Message}
                placeholder='Your Message'
                autoComplete='off'
                onChange={data}
              ></textarea>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
