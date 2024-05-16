import React, { useState } from 'react';
import axios from 'axios';
import { VisibilityOffRounded, VisibilityRounded } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import './authsStyle.css';
import { toast } from 'react-hot-toast';

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  // Password visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 // Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  // Checking if any field is empty
  if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
    toast.error('Please fill in all fields');
    return;
  }

  // Checking if password and confirm password match
  if (formData.password !== formData.confirmPassword) {
    toast.error('Password and Confirm Password do not match');
    return;
  }

  try {
    // Sends registration data to the backend
    const response = await axios.post('https://pwa-backend-rosy.vercel.app/signup', formData);
    if (response.status === 200) {
      toast.success('Registration successful');
      // redirects the user to home page upon successful registration
      navigate('/login');
    } else {
      toast.error('Registration failed');
    }
  } catch (error) {
    toast.error(error.response?.formData?.error || 'Email already exist');
  }
};


  return (
    <section className="Welcome-Screen h-screen bg-gray-300 w-screen">
      <div className="Social-Logins-container h-[100%] flex items-center justify-center bg-white p-5">
        <div className="Welcome pt-5 flex flex-col items-center justify-center">
          <h1 className="text-black-500 text-center text-3xl md:text-3xl mb-3 font-bold">Create Your Account</h1>
          <p className="text-center text-black-200 text-1xl md:text-1xl mb-5">Fill form below to continue</p>
          <form onSubmit={handleSubmit} className="Socials-box w-full h-auto flex flex-col items-center justify-center mb-3 gap-2">
            <div className="Social-btns w-full flex items-center rounded-full border border-black-500">
              <div className="w-full h-full text-black-500 flex items-center gap-4">
                <div className="w-8 h-8 bg-black rounded-full border flex items-center justify-center"></div>
                <input type='text' name='fullName' placeholder='Full Name' autoComplete='new-fullName' className='Input' value={formData.fullName} onChange={handleInputChange} />
              </div>
            </div>
            <div className="Social-btns w-full flex items-center rounded-full border border-black-500">
              <div className="w-full h-full text-black-500 flex items-center gap-4">
                <div className="w-8 h-8 bg-black rounded-full border flex items-center justify-center"></div>
                <input type='email' name='email' placeholder='Email' autoComplete='new-email' className='Input' value={formData.email} onChange={handleInputChange} />
              </div>
            </div>
            <div className="Social-btns w-full flex items-center justify-between rounded-full border border-black-500">
              <div className="w-full text-black-500 flex items-center gap-4">
                <div className="w-8 h-8 bg-black rounded-full border flex items-center justify-center"></div>
                <input type={showPassword ? 'text' : 'password'} name='password' autoComplete='new-password' className='Input items-center' placeholder='Password' value={formData.password} onChange={handleInputChange} />
              </div>
              <div className='Password-visibility' onClick={togglePasswordVisibility}>
                {!showPassword ? <VisibilityOffRounded className='Visibility-Icon'/> : <VisibilityRounded className='Visibility-Icon'/>}
              </div>
            </div>
            <div className="Social-btns w-full flex items-center justify-between rounded-full border border-black-500">
              <div className="w-full text-black-500 flex items-center gap-4">
                <div className="w-8 h-8 bg-black rounded-full border flex items-center justify-center"></div>
                <input type={showPasswordTwo ? 'text' : 'password'} name='confirmPassword' autoComplete='new-confirmPassword' className='Input items-center' placeholder='Repeat Password' value={formData.confirmPassword} onChange={handleInputChange} />
              </div>
              <div className='Password-visibility' onClick={togglePasswordVisibilityTwo}>
                {!showPasswordTwo ? <VisibilityOffRounded className='Visibility-Icon'/> : <VisibilityRounded className='Visibility-Icon'/>}
              </div>
            </div>
            <button type="submit" className="Signin-socials-btn w-full bg-gray-300 mb-4">Sign Up</button>
            <p className="text-1xl">Already have an account? &nbsp;<Link to="/login" className="font-bold">Sign In</Link></p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
