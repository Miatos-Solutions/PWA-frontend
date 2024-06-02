import React, {useEffect, useState} from 'react';
import { ImHome } from "react-icons/im";


function TabNavigator() {
    const [selectedTab, setSelectedTab] = useState(
        localStorage.getItem('selectedTab') || 'Home'
    );

    const navigateTo = (tabName, url) => {
        setSelectedTab(tabName);
        localStorage.setItem('selectedTab', tabName);
        if (url) {
            window.location.href = url; // Navigate to the new URL
        }
    };

    useEffect(() => {
        const storedTab = localStorage.getItem('selectedTab');
        if (storedTab) {
            setSelectedTab(storedTab);
        }
    }, []);

    // Function to clear local storage at 12 AM
    const clearLocalStorageAtMidnight = () => {
        const now = new Date();
        const midnight = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 1, // Next day
            0, // Midnight hours
            0, // Midnight minutes
            0 // Midnight seconds
        );

        const timeUntilMidnight = midnight.getTime() - now.getTime();

        // Clear local storage at midnight
        setTimeout(() => {
            localStorage.clear();
        }, timeUntilMidnight);
    };

    // function to clear local storage at midnight
    useEffect(() => {
        clearLocalStorageAtMidnight();

        // Re-run the function every day
        const interval = setInterval(clearLocalStorageAtMidnight, 24 * 60 * 60 * 1000);

        // Cleans up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='Home-Screen h-screen'>
            <div className="shadowEffect-footer bg-white pl-8 pr-8 pt-20 pb-3 gap-3">
                <button onClick={() => navigateTo('Home', '/home')} className={`flex items-center ${selectedTab === '' ? 'active-tab' : ''}`}>
                    <ImHome className='text-gray-700 text-3xl font-bold'/>
                    <span className="ml-2">Home</span>
                </button>
                <button onClick={() => navigateTo('Search', '/home')}
                        className={`flex items-center ${selectedTab === '' ? 'active-tab' : ''}`}>
                    <svg className='text-gray-700 font-bold' width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.111 20.0578L18.134 15.0808C19.099 13.5608 19.657 11.7588 19.657 9.82976C19.657 4.40976 15.248 -0.000244141 9.828 -0.000244141C4.408 -0.000244141 0 4.40976 0 9.82976C0 15.2498 4.408 19.6598 9.829 19.6598C11.663 19.6598 13.381 19.1548 14.851 18.2768L19.872 23.2978C22.016 25.4388 25.256 22.2018 23.111 20.0578ZM3.047 9.82976C3.047 6.09076 6.09 3.04776 9.829 3.04776C13.568 3.04776 16.611 6.08976 16.611 9.82976C16.611 13.5698 13.568 16.6118 9.829 16.6118C6.09 16.6118 3.047 13.5688 3.047 9.82976ZM5.057 8.06576C7.041 3.46676 13.721 3.99976 14.979 8.81476C12.445 5.84076 7.986 5.52076 5.057 8.06576Z"
                            fill="black"/>
                    </svg>
                    <span className="ml-2">Search</span>
                </button>
                {/* Open modal when clicking on this button */}
                <button onClick={() => navigateTo('Messenger', '/messenger')}
                        className={`flex items-center ${selectedTab === '' ? 'active-tab' : ''}`}>
                    <svg width="24" height="21" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.8153 8.352C20.8153 3.5 16.0643 0 10.8153 0C5.53432 0 0.815323 3.526 0.815323 8.352C0.815323 10.063 1.43032 11.743 2.52032 13.047C2.56732 14.574 1.66932 16.765 0.859323 18.359C3.02732 17.968 6.11132 17.101 7.50832 16.244C15.2053 18.121 20.8153 13.402 20.8153 8.352ZM6.31532 9.732C5.62632 9.732 5.06532 9.172 5.06532 8.482C5.06532 7.792 5.62632 7.232 6.31532 7.232C7.00432 7.232 7.56532 7.792 7.56532 8.482C7.56532 9.172 7.00432 9.732 6.31532 9.732ZM10.8153 9.732C10.1263 9.732 9.56532 9.172 9.56532 8.482C9.56532 7.792 10.1263 7.232 10.8153 7.232C11.5043 7.232 12.0653 7.792 12.0653 8.482C12.0653 9.172 11.5043 9.732 10.8153 9.732ZM15.3153 9.732C14.6263 9.732 14.0653 9.172 14.0653 8.482C14.0653 7.792 14.6263 7.232 15.3153 7.232C16.0043 7.232 16.5653 7.792 16.5653 8.482C16.5653 9.172 16.0043 9.732 15.3153 9.732ZM23.6983 18.521C23.6693 19.522 24.2563 20.956 24.7863 22C23.3673 21.742 21.3483 21.176 20.4343 20.615C17.0693 21.433 14.3203 20.325 12.8613 18.515C17.4183 17.855 21.1023 14.958 22.3503 11.173C23.8303 12.152 24.8153 13.664 24.8153 15.447C24.8153 16.567 24.4123 17.668 23.6983 18.521Z"
                            fill="black"
                        />
                    </svg>
                    <span className="ml-2">Messages</span>
                </button>
                <button
                    onClick={() => navigateTo('Profile', '/home')}
                    className={`flex items-center ${selectedTab === '' ? 'active-tab' : ''}`}>
                    <svg className='text-gray-700 font-bold' width="25" height="24" viewBox="0 0 25 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.8153 7.001C19.8153 10.866 16.6813 14.001 12.8153 14.001C8.94931 14.001 5.81531 10.866 5.81531 7.001C5.81531 3.134 8.94931 0 12.8153 0C16.6813 0 19.8153 3.134 19.8153 7.001ZM18.2173 14.181C16.7113 15.318 14.8433 16.001 12.8153 16.001C10.7853 16.001 8.91631 15.316 7.40831 14.179C3.33631 15.972 0.815308 21.555 0.815308 24H24.8153C24.8153 21.577 22.2153 15.994 18.2173 14.181Z"
                            fill="black"/>
                    </svg>
                    <span className="ml-2">Profile</span>
                </button>

                <button onClick={() => navigateTo('Videos', '/home')}
                        className={`flex items-center ${selectedTab === '' ? 'active-tab' : ''}`}>

                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24.1094 0H23.3128H21.9918H19.8741H18.1211H8.31448H7.16825H5.0506H3.6996H2.93295C1.76341 0 0.815308 0.948103 0.815308 2.11765C0.815308 9.53144 0.815308 14.4671 0.815308 21.8805C0.815308 23.0501 1.76341 24 2.93295 24H3.6996H5.0506H7.16825H8.31448H18.1211H19.8741H21.9918H23.3128H24.1094C25.279 24 26.2271 23.0519 26.2271 21.8824V2.11764C26.2271 0.948101 25.279 0 24.1094 0ZM5.0506 18.5775C5.0506 19.1623 4.57655 19.6364 3.99178 19.6364C3.40701 19.6364 2.93295 19.1623 2.93295 18.5775V18.5134C2.93295 17.9286 3.40701 17.4545 3.99178 17.4545C4.57655 17.4545 5.0506 17.9286 5.0506 18.5134V18.5775ZM5.0506 14.2139C5.0506 14.7987 4.57655 15.2727 3.99178 15.2727C3.40701 15.2727 2.93295 14.7987 2.93295 14.2139V14.1497C2.93295 13.565 3.40701 13.0909 3.99178 13.0909C4.57655 13.0909 5.0506 13.565 5.0506 14.1497V14.2139ZM5.0506 9.85027C5.0506 10.435 4.57655 10.9091 3.99178 10.9091C3.40701 10.9091 2.93295 10.435 2.93295 9.85027V9.7861C2.93295 9.20132 3.40701 8.72727 3.99178 8.72727C4.57655 8.72727 5.0506 9.20132 5.0506 9.7861V9.85027ZM5.0506 5.48663C5.0506 6.0714 4.57655 6.54545 3.99178 6.54545C3.40701 6.54545 2.93295 6.0714 2.93295 5.48663V5.42246C2.93295 4.83769 3.40701 4.36364 3.99178 4.36364C4.57655 4.36364 5.0506 4.83769 5.0506 5.42246V5.48663ZM14.1873 13.5519C12.9718 14.3032 11.4035 13.429 11.4035 12C11.4035 10.571 12.9718 9.69677 14.1873 10.4481C15.3408 11.1612 15.3408 12.8388 14.1873 13.5519ZM24.1094 18.5775C24.1094 19.1623 23.6354 19.6364 23.0506 19.6364C22.4658 19.6364 21.9918 19.1623 21.9918 18.5775V18.5134C21.9918 17.9286 22.4658 17.4545 23.0506 17.4545C23.6354 17.4545 24.1094 17.9286 24.1094 18.5134V18.5775ZM24.1094 14.2139C24.1094 14.7987 23.6354 15.2727 23.0506 15.2727C22.4658 15.2727 21.9918 14.7987 21.9918 14.2139V14.1497C21.9918 13.565 22.4658 13.0909 23.0506 13.0909C23.6354 13.0909 24.1094 13.565 24.1094 14.1497V14.2139ZM24.1094 9.85027C24.1094 10.435 23.6354 10.9091 23.0506 10.9091C22.4658 10.9091 21.9918 10.435 21.9918 9.85027V9.7861C21.9918 9.20132 22.4658 8.72727 23.0506 8.72727C23.6354 8.72727 24.1094 9.20132 24.1094 9.7861V9.85027ZM24.1094 5.48663C24.1094 6.0714 23.6354 6.54545 23.0506 6.54545C22.4658 6.54545 21.9918 6.0714 21.9918 5.48663V5.42246C21.9918 4.83769 22.4658 4.36364 23.0506 4.36364C23.6354 4.36364 24.1094 4.83769 24.1094 5.42246V5.48663Z"
                            fill="black"/>
                    </svg>
                    <span className="ml-2">Slides</span>
                </button>
            </div>
        </div>
    );
}

export default TabNavigator;