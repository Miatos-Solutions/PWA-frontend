/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import './TransactionHistory.css'

function TransactionHistory({transactionHistory}) {
    const sortedTransactions = [...transactionHistory].sort((a, b) => new Date(a.transactionDate) - new Date(b.transactionDate));
    // Group transactions by date
    const groupedTransactions = transactionHistory.reduce((acc, transaction) => {
        const { transactionDate } = transaction;
        if (!acc[transactionDate]) {
            acc[transactionDate] = [];
        }
        acc[transactionDate].push(transaction);
        return acc;
    }, {});
  return (
    <div className='TransactionHistory'>
        <nav className="top">
            <header>
                <b>Transaction history</b>
            </header>
        </nav>
        <div className="transactionHistoryCont"> 
            {Object.keys(groupedTransactions).sort((a, b) => new Date(b) - new Date(a)).map(date => (
                <div key={date} className="dateCard">
                    <b className="date">{date}</b>
                    <ul>
                        {groupedTransactions[date].map(transaction => (
                            <li key={transaction.id}>
                                <b className="transactionType">
                                    <i className="ICN-transactionType">
                                       {
                                        transaction.transactionType=="Deposit"?
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24px" height="24px" viewBox="0 0 24 24">
                                                <path d="M19.6 21H4.4C3.1 21 2 19.9 2 18.6V14h2v4.2c0 .6.4.8 1 .8h14c.6 0 1-.4 1-1v-4h2v4.6c0 1.3-1.1 2.4-2.4 2.4z"/>
                                                <path d="M15.3 12.1L13.4 14v-4c0-2 0-4.9 2.4-7-3.4.6-5.1 3.2-5.2 7v4l-1.9-1.9L7 13l5 5 5-5-1.7-.9z"/>
                                            </svg>
                                        :transaction.transactionType=="Withdrawal"?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24">
                                                <g id="withdrawl_dollar" data-name="withdrawl dollar">
                                                <path className="cls-1" d="M10.09,16.77h2.39a1.43,1.43,0,0,0,1.43-1.43h0a1.43,1.43,0,0,0-1.43-1.43h-1a1.43,1.43,0,0,1-1.43-1.43h0a1.43,1.43,0,0,1,1.43-1.43h2.39"/>
                                                <line className="cls-1" x1="12" y1="9.14" x2="12" y2="11.05"/>
                                                <line className="cls-1" x1="12" y1="16.77" x2="12" y2="18.68"/>
                                                <polygon className="cls-1" points="22.5 1.5 22.5 11.04 17.73 11.04 17.73 6.27 6.27 6.27 6.27 11.04 1.5 11.04 1.5 1.5 22.5 1.5"/>
                                                <line className="cls-1" x1="6.27" y1="6.27" x2="17.73" y2="6.27"/>
                                                <rect className="cls-1" x="6.27" y="6.27" width="11.45" height="16.23"/>
                                                <line className="cls-2" x1="4.36" y1="6.27" x2="19.64" y2="6.27"/>
                                                </g>
                                            </svg>
                                        :null
                                       }
                                    </i>
                                    <span className="text">{transaction.transactionType}</span>
                                </b>
                                <b className="transactionPrice">{transaction.transactionPrice} USD</b>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <b className="end">No more history</b>

        </div>
    </div>
  )
}

export default TransactionHistory