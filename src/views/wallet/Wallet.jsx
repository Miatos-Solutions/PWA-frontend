/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import './WalletPage.css';
import BackTop from '../../components/BackTop/BackTop';
import WalletMain from './walletMain/WalletMain';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Deposit from './Deposit/Deposit';
import SavedCards from './SavedCards/SavedCards';
import SavedBanks from './SavedCards/SavedBanks';
import { useNavigate } from 'react-router-dom';

function Wallet() {
  const navigate = useNavigate();
    const transactionHistory = [
        {
            transactionType: "Withdrawal",
            transactionDate: "Apr 18, 2024",
            transactionPrice: 1370,
            id: 0
        },
        {
            transactionType: "Deposit",
            transactionDate: "Apr 18, 2024",
            transactionPrice: 150,
            id: 2
        },
        {
            transactionType: "Withdrawal",
            transactionDate: "Apr 19, 2024",
            transactionPrice: 4670,
            id: 3
        },
        {
            transactionType: "Withdrawal",
            transactionDate: "Apr 20, 2024",
            transactionPrice: 350,
            id: 4
        },
        {
            transactionType: "Deposit",
            transactionDate: "Apr 24, 2024",
            transactionPrice: 2000,
            id: 5
        },
        {
            transactionType: "Withdrawal",
            transactionDate: "Apr 24, 2024",
            transactionPrice: 300,
            id: 6
        },
        {
            transactionType: "Deposit",
            transactionDate: "Apr 25, 2024",
            transactionPrice: 700,
            id: 7
        },
        {
            transactionType: "Deposit",
            transactionDate: "Apr 30, 2024",
            transactionPrice: 70,
            id: 8
        },
        {
            transactionType: "Withdrawal",
            transactionDate: "Apr 30, 2024",
            transactionPrice: 230,
            id: 9
        },
        {
            transactionType: "Withdrawal",
            transactionDate: "Apr 30, 2024",
            transactionPrice: 1500,
            id: 10
        },
        {
            transactionType: "Withdrawal",
            transactionDate: "Apr 30, 2024",
            transactionPrice: 820,
            id: 11
        },
        {
            transactionType: "Withdrawal",
            transactionDate: "Apr 30, 2024",
            transactionPrice: 300,
            id: 12
        },
        {
            transactionType: "Withdrawal",
            transactionDate: "Apr 30, 2024",
            transactionPrice: 400,
            id: 13
        },
        {
            transactionType: "Withdrawal",
            transactionDate: "Apr 30, 2024",
            transactionPrice: 280,
            id: 14
        }
  ];


  const goToSettings = () => {
    navigate('/settings')
  }

    const [cards, setCards] = useState([
      { userName: "user name", cardNumber: "1234555566667890", cardType: "mastercard", id: 0 },
      { userName: "user name", cardNumber: "1234555566667890", cardType: "visa", id: 1 }
    ]);

    const [banks, setBanks] = useState([
      { bankName: "Capital one", accountNumber: "1234567890", id: 0 },
      { bankName: "Bank of one", accountNumber: "1234567890", id: 1 }
    ]);

    const [walletDir, setWalletDir] = useState("main");
    const [walletDirHistory, setWalletDirHistory] = useState(["main"]);

    useEffect(() => {
        // Ensure we keep a history stack of navigation
        setWalletDirHistory((prevHistory) => [...prevHistory, walletDir]);
    }, [walletDir]);

    const removeBankList = useCallback((id) => {
        setBanks((prevBanks) => prevBanks.filter(bank => bank.id !== id));
    }, []);

    const addBankList = useCallback((item) => {
        if (!banks.some(bank => bank.accountNumber === item.accountNumber)) {
            const newItem = { ...item, id: banks.length > 0 ? Math.max(...banks.map(bank => bank.id)) + 1 : 0 };
            setBanks((prevBanks) => [...prevBanks, newItem]);
        }
    }, [banks]);

    const actions = {
        addBankList,
        removeBankList
    };

    const renderContent = () => {
        switch (walletDir) {
            case "main":
                return <WalletMain transactionHistory={transactionHistory} nav={setWalletDir} />;
            case "transactionHistory":
                return <TransactionHistory transactionHistory={transactionHistory} />;
            case "deposit":
                return <Deposit cards={cards} nav={setWalletDir} />;
            case "saved-cards":
                return <SavedCards cards={cards} nav={setWalletDir} />;
            case "saved-banks":
                return <SavedBanks actions={actions} banks={banks} />;
            case "withdraw":
                return <SavedBanks actions={actions} banks={banks} withdraw={true} />;
            default:
                return null;
        }
    };

    const handleBackClick = () => {
        setWalletDirHistory((prevHistory) => {
            if (prevHistory.length <= 1) {
                goToSettings(); // Navigate to settings page if history stack is empty
                return prevHistory;
            } else {
                const newHistory = [...prevHistory];
                newHistory.pop();
                const prevDir = newHistory[newHistory.length - 1];
                setWalletDir(prevDir);
                return newHistory;
            }
        });
    };

    return (
        <div className='WalletPage'>
            <BackTop onClick={handleBackClick} />
            <div className="WalletPageContent">
                {renderContent()}
            </div>
        </div>
    );
}

export default Wallet;
