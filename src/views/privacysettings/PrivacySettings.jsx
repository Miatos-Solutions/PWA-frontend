import React, { useState } from 'react'
import './PrivacySettings.css'
import NotificationSectionCard from '../../components/notificationsectioncard/NotificationSectionCard'
import { Link } from 'react-router-dom'

function PrivacySettings() {

    const [settings, setSettings] = useState({
        AccountPrivacy: {
            privateAccount: false
        },
    })


    function changeFromSettings(toChange, finalValue, inAttr){
        setSettings(prev=>(
            {   ...prev,
                [inAttr]:{
                    ...prev[inAttr],
                    [toChange]: finalValue
                }
            }
        ))

    }

    function setPrivateAccount(){
        if(settings.AccountPrivacy.privateAccount){
            changeFromSettings("privateAccount", false, "AccountPrivacy")
        }else{
            changeFromSettings("privateAccount", true, "AccountPrivacy")
        }
    }


    return (
        <div className='PrivacySettingsPage bg-white pt-10 md:h-screen '>
            <nav className='block md:hidden pl-9 pr-9 pt-[40px]'>
                <Link to='/settings'>
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.978 9.999V13.25C7.978 13.662 7.643 14 7.226 14C7.038 14 6.851 13.929 6.708 13.794C4.933 12.109 1.763 9.102 0.312 7.725C0.112 7.536 0 7.273 0 7C0 6.726 0.112 6.464 0.312 6.275C1.763 4.898 4.933 1.89 6.708 0.207C6.851 0.0709998 7.038 0 7.226 0C7.643 0 7.978 0.337 7.978 0.75V4.001H16.998C17.529 4.001 18 4.471 18 5.001V8.999C18 9.529 17.529 9.999 16.998 9.999H7.978Z" fill="black" />
                    </svg>
                </Link>
            </nav>

            <div className="PrivacySettingsCont pl-5 pr-5 pt-6">
                <ul className="PrivacySettings">
                    <h2 className="hidden md:block text-2xl mb-6 -mt-6">Account Privacy</h2>
                    <li>
                        <NotificationSectionCard sectionName="Account Privacy">
                            <div className="cardContent">
                                <b>Private Account</b>

                                {/*Use this toggle button instead*/}
                                <button className="toggle-selectors"
                                        data-selected={settings.AccountPrivacy.privateAccount}
                                        onClick={setPrivateAccount}></button>

                            </div>
                        </NotificationSectionCard>
                        <span>When your account is public, your profile and post can be seen by anyone, on or off the app. Even if they dont have an account. </span>
                        <br></br>
                        <br></br>
                        <span>When your account is private, only the followers you approve can see what you share, including your photos, videos and search profile.</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PrivacySettings;