import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPaperclip, FaCoins, FaMicrophone } from 'react-icons/fa';
import {CiCamera, CiFaceSmile} from "react-icons/ci";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import CoinModal from "./CoinModal.jsx";
import Webcam from "react-webcam";

const ChatDetail = () => {
    const { user } = useParams();
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedEmojis, setSelectedEmojis] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const videoConstraints = {
        facingMode: "user"
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const messages = [
        { from: "User Name", text: "Hello!", time: "2024-05-01T10:00:00Z" },
        { from: "You", text: "Hi, how are you?", time: "2024-05-01T10:05:00Z" },
        { from: "User Name", text: "I'm good, thanks!", time: "2024-04-02T10:10:00Z" }
    ];

    const getDateLabel = (dateString) => {
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        const msgDate = new Date(dateString);

        if (isNaN(msgDate.getTime())) {
            return 'Invalid Date';
        }

        if (msgDate.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (msgDate.toDateString() === yesterday.toDateString()) {
            return 'Yesterday';
        } else {
            return msgDate.toDateString();
        }
    };

    const groupMessagesByDate = (messages) => {
        const groupedMessages = {};

        messages.forEach((msg) => {
            const msgDateLabel = getDateLabel(msg.time);
            if (!groupedMessages[msgDateLabel]) {
                groupedMessages[msgDateLabel] = [];
            }
            groupedMessages[msgDateLabel].push(msg);
        });

        return groupedMessages;
    };


    const groupedMessages = groupMessagesByDate(messages);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };
    // const toggleCamera = (open) => () => {
    //     setCameraOpen(open);
    // };

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

    const handleEmojiClick = (emoji) => {
        // Add the emoji to the list
        const updatedEmojis = [...selectedEmojis, emoji];
        setSelectedEmojis(updatedEmojis);
        // Update the input value to reflect the selected emojis
        setInputValue(inputValue + emoji);
    };


    return (
        <div className="flex flex-col h-screen w-[500px] ml-auto mr-[450px]">
            <div className="flex justify-between items-center p-4 bg-white">
                <button onClick={() => navigate(-1)} className="text-black">
                    <FaArrowLeft size={20}/>
                </button>
                <h2 className="text-xl font-semibold">{user}</h2>
                <button className="text-black" onClick={openModal}>
                    <FaCoins size={20}/>
                </button>
                <CoinModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                {Object.keys(groupedMessages).map((date, index) => (
                    <div key={index}>
                        <div className="text-center text-black ">
                            {getDateLabel(date)}
                        </div>
                        {groupedMessages[date].map((msg, msgIndex) => (
                            <div key={msgIndex}
                                 className={`flex ${msg.from === 'You' ? 'justify-end ' : 'justify-start'}`}>
                                <div
                                    className={`p-2 rounded-lg ${msg.from === 'You' ? 'bg-gray-200 text-gray-800' : 'bg-gray-200 text-gray-800'}`}>
                                    <p>{msg.text}</p>
                                    <p className="text-xs text-gray-600">{new Date(msg.time).toLocaleTimeString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="p-4 flex items-center bg-white">
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
                    <input
                        type="text"
                        className="w-full pt-3 pb-3 bg-gray-300 rounded-2xl pl-10 pr-10 py-2 px-3 focus:outline-none"
                        placeholder="Type a message"
                    />
                    <FaPaperclip className="cursor-pointer text-black text-2xl mr-2 absolute right-10 top-1/2 transform -translate-y-1/2"/>
                    <CiCamera className="cursor-pointer text-black text-3xl absolute right-2 top-1/2 transform -translate-y-1/2"/>
                </div>
                <button className="text-white rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center ml-2">
                    <FaMicrophone className="cursor-pointer" size={20} color="black"/>
                </button>
            </div>
        </div>

    );
};

export default ChatDetail;
