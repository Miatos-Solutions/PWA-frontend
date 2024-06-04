import React from 'react';
import './Notification.css';
import {Link} from "react-router-dom";

const notificationsData = [
    { id: 1, user: 'User Name', action: 'Started following you.', date: new Date() },
    { id: 2, user: 'User Name', action: 'Subscribed to your page for a month.', date: new Date(new Date().setDate(new Date().getDate() - 1)) },
    { id: 3, user: 'User Name', action: 'Mentioned you in a comment. "Love everything you do @janedoe ❤"', date: new Date(new Date().setDate(new Date().getDate() - 1)) },
    { id: 4, user: 'User Name', action: 'Subscribed to your page for 6 months.', date: new Date(new Date().setDate(new Date().getDate() - 2)) },
    { id: 5, user: 'User Name', action: 'And 20 others started following you.', date: new Date(new Date().setDate(new Date().getDate() - 3)) },
    { id: 6, user: 'User Name', action: 'Liked your slide.', date: new Date(new Date().setDate(new Date().getDate() - 4)) },
    { id: 7, user: 'User Name', action: 'Commented on your post. "Anyone thinking what I\'m thinking? Ma..."', date: new Date(new Date().setDate(new Date().getDate() - 5)) },
    { id: 8, user: 'User Name', action: 'Sent you a tip of $450.', date: new Date(new Date().setDate(new Date().getDate() - 6)) },
    { id: 9, user: 'User Name', action: 'Liked your private post.', date: new Date(new Date().setDate(new Date().getDate() - 8)) },
    { id: 10, user: 'User Name', action: 'Commented on your private post. "Glad I subscribed. Private\'s real..."', date: new Date(new Date().setDate(new Date().getDate() - 10)) },
    { id: 11, user: 'User Name', action: 'Started following you.', date: new Date(new Date().setDate(new Date().getDate() - 12)) },
    { id: 12, user: 'User Name', action: 'Liked your post.', date: new Date(new Date().setDate(new Date().getDate() - 13)) },
    { id: 13, user: 'User Name', action: 'Liked your comment. "Such a lovely pup. We should get together and..."', date: new Date(new Date().setDate(new Date().getDate() - 14)) },
    { id: 14, user: 'User Name', action: 'Commented on your slide. "Keep them coming!"', date: new Date(new Date().setDate(new Date().getDate() - 14)) },
];

const timeFrames = {
    TODAY: 'Today',
    LAST_2_DAYS: 'Last 2 Days',
    LAST_7_DAYS: 'Last 7 Days',
    LAST_2_WEEKS: 'Last 2 Weeks',
};

const categorizeNotifications = (notifications) => {
    const now = new Date();
    const categories = {
        [timeFrames.TODAY]: [],
        [timeFrames.LAST_2_DAYS]: [],
        [timeFrames.LAST_7_DAYS]: [],
        [timeFrames.LAST_2_WEEKS]: [],
    };

    notifications.forEach(notification => {
        const daysAgo = Math.floor((now - notification.date) / (1000 * 60 * 60 * 24));
        if (daysAgo < 1) {
            categories[timeFrames.TODAY].push(notification);
        } else if (daysAgo < 2) {
            categories[timeFrames.LAST_2_DAYS].push(notification);
        } else if (daysAgo < 7) {
            categories[timeFrames.LAST_7_DAYS].push(notification);
        } else if (daysAgo < 14) {
            categories[timeFrames.LAST_2_WEEKS].push(notification);
        }
    });

    return categories;
};

const Notification = () => {
    const notifications = categorizeNotifications(notificationsData);

    return (
        <div className="h-screen md:h-100vh sm:w-screen md:w-[500px] md:-ml-32 pr-6 pl-6 md:border-">
            <nav className='mb-2 pl-5 pr-5 pt-[40px]'>
                <Link to='/home'>
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.978 9.999V13.25C7.978 13.662 7.643 14 7.226 14C7.038 14 6.851 13.929 6.708 13.794C4.933 12.109 1.763 9.102 0.312 7.725C0.112 7.536 0 7.273 0 7C0 6.726 0.112 6.464 0.312 6.275C1.763 4.898 4.933 1.89 6.708 0.207C6.851 0.0709998 7.038 0 7.226 0C7.643 0 7.978 0.337 7.978 0.75V4.001H16.998C17.529 4.001 18 4.471 18 5.001V8.999C18 9.529 17.529 9.999 16.998 9.999H7.978Z"
                            fill="black"/>
                    </svg>
                </Link>
            </nav>
            {Object.entries(notifications).map(([timeframe, notificationsList]) => (
                <div className="timeframe" key={timeframe}>
                    <h2 className="pt-4 font-bold">{timeframe}</h2>
                    {notificationsList.map(notification => (
                        <div className="notification" key={notification.id}>
                            <div className="user-icon"></div>
                            <div className="notification-details">
                                <span className="flex items-center -mt-2 user-name">{notification.user}
                                    {/*button to follow or unfollow*/}
                                    {notification.action.includes('following') && (
                                        <button className="ml-auto action-button">
                                            {notification.action.includes('Started following') ? 'Follow Back' : 'Unfollow'}
                                        </button>
                                    )}
                                    {notification.action.includes('Liked') && (
                                        <img className="ml-auto notification-img" alt=""/>
                                    )}
                                    {notification.action.includes('Commented') && (
                                        <img className="ml-auto notification-img" alt=""/>
                                    )}
                                    {notification.action.includes('Mentioned') && (
                                        <img className="ml-auto notification-img" alt=""/>
                                    )}
                                </span>
                                <span className="action">{notification.action}</span>

                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Notification;
