import React from 'react'

export const Contact = () => {
  return (
    <div className='outerContainer'>
        <p>Contact Form</p>

        <form className='contactForm'>
            <label>Full name</label>
            <input type='text' placeholder="Enter your Full Name"/>

            <label>Email Address</label>
            <input type='text' placeholder="Enter your Email"/>

            <label>Enter Feedback</label>
            <textarea type='text' placeholder="Enter your Message"></textarea>

            <button>Submit</button>

        </form>
    </div>
  )
}
