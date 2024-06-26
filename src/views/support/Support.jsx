import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatModal from './chatModal/ChatModal';
import FAQsModal from './FAQsModal';

const SupportData = [
    {
        icon: <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 2C13.776 2 14 2.224 14 2.5V21.5C14 21.776 13.776 22 13.5 22H2.5C2.224 22 2 21.776 2 21.5V2.5C2 2.224 2.224 2 2.5 2H13.5ZM16 2C16 0.896 15.104 0 14 0H2C0.896 0 0 0.896 0 2V22C0 23.104 0.896 24 2 24H14C15.104 24 16 23.104 16 22V2ZM6.5 3H9.5C9.776 3 10 3.224 10 3.501C10 3.776 9.776 4 9.5 4H6.5C6.225 4 6 3.776 6 3.501C6 3.224 6.225 3 6.5 3ZM8 21C7.447 21 7 20.552 7 20C7 19.448 7.447 19 8 19C8.552 19 8.999 19.448 8.999 20C8.999 20.552 8.552 21 8 21ZM13 18H3V5H13V18Z" fill="#686868" />
        </svg>,
        title: 'Call Us',
        des: 'Speak with a customer agent',
        link: '/call-us'
    },
    {
        icon: <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.332 7.59238C18.332 3.18167 13.9781 0 9.16598 0C4.32543 0 0 3.20622 0 7.59238C0 9.14686 0.563708 10.6741 1.5628 11.8604C1.60588 13.2485 0.783692 15.2411 0.0412469 16.6892C2.02843 16.3338 4.85522 15.5457 6.13479 14.7666C13.1908 16.4729 18.332 12.1831 18.332 7.59238ZM5.04129 8.84778C4.40976 8.84778 3.89554 8.33871 3.89554 7.71147C3.89554 7.08422 4.40976 6.57516 5.04129 6.57516C5.67283 6.57516 6.18704 7.08422 6.18704 7.71147C6.18704 8.33871 5.67283 8.84778 5.04129 8.84778ZM9.16598 8.84778C8.53445 8.84778 8.02024 8.33871 8.02024 7.71147C8.02024 7.08422 8.53445 6.57516 9.16598 6.57516C9.79752 6.57516 10.3117 7.08422 10.3117 7.71147C10.3117 8.33871 9.79752 8.84778 9.16598 8.84778ZM13.2907 8.84778C12.6591 8.84778 12.1449 8.33871 12.1449 7.71147C12.1449 7.08422 12.6591 6.57516 13.2907 6.57516C13.9222 6.57516 14.4364 7.08422 14.4364 7.71147C14.4364 8.33871 13.9222 8.84778 13.2907 8.84778ZM19.7399 10.1577C19.5923 10.6013 19.409 11.0313 19.189 11.4449C20.7261 12.5922 21.2578 14.3775 19.6143 16.322C19.595 16.9992 19.5694 17.2756 19.7408 18.0174C18.9232 17.7383 18.8434 17.661 18.2146 17.2783C16.265 17.7501 14.3054 17.911 12.6335 16.5011C12.1183 16.6456 11.584 16.7538 11.0386 16.832C12.4254 18.5382 14.9781 19.4655 17.9837 18.741C18.8214 19.2509 20.672 19.7655 21.9727 20C21.4869 19.05 20.9489 17.7465 20.9754 16.8374C22.5841 14.9302 22.3897 11.8958 19.7399 10.1577Z" fill="#686868" />
        </svg>,
        title: 'Chat With Us',
        des: 'Chat with a customer agent',
        link: '#'
    },
    {
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM10 15.2083C9.425 15.2083 8.95833 14.7417 8.95833 14.1667C8.95833 13.5917 9.425 13.125 10 13.125C10.575 13.125 11.0417 13.5917 11.0417 14.1667C11.0417 14.7417 10.575 15.2083 10 15.2083ZM11.6342 10.2683C11.2367 10.6842 10.9658 10.9858 10.9658 11.7367V11.8925C10.9658 12.2167 10.7158 12.4667 10.3917 12.4667H9.5925C9.26833 12.4667 9.01833 12.2167 9.01833 11.8925V11.7267C9.01833 10.7583 9.43417 10.2767 9.83167 9.86083C10.2308 9.44333 10.5017 9.14167 10.5017 8.33167C10.5017 7.79 10.06 7.34833 9.51833 7.34833C8.97667 7.34833 8.535 7.79 8.535 8.33167V8.41833C8.535 8.7425 8.285 8.9925 7.96083 8.9925H7.16167C6.8375 8.9925 6.5875 8.7425 6.5875 8.41833V8.33167C6.5875 6.65417 8.75917 6.09333 9.51833 6.09333C10.7642 6.09333 12.05 7.07667 12.05 8.33167C12.05 9.47917 11.6542 9.99333 11.6342 10.2683Z" fill="#686868" />
        </svg>,
        title: 'FAQs',
        des: 'Frequently Asked Questions',
        link: '#'
    },
];

