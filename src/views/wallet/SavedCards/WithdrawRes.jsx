/* eslint-disable no-unused-vars */
import React from 'react'
import './WithdrawRes.css'

function WithdrawRes() {
  return (
    <div className='WithdrawRes'>
        <div className="topDrag"></div>
        <div className="withdrawn">
            <div className="content">
                <span>We{`'`}ve sent </span>
                <b className="amount">$ 1,850.00</b>
                <span>to your bank account</span>
            </div>
            <button>Withdrawal Details</button>
        </div>
    </div>
  )
}

export default WithdrawRes