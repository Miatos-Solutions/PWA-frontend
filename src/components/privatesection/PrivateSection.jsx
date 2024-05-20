import React, { useEffect, useRef, useState } from 'react';
import './PrivateSection.css';
import { FaPlus, FaCamera, FaVideo } from 'react-icons/fa';
import { GoFileDirectoryFill } from 'react-icons/go';

function PrivateSection({ backGroundImage }) {
    const [addOptShown, setAddOptShown] = useState(false);
    const [showSaveFilesMini, setShowSaveFilesMini] = useState(false);
    const [showDetailed, setShowDetailed] = useState(false);
    const [activeTab, setActiveTab] = useState('tab1');

    const addOpt = useRef();
    const txtA = useRef();

    // Function to handle textarea height based on content
    function textareaEnter(event) {
        const lines = event.target.value.split('\n');
        setHeight(Math.min(50, 10 * lines.length));
    }

    // Function to toggle additional options visibility
    function toggleAddOpts() {
        setAddOptShown(!addOptShown);
    }

    // Function to handle tab clicks
    function handleTabClick(tab) {
        setActiveTab(tab);
    }

    useEffect(() => {
        // Function to handle click events outside add options area
        function handleClickOutside(event) {
            if (
                !event.target.closest('.addOptions') &&
                !event.target.closest('.addSec')
            ) {
                setAddOptShown(false);
            }

            if (
                !event.target.closest('.savedFiles') &&
                !event.target.closest('.showSveFile')
            ) {
                setShowSaveFilesMini(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="privatePage">
            {/* Top Section */}
            <div className="topSection">
                <h1>Private</h1>
                <button className="exitBtn">Exit</button>
            </div>

            {/* Background Image */}
            <div className="backgroundImage">
                <img src={backGroundImage} alt="background" />
            </div>

            {/* Bottom Section */}
            <div className={showSaveFilesMini ? 'bottomSection toSaveFileMini' : 'bottomSection'}>
                {/* Add Section */}
                <div className="addSec">
                    <span className={addOptShown ? 'add cancel' : 'add'} onClick={toggleAddOpts}>
                        <FaPlus />
                    </span>
                    <ul ref={addOpt} className={addOptShown ? 'addOptions shown' : 'addOptions'}>
                        <li className="option">
                            <FaCamera />
                            Screenshot
                        </li>
                        <li className="option">
                            <FaVideo />
                            Record Videos
                        </li>
                        <li
                            className="option showSveFile"
                            onClick={() => {
                                setShowSaveFilesMini(true);
                                setAddOptShown(false);
                            }}>
                            <GoFileDirectoryFill />
                            Saved Files
                        </li>
                    </ul>
                </div>

                {/* Typing Container */}
                <div className="typingCont">
                    <label htmlFor="textMessage">
                        <textarea
                            ref={txtA}
                            onInput={textareaEnter}
                            name="textMessage"
                            id="textMessage"
                            placeholder="Private chat..."></textarea>
                    </label>
                    <button className="sendBtn">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0L15 18.3333L8.22583 12.3008L14.7275 5.43917L6.0125 11.4617L0 10L20 0ZM7.5 13.89V20L10.215 16.3075L7.5 13.89Z" fill="black" />
                        </svg>
                    </button>
                </div>

                {/* Saved Files Section */}
                <div className="savedFiles">
                    {/* Mini View */}
                    <div className="savedFilesMini">
                        <div className="saveTop">
                            <h3>saved files</h3>
                            <span className="btn-more" onClick={() => {
                                setShowDetailed(true);
                                setShowSaveFilesMini(false);
                            }}>
                                more
                            </span>
                        </div>
                        {/* Media List */}
                        <div className="mediaList">
                            <ul className="mediaItemsCont">
                                {[...Array(5)].map((_, index) => (
                                    <li key={index} className="mediaItem">Saved</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Detailed View */}
                    <div className={!showSaveFilesMini && showDetailed ? 'savedFilesDetailed shown' : 'savedFilesDetailed'}>
                        <span className="back" onClick={() => {
                            setShowDetailed(false);
                            setShowSaveFilesMini(true);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="#6C7275" />
                            </svg>
                        </span>

                        {/*  */}
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
                                <li className='Post-container flex-shrink-0 w-full max-w-[8rem] h-[8rem] rounded-[7px] bg-gray-300'>Post</li>
                                <li className='Post-container flex-shrink-0 w-full max-w-[8rem] h-[8rem] rounded-[7px] bg-gray-300'></li>
                                <li className='Post-container flex-shrink-0 w-full max-w-[8rem] h-[8rem] rounded-[7px] bg-gray-300'></li>
                                <li className='Post-container flex-shrink-0 w-full max-w-[8rem] h-[8rem] rounded-[7px] bg-gray-300'></li>
                            </ul>
                        
                            <div className="tab-content-2 flex flex-wrap gap-2" style={{ display: activeTab === 'tab2' ? 'flex' : 'none', alignItems: 'start', justifyContent: 'center' }}>
                            {/* Content for (media collection) */}
                            <div className='Post-container flex-shrink-0 w-full max-w-[12rem] h-[12rem] rounded-[7px] bg-gray-300'>Media</div>
                            <div className='Post-container flex-shrink-0 w-full max-w-[12rem] h-[12rem] rounded-[7px] bg-gray-300'></div>
                            <div className='Post-container flex-shrink-0 w-full max-w-[12rem] h-[12rem] rounded-[7px] bg-gray-300'></div>
                            <div className='Post-container flex-shrink-0 w-full max-w-[12rem] h-[12rem] rounded-[7px] bg-gray-300'></div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivateSection;
