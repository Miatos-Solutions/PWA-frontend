import React from 'react'
import { Link } from 'react-router-dom'
import './SettingsStyles.css'
import { FaList } from 'react-icons/fa'

const settingsData = [
    {
        icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1.5C11.0677 1.5 12.75 3.18225 12.75 5.25075C12.75 7.31775 11.0677 9.00075 9 9.00075C6.93225 9.00075 5.25 7.31775 5.25 5.25075C5.25 3.18225 6.93225 1.5 9 1.5ZM9 0C6.1005 0 3.75 2.3505 3.75 5.25075C3.75 8.1495 6.1005 10.5008 9 10.5008C11.8995 10.5008 14.25 8.1495 14.25 5.25075C14.25 2.3505 11.8995 0 9 0ZM13.7767 10.0147C13.404 10.3882 12.984 10.713 12.5333 10.9913C14.6873 12.3967 15.8168 14.8035 16.2623 16.5007H1.722C2.151 14.7832 3.2655 12.3735 5.45175 10.9823C4.9995 10.7017 4.58025 10.374 4.20825 9.99825C1.01475 12.3022 0 16.3778 0 18H18C18 16.3935 16.92 12.3322 13.7767 10.0147Z" fill="#686868" />
    </svg>,
        title: 'Profile',
        link: '/profile-settings'
    },
    
    {
        icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M21.6526 8.261C21.879 9.14008 22 10.0613 22 11.011C22 17.0821 17.0711 22 11 22C4.92892 22 0 17.0821 0 11.011C0 4.93992 4.92892 0.011 11 0.011C13.3659 0.011 15.5549 0.7645 17.3498 2.03775L18.9246 0L20.6983 5.511H14.6667L16.2277 3.49067C14.7427 2.45667 12.9443 1.84433 11 1.84433C5.94 1.84433 1.83333 5.95192 1.83333 11.011C1.83333 16.071 5.94 20.1777 11 20.1777C16.0591 20.1777 20.1667 16.071 20.1667 11.011C20.1667 10.0531 20.0191 9.12908 19.7468 8.261H21.6526ZM14.6667 15.5833H7.33333V10.0833H8.25V8.25C8.25 6.732 9.482 5.5 11 5.5C12.518 5.5 13.75 6.732 13.75 8.25V10.0833H14.6667V15.5833ZM10.0833 8.25V10.0833H11.9167V8.25C11.9167 7.744 11.506 7.33333 11 7.33333C10.494 7.33333 10.0833 7.744 10.0833 8.25Z" fill="#686868" />
        </svg>,
        title: 'Privacy',
        link: '/privacy-settings'
    },
    
    {
        icon: <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5756 13.8855C13.6397 13.8854 12.8783 13.1241 12.8783 12.1882V9.36947C12.8783 8.43359 13.6397 7.67222 14.5756 7.67222H18.9981C19.0249 7.67222 19.0516 7.67303 19.078 7.67422V4.86632C19.078 4.14354 18.4921 3.55762 17.7693 3.55762H1.54337C0.820545 3.55757 0.234619 4.1435 0.234619 4.86628V16.6913C0.234619 17.4141 0.820545 18.0001 1.54337 18.0001H17.7693C18.4921 18.0001 19.078 17.4142 19.078 16.6913V13.8834C19.0516 13.8847 19.0249 13.8855 18.9981 13.8855H14.5756Z" fill="#686868" />
    <path d="M18.9982 8.60205H14.5756C14.1519 8.60205 13.8083 8.94557 13.8083 9.3693V12.188C13.8083 12.6117 14.1519 12.9553 14.5756 12.9553H18.9982C19.4219 12.9553 19.7654 12.6118 19.7654 12.188V9.3693C19.7654 8.94553 19.4219 8.60205 18.9982 8.60205ZM16.0995 11.886C15.4879 11.886 14.9921 11.3902 14.9921 10.7786C14.9921 10.167 15.4879 9.67121 16.0995 9.67121C16.7111 9.67121 17.2069 10.167 17.2069 10.7786C17.2069 11.3902 16.7111 11.886 16.0995 11.886Z" fill="#686868" />
    <path d="M15.4907 1.16025C15.1979 0.274034 14.2421 -0.207025 13.3559 0.0857672L6.70728 2.28231H15.8614L15.4907 1.16025Z" fill="#686868" />
    </svg>,
        title: 'Wallet',
        link: '/wallet'
    },
    
    {
        icon: <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.30675 0C9.9495 0 8.808 6 8.808 6C11.0648 5.44125 15 5.68575 15 8.25V16.8862L11.3993 13.2855C11.7795 12.699 12 12 12 11.25C12 9.18 10.32 7.5 8.25 7.5C6.18 7.5 4.5 9.18 4.5 11.25C4.5 13.32 6.18 15 8.25 15C9.02775 15 9.75 14.763 10.3492 14.3565L13.9928 18H0V0H6.30675ZM8.25 9C9.492 9 10.5 10.008 10.5 11.25C10.5 12.492 9.492 13.5 8.25 13.5C7.008 13.5 6 12.492 6 11.25C6 10.008 7.008 9 8.25 9ZM9.426 0.05625C11.0767 0.93675 13.8795 3.71925 15 5.21775C14.0355 4.54275 11.967 3.975 10.4318 4.33275C10.5983 3.23175 10.2922 0.93225 9.426 0.05625Z" fill="#686868" />
        </svg>,
        title: 'Legal',
        link: '/legal'
    },
    
    {
        icon: <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.038 2.92917C6.09382 4.46263 6.51845 7.06721 8.20309 10.074C8.964 11.4293 8.77336 12.4648 8.47964 13.0942C7.67618 14.8184 5.47282 15.31 3.141 15.8302C1.53409 16.1896 1.63636 16.5189 1.63636 19H0.00409091L0 18.0175C0 16.0225 0.162818 14.8707 2.60018 14.326C5.35336 13.7109 8.07218 13.1599 6.76473 10.8284C2.89227 3.91796 5.66018 0 9.81818 0C12.5354 0 14.7027 1.67596 14.7027 4.88221C14.7027 7.69658 13.1081 10.2917 12.753 11.0833H11.0225C11.3433 9.86733 13.0672 7.62692 13.0672 4.87508C13.0672 0.795625 8.26691 0.928625 7.038 2.92917ZM18 15.0417H15.5455V12.6667H13.9091V15.0417H11.4545V16.625H13.9091V19H15.5455V16.625H18V15.0417Z" fill="#686868" />
    </svg>,
        title: 'Subscriptions Settings',
        link: '/subscription-setting'
    },
    
    {
        icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.72525 11.25C1.668 11.25 0 9.5715 0 7.5C0 5.42925 1.668 3.75 3.72525 3.75H7.5V11.25H3.72525ZM9.00525 16.8563C8.61525 16.5382 8.32875 16.1108 8.184 15.6285L7.32075 12.7582H3.477L4.90575 17.1705C5.06625 17.6647 5.52675 18 6.0465 18H8.62575C8.89425 18 9.1335 17.8312 9.2235 17.5785C9.3135 17.3258 9.23475 17.0438 9.02625 16.8743L9.00525 16.8563ZM9 3.75V11.25C11.373 11.6318 14.3707 12.744 18 15V0C14.277 2.31375 11.343 3.3765 9 3.75Z" fill="#686868" />
        </svg>,
        title: 'Notification Settings',
        link: '/notification-settings'
    },
    
    {
        icon: <FaList className='text-xl text-gray-500' />,
        title: 'Support',
        link: '/support'
    },

];

