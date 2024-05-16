import React from 'react'
import { Link } from 'react-router-dom';

function Navbar({count = 1}) {
  return (
    <div className='Navbar top-0 fixed bg-white w-full flex items-center justify-between pl-6 pr-6 pt-3 pb-3'>
      <h1 className='text-2xl font-bold'>Home</h1>
      <Link to='/messenger' className='Notifications-btn w-8 h-8 flex items-center justify-center relative'>
      <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.8153 8.352C20.8153 3.5 16.0643 0 10.8153 0C5.53432 0 0.815323 3.526 0.815323 8.352C0.815323 10.063 1.43032 11.743 2.52032 13.047C2.56732 14.574 1.66932 16.765 0.859323 18.359C3.02732 17.968 6.11132 17.101 7.50832 16.244C15.2053 18.121 20.8153 13.402 20.8153 8.352ZM6.31532 9.732C5.62632 9.732 5.06532 9.172 5.06532 8.482C5.06532 7.792 5.62632 7.232 6.31532 7.232C7.00432 7.232 7.56532 7.792 7.56532 8.482C7.56532 9.172 7.00432 9.732 6.31532 9.732ZM10.8153 9.732C10.1263 9.732 9.56532 9.172 9.56532 8.482C9.56532 7.792 10.1263 7.232 10.8153 7.232C11.5043 7.232 12.0653 7.792 12.0653 8.482C12.0653 9.172 11.5043 9.732 10.8153 9.732ZM15.3153 9.732C14.6263 9.732 14.0653 9.172 14.0653 8.482C14.0653 7.792 14.6263 7.232 15.3153 7.232C16.0043 7.232 16.5653 7.792 16.5653 8.482C16.5653 9.172 16.0043 9.732 15.3153 9.732ZM23.6983 18.521C23.6693 19.522 24.2563 20.956 24.7863 22C23.3673 21.742 21.3483 21.176 20.4343 20.615C17.0693 21.433 14.3203 20.325 12.8613 18.515C17.4183 17.855 21.1023 14.958 22.3503 11.173C23.8303 12.152 24.8153 13.664 24.8153 15.447C24.8153 16.567 24.4123 17.668 23.6983 18.521Z" fill="black" />
      </svg>
          {count > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white 
               rounded-full px-[4px] py-[4px] text-xs
               text-bold flex items-center
               justify-center"
          ></span>
          )}
      </Link>
    </div>
  )
}

export default Navbar