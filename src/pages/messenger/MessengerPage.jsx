import React from 'react';
import TabNavigator from "../../views/privacysettings/TabNavigator.jsx";
import Messenger from "../../views/messenger/Messenger.jsx";

function MessengerPage() {
    return (
        <div className="flex h-screen pr-6">
            <div className="hidden md:block w-1/6 bg-gray-200 pt-6">
                <TabNavigator/>
            </div>
            <div className="flex-1 w-1/6">
                <Messenger/>
            </div>
        </div>
    );
}

export default MessengerPage;