function Settings() {
  return (
      <section className='h-[100vh] bg-white flex flex-col md:block -ml-4'>
          <nav className='pl-9 pr-9 pt-[40px]'>
              <Link to='/home'>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.978 9.999V13.25C7.978 13.662 7.643 14 7.226 14C7.038 14 6.851 13.929 6.708 13.794C4.933 12.109 1.763 9.102 0.312 7.725C0.112 7.536 0 7.273 0 7C0 6.726 0.112 6.464 0.312 6.275C1.763 4.898 4.933 1.89 6.708 0.207C6.851 0.0709998 7.038 0 7.226 0C7.643 0 7.978 0.337 7.978 0.75V4.001H16.998C17.529 4.001 18 4.471 18 5.001V8.999C18 9.529 17.529 9.999 16.998 9.999H7.978Z" fill="black" />
                </svg>
              </Link>
          </nav>
          <ul>
            {settingsData.map((item, index) => (
            <li key={index} className='flex flex-col gap-5'>
                <Link to={item.link} className='flex items-center justify-between pl-9 pr-9 pt-[10px]'>
                <div className='flex gap-5 items-center'>
                    <span>{item.icon}</span>
                    <h3 className='text-xl'>{item.title}</h3>
                </div>
                <span>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.665 12L0.25 10.5855L4.9195 5.998L0.25 1.4145L1.665 0L7.75 5.998L1.665 12Z" fill="black" />
                    </svg>
                </span>
                </Link>
                <div className='Line-div'></div>
            </li>
            ))}
        </ul>
      </section>
  )
}

export default Settings;