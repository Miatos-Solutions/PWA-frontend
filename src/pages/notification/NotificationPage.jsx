import React from 'react';
import LandingPage from "../../views/navigations/LandingPage.jsx";
import Notification from "../../views/notification/Notification.jsx";

function NotificationPage() {
    return (
        <div className="flex h-screen md:mr-6">
            <div className="hidden md:block">
                <LandingPage/>
            </div>
            <div className="h-screen ml-auto">
                <Notification/>
            </div>
        </div>
    );
}

export default NotificationPage;