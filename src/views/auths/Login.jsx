import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VisibilityOffRounded, VisibilityRounded } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  // Password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!data.email || !data.password) {
        toast.error('Please enter your correct email and password');
        return; 
      }
    const { email, password } = data;
    try {
      const response = await axios.post('https://pwa-backend-rosy.vercel.app/login', {
        email,
        password,
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({
          email: '',
          password: '',
        });
        toast.success('Login Successful!');
        navigate("/home")
      }
    } catch (error) {
      toast.error('Login failed. Please try again.', error);
    }
  };

  return (
    <section className="Welcome-Screen h-screen bg-gray-300 w-screen">
      <div className="Social-Logins-container h-[100%] flex items-center justify-center bg-white p-5">
        <div className="Welcome pt-5 flex flex-col items-center justify-center">
          <h1 className="text-black-500 text-center text-3xl md:text-3xl mb-5 font-bold">Welcome</h1>
          <p className="text-center text-black-200 text-1xl md:text-1xl mb-5">Sign in to continue</p>
          <form onSubmit={handleSubmit} className="Socials-box w-full h-auto flex flex-col items-center justify-center mb-3 gap-2">
            <div className="Social-btns w-full flex items-center rounded-full border border-black-500">
              <div className="w-full h-full text-black-500 flex items-center gap-4">
                <div className="w-8 h-8 bg-black rounded-full border flex items-center justify-center">text</div>
                <input type='email' name='email' placeholder='example@gmail.com' className='Input' value={data.email} onChange={handleChange} autoComplete='new-email'/>
              </div>
            </div>
            <div className="Social-btns w-full flex items-center justify-between rounded-full border border-black-500">
              <div className="w-full text-black-500 flex items-center gap-4">
                <div className="w-8 h-8 bg-black rounded-full border flex items-center justify-center"></div>
                <input type={showPassword ? 'text' : 'password'} name='password' className='Input items-center' placeholder='Password' value={data.password} onChange={handleChange} autoComplete='new-password'/>
              </div>
              <div className='Password-visibility' onClick={togglePasswordVisibility}>
                {!showPassword ? <VisibilityOffRounded className='Visibility-Icon'/> : <VisibilityRounded className='Visibility-Icon'/>}
              </div>
            </div>
            <div className='flex w-full items-center justify-between mb-3'>
              <div className='flex items-center gap-2'><input type='checkbox' className='w-4 h-4 bg-gray-400'/>Remember me</div>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className="Signin-socials-btn w-full bg-gray-300 mb-6">Sign in</button>
            <p className="text-1xl">Do not have an account? &nbsp;<Link to="/register" className="font-bold">Sign Up</Link></p>
            <p className="text-1xl">Test the home page &nbsp;<Link to="/home" className="font-bold">Sign Up</Link></p>
            <p className="text-1xl">Test the avatar generation pages &nbsp;<Link to="/avatar-generator" className="font-bold">Avatar</Link></p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
