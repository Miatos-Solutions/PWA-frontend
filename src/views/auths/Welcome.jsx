import LazyLoad from "react-lazy-load";
import './authsStyle.css'
import { Link } from "react-router-dom";
import { AlternateEmail, Apple, FacebookRounded } from "@mui/icons-material";

function Welcome() {
    
    // Function to handle sign in with Apple
    const handleAppleSignIn = () => {
        console.log("Signing in with Apple...");
    };

    // Function to handle sign in with Facebook
    const handleFacebookSignIn = () => {
        console.log("Signing in with Facebook...");
    };

    // Function to handle sign in with Gmail
    const handleGmailSignIn = () => {
        console.log("Signing in with Gmail...");
    };

    return (
        <LazyLoad debounce={500} className="h-screen w-screen bg-black">
            <section className="Welcome-Screen h-screen bg-gray-300 w-screen">
                <div className="Social-Logins-container h-[100%] flex items-center justify-center bg-white p-5">
                    <div className="Welcome pt-5 flex flex-col items-center justify-center">
                        <h1 className="text-black-500 text-center text-3xl md:text-4xl mb-6 font-bold">Welcome</h1>
                        <p className="text-center text-black-200 text-1xl md:text-2xl mb-5">Sign in to continue</p>
                        <div className="Socials-box w-full h-auto flex flex-col items-center justify-center mb-8 gap-2">
                            <div className="Social-btns w-full flex items-center justify-center rounded-full border border-black-500">
                                <button onClick={handleAppleSignIn} className="w-full text-black-500 flex items-center justify-center gap-4">
                                    <div className="w-8 h-8 bg-black rounded-full border flex items-center justify-center">
                                        <Apple className="Social-Icons"/>
                                    </div> 
                                    Continue with Apple
                                </button>
                            </div>
                            <div className="Social-btns w-full flex items-center justify-center rounded-full border border-black-500">
                                <button onClick={handleFacebookSignIn} className="w-full text-black-500 flex items-center justify-center gap-4">
                                    <div className="w-8 h-8 bg-black rounded-full border flex items-center justify-center">
                                        <FacebookRounded className="Social-Icons"/>
                                    </div>
                                    Continue with Facebook
                                </button>
                            </div>
                            <div className="Social-btns w-full flex items-center justify-center rounded-full border border-black-500">
                                <button onClick={handleGmailSignIn} className="w-full text-black-500 flex items-center justify-center gap-4">
                                    <div className="w-8 h-8 bg-black rounded-full border flex items-center justify-center">
                                        <AlternateEmail className="Social-Icons"/>
                                    </div>
                                    Continue with Gmail
                                </button>
                            </div>
                        </div>
                        <Link to="/login" className="Signin-socials-btn w-full bg-gray-300 mb-6 text-center">Sign in</Link>
                        <p className="text-1xl">Do not have an account? &nbsp;<Link to="/register" className="font-bold">Sign Up</Link></p>
                    </div>
                </div>
            </section>
        </LazyLoad>
    );
}

export default Welcome;
