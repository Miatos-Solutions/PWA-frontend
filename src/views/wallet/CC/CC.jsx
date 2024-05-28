/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './CC.css'

function CC({card}) {
  return (
        <div className="userCCs">
            <b className="username">User name</b>
            <span className="cardTypeNum">
                <b className="cardNum">1234**********90</b>
                <i className="ICN-cardType">
                    <i className={card.cardType=="mastercard"?"mastercard":card.cardType=="visa"?"visa":"mastercard"}>{card.cardType=="mastercard"?"mastercard":card.cardType=="visa"?"visa":"mastercard"}</i>
                </i>
            </span>
        </div>
  )
}

export default CC