function Support() {
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [faqsModalOpen, setFaqsModalOpen] = useState(false);

  const handleChatModalOpen = () => {
    setChatModalOpen(true);
  };

  const handleChatModalClose = () => {
    setChatModalOpen(false);
  };

  const handleFaqsModalOpen = () => {
    setFaqsModalOpen(true);
  };

  const handleFaqsModalClose = () => {
    setFaqsModalOpen(false);
  };

  return (
    <section className='h-[100vh] bg-white flex flex-col gap-9'>
      <nav className='pl-9 pr-9 pt-[40px]'>
        <Link to='/settings'>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.978 9.999V13.25C7.978 13.662 7.643 14 7.226 14C7.038 14 6.851 13.929 6.708 13.794C4.933 12.109 1.763 9.102 0.312 7.725C0.112 7.536 0 7.273 0 7C0 6.726 0.112 6.464 0.312 6.275C1.763 4.898 4.933 1.89 6.708 0.207C6.851 0.0709998 7.038 0 7.226 0C7.643 0 7.978 0.337 7.978 0.75V4.001H16.998C17.529 4.001 18 4.471 18 5.001V8.999C18 9.529 17.529 9.999 16.998 9.999H7.978Z" fill="black" />
          </svg>
        </Link>
      </nav>
      <h1 className='text-2xl font-bold pl-9'>Support</h1>
      <ul>
        {SupportData.map((item, index) => (
          <li key={index} className='flex flex-col gap-5'>
            {item.title === 'Call Us' ? (
              <Link to={item.link} className='flex items-center justify-between pl-9 pr-9 pt-[10px]'>
                <div className='flex gap-5 items-center'>
                  <span>{item.icon}</span>
                  <div className='flex flex-col items-start'>
                    <h3 className='text-xl text-gray-500 font-bold'>{item.title}</h3>
                    <p className='text-gray-400'>{item.des}</p>
                  </div>
                </div>
                <span>
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.665 12L0.25 10.5855L4.9195 5.998L0.25 1.4145L1.665 0L7.75 5.998L1.665 12Z" fill="black" />
                  </svg>
                </span>
              </Link>
            ) : item.title === 'Chat With Us' ? (
              <button
                onClick={handleChatModalOpen}
                className='flex items-center justify-between pl-9 pr-9 pt-[10px] w-full text-left'
              >
                <div className='flex gap-5 items-center'>
                  <span>{item.icon}</span>
                  <div className='flex flex-col items-start'>
                    <h3 className='text-xl text-gray-500 font-bold'>{item.title}</h3>
                    <p className='text-gray-400'>{item.des}</p>
                  </div>
                </div>
                <span>
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.665 12L0.25 10.5855L4.9195 5.998L0.25 1.4145L1.665 0L7.75 5.998L1.665 12Z" fill="black" />
                  </svg>
                </span>
              </button>
            ) : (
              <button
                onClick={handleFaqsModalOpen}
                className='flex items-center justify-between pl-9 pr-9 pt-[10px] w-full text-left'
              >
                <div className='flex gap-5 items-center'>
                  <span>{item.icon}</span>
                  <div className='flex flex-col items-start'>
                    <h3 className='text-xl text-gray-500 font-bold'>{item.title}</h3>
                    <p className='text-gray-400'>{item.des}</p>
                  </div>
                </div>
                <span>
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.665 12L0.25 10.5855L4.9195 5.998L0.25 1.4145L1.665 0L7.75 5.998L1.665 12Z" fill="black" />
                  </svg>
                </span>
              </button>
            )}
            <div className='Line-div w-[100%] h-[2px] bg-gray-300'></div>
          </li>
        ))}
      </ul>
      {chatModalOpen && (
        <ChatModal onClose={handleChatModalClose} />
      )}
      {faqsModalOpen && (
        <FAQsModal onClose={handleFaqsModalClose} />
      )}
    </section>
  );
}

export default Support;
