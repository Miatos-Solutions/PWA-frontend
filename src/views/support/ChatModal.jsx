import React from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import './ChatModal.css'
import { FaPlus } from 'react-icons/fa6';

const ChatModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
            <div className="bg-white w-[100%] max-w-[500px] h-[90%] flex flex-col gap-9 rounded-t-lg flex flex-col items-center justify-between">
                <div className="flex justify-between items-center mb-1 pl-6 pr-6 pt-3 top-0 right-0 rounded-tl-lg rounded-tr w-full">
                    <div className="flex">
                        <div className='w-[2rem] h-[2rem] rounded-[50%] bg-gray-500 text-white flex items-center justify-center'>V</div>
                        <div className='w-[2rem] h-[2rem] rounded-[50%] bg-gray-500 text-white flex items-center justify-center'>S</div>
                        <div className='w-[2rem] h-[2rem] rounded-[50%] bg-gray-500 text-white flex items-center justify-center'>K</div>
                    </div>
                    <button onClick={onClose} className="pr-3"><LiaTimesSolid className='text-2xl'/></button>
                </div>
                <div className="pl-6 pr-6 flex flex-col gap-2 w-full">
                    <h1 className='text-3xl text-gray-500'>Hi <span>Jane</span></h1>
                    <p className='text-2xl text-black font-bold'>How can we help?</p>
                </div>

                <button className="OpenNewMessenger pl-6 pr-6 flex items-center justify-between gap-2 bg-white h-[5rem] w-[90%] shadow-custom rounded-lg">
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>0</span>
                        <h4 className='font-bold'>Open Incident</h4>
                    </div>
                    <FaPlus/>
                </button>

                <div className="ChatModalMessenger flex flex-col justify-between">
                    <div className='w-full h-[70px] flex items-center justify-center pt-6'>
                        <span className='bg-white pl-6 pr-6 pt-2 pb-2 rounded-[20px] font-bold'>Yesterday</span>
                    </div>
                    <div className='Chats-Display h-full pt-2 pb-2 flex flex-col gap-3 overflow-y-auto'>
                        <div className='ChatsReceived flex items-end pl-6 gap-2 left-0'>
                            <div className='w-[1.5rem] h-[1.5rem] bg-gray-100 rounded-full'></div>
                            <p className='Received w-[10rem] bg-white p-2'>how are you?</p>
                        </div>

                        <div className='ChatsSent flex justify-end pr-6'>
                            <p className='Sent w-[10rem] bg-white p-2'>I am good and you?</p>
                        </div>

                        <div className='ChatsReceived flex items-end pl-6 gap-2 left-0'>
                            <div className='w-[1.5rem] h-[1.5rem]  bg-gray-100 rounded-full'></div>
                            <p className='Received w-[10rem] bg-white p-2'>Not bad i am doing great.</p>
                        </div>

                        <div className='ChatsSent flex justify-end pr-6'>
                            <p className='Sent w-[10rem] bg-white p-2'>it is been a while how is work?</p>
                        </div>

                        <div className='ChatsReceived flex items-end pl-6 gap-2 left-0'>
                            <div className='w-[1.5rem] h-[1.5rem]  bg-gray-100 rounded-full'></div>
                            <p className='Received w-[10rem] bg-white p-2'>Yeah work is great.</p>
                        </div>

                        <div className='ChatsSent flex justify-end pr-6'>
                            <p className='Sent w-[10rem] bg-white p-2'>That is cool</p>
                        </div>

                        <div className='ChatsReceived flex items-end pl-6 gap-2 left-0'>
                            <div className='w-[1.5rem] h-[1.5rem]  bg-gray-100 rounded-full'></div>
                            <p className='Received w-[10rem] bg-white p-2'>Yeah</p>
                        </div>
                    </div>
                    <div className='flex items-center jusitfy-center gap-5 p-6'>
                        <form className='w-[80%] h-[3rem] flex gap-3 border-2 border-gray-600 rounded-lg pr-3'>
                            <input type='text' placeholder='Add your comment....' className='w-full h-full bg-transparent pl-3 text-gray-100'/>
                            <button className='SendMessageBtn'>
                                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 0.55957L11.25 15.7295L6.16938 10.7379L11.0456 5.06021L4.50938 10.0435L0 8.83408L15 0.55957ZM5.625 12.0529V17.1086L7.66125 14.0532L5.625 12.0529Z" fill="black" />
                                </svg>
                            </button>
                        </form>
                        <button className="FilesSelectBtn flex items-center justify-center">
                            <svg width="26" height="26" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9995 0C17.0708 0 22 4.92923 22 11.0006C22 17.0708 17.0708 22 10.9995 22C4.92923 22 0 17.0708 0 11.0006C0 4.92923 4.92923 0 10.9995 0ZM10.1775 10.1775H6.32658C5.87107 10.1775 5.50138 10.5472 5.50138 11.0028C5.50138 11.4583 5.87107 11.828 6.32658 11.828H10.1775V15.6789C10.1775 16.1344 10.5472 16.5041 11.0028 16.5041C11.4583 16.5041 11.828 16.1344 11.828 15.6789V11.828H15.6789C16.1344 11.828 16.5041 11.4583 16.5041 11.0028C16.5041 10.5472 16.1344 10.1775 15.6789 10.1775H11.828V6.32658C11.828 5.87107 11.4583 5.50138 11.0028 5.50138C10.5472 5.50138 10.1775 5.87107 10.1775 6.32658V10.1775Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatModal;
