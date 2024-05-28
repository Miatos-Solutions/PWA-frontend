import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './ProfileStyles.css'
import { FaHeart } from 'react-icons/fa6';

function Profile() {
    const [activeTab, setActiveTab] = useState('tab1');


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
  return (
      <section className='Profile-container flex items-center justify-center flex-col h-full'>
          <nav className='Profile-Nav top-0 fixed w-full h-16 bg-white flex items-center justify-between p-6'>
            <span className='text-2xl font-bold'>Profile</span>
              <Link to='/settings'>
                <svg  
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 13.616V10.384C22.349 9.797 
                    21.307 9.632 20.781 8.365C20.254 7.094 20.881 6.23
                    21.628 4.657L19.343 2.372C17.782 3.114 16.91 3.747 15.636 3.219C14.367      
                    2.693 14.2 1.643 13.616 0H10.384C9.802 1.635 9.635 2.692 8.365 3.219C7.094 3.747
                    6.232 3.121 4.657 2.372L2.372 4.657C3.117 6.225 3.747 7.091 3.219 8.364C2.692 9.635
                    1.635 9.802 0 10.384V13.616C1.632 14.196 2.692 14.365 3.219 15.635C3.749 16.917 3.105
                    17.801 2.372 19.342L4.657 21.628C6.219 20.885 7.091 20.253 8.364 20.781C9.634 21.307 9.801 22.36
                    10.384 24H13.616C14.198 22.364 14.365 21.31 15.643 20.778H15.644C16.906 20.254 17.764 20.879 19.342
                    21.629L21.627 19.343C20.884 17.78 20.252 16.91 20.779 15.637C21.306 14.366 22.367 14.197 24 13.616ZM12
                    17C9.238 17 7 14.761 7 12C7 9.239 9.238 7 12 7C14.762 7 17 9.239 17 12C17 14.761 14.762 17 12 17ZM15 12C15
                    13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12Z"
                    fill="black"
                    />
                </svg>
              </Link>
          </nav>
          <div className='Profile-box-container bg-white h-[100vh] pt-[60px] p-6 overflow-y-auto'>
            <div className='Profile-box bg-white h-[45vh] mt-3 mb-5 rounded-[8px]'>
                <div className="Profile-cover bg-gray-400 h-[35%]">
                   <img className="inset-0 w-full h-full object-cover" 
                   src="https://images.unsplash.com/photo-1600137541899-c6de40300ee0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Photo" />
                </div>
                <div className='User-PROFILE-Box bg-gray-300 h-[65%] flex flex-col gap-5'>
                    <div className='flex justify-between h-[110px] pl-6 pr-3 pt-3 gap-3'>
                        <div className='flex flex-col justify-between w-full'>
                              <div className='Profile-User-Image w-[80px] h-[80px] bg-black mt-[-45px] rounded-[50%]'>
                                 <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='User'/>
                              </div>
                              <div>
                                  <div className='flex items-center justify-between w-[100%]'>
                                      <h1 className='text-[18px] font-bold'>Jone Doe</h1>
                                      <div className='flex flex-col justify-between'>
                                          <Link to='#' className='text-[13px] pl-4 text-right pr-1'>More</Link>
                                      </div>
                                  </div>
                                  
                                  <h3 className='flex gap-2 items-center text-center text-[13px]'>@jonedoe <span className='text-3xl font-bold text-center mt-[-12px]'>.</span> <p>Location</p></h3>
                              </div>
                          </div>
                    </div>
                    <div className='flex gap-3 pl-6 h-[1rem] items-center'>
                        <div className='flex h-[30px] items-center rounded-[20px]'>
                            <p className='text-center'>10k fans</p>
                        </div>
                        <div className='flex h-[30px] items-center rounded-[20px]'>
                            <p className='text-center'>1k followers</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='Btns flex items-center h-[50px] gap-2 p-3 mb-3 rounded-[8px]'>
                        <Link to='/private-avatar' className='h-[37px] border-2 border-black flex items-center justify-center bg-black p-6 w-[10.4rem]  text-white text-center font-bold text-[13px] rounded-lg'>Go Private</Link>
                        <button className='h-[37px] text-white flex items-center justify-center text-center p-6 font-bold text-[13px]'>Edit Avatar</button>
                    </div>
                </div>
            </div>
            <div className='h-[50vh]'>
                            <div className='TESTEST flex items-center justify-center gap-[6rem] mb-3'>
                            <button className={activeTab === 'tab1' ? 'active-tab-1' : ''} onClick={() => handleTabClick('tab1')}>120 Photos</button>
                            <button className={activeTab === 'tab2' ? 'active-tab-2' : ''} onClick={() => handleTabClick('tab2')}>232 Videos</button>
                            </div>
                        
                            <div className='flex mb-4 h-[2px] bg-[#c6c6c6]' style={{ width: '100%' }}>
                                <div
                                    className="indicator-bar"
                                    style={{
                                        left: activeTab === 'tab1' ? 0 : '50%',
                                        transition: 'left 0.3s ease',
                                        backgroundColor: activeTab === 'tab1' ? 'black' : '#c6c6c6',
                                    }}
                                />
                                <div
                                    className="indicator-bar"
                                    style={{
                                        right: activeTab === 'tab2' ? 0 : '50%',
                                        transition: 'rigth 0.3s ease',
                                        backgroundColor: activeTab === 'tab2' ? 'black' : '#c6c6c6',
                                    }}
                                />
                            </div>
                    
                            <ul className="tab-content-2 flex flex-wrap gap-2" style={{ display: activeTab === 'tab1' ? 'flex' : 'none', alignItems: 'start', justifyContent: 'flex-start' }}>
                                {/* Content for (posts) */}
                                <li className='Post-container-5 flex-shrink-0 w-full max-w-[7.2rem] h-[8.1rem] rounded-[7px] bg-gray-300'>Post</li>
                                <li className='Post-container-5 flex-shrink-0 w-full max-w-[7.2rem] h-[8.1rem] rounded-[7px] bg-gray-300'></li>
                                <li className='Post-container-5 flex-shrink-0 w-full max-w-[7.2rem] h-[8.1rem] rounded-[7px] bg-gray-300'></li>
                                <li className='Post-container-5 flex-shrink-0 w-full max-w-[7.2rem] h-[8.1rem] rounded-[7px] bg-gray-300'></li>
                            </ul>
                        
                            <div className="tab-content-2 flex flex-wrap gap-1" style={{ display: activeTab === 'tab2' ? 'flex' : 'none', alignItems: 'start', justifyContent: 'center' }}>
                                {/* Content for (media collection) */}
                                <div className='Post-container-5 flex-shrink-0 w-full max-w-[7.2rem] h-[12rem] rounded-[7px] bg-gray-300'>Media</div>
                                <div className='Post-container-5 flex-shrink-0 w-full max-w-[7.2rem] h-[12rem] rounded-[7px] bg-gray-300'></div>
                                <div className='Post-container-5 flex-shrink-0 w-full max-w-[7.2rem] h-[12rem] rounded-[7px] bg-gray-300'></div>
                                <div className='Post-container-5 flex-shrink-0 w-full max-w-[7.2rem] h-[12rem] rounded-[7px] bg-gray-300'></div>
                            </div>
                        </div>  
          </div>
      </section>
  )
}

export default Profile