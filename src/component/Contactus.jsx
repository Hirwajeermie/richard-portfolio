/* eslint-disable no-unused-vars */
import React from 'react'
import './Contactus.css'
import Massage from '../assets/Massage.png'
import Imail from '../assets/Imail.png'
import Phone from '../assets/Phone.png'
import Locations from '../assets/Locations.png'
import AArrow from '../assets/AArrow.png'

const Contactus = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3ad05130-052d-4d81-8883-0ab770c193f7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id='Contactus'>
    <div >
    <div className='Title'>
        <h1>Contact Me</h1>
    </div>
    <div className='Contact' id='Contactus'>
      
        <div className='contact-col'>
            <h3>Send me a message <img src={Massage} alt="" /></h3>
            <p>Feel free to reach out through contact from or find
                our contact information below. Your feedback, questions, 
                and suggestions are important to us as we strive to provide 
                exceptional help to our Organisation
            </p>
            <ul>
                <li><img className='' src={Imail} alt="" />shumburich3@gmail.com </li>
                <li><img className='' src={Phone} alt="" />+250 788755102 </li>
                <li><img src={Locations} alt="" /> Rwanda , Kigali City <br />Nyarugenge District <br /> Kigali - Rwanda</li>
            </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label> Your Name</label>
            <input type="text" name='Name' placeholder='Enter your name' required/>
            <label >Phone Number</label>
            <input type="Tel" name='Phone' placeholder='Enter your mobile number' required/>
            <label >Write your masseges here</label>
            <textarea name="Message"  rows="6" placeholder='Enter your massage' required></textarea>
            <button type='submit' className='btn d inline-flex items-center px-6 py-3 bg-gray-900 border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors'>Submit now <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8l4 4-4 4" />
                  <path d="M8 12h8" />
                </svg></button>
          </form>
          <span>{result}</span>
        </div>
      
    </div>
    </div>
    </div>
  )
}

export default Contactus
