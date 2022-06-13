import React from 'react'
import { db } from '../firebaseConfig'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'

export const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const userCollectionRef = collection(db, "contactdata")

  const handleSubmit = () => {
    addDoc(userCollectionRef, {
      name: name, 
      email: email,
      message: message
    }).then(()=>{
      if (!alert("Form Submitted Successfully!!!")) document.location = "https://www.google.com"
    }).catch(()=>{
      alert()
    })
  }

  return (
    <div className='outerContainer'>
      <p>Contact Form</p>

      <form className='contactForm'>
        <label>Full name</label>
        <input type='text' placeholder="Enter your Full Name"
          onChange={(event) => {
            setName(event.target.value);
          }} />

        <label>Email Address</label>
        <input type='text' placeholder="Enter your Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }} />

        <label>Enter Feedback</label>
        <textarea type='text' placeholder="Enter your Message"
          onChange={(event) => {
            setMessage(event.target.value);
          }} ></textarea>


        <button onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  )
}
