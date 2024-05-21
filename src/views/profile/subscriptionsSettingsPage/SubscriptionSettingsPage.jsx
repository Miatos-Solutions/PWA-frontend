/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './SubscriptionSettingsPage.css'
import SubscriptionSettingCard from './../../../components/SubscriptionSettingsPage/SubscriptionSettingCard';
import DropMenu from '../../../components/SubscriptionSettingsPage/dropmenu/DropMenu';
import { Link } from 'react-router-dom';

function SubscriptionSettingsPage() {
    const [settings, setSettings] = useState({
        MonthlyPlan: {
            freeSubscription: false,
            paidMemberShip: false,
            SubscriptionPrice: 0
        },
        SubscriptionBundles: {
            activateBundles: false,
            discountPercent: "Select Discount Percent",
            duration: "Select Duration"
        }
    })
    const [subPriceEditable, setSubPriceEditable] = useState(false)
    const [toFree, setAutoToFree] = useState(false)
    const [discDrop, setDiscDrop] = useState(false)
    const [durationDrop, setDurationDrop] = useState(false)




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
    

    function setFreeSub(){
        if(settings.MonthlyPlan.freeSubscription){
            changeFromSettings("freeSubscription", false, "MonthlyPlan")
        }else{
            changeFromSettings("freeSubscription", true, "MonthlyPlan")
        }
    }
    function setPaidMems(){
        if(settings.MonthlyPlan.paidMemberShip){
            changeFromSettings("paidMemberShip", false, "MonthlyPlan")
        }else{
            changeFromSettings("paidMemberShip", true, "MonthlyPlan")
        }
    }
    function setSubEditable(){
        if(subPriceEditable){
            setSubPriceEditable(false)
        }else{
            setSubPriceEditable(true)
        }
    }
    function setActivateBund(){
        if(settings.SubscriptionBundles.activateBundles){
            changeFromSettings("activateBundles", false, "SubscriptionBundles")
        }else{
            changeFromSettings("activateBundles", true, "SubscriptionBundles")
        }
    }

    useEffect(() => {
      if(settings.MonthlyPlan.SubscriptionPrice == 0 || settings.MonthlyPlan.SubscriptionPrice == "" ){
            changeFromSettings("freeSubscription", true, "MonthlyPlan")
        }else{
            changeFromSettings("freeSubscription", false, "MonthlyPlan")
        }
    }, [toFree])
    

    


    
    



  return (
    <div className='SubscriptionSettingsPage'>
        <div className="topnav">
            <Link to='/settings'>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.978 9.999V13.25C7.978 13.662 7.643 14 7.226 14C7.038 14 6.851 13.929 6.708 13.794C4.933 12.109 1.763 9.102 0.312 7.725C0.112 7.536 0 7.273 0 7C0 6.726 0.112 6.464 0.312 6.275C1.763 4.898 4.933 1.89 6.708 0.207C6.851 0.0709998 7.038 0 7.226 0C7.643 0 7.978 0.337 7.978 0.75V4.001H16.998C17.529 4.001 18 4.471 18 5.001V8.999C18 9.529 17.529 9.999 16.998 9.999H7.978Z" fill="black" />
                </svg>
            </Link>
        </div>

        <div className="subscriptionSettingsCont">
            <ul className="subscriptionSettings">
                <li className="subscriptionSetting">
                    <SubscriptionSettingCard
                        labelName="Monthly Plan"
                        style={{boxShadow: `
                            1px 1px 10px rgb(46, 45, 45, 0.098),
                            -1px -1px 10px rgb(46, 45, 45, 0.098)
                        `, borderRadius: "5px", padding: "10px", margin: "auto", width: "calc(99% - 20px)"}}
                    >
                        <div className="cardContent">
                            <div className="top">
                                    <b>Free Subcription</b>
                                    <span className="toggle-selector" data-selected={settings.MonthlyPlan.freeSubscription} onClick={setFreeSub} ></span>
                            </div>
                        </div>
                        <div className="cardContent">
                        <div className="top">
                                <b>Paid MemberShip</b>
                                <span className="toggle-selector" data-selected={settings.MonthlyPlan.paidMemberShip} onClick={setPaidMems} ></span>
                        </div>
                        
                        {settings.MonthlyPlan.paidMemberShip?
                            <div className="others paidMemberShip" data-show={settings.MonthlyPlan.paidMemberShip}>
                            <h3>Subscription price</h3>

                        <div className="priceInput">
                                <label htmlFor="priceInput" data-disabled={!subPriceEditable}>
                                        <i className="currencyIcon">$</i>
                                        <input type="Number" value={settings.MonthlyPlan.SubscriptionPrice} placeholder='Set Price' disabled={!subPriceEditable} onChange={(e)=>{
                                            if(e.target.value > 0) {
                                                changeFromSettings("freeSubscription", false, "MonthlyPlan")
                                            }

                                            changeFromSettings("SubscriptionPrice", e.target.value, "MonthlyPlan");
                                            if(e.target.value == 0 || e.target.value == "" || e.target.value < 1 ){
                                                setAutoToFree(true)
                                            }else if(e.target.value > 0) {
                                                setAutoToFree(false)

                                            }
                                            
                                        }}/>
                                        <i className="currency">USD</i>
                                </label>
                                <i className="edit" onClick={setSubEditable}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 21C12 20.4477 12.4477 20 13 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21Z" fill="none" id='dash' data-dash-select={subPriceEditable}/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.7736 8.09994C22.3834 6.48381 22.315 4.36152 21.113 3.06183C20.5268 2.4281 19.6926 2.0233 18.7477 2.00098C17.7993 1.97858 16.8167 2.34127 15.91 3.09985C15.8868 3.11925 15.8645 3.13969 15.8432 3.16111L2.87446 16.1816C2.31443 16.7438 2 17.5051 2 18.2987V19.9922C2 21.0937 2.89197 22 4.00383 22H5.68265C6.48037 22 7.24524 21.6823 7.80819 21.1171L20.7736 8.09994ZM17.2071 5.79295C16.8166 5.40243 16.1834 5.40243 15.7929 5.79295C15.4024 6.18348 15.4024 6.81664 15.7929 7.20717L16.7929 8.20717C17.1834 8.59769 17.8166 8.59769 18.2071 8.20717C18.5976 7.81664 18.5976 7.18348 18.2071 6.79295L17.2071 5.79295Z" fill="#474747"/>
                                    </svg>
                                </i>
                        </div>
                        <h3>Monthly price. min $4.99 or free $0.00</h3>
                        </div>
                         :null}



                        </div>

                    </SubscriptionSettingCard>
                </li>
                <li className="subscriptionSetting">
                    <SubscriptionSettingCard
                            labelName="Subscription Bundles"
                            style={{boxShadow: `
                                1px 1px 10px rgb(46, 45, 45, 0.098),
                                -1px -1px 10px rgb(46, 45, 45, 0.098)
                            `, borderRadius: "5px", padding: "10px", margin: "auto", width: "calc(99% - 20px)"}}
                        >
                            <div className="cardContent">
                                <div className="top activateBundle">
                                        <h2>Offer several months of subscription as a discounted bundle</h2>
                                        
                                        <b>Activate Bundles</b>
                                        <span className="toggle-selector" data-selected={settings.SubscriptionBundles.activateBundles} onClick={setActivateBund} ></span>
                                </div>
                            </div>
                            

                            {
                                settings.SubscriptionBundles.activateBundles?
                                    <div className="cardContent">
                                        <div className="dropDownContentBox">
                                                <h3>Discount Percentage</h3>
                                                <div className="dropContainer">
                                                    <DropMenu
                                                        options={[
                                                            "75% Discount",
                                                            "50% Discount",
                                                            "25% Discount",
                                                            "10% Discount",
                                                        ]}
                                                        defaultText={settings.SubscriptionBundles.discountPercent}
                                                        dropped={discDrop}
                                                        onDropped={(droppedVal)=>setDiscDrop(droppedVal)}
                                                        value={(val)=>{
                                                            changeFromSettings("discountPercent", val, "SubscriptionBundles")
                                                            setDiscDrop(false)
                                                        }}
                                                    />
                                                </div>
                                                <h3>Get 12 months for $40</h3>
                                        </div>
                                        <div className="dropDownContentBox">
                                                <h3>Duration</h3>
                                                <div className="dropContainer">
                                                    <DropMenu
                                                        options={[
                                                            "12 Months",
                                                            "6 Months",
                                                            "3 Months",
                                                        ]}
                                                        dropped={durationDrop}
                                                        onDropped={(droppedVal)=>setDurationDrop(droppedVal)}
                                                        defaultText={settings.SubscriptionBundles.duration}
                                                        value={(val)=>{
                                                            changeFromSettings("duration", val, "SubscriptionBundles")
                                                            setDurationDrop(false)
                                                        }}
                                                    />
                                                </div>
                                        </div>

                                        <div className="buttonControl">
                                                <button>cancel</button>
                                                <button>Activate</button>
                                        </div>
                                    </div>
                                :
                                <div className="cardContent">
                                    <div className="bundleCard">
                                        <i className="bundleICN"></i>
                                        <b className="bundleText">Get 12 months for $40 (Total)</b>
                                        <span className="cancel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L7 6.08579L12.2929 0.792893C12.6834 0.402369 13.3166 0.402369 13.7071 0.792893C14.0976 1.18342 14.0976 1.81658 13.7071 2.20711L8.41421 7.5L13.7071 12.7929C14.0976 13.1834 14.0976 13.8166 13.7071 14.2071C13.3166 14.5976 12.6834 14.5976 12.2929 14.2071L7 8.91421L1.70711 14.2071C1.31658 14.5976 0.683418 14.5976 0.292893 14.2071C-0.0976309 13.8166 -0.0976309 13.1834 0.292893 12.7929L5.58579 7.5L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z" fill="white"/>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="buttonControl single">
                                        <button>Activate</button>
                                    </div>
                                </div>
                            }
                    </SubscriptionSettingCard>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default SubscriptionSettingsPage