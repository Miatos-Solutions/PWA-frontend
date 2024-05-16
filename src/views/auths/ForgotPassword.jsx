import React, { useState } from 'react'
import './authsStyle.css'
import { Link } from 'react-router-dom'
import VerifyEmail from './VerifyEmail';
import toast from 'react-hot-toast';
import axios from 'axios';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    
    const handleEmailSubmit = (e) => {
        e.preventDefault();
    
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(email)) {
            // Valid email, proceed to call API
            axios.post('https://pwa-backend-rosy.vercel.app/forgot-password', { email: email })
                .then(() => {
                    // If API call succeeds, show OTP input
                    setShowOtpInput(true);
                    toast.success(`Enter OTP sent to: ${email}`);
                })
                .catch(error => {
                    // If API call fails, handle error
                    console.error('Error:', error);
                    toast.error("Failed to send OTP");
                });
        } else {
            // Invalid email format
            toast.error("Invalid email");
            return;
        }
    }
    
    const onOEmailSubmit = (otp) =>{
        axios.post('https://pwa-backend-rosy.vercel.app/verify-otp', { otp: otp, email: email })
            .then(response => {
                if (response.data.valid === true) {
                    console.log("Correct OTP");
                    // if the otp is correct then redirect user to a new password setup page
                    // history.push('/reset-password');
                } else {
                    // OTP entered by the user does not match the one sent by the API
                    toast.error("Incorrect OTP");
                }
            })
            .catch(error => {
                // If API call fails
                console.error('Error:', error);
                toast.error("Failed to verify OTP");
            });
    }
    

    return (
    <div>
    {!showOtpInput ?
    <section className="Welcome-Screen h-screen bg-gray-300 w-screen">
        <div className="Social-Logins-container h-[100%] flex items-center justify-center bg-white p-5">
            <div className="Welcome pt-5 flex flex-col items-center justify-center">
                <h1 className="text-black-500 text-center text-3xl md:text-3xl mb-6 font-bold">Forgot Password</h1>
                   <form onSubmit={handleEmailSubmit} className="Socials-box w-full h-auto flex flex-col items-center justify-center mb-3 gap-2">
                      <div className="Social-btns w-full flex items-center rounded-full border border-black-500">
                          <div className="w-full h-full text-black-500 flex items-center gap-4">
                              <div className="w-8 h-8 bg-black rounded-full border flex items-center justify-center"></div>
                              <input type='email'
                                  name='email'
                                  placeholder='youremail@gmail.com'
                                  className='Input'
                                  value={email}
                                  onChange={handleEmail}
                              />
                          </div>
                      </div>
                      <div className='flex w-full items-center justify-between mb-3'><p className='text-l'>We’ll send a message to your mail to confirm you
                          have an account with us</p></div>
                      <button type='submit' className="Submit-btn w-full bg-gray-300 mb-4 text-center">Send Code</button>
                  </form>
                  <p className="text-1xl">Do not have an account? &nbsp;<Link to="/register" className="font-bold">Sign Up</Link></p>
            </div>
        </div>
    </section>: <div>
    <VerifyEmail length={4} onEmailSubmit={onOEmailSubmit} email={email} />
</div>}
</div>
  )
}

export default ForgotPassword