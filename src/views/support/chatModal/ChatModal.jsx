import React, { useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import { FaPlus } from 'react-icons/fa6';
import './ChatModal.css';

const ChatModal = ({ onClose }) => {
    const initialMessages = [
        { type: 'received', message: 'How are you?' },
        { type: 'sent', message: 'I am good and you?' },
        { type: 'received', message: 'Not bad, I am doing great.' },
        { type: 'sent', message: 'It has been a while, how is work?' },
        { type: 'received', message: 'Yeah, work is great.' },
        { type: 'sent', message: 'That is cool.' },
        { type: 'received', message: 'Yeah.' }
    ];

    const [incidents, setIncidents] = useState([{ id: 0, messages: initialMessages }]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e, incidentId) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setIncidents((prevIncidents) => {
                return prevIncidents.map((incident) => {
                    if (incident.id === incidentId) {
                        return {
                            ...incident,
                            messages: [...incident.messages, { type: 'sent', message: inputValue }]
                        };
                    }
                    return incident;
                });
            });
            setInputValue('');
        }
    };

    const handleOpenNewIncident = () => {
        setIncidents([{ id: incidents.length + 1, messages: [] }]);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
            <div className="bg-white w-full max-w-lg h-[96vh] flex flex-col pt-6 gap-2 rounded-t-lg items-center justify-between">
                <div className='bg-white w-full max-w-lg h-[96vh] flex flex-col pt-6 gap-9 rounded-t-lg items-center'>
                    <div className="flex justify-between items-center mb-1 px-6 pt-3 w-full">
                        <div className="flex">
                            {['V', 'S', 'K'].map((char, index) => (
                                <div key={index} className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">{char}</div>
                            ))}
                        </div>
                        <button onClick={onClose} className="text-2xl">
                            <LiaTimesSolid />
                        </button>
                    </div>
                    <div className="px-6 flex flex-col gap-2 w-full">
                        <h1 className="text-3xl text-gray-500">Hi <span>Jane</span></h1>
                        <p className="text-2xl text-black font-bold">How can we help?</p>
                    </div>
                    <button
                        className="OpenNewMessenger px-6 flex items-center justify-between gap-2 bg-white py-5 w-11/12 shadow-custom rounded-lg"
                        onClick={handleOpenNewIncident}
                    >
                        <div className="flex items-center gap-2">
                            <span className="font-bold">{incidents.length}</span>
                            <h4 className="font-bold">Open Incident</h4>
                        </div>
                        <FaPlus />
                    </button>
                </div>
                {incidents.map((incident) => (
                    <div key={incident.id} className="ChatModalMessenger flex flex-col justify-between w-full">
                        <div className="w-full h-16 flex items-center justify-center pt-4 pb-4">
                            <span className="bg-white px-6 py-2 rounded-full font-bold">Incident {incident.id}</span>
                        </div>
                        <div className="Chats-Display h-full pt-2 pb-2 flex flex-col gap-3 overflow-y-auto">
                            {incident.messages.map((chat, index) => (
                                <div key={index} className={`Chats${chat.type === 'sent' ? 'Sent' : 'Received'} flex ${chat.type === 'sent' ? 'justify-end pr-6' : 'items-end pl-6 gap-2'}`}>
                                    {chat.type === 'received' && <div className="w-6 h-6 bg-gray-100 rounded-full"></div>}
                                    <p className={`max-w-xs bg-white break-words whitespace-pre-wrap p-2 ${chat.type === 'sent' ? 'Sent' : 'Received'}`}>{chat.message}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-center gap-5 pt-3 pb-5 w-full">
                            <form className="w-4/5 h-12 flex gap-3 border-2 border-gray-600 rounded-lg pr-3" onSubmit={(e) => handleFormSubmit(e, incident.id)}>
                                <input 
                                    type="text" 
                                    placeholder="Add your comment..." 
                                    className="w-full h-full bg-transparent pl-3 text-gray-100"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                <button className="SendMessageBtn" type="submit">
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
                ))}
            </div>
        </div>
    );
};

export default ChatModal;
