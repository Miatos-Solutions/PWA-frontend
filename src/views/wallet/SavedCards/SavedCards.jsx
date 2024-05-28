/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './SavedCards.css'
import CC from '../CC/CC'
import { Selection } from '../../../components/Select/Select';
import CheckBox from '../../../components/CheckBox/CheckBox'

// eslint-disable-next-line react/prop-types
function SavedCards({cards, nav}) {
    const [addCard, setAddCard] = useState({
        bankName: "",
        cardNumber: null,
        cardType: ""
    })

    function setCardValues(toChange, finalValue){
        setAddCard(prev=>(
            {   ...prev,
                [toChange]:finalValue
            }
        ))
    }









  return (
    <div className='Saved'>
        <nav className="top">
            <header>
                <b>SavedCards</b>
            </header>
        </nav>

        <ul className="listCards">
            
            {
                cards.map(card=>{
                        return  <div key={card.id} className="card">
                                    <div className="ccCard">
                                        <CC card={card}/>
                                    </div>
                                    <span className="del">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L7 6.08579L12.2929 0.792893C12.6834 0.402369 13.3166 0.402369 13.7071 0.792893C14.0976 1.18342 14.0976 1.81658 13.7071 2.20711L8.41421 7.5L13.7071 12.7929C14.0976 13.1834 14.0976 13.8166 13.7071 14.2071C13.3166 14.5976 12.6834 14.5976 12.2929 14.2071L7 8.91421L1.70711 14.2071C1.31658 14.5976 0.683418 14.5976 0.292893 14.2071C-0.0976309 13.8166 -0.0976309 13.1834 0.292893 12.7929L5.58579 7.5L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z" fill="#6C7275"/>
                                        </svg>
                                    </span>
                                </div>
                                
                })
            }
        </ul>

        <div className="addCardSection">
            <label htmlFor="bankName">
                <h3>Bank Name</h3>
                <div className="bankListDrop">
                    
                    <Selection.Select className="bankSelection" selected={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/></svg>
                        } value={addCard.bankName}>
                        <Selection.Option
                            className="bankOption"
                            onClick={(val)=>{
                                setCardValues("bankName", val)
                            }}
                            value="option 1">Option 1</Selection.Option>
                        <Selection.Option
                            className="bankOption"
                            onClick={(val)=>{
                                setCardValues("bankName", val)
                            }}
                            value="option 2">Option 2</Selection.Option>
                        <Selection.Option
                            className="bankOption"
                            onClick={(val)=>{
                                setCardValues("cardNumber", val)
                            }}
                            value="option 3">Option 3</Selection.Option>
                    </Selection.Select>
                </div>
                
            </label>
            <label htmlFor="cardNumber">
                <h3>Card Number</h3>
                <div className="inputCCNum">
                    <span className="INP">
                        <i className="ICN-CC">
                            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                                <rect width="24" height="24" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M2 11H22L22 15.0658C22.0001 15.9523 22.0001 16.7161 21.9179 17.3278C21.8297 17.9833 21.631 18.6117 21.1213 19.1213C20.6117 19.631 19.9833 19.8297 19.3278 19.9179C18.7161 20.0001 17.9523 20.0001 17.0658 20H6.93414C6.04767 20.0001 5.28387 20.0001 4.67221 19.9179C4.0167 19.8297 3.38835 19.631 2.87869 19.1213C2.36902 18.6117 2.17028 17.9833 2.08215 17.3278C1.99991 16.7161 1.99995 15.9523 2 15.0658L2 11ZM5 14C5 13.4477 5.44772 13 6 13H8C8.55228 13 9 13.4477 9 14C9 14.5523 8.55228 15 8 15H6C5.44772 15 5 14.5523 5 14ZM10 14C10 13.4477 10.4477 13 11 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H11C10.4477 15 10 14.5523 10 14Z" fill="#323232"/>
                                <path d="M22 9.00001L22 8.93418C22.0001 8.04769 22.0001 7.28387 21.9179 6.67221C21.8297 6.0167 21.631 5.38835 21.1213 4.87869C20.6117 4.36902 19.9833 4.17028 19.3278 4.08215C18.7161 3.99991 17.9523 3.99995 17.0658 4L6.93418 4C6.04769 3.99995 5.28388 3.99991 4.67222 4.08215C4.0167 4.17028 3.38835 4.36902 2.87869 4.87868C2.36902 5.38835 2.17028 6.0167 2.08215 6.67221C1.99991 7.28388 1.99995 8.0477 2 8.9342L2 9L22 9.00001Z" fill="#323232"/>
                            </svg>
                        </i>
                        <input type="number" onChange={(inp)=>{
                                setCardValues("bankName", inp.target.value)
                            }}
                         placeholder='0000 0000 0000 0000'/>
                         <input type="hidden" value={addCard.cardType} />{/* modify this input to change the card type automatically when the type is recognized  */}
                    </span>
                </div>
                
            </label>
            <span>
                <CheckBox placeHolder="Save this card for future payment"/> 
            </span>

            <button onClick={()=>nav("saved-banks")}>Add Card</button>
        </div>
    
    
    </div>
  )
}

export default SavedCards