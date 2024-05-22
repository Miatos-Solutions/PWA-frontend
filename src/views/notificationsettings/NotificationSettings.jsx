/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './NotificationSettings.css'
import NotificationSectionCard from '../../components/notificationsectioncard/NotificationSectionCard'
import ToggleActionBtn from '../../components/notificationsectioncard/toggleactionbtn/ToggleActionBtn'
import { Link } from 'react-router-dom'

function NotificationSettings() {

    const [settings, setSettings] = useState({
        pushNotification: {
            PauseAll: false
        },
        postStoriesComment: {
            LikesOnPost: false,
            CommentsOnPost: false,
            Mentions: false
        },
        subscribersTips: {
            NewSubscribers: false,
            NewTips: false,
        },
        followers: {
            NewFollowers: false,
        },
        messages: {
            NewMessages: false,
        },
        emailNotification: {
            NewEmail: false,
            PromotionEmail: false,
            SupportEmail: false,
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

   
        
  return (
    <div className='NotificationSettingsPage flex flex-col gap-6'>
        <nav className='pl-9 pr-9 pt-[40px]'>
            <Link to='/settings'>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.978 9.999V13.25C7.978 13.662 7.643 14 7.226 14C7.038 14 6.851 13.929 6.708 13.794C4.933 12.109 1.763 9.102 0.312 7.725C0.112 7.536 0 7.273 0 7C0 6.726 0.112 6.464 0.312 6.275C1.763 4.898 4.933 1.89 6.708 0.207C6.851 0.0709998 7.038 0 7.226 0C7.643 0 7.978 0.337 7.978 0.75V4.001H16.998C17.529 4.001 18 4.471 18 5.001V8.999C18 9.529 17.529 9.999 16.998 9.999H7.978Z" fill="black" />
            </svg>
            </Link>
        </nav>

        <div className="NotificationSettingsCont pl-9 pr-9">
            <ul className="NotificationSettings">
                <li>
                    <NotificationSectionCard sectionName="Push Notifications">
                        <div className="cardContent">
                            <b>Pause All
                                <span>Temporarily Pause Notifications</span>
                            </b>
                            <ToggleActionBtn
                                selected={settings.pushNotification.PauseAll}
                                changeFromSettings={changeFromSettings}
                                item="pushNotification"
                                child="PauseAll"
                                onClick={()=>{
                                    if(settingsChanged){
                                        setSettingsChanged(false)
                                    }else{
                                        setSettingsChanged(true)

                                    }
                                }}
                            />
                        </div>
                    </NotificationSectionCard>
                </li>
                <li>
                    <NotificationSectionCard sectionName="Post, stories & comments">
                        <div className="cardContent">
                            <b>Likes on your post</b>
                            <ToggleActionBtn
                                selected={settings.postStoriesComment.LikesOnPost}
                                changeFromSettings={changeFromSettings}
                                item="postStoriesComment"
                                child="LikesOnPost"
                                
                            />
                        </div>
                        <div className="cardContent">
                            <b>Comments on your post</b>
                            <ToggleActionBtn
                                selected={settings.postStoriesComment.CommentsOnPost}
                                changeFromSettings={changeFromSettings}
                                item="postStoriesComment"
                                child="CommentsOnPost"
                                
                            />
                        </div>
                        <div className="cardContent">
                            <b>Mentions</b>
                            <ToggleActionBtn
                                selected={settings.postStoriesComment.Mentions}
                                changeFromSettings={changeFromSettings}
                                item="postStoriesComment"
                                child="Mentions"
                                
                            />
                        </div>
                    </NotificationSectionCard>
                </li>
                <li>
                     <NotificationSectionCard sectionName="Subscribers & Tips">
                        <div className="cardContent">
                            <b>New Subscribers</b>
                            <ToggleActionBtn
                                selected={settings.subscribersTips.NewSubscribers}
                                changeFromSettings={changeFromSettings}
                                item="subscribersTips"
                                child="NewSubscribers"
                                
                            />
                        </div>
                        <div className="cardContent">
                            <b>New Tips</b>
                            <ToggleActionBtn
                                selected={settings.subscribersTips.NewTips}
                                changeFromSettings={changeFromSettings}
                                item="subscribersTips"
                                child="NewTips"
                                
                            />
                        </div>
                    </NotificationSectionCard>
                </li>
                <li>
                     <NotificationSectionCard sectionName="Followers">
                        <div className="cardContent">
                            <b>New Followers</b>
                            <ToggleActionBtn
                                selected={settings.followers.NewFollowers}
                                changeFromSettings={changeFromSettings}
                                item="followers"
                                child="NewFollowers"
                                
                            />
                        </div>
                    </NotificationSectionCard>
                </li>
                <li>
                     <NotificationSectionCard sectionName="Messages">
                        <div className="cardContent">
                            <b>Messages</b>
                            <ToggleActionBtn
                                selected={settings.messages.NewMessages}
                                changeFromSettings={changeFromSettings}
                                item="messages"
                                child="NewMessages"
                                
                            />
                        </div>
                    </NotificationSectionCard>
                </li>
                <li>
                    <NotificationSectionCard sectionName="Email Notifications">
                        <div className="cardContent">
                            <b>New Emails</b>
                            <ToggleActionBtn
                                selected={settings.emailNotification.NewEmail}
                                changeFromSettings={changeFromSettings}
                                item="emailNotification"
                                child="NewEmail"
                                
                            />
                        </div>
                        <div className="cardContent">
                            <b>Promotion Emails</b>
                            <ToggleActionBtn
                                selected={settings.emailNotification.PromotionEmail}
                                changeFromSettings={changeFromSettings}
                                item="emailNotification"
                                child="PromotionEmail"
                                
                            />
                        </div>
                        <div className="cardContent">
                            <b>Support Emails</b>
                            <ToggleActionBtn
                                selected={settings.emailNotification.SupportEmail}
                                changeFromSettings={changeFromSettings}
                                item="emailNotification"
                                child="SupportEmail"
                                
                            />
                        </div>
                    </NotificationSectionCard>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default NotificationSettings