/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Deposit.css'
import CC from '../CC/CC'
import SubscriptionSettingCard from './../../../components/SubscriptionSettingsPage/SubscriptionSettingCard';



function Deposit({cards, nav}) {

    const [shownCard, setShownCard] = useState(1)

    function setPres(event){
        let target = event.target
        if(target.nodeName.toLowerCase() == "li"){
            // 
            for (const key in target.parentElement.children) {
                if (Object.hasOwnProperty.call(target.parentElement.children, key)) {
                    const element = target.parentElement.children[key];
                    if(element.classList.contains("pres")){
                        element.classList.remove("pres")
                    }
                }
            }
            setShownCard(Number(target.id))
            target.classList.add("pres")
        }
    }


    
  return (
    <div className='Deposit'>
        <nav className="top">
            <header>
                <b>Transaction history</b>
            </header>
        </nav>
        <div className="balanceCard">
            <b className="balance">$465 376.00</b>
        </div>

        <div className="depositCont">
            <div className="top">
                <button onClick={()=>nav("saved-cards")}>Change Card</button>
            </div>
            <div className="CCSect">
                <div className="userCCCont">
                    {
                        cards.map(card=>{
                           if(card.id == shownCard){
                                return  <CC key={card.id} card={card}/>
                           }
                        })
                    }
                </div>

                <ul className="ccItems" onClick={setPres}>
                    {
                        cards.map(card=>{
                           return <li key={card.id} id={`${card.id}`} className={card.id==shownCard?"pres":""} ></li>
                        })
                    }
                </ul>
            </div>
            <div className="amountInputSection">
                    <div className="amountInput">
                        <h3>Amount</h3>

                        <ul className="staticAmount">
                            <li>$25</li>
                            <li>$100</li>
                            <li>$200</li>
                            <li>$250</li>
                        </ul>

                       <div className="custom">
                            <SubscriptionSettingCard className="customInput" labelName="Custom">
                                <div className="priceInput">
                                        <label htmlFor="priceInput">
                                                <i className="currencyIcon">$</i>
                                                <input type="Number" placeholder='Set Price'/>
                                                <i className="currency">USD</i>
                                        </label>
                                </div>
                            </SubscriptionSettingCard>
                       </div>
                    </div>
                    <button className="confirm">Confirm</button>
            </div>
        </div>
    </div>
  )
}

export default Deposit