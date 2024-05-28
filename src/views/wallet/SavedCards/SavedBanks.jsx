/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './SavedCards.css';
import CheckBox from '../../../components/CheckBox/CheckBox';
import { Selection } from '../../../components/Select/Select';

function SavedBanks({ banks, withdraw, actions }) {
  const [addBank, setAddBank] = useState({
    bankName: '',
    accountNumber: '',
  });
  const [selectedBank, setSelectedBank] = useState('');

  const setCardValues = (toChange, finalValue) => {
    setAddBank((prev) => ({
      ...prev,
      [toChange]: finalValue,
    }));
  };

  useEffect(() => {
    // console.log(addCard);
  }, [addBank]);

  const addToBankList = () => {
    if (addBank.bankName !== '' && addBank.accountNumber !== '') {
      actions.addBankList(addBank);
      setAddBank({ bankName: '', accountNumber: '' });
    } else {
      alert('Please fill out both the bank name and account number.');
    }
  };

  const handleRemoveBank = (e, id) => {
    e.stopPropagation();
    actions.removeBankList(id);
  };

  const handleBankClick = (bankName) => {
    setSelectedBank(bankName);
  };

  return (
    <div className="Saved">
      <nav className="top">
        <header>
          <b>Saved Banks</b>
        </header>
      </nav>

      <ul className="listCards">
        {banks.map((bank) => (
          <div key={bank.id} className="bank" onClick={() => handleBankClick(bank.bankName)}>
            <div className="card">
              <div className="bankCardContent">
                <span className="content">
                  <i className="ICN-bank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24">
                      <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
                    </svg>
                  </i>
                  <b className="context">{bank.bankName}</b>
                </span>
                <i className="ICN-arr">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579 2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z"
                      fill="#6C7275"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <span className="del" onClick={(e) => handleRemoveBank(e, bank.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L7 6.08579 12.2929 0.792893C12.6834 0.402369 13.3166 0.402369 13.7071 0.792893C14.0976 1.18342 14.0976 1.81658 13.7071 2.20711L8.41421 7.5 13.7071 12.7929C14.0976 13.1834 14.0976 13.8166 13.7071 14.2071C13.3166 14.5976 12.6834 14.5976 12.2929 14.2071L7 8.91421 1.70711 14.2071C1.31658 14.5976 0.683418 14.5976 0.292893 14.2071C-0.0976309 13.8166 -0.0976309 13.1834 0.292893 12.7929L5.58579 7.5 0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z"
                  fill="#6C7275"
                />
              </svg>
            </span>
          </div>
        ))}
      </ul>

      {withdraw ? (
        <div className="withdrawSection">
          <label htmlFor="Withdraw">
            <h3>Withdraw to {selectedBank}</h3>
            <div className="inputAccNum">
              <span className="INP">
                <i className="ICN-dollar"></i>
                <input type="number" placeholder="01234567890" />
              </span>
            </div>
          </label>
          <button>Withdraw</button>
        </div>
      ) : (
        <div className="addAccountNumberSection">
          <label htmlFor="bankName">
            <h3>Bank Name</h3>
            <div className="bankListDrop">
              <Selection.Select
                className="bankSelection"
                selected={addBank.bankName}
                onChange={(val) => setCardValues('bankName', val)}
              >
                <Selection.Option className="bankOption" value="Option 1">
                  Option 1
                </Selection.Option>
                <Selection.Option className="bankOption" value="Option 2">
                  Option 2
                </Selection.Option>
                <Selection.Option className="bankOption" value="Option 3">
                  Option 3
                </Selection.Option>
              </Selection.Select>
            </div>
          </label>
          <label htmlFor="accountNumber">
            <h3>Account Number</h3>
            <div className="inputAccNum">
              <span className="INP">
                <input
                  type="number"
                  placeholder="01234567890"
                  value={addBank.accountNumber}
                  onChange={(e) => setCardValues('accountNumber', e.target.value)}
                />
                <i className="ICN-paste"></i>
              </span>
            </div>
          </label>
          <span>
            <CheckBox placeHolder="Save this bank for future payment" />
          </span>
          <button onClick={addToBankList}>Add Bank</button>
        </div>
      )}
    </div>
  );
}

export default SavedBanks;
