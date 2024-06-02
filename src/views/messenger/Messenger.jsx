import React, { useState} from 'react';
import {FaSearch, FaArrowLeft, FaEdit} from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';

import BottomSheet from "./BottomSheet.jsx";
import Filter from "./Filter.jsx";


const Messenger = () => {
    const navigate = useNavigate();
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
    const [isFilterSheetVisible, setIsFilterSheetVisible] = useState(false);


    const [filters, setFilters] = useState({
        unread: false,
        unanswered: false,
        subscribed: false,
        peopleYoureSubscribedTo: false,
    });
    // const [chats, setChats] = useState([]); // Replace with your chat data

    const recentMatches = [
        "John Doe",
        "User Name",
        "Another User",
        "Fourth User",
        "Fifth User"
    ];

    // useEffect(() => {
    //     const filterCount = Object.values(filters).filter(Boolean).length;
    //     localStorage.setItem('filterCount', filterCount);
    // }, [filters]);

    const chats = [
        {
            user: "User Name",
            message: "I've missed you.",
            unread: 5,
            date: "1/04/24",
        },
        {
            user: "User Name",
            message: "We should hang out sometime.",
            unread: 1,
            date: "30/03/24",
        },
        {
            user: "User Name",
            message: "More of that please.",
            unread: 0,
            date: "30/03/24",
        },
        {
            user: "User Name",
            message: "Been a while. Hope you're alrig...",
            unread: 0,
            date: "29/03/24",
        },
        {
            user: "User Name",
            message: "Heading off. Talk later?",
            unread: 0,
            date: "29/03/24",
        },
        {
            user: "User Name",
            message: "Love your content. Just Subsci...",
            unread: 0,
            date: "25/03/24",
        },
        {
            user: "User Name",
            message: "Love your content. Just Subsci...",
            unread: 0,
            date: "25/03/24",
        },
        {
            user: "User Name",
            message: "Love your content. Just Subsci...",
            unread: 3,
            date: "25/03/24",
        },
        {
            user: "User Name",
            message: "Love your content. Just Subsci...",
            unread: 5,
            date: "25/03/24",
        },
        {
            user: "User Name",
            message: "Love your content. Just Subsci...",
            unread: 3,
            date: "25/03/24",
        },

    ];

    const applyFilters = (chat) => {
        if (filters.unread && !chat.unread) return false;
        if (filters.unanswered && chat.unanswered) return false;
        if (filters.subscribed && !chat.subscribed) return false;
        return !(filters.peopleYoureSubscribedTo && !chat.peopleYoureSubscribedTo);

    };

    const filteredChats = chats.filter(applyFilters);

    return (
        <>
        <div className="flex flex-col h-screen w-full md:w-[500px] md:mr-auto md:ml-[200px] p-4 space-y-2">
            <div className="flex justify-between items-center">
                <h2 className="hidden md:block font-bold text-xl mb-2 mt-2">Messages</h2>
                <button onClick={() => navigate("/home")} className="text-black md:hidden block">
                    <FaArrowLeft size={20}/>
                </button>
                <button className="text-black">
                    <FaEdit size={20}/>
                </button>
            </div>
            <div className="flex items-center space-x-2 pr-4 pl-4">
                <div className="relative flex-1">
                    <FaSearch className="absolute top-2 left-3 text-black"/>
                    <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 bg-gray-300 text-black border border-gray-300 border-radius-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search"
                    />
                </div>
                <button className="text-gray-600" onClick={() => {
                    setIsBottomSheetVisible(true);
                    setIsFilterSheetVisible(true);
                }}>
                    <span className="ml-2 text-xl text-black">Filter({localStorage.getItem('filterCount') || 0})</span>
                </button>


                <BottomSheet
                    isVisible={isBottomSheetVisible}
                    onClose={() => setIsBottomSheetVisible(false)}
                />
            </div>
            <div className="p-3">
                <h3 className="mt-4 text-lg font-semibold mb-2">Recent Matches</h3>
                <ul className="flex m-3 gap-2 overflow-x-auto whitespace-nowrap sm:overflow-x-hidden">
                    {recentMatches.map((match, index) => (
                        <li key={index} className="w-20 h-20 bg-gray-300 rounded-full inline-block"></li>
                    ))}
                </ul>
            </div>
            <div className="p-3">
                <hr className="p-2"></hr>

                <ul className="space-y-4">
                    {filteredChats.map((chat, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => navigate(`/chat/${index}`)}
                        >
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div>
                                    <span className="font-semibold">{chat.user}</span>
                                    <span className="block text-gray-500">{chat.message}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                {chat.unread > 0 && (
                                    <span
                                        className="block bg-gray-300 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {chat.unread}
                                    </span>
                                )}
                                <span className="text-gray-500 text-sm">{chat.date}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    <div className="md:-mt-[800px] md:ml-[750px] md:mr-auto">
        <Filter isVisible={isFilterSheetVisible} onClose={() => setIsFilterSheetVisible(false)}/>
    </div>
</>
)
    ;
};

export default Messenger;
