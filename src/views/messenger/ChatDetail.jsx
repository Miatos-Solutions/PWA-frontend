import React, {useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {FaArrowLeft, FaPaperclip, FaCoins, FaMicrophone, FaPaperPlane, FaEllipsisV} from 'react-icons/fa';
import {CiCamera, CiFaceSmile} from "react-icons/ci";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import CoinModal from "./CoinModal.jsx";
import './ChatDetail.css';
import Webcam from "react-webcam";

const ChatDetail = () => {
    const { user } = useParams();
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedEmojis, setSelectedEmojis] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const textareaRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messages, setMessages] = useState([]);


    // Defined emojis array
    const emojis = [
        '😊', '😂', '😍', '😘', '🤗', '😎', '🤩', '🥳', '🤔', '😏',
        '😱', '🤯', '😇', '🤢', '🤮', '🤕', '🤒', '🤓', '🤖', '💩',
        '🙊', '🙉', '🙈', '🐵', '🐶', '🐱', '🐭', '🐼', '🐻', '🐨',
        '🐯', '🐰', '🦁', '🐮', '🐷', '🐸', '🐙', '🐵‍💼', '🦄', '🐝',
        '🐛', '🦋', '🐌', '🐞', '🦗', '🐜', '🕷️', '🦂', '🦟', '🦠',
        '🌻', '🌹', '🌺', '🌼', '🌷', '🌸', '💐', '🍄', '🌰', '🥜',
        '🍞', '🥐', '🥖', '🥨', '🥞', '🧀', '🍖', '🍗', '🥩', '🥓',
        '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🥙', '🥚', '🍳',
        '🥘', '🍲', '🥣', '🥗', '🍿', '🧂', '🥫', '🍱', '🍘', '🍙',
        '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🍡'
    ];

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: inputValue,
                    from: 'You',
                    time: new Date().toISOString()
                }
            ]);
            setInputValue('');
            autoResizeTextarea();
        }
    };

    //handle date msg was sent
    const getDateLabel = (date) => {
        const msgDate = new Date(date);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        const isToday = msgDate.toDateString() === today.toDateString();
        const isYesterday = msgDate.toDateString() === yesterday.toDateString();

        if (isToday) {
            return 'Today';
        } else if (isYesterday) {
            return 'Yesterday';
        }

        // Use Intl.DateTimeFormat for better localization and format
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        }).format(msgDate);
    };


    const groupedMessages = messages.reduce((acc, message) => {
        const date = message.time.split('T')[0];
        if (!acc[date]) acc[date] = [];
        acc[date].push(message);
        return acc;
    }, {});


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEmojiClick = (emoji) => {
        setSelectedEmojis((prev) => [...prev, emoji]);
        setInputValue((prev) => prev + emoji); // Add emoji to the textarea
        autoResizeTextarea();
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        autoResizeTextarea();
    };

    const autoResizeTextarea = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto'; // Reset the height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height
    };

    // Adjust textarea height on mount and whenever inputValue changes
    useEffect(() => {
        autoResizeTextarea();
    }, [inputValue]);




    return (
        <div className="flex flex-col sm:h-screen md:w-[500px] p-4 w-400px h-screen md:ml-[200px] ml-auto -mr-[20px] bg-white">
            {/*the back and coin button*/}
            <div className="flex justify-between items-center pt-4 pl-3 pb-3 bg-white">
                <button onClick={() => navigate(-1)} className="text-black">
                    <FaArrowLeft size={20}/>
                </button>
                <h2 className="text-xl font-semibold">{user}</h2>
                <button className="text-black" onClick={openModal}>
                    <FaCoins size={20}/>
                </button>
                <CoinModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            {/*the chat panel*/}
            <div className="flex-1 overflow-y-auto p-4 mb-20">
                {Object.keys(groupedMessages).map((date, index) => (
                    <div key={index}>
                        <div className="text-center text-black bg-gray-200 mb-4 rounded-full mr-28 ml-28 p-1">
                            {getDateLabel(date)}
                        </div>
                        {groupedMessages[date].map((msg, msgIndex) => (

                            <div key={msgIndex}
                                 className={`flex mt-1 mb-1 ${msg.from === 'You' ? 'justify-end ' : 'justify-start'}`}>
                                <FaEllipsisV size={20} className="mr-2 cursor-pointer mt-auto mb-auto" />
                                <div
                                    className={`p-2 rounded-lg ${msg.from === 'You' ? 'bg-gray-200 text-gray-800' : 'bg-gray-200 text-gray-800'}`}>
                                    <p className="mt-3 mb-3">{msg.text}</p>
                                    <p className="text-xs text-gray-600">{new Date(msg.time).toLocaleTimeString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {/*The chat textbox*/}
            <div className="fixed bottom-0 right-0 left-0 md:ml-[430px] md:mr-[510px] align-middle flex items-center bg-transparent">
                <div className="relative flex-1 m-3">
                    <div onClick={toggleDrawer(true)}>
                    <CiFaceSmile className='cursor-pointer text-black text-3xl absolute left-2 top-1/2 transform -translate-y-1/2'/>
                    </div>
                    <Drawer className="custom-drawer" anchor="bottom" open={drawerOpen} onClose={toggleDrawer(false)}>
                        <div className="bg-white p-4 w-[100%]">
                            {emojis.map((emoji, index) => (
                                <Button
                                    key={index}
                                    onClick={() => handleEmojiClick(emoji)}
                                    className={selectedEmojis.includes(emoji) ? "selected-emoji" : "emoji"}
                                >
                                    {emoji}
                                </Button>
                            ))}
                        </div>
                    </Drawer>
                    <textarea
                        ref={textareaRef}
                        rows="1"
                        cols="1"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="w-full pt-3 pb-3 bg-gray-300 rounded-2xl pl-10 pr-20 focus:outline-none resize-none"
                        placeholder="Type a message"
                    />
                    {inputValue ? (
                        <FaPaperclip className="cursor-pointer text-black text-2xl ml-2 absolute right-10 top-1/2 transform -translate-y-1/2 animate-move" />
                    ) : (
                        <FaPaperclip className="cursor-pointer text-black text-2xl ml-2 absolute right-10 top-1/2 transform -translate-y-1/2 animate-moveLeft" />
                    )}
                    {inputValue ? (
                        <CiCamera className="cursor-pointer text-black text-3xl absolute right-2 top-1/2 transform -translate-y-1/2 hidden" />
                    ) : (
                        <CiCamera className="cursor-pointer text-black text-3xl absolute right-2 top-1/2 transform -translate-y-1/2 animate-moveCameraLeft" />
                    )}
                </div>
                <button className="text-white rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center ml-2 mr-2">
                    {inputValue ? (
                        <FaPaperPlane onClick={handleSendMessage} className="cursor-pointer" size={20} color="black" />
                    ) : (
                        <FaMicrophone className="cursor-pointer" size={20} color="black" />
                    )}
                </button>
            </div>
        </div>

    );
};

export default ChatDetail;
