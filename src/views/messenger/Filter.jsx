import React, {useEffect, useState} from 'react';
import {FaMinus} from "react-icons/fa";

const Filter = ({isVisible, onClose}) => {
    if(!isVisible) return null;

    // Initialize the filter state with the values from localStorage or default to false
    const [filters, setFilters] = useState({
        unread: JSON.parse(localStorage.getItem('unread')) || false,
        unanswered: JSON.parse(localStorage.getItem('unanswered')) || false,
        subscribed: JSON.parse(localStorage.getItem('subscribed')) || false,
        peopleYoureSubscribedTo: JSON.parse(localStorage.getItem('peopleYoureSubscribedTo')) || false,
    });

    // Save the filter state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('unread', filters.unread);
        localStorage.setItem('unanswered', filters.unanswered);
        localStorage.setItem('subscribed', filters.subscribed);
        localStorage.setItem('peopleYoureSubscribedTo', filters.peopleYoureSubscribedTo);


        // Save the count of selected filters to localStorage
        const selectedCount = Object.values(filters).filter(Boolean).length;
        localStorage.setItem('filterCount', selectedCount);
    }, [filters]);


    const handleFilterChange = (filterName) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };

    const clearFilters = () => {
        setFilters({
            unread: false,
            unanswered: false,
            subscribed: false,
            peopleYoureSubscribedTo: false,
        });
    };


    return (
        <div className="p-6 bg-white md:w-[400px] w-full shadow-md rounded-md h-screen mr-20 mt-14">
            <div className="hidden md:block justify-center text-center items-center mb-2">
                <button onClick={onClose} className="text-gray-600">
                    <FaMinus size={35}/>
                </button>
            </div>
            <div className="flex justify-between items-center mb-1">
                <h2 className="text-lg font-semibold">Filter</h2>
                <button onClick={clearFilters} className="text-black font-light">
                    Clear
                </button>
            </div>
            <hr className="text-gray-400 mb-3"></hr>

            <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                    Unread
                    <div className="ml-auto border border-black w-5 h-5 text-white rounded-full">
                        <input
                            type="checkbox"
                            checked={filters.unread}
                            onChange={() => handleFilterChange('unread')}
                            className="mr-2 mb-[0.6px] ml-[0.5px] appearance-none unchecked:border-1 checked:bg-black checked:border-black rounded-full w-4 h-4"
                        />
                    </div>
                </label>
                <label className="flex items-center">
                    Unanswered
                    <div className="ml-auto border border-black w-5 h-5 text-white rounded-full">
                        <input
                            type="checkbox"
                            checked={filters.unanswered}
                            onChange={() => handleFilterChange('unanswered')}
                            className="mr-2 mb-[0.6px] ml-[0.5px] border border-black appearance-none unchecked:border-1 checked:bg-black checked:border-black rounded-full w-4 h-4"
                        />
                    </div>
                </label>
                <label className="flex items-center">
                    Subscribed
                    <div className="ml-auto border border-black w-5 h-5 text-white rounded-full">
                        <input
                            type="checkbox"
                            checked={filters.subscribed}
                            onChange={() => handleFilterChange('subscribed')}
                            className="mr-2 mb-[1px] ml-[0.5px] border border-black appearance-none unchecked:border-1 checked:bg-black checked:border-black rounded-full w-4 h-4"
                        />
                    </div>
                </label>
                <label className="flex items-center">
                    People you're subscribed to
                    <div className="ml-auto border border-black w-5 h-5 text-white rounded-full">
                        <input
                            type="checkbox"
                            checked={filters.peopleYoureSubscribedTo}
                            onChange={() => handleFilterChange('peopleYoureSubscribedTo')}
                            className="mr-2 mb-[0.6px] ml-[0.5px] border border-black appearance-none unchecked:border-1 checked:bg-black checked:border-black rounded-full w-4 h-4"
                        />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Filter;
