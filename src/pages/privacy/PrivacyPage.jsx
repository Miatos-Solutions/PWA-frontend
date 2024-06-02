import React from 'react';
import PrivacySettings from "../../views/privacysettings/PrivacySettings.jsx";
import Settings from "../../views/profile/Settings/Settings.jsx";
import TabNavigator from "../../views/privacysettings/TabNavigator.jsx";

function PrivacyPage() {
    return (
        <div className="flex h-screen pr-6">
            <div className="hidden md:block w-1/6 bg-gray-200 pt-6">
                <TabNavigator/>
            </div>
            <div className="flex-1 w-1/4">
                <PrivacySettings/>
            </div>
            <div className="hidden md:block">
                <Settings/>
            </div>
        </div>
    );
}

export default PrivacyPage;