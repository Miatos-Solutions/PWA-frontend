import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './authsStyle.css';

function VerifyEmail({ length = 4, onEmailSubmit = () => {} }) {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const [currentInput, setCurrentInput] = useState(0);
    const inputsRefs = useRef([]);

    useEffect(() => {
        if (inputsRefs.current[0]) {
            inputsRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index, e) => {
        const { value } = e.target;
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);
    
        // onEmailSubmit
        const combineOtp = newOtp.join("");
        if (combineOtp.length === length) onEmailSubmit(combineOtp);
    
        // find the next empty field
        let nextEmptyIndex = index + 1;
        while (nextEmptyIndex < length && newOtp[nextEmptyIndex]) {
            nextEmptyIndex++;
        }
    
        // move to the next empty field
        if (nextEmptyIndex < length && inputsRefs.current[nextEmptyIndex]) {
            inputsRefs.current[nextEmptyIndex].focus();
            setCurrentInput(nextEmptyIndex);
        }
    };
    

    const handleClick = (index) => {
        inputsRefs.current[index].setSelectionRange(1, 1);
        setCurrentInput(index);

        // if the user skips any of the fields the set focus to the skipped input field
        if (index > 0 && !otp[index - 1]) {
            inputsRefs.current[otp.indexOf("")].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && index > 0 && !otp[index] && inputsRefs.current[index - 1]) {
            // Move focus to the previous input field on backspace press
            inputsRefs.current[index - 1].focus();
            setCurrentInput(index - 1);
        }
    };

    return (
        <section className="Welcome-Screen h-screen bg-gray-300 w-screen flex-col">
            <div className="Social-Logins-container h-[100%] flex items-center justify-center bg-white p-5">
                <div className="Welcome pt-5 flex flex-col items-center justify-center">
                    <h1 className="text-black-500 text-center text-2xl md:text-3xl mb-5 font-bold">Verify Your Email</h1>
                    <form className="Socials-box-Two w-full h-auto flex items-center justify-center mb-3 gap-4">
                        {otp.map((value, index) => (
                            <input
                                className={`OTP-INPUT text-center ${index === currentInput ? 'selected' : ''}`}
                                key={index}
                                ref={(input) => (inputsRefs.current[index] = input)}
                                id={`otp-input-${index}`}
                                type="text"
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleChange(index, e)}
                                onClick={() => handleClick(index)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                            />
                        ))}
                    </form>
                    <div className="flex w-full items-center justify-between mb-3">
                        <p className="text-l">Input the {length} digit code sent to your mail above</p>
                    </div>
                    <button className="Signin-socials-btn w-full bg-gray-300 mb-4 text-center">Verify</button>
                    <p className="text-1xl">
                        Do not have an account? <Link to="/register" className="font-bold">Sign Up</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default VerifyEmail;
