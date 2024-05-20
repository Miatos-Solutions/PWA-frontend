import React from 'react'
import { Link } from 'react-router-dom'
import './ProfileSettings.css'


function ProfileSettings() {
    const email = 'jesuschrist@gmail.com'
    const truncatedEmail = email.substring(0, 16); // Extract first 16 characters of email
    const remainingChars = email.length > 8 ? '...' : ''; // Add '...' if email length is more than 16 characters
  return (
      <section className='h-[100vh] bg-white flex flex-col gap-7 pl-6 pr-6 '> 
          <nav className='pt-[40px]'>
              <Link to='/settings'>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.978 9.999V13.25C7.978 13.662 7.643 14 7.226 14C7.038 14 6.851 13.929 6.708 13.794C4.933 12.109 1.763 9.102 0.312 7.725C0.112 7.536 0 7.273 0 7C0 6.726 0.112 6.464 0.312 6.275C1.763 4.898 4.933 1.89 6.708 0.207C6.851 0.0709998 7.038 0 7.226 0C7.643 0 7.978 0.337 7.978 0.75V4.001H16.998C17.529 4.001 18 4.471 18 5.001V8.999C18 9.529 17.529 9.999 16.998 9.999H7.978Z" fill="black" />
                </svg>
              </Link>
          </nav>
          <div className='Profile-set-box p-6 flex flex-col justify-between'>
              <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-5'>
                    <div className='profile-setup-imageBox w-[70px] h-[70px] rounded-[50%]'>
                        <img src='https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Profile' />
                    </div>
                    <div className='flex flex-col'>
                          <h2 className='flex gap-[8.5px] items-center'><span className='text-gray-400'>Name:</span><span className='font-bold text-[14px]'>Jesus Christ</span></h2>
                          <h2 className='flex gap-4 items-center'><span className='text-gray-400'>Email:</span><span className='font-bold text-[14px]'>{truncatedEmail + remainingChars}</span></h2>
                          <h2 className='flex gap-1 items-center'><span className='text-gray-400'>Phone:</span><span className='font-bold text-[14px]'>+2349056674534</span></h2>
                    </div>
                  </div>
                  <Link to='/edit-profile'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 17.25C16 16.848 15.644 16.5 15.25 16.5C12.689 16.5 3.311 16.5 0.75 16.5C0.356 16.5 0 16.848 0 17.25C0 17.652 0.356 18 0.75 18H15.25C15.644 18 16 17.652 16 17.25ZM3.977 10.167C2.643 14.083 2.497 14.399 2.497 14.754C2.497 15.281 2.957 15.503 3.246 15.503C3.598 15.503 3.914 15.366 7.82 14.01L3.977 10.167ZM5.037 9.106L8.883 12.952L17.707 4.138C17.902 3.943 18 3.687 18 3.431C18 3.176 17.902 2.92 17.707 2.725C17.015 2.034 15.965 0.984 15.272 0.293C15.077 0.098 14.821 0 14.565 0C14.311 0 14.055 0.098 13.859 0.293L5.037 9.106Z" fill="#D9D9D9" />
                    </svg>
                  </Link>
              </div>
              <div className='Line-div mt-8 mb-2'></div>
              <button className='flex items-center justify-center gap-2 h-[30px] text-gray-400 font-bold text-[17px]'>
                  Log Out
                <span>
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 7V3L16 10L8 17V13H0V7H8ZM14 0C12.213 0 10.54 0.474 9.089 1.295L9.317 1.495L10.712 2.716C11.716 2.26 12.827 2 14 2C18.411 2 22 5.589 22 10C22 14.411 18.411 18 14 18C12.827 18 11.716 17.74 10.712 17.285L9.317 18.506L9.089 18.706C10.54 19.526 12.213 20 14 20C19.522 20 24 15.523 24 10C24 4.477 19.522 0 14 0Z" fill="#C3C3C3" />
                    </svg>
                </span>
              </button>
          </div>
          <Link to='#' className='Change-password-link flex items-center justify-between p-6'>
              <span className='font-bold text-xl flex'>
                  <h3>Change Password</h3>
              </span>
              <span>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.665 12L0.25 10.5855L4.9195 5.998L0.25 1.4145L1.665 0L7.75 5.998L1.665 12Z" fill="black" />
                </svg>
              </span>
          </Link>
      </section>
  )
}

export default ProfileSettings