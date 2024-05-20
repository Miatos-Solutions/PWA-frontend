import React from 'react'
import { Link } from 'react-router-dom'
import './ProfileSettings.css'

function ProfileResets() {
    return (
        <section className='h-[100vh] bg-white flex flex-col gap-7 pl-6 pr-6 '> 
            <nav className='pt-[40px]'>
                <Link to='/profile-settings'>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.978 9.999V13.25C7.978 13.662 7.643 14 7.226 14C7.038 14 6.851 13.929 6.708 13.794C4.933 12.109 1.763 9.102 0.312 7.725C0.112 7.536 0 7.273 0 7C0 6.726 0.112 6.464 0.312 6.275C1.763 4.898 4.933 1.89 6.708 0.207C6.851 0.0709998 7.038 0 7.226 0C7.643 0 7.978 0.337 7.978 0.75V4.001H16.998C17.529 4.001 18 4.471 18 5.001V8.999C18 9.529 17.529 9.999 16.998 9.999H7.978Z" fill="black" />
                </svg>
                </Link>
            </nav>
            <h1 className='text-lg font-bold'>Edit Profile</h1>
            <div className='Edit-Profile-Image-Container w-full h-[8rem] shadow-custom rounded-[8px] flex items-center justify-center gap-10'>
                
                <button className='Open-device-camera-btn'>
                    <div className='w-[3.3rem] h-[3.3rem] bg-gray-300 rounded-[50%] flex items-center justify-center'>
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16667 1.66667H1.66667V0.833333H4.16667V1.66667ZM10.8333 5.83333C9.455 5.83333 8.33333 6.955 8.33333 8.33333C8.33333 9.71167 9.455 10.8333 10.8333 10.8333C12.2117 10.8333 13.3333 9.71167 13.3333 8.33333C13.3333 6.955 12.2117 5.83333 10.8333 5.83333ZM20 2.5V15H0V2.5H4.94167C5.49917 2.5 6.01917 2.22167 6.32833 1.7575L7.5 0H14.1667L15.3383 1.7575C15.6475 2.22167 16.1675 2.5 16.725 2.5H20ZM4.16667 5.83333C4.16667 5.37333 3.79417 5 3.33333 5C2.8725 5 2.5 5.37333 2.5 5.83333C2.5 6.29333 2.8725 6.66667 3.33333 6.66667C3.79417 6.66667 4.16667 6.29333 4.16667 5.83333ZM15 8.33333C15 6.0325 13.1342 4.16667 10.8333 4.16667C8.5325 4.16667 6.66667 6.0325 6.66667 8.33333C6.66667 10.6342 8.5325 12.5 10.8333 12.5C13.1342 12.5 15 10.6342 15 8.33333Z" fill="#696969" />
                        </svg>
                    </div>
                    <span>Change</span>
                </button>

                <div className='w-[5.5rem] h-[5.5rem] bg-gray-300 rounded-[50%] flex items-center justify-center'>
                    <img src='#' alt='avatar' className='object-cover w-[100%] h-[100%]'/>
                </div>

                <button className='ProfileImage-Delete-Btn'>
                    <div className='w-[3.3rem] h-[3.3rem] bg-gray-300 rounded-[50%] flex items-center justify-center'>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillrule="evenodd" cliprule="evenodd" d="M13.6 20H2.4C1.5168 20 0.8 19.2533 0.8 18.3333V5H15.2V18.3333C15.2 19.2533 14.4832 20 13.6 20ZM6.4 8.33333C6.4 7.87333 6.0416 7.5 5.6 7.5C5.1584 7.5 4.8 7.87333 4.8 8.33333V15.8333C4.8 16.2933 5.1584 16.6667 5.6 16.6667C6.0416 16.6667 6.4 16.2933 6.4 15.8333V8.33333ZM11.2 8.33333C11.2 7.87333 10.8416 7.5 10.4 7.5C9.9584 7.5 9.6 7.87333 9.6 8.33333V15.8333C9.6 16.2933 9.9584 16.6667 10.4 16.6667C10.8416 16.6667 11.2 16.2933 11.2 15.8333V8.33333ZM16 4.16667H0V2.5H4.8V1.25C4.8 0.560833 5.3384 0 6 0H10C10.66 0 11.2 0.559167 11.2 1.25V2.5H16V4.16667ZM6.4 2.5H9.6V1.66667H6.4V2.5Z" fill="#696969" />
                        </svg>
                    </div>
                    <span>Delete</span>
                </button>

            </div>
    </section>
  )
}

export default ProfileResets