import React from 'react';
import LandingPage from "../../views/navigations/LandingPage.jsx";
import Notification from "../../views/notification/Notification.jsx";

function NotificationPage() {
    return (
        <div className="flex h-screen">
            <div className="hidden md:block">
                <LandingPage/>
            </div>
            <div className="w-1/4 h-screen">
                <Notification/>
            </div>
        </div>
    );
}

export default NotificationPage;