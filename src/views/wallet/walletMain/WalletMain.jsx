/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './WalletMain.css';

function WalletMain({ transactionHistory, nav }) {
    const renderTransactionIcon = (type) => {
        switch (type) {
            case 'Deposit':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="800px" height="800px" viewBox="0 0 24 24">
                        <path d="M19.6 21H4.4C3.1 21 2 19.9 2 18.6V14h2v4.2c0 .6.4.8 1 .8h14c.6 0 1-.4 1-1v-4h2v4.6c0 1.3-1.1 2.4-2.4 2.4z"/>
                        <path d="M15.3 12.1L13.4 14v-4c0-2 0-4.9 2.4-7-3.4.6-5.1 3.2-5.2 7v4l-1.9-1.9L7 13l5 5 5-5-1.7-.9z"/>
                    </svg>
                );
            case 'Withdrawal':
                return (
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
                );
            default:
                return null;
        }
    };

    const renderTransactionItem = (item) => (
        <li key={item.id}>
            <b className="transactionType">
                <i className="ICN-transactionType">{renderTransactionIcon(item.transactionType)}</i>
                <span className="text">{item.transactionType}</span>
            </b>
            <b className="transactionPrice">{item.transactionPrice} USD</b>
        </li>
    );

    return (
        <div className="WalletMain">
            <nav className="top">
                <header>
                    <b>Wallet</b>
                    <button onClick={() => nav('saved-cards')}>Add Card</button>
                </header>
                <div className="balanceCard">
                    <b className="balance">$465 376.00</b>
                    <div className="transBtn">
                        <button className="deposit" onClick={() => nav('deposit')}>Deposit</button>
                        <button className="withdraw" onClick={() => nav('withdraw')}>Withdraw</button>
                    </div>
                </div>
            </nav>
            <main>
                <header>
                    <b>Transaction History</b>
                    <button onClick={() => nav('transactionHistory')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="#6C7275" />
                        </svg>
                    </button>
                </header>
                <ul className="transactionHistoryCont">
                    {transactionHistory && transactionHistory.map(renderTransactionItem)}
                </ul>
            </main>
        </div>
    );
}

export default WalletMain;
