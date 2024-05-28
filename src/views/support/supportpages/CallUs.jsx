import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CallUs() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handlePhoneCall = () => {
        // Add the logic for initiating a phone call here
        console.log("Initiate phone call");
    };

    return (
        <section className='h-[100vh] bg-white flex flex-col gap-7'>
            <nav className='pl-9 pr-9 pt-[30px]'>
                <Link to='/support'>
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.978 9.999V13.25C7.978 13.662 7.643 14 7.226 14C7.038 14 6.851 13.929 6.708 13.794C4.933 12.109 1.763 9.102 0.312 7.725C0.112 7.536 0 7.273 0 7C0 6.726 0.112 6.464 0.312 6.275C1.763 4.898 4.933 1.89 6.708 0.207C6.851 0.0709998 7.038 0 7.226 0C7.643 0 7.978 0.337 7.978 0.75V4.001H16.998C17.529 4.001 18 4.471 18 5.001V8.999C18 9.529 17.529 9.999 16.998 9.999H7.978Z" fill="black" />
                    </svg>
                </Link>
            </nav>
            <button className='text-2xl font-bold pl-9 flex items-start' onClick={openModal}>Call Us</button>
            <section className='flex flex-col items-center justify-center pt-8 gap-7'>
                <div>
                    <svg width="230" height="230" viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M230 94.6258C230 42.3583 178.509 0 115 0C51.4912 0 0 42.3583 0 94.6258C0 137.866 35.2475 174.33 83.3846 185.629L115 230L146.615 185.629C194.752 174.321 230 137.856 230 94.6258Z" fill="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M81.7127 126.583H78.25C74.9997 126.583 71.8841 125.293 69.5893 122.994C67.2903 120.699 66 117.584 66 114.333V102.083C66 72.7854 87.9561 49 115 49C142.044 49 164 72.7854 164 102.083V114.333C164 117.584 162.71 120.699 160.411 122.994C158.116 125.293 155 126.583 151.75 126.583H148.287C137.303 145.501 120.096 147 115 147C109.904 147 92.6968 145.501 81.7127 126.583ZM147.667 102.59C145.213 103.553 142.485 101.855 142.485 99.3353C142.485 98.0939 142.395 96.8444 142.269 95.599C135.078 94.5618 127.495 87.7345 127.164 80.3968C121.795 88.5838 108.687 97.4243 98.4013 97.4243C102.836 94.57 105.911 86.1012 106.172 83.0999C103.799 87.5589 94.3383 95.9053 87.5886 97.3385L87.5151 99.3353C87.5151 101.863 84.7833 103.549 82.3333 102.59V117.988C83.5053 119.033 84.914 119.883 86.5841 120.413C87.5028 120.707 88.2664 121.328 88.7115 122.145C97.7193 138.666 110.868 138.833 115 138.833C118.793 138.833 130.186 138.69 138.998 125.893C134.625 127.661 129.749 128.36 123.649 128.56C122.138 131.01 118.83 132.708 115 132.708C109.741 132.708 105.474 129.507 105.474 125.562C105.474 121.618 109.741 118.417 115 118.417C118.81 118.417 122.097 120.095 123.624 122.52C131.382 122.414 141.329 121.157 147.667 111.72V102.59ZM102.75 100.042C105.551 100.042 107.826 102.786 107.826 106.167C107.826 109.548 105.551 112.292 102.75 112.292C99.9488 112.292 97.6744 109.548 97.6744 106.167C97.6744 102.786 99.9488 100.042 102.75 100.042ZM127.25 100.042C130.051 100.042 132.326 102.786 132.326 106.167C132.326 109.548 130.051 112.292 127.25 112.292C124.449 112.292 122.174 109.548 122.174 106.167C122.174 102.786 124.449 100.042 127.25 100.042ZM149.619 93.9167H155.16C151.664 73.0182 135 57.1667 115 57.1667C94.9998 57.1667 78.3358 73.0182 74.8404 93.9167H80.3815C82.5048 77.4894 94.3098 62.3852 115 62.3852C135.69 62.3852 147.495 77.4894 149.619 93.9167Z" fill="#D9D9D9" />
                    </svg>
                </div>
                <h1 className='text-2xl font-bold'>Get in touch with us!</h1>
                <p className='text-center w-[70%]'>Call lines are available between 8:00 AM 
                    and 5:00 PM Weekdays and Weekends.
                    Tap the number below to call.
                </p>
                <h1 className='text-2xl font-bold text-gray-400'>01234567890</h1>
            </section>

            {isModalOpen && (
                <div className='fixed inset-0 bg-gray-300 bg-opacity-90 flex items-bottom justify-center'>
                    <div className='bg-transparent bottom-0 left-0 p-6 rounded-lg max-w-md w-full flex flex-col gap-5 justify-between'>
                        <h2 className='text-xl font-bold mb-4'></h2>
                        <div className='flex flex-col gap-4'>
                            <p className='text-center'></p>
                            <div className='flex flex-col justify-around gap-3'>
                                <button 
                                    onClick={handlePhoneCall} 
                                    className='px-5 py-3 bg-gray-500 text-white rounded-lg'
                                >
                                    Call Us
                                </button>
                                <button 
                                    onClick={closeModal} 
                                    className='px-5 py-3 bg-gray-400 text-white rounded-lg'
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default CallUs;
