import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import classNames from 'classnames';

function PasswordChange() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [passwordValid, setPasswordValid] = useState(false);
    const [currentPasswordValid, setCurrentPasswordValid] = useState(false);

    useEffect(() => {
        // Check if new password and confirm password match
        setPasswordsMatch(newPassword === confirmNewPassword);

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        setPasswordValid(passwordRegex.test(newPassword));

        // Current password field validation
        setCurrentPasswordValid(currentPassword.length > 0);
    }, [newPassword, confirmNewPassword, currentPassword]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!passwordValid || !passwordsMatch || !currentPasswordValid) {
            return; // Do nothing if validation fails
        }

        // Passwords are valid and match, handle the change logic here
        console.log("Password change form submitted");
    };

    return (
        <section className='h-auto bg-white flex flex-col gap-7 pl-6 pr-6'>
            <nav className='pt-[40px]'>
                <Link to='/profile-settings'>
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.978 9.999V13.25C7.978 13.662 7.643 14 7.226 14C7.038 14 6.851 13.929 6.708 13.794C4.933 12.109 1.763 9.102 0.312 7.725C0.112 7.536 0 7.273 0 7C0 6.726 0.112 6.464 0.312 6.275C1.763 4.898 4.933 1.89 6.708 0.207C6.851 0.0709998 7.038 0 7.226 0C7.643 0 7.978 0.337 7.978 0.75V4.001H16.998C17.529 4.001 18 4.471 18 5.001V8.999C18 9.529 17.529 9.999 16.998 9.999H7.978Z" fill="black" />
                    </svg>
                </Link>
            </nav>

            <h1 className='text-lg font-bold'>Change Password</h1>

            <form className='w-full h-auto shadow-custom rounded-[8px] flex flex-col pl-6 pt-6 pb-6 pr-6 gap-5 mb-8' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col justify-between gap-2 w-full'>
                        <div className='w-full h-[3rem] border-2 border-gray-200 rounded-[8px]'>
                            <input
                                type='password'
                                placeholder='Current Password'
                                name='current-password'
                                id='current-password'
                                className='h-full w-full pl-2 pr-2 rounded-[8px]'
                                autoComplete='on'
                                aria-label='Current Password'
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                        </div>
                        <label htmlFor='current-password'>Current Password</label>
                    </div>
                    <div className='flex flex-col justify-between gap-2 w-full'>
                        <div className='w-full h-[3rem] border-2 border-gray-200 rounded-[8px]'>
                            <input
                                type='password'
                                placeholder='New Password'
                                name='new-password'
                                id='new-password'
                                className='h-full w-full pl-2 pr-2 rounded-[8px]'
                                autoComplete='on'
                                aria-label='New Password'
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <label htmlFor='new-password'>Must be at least 8 characters</label>
                    </div>
                    <div className='flex flex-col justify-between gap-2 w-full'>
                        <div className='w-full h-[3rem] border-2 border-gray-200 rounded-[8px]'>
                            <input
                                type='password'
                                placeholder='Confirm New Password'
                                name='confirm-new-password'
                                id='confirm-new-password'
                                className='h-full w-full pl-2 pr-2 rounded-[8px]'
                                autoComplete='on'
                                aria-label='Confirm New Password'
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                            />
                        </div>
                        <label htmlFor='confirm-new-password'>Both passwords must match</label>
                    </div>
                    <div className='flex flex-col justify-between w-full'>
                        <ul className='list-disc'>
                            <li className='flex items-center gap-3'>
                                <IoIosCheckmarkCircleOutline className={`text-xl ${/[a-zA-Z0-9]/.test(newPassword) ? 'text-green-500' : 'text-red-500'}`} />
                                <span>Alphanumeric</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <IoIosCheckmarkCircleOutline className={`text-xl ${currentPasswordValid ? 'text-green-500' : 'text-red-500'}`} />
                                <span>Current password field must not be empty</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <IoIosCheckmarkCircleOutline className={`text-xl ${/[a-z]/.test(newPassword) ? 'text-green-500' : 'text-red-500'}`} />
                                <span>At least one lowercase letter</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <IoIosCheckmarkCircleOutline className={`text-xl ${/[A-Z]/.test(newPassword) ? 'text-green-500' : 'text-red-500'}`} />
                                <span>At least one uppercase letter</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <IoIosCheckmarkCircleOutline className={`text-xl ${/\d/.test(newPassword) ? 'text-green-500' : 'text-red-500'}`} />
                                <span>At least one number</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <IoIosCheckmarkCircleOutline className={`text-xl ${newPassword.length >= 8 ? 'text-green-500' : 'text-red-500'}`} />
                                <span>At least 8 characters long</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <IoIosCheckmarkCircleOutline className={`text-xl ${passwordsMatch ? 'text-green-500' : 'text-red-500'}`} />
                                <span>Confirm password must match new password</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <button
                    type='submit'
                    className={classNames(
                        'w-full h-[3rem] text-white rounded-[8px] text-xl',
                        {
                            'bg-gray-400 cursor-not-allowed': !passwordValid || !passwordsMatch || !currentPasswordValid,
                            'bg-black': passwordValid && passwordsMatch && currentPasswordValid,
                        }
                    )}
                    disabled={!passwordValid || !passwordsMatch || !currentPasswordValid}
                >
                    Save Changes
                </button>
            </form>
        </section>
    );
}

export default PasswordChange;
