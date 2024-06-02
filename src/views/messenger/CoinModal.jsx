import React, {useState} from 'react';
import {LiaTimesSolid} from "react-icons/lia";
import {CiFaceSmile} from "react-icons/ci";

function CoinModal({ isOpen, onClose }) {
    if (!isOpen) return null;


    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const [filters, setFilters] = useState({
        good: false,
        amazing: false,
        justWow: false,
        happyFan: false,
        customTip: false
    });

    const handleFilterChange = (filterName) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };

    return (
        <>
            <section
                className="Post-Modal-container z-10 fixed bottom-0 left-0 w-full h-screen flex justify-center items-center bg-[#D9D9D9] bg-opacity-45 pl-7 pr-7 pb-5">
                <form onSubmit={handleSubmit} className="Post-Modal bg-white rounded-[15px] shadow-lg w-screen h-[38rem] pt-5 flex flex-col justify-between">
                    <div className='h-[100%] flex flex-col'>
                        <div className='h-[3rem] flex items-center justify-between pl-3 pr-3'>
                            <h1 className='text-[1.2rem] font-bold'>Send Tip</h1>
                            <button onClick={onClose}><LiaTimesSolid className='text-gray-700 text-2xl'/></button>
                        </div>
                        <hr className="h-[2px] bg-[#D9D9D9]"></hr>

                        <div className="flex flex-col space-y-3 p-6">
                            <label className="flex items-center">
                                <div className="rounded-sm mr-2 w-6 h-6 bg-[#D9D9D9]"></div>
                                Good / $1.00
                                <div className="ml-auto border border-black w-5 h-5 text-white rounded-full">
                                    <input
                                        type="checkbox"
                                        checked={filters.good}
                                        onChange={() => handleFilterChange('good')}
                                        className="mr-2 mb-[0.6px] ml-[0.5px] appearance-none unchecked:border-1 checked:bg-black checked:border-black rounded-full w-4 h-4"
                                    />
                                </div>
                            </label>
                            <hr className="h-[2px] bg-[#D9D9D9]"></hr>
                            <label className="flex items-center">
                                <div className="rounded-sm mr-2 w-6 h-6 bg-[#D9D9D9]"></div>
                                Amazing / $5.00
                                <div className="ml-auto border border-black w-5 h-5 text-white rounded-full">
                                    <input
                                        type="checkbox"
                                        checked={filters.amazing}
                                        onChange={() => handleFilterChange('amazing')}
                                        className="mr-2 mb-[0.6px] ml-[0.5px] border border-black appearance-none unchecked:border-1 checked:bg-black checked:border-black rounded-full w-4 h-4"
                                    />
                                </div>
                            </label>
                            <hr className="h-[2px] bg-[#D9D9D9]"></hr>
                            <label className="flex items-center">
                                <div className="rounded-sm mr-2 w-6 h-6 bg-[#D9D9D9]"></div>
                                Just Wow / $10.00
                                <div className="ml-auto border border-black w-5 h-5 text-white rounded-full">
                                    <input
                                        type="checkbox"
                                        checked={filters.justWow}
                                        onChange={() => handleFilterChange('justWow')}
                                        className="mr-2 mb-[1px] ml-[0.5px] border border-black appearance-none unchecked:border-1 checked:bg-black checked:border-black rounded-full w-4 h-4"
                                    />
                                </div>
                            </label>
                            <hr className="h-[2px] bg-[#D9D9D9]"></hr>
                            <label className="flex items-center">
                                <div className="rounded-sm mr-2 w-6 h-6 bg-[#D9D9D9]"></div>
                                I'm a Happy Fan /$20.00
                                <div className="ml-auto border border-black w-5 h-5 text-white rounded-full">
                                    <input
                                        type="checkbox"
                                        checked={filters.happyFan}
                                        onChange={() => handleFilterChange('happyFan')}
                                        className="mr-2 mb-[0.6px] ml-[0.5px] border border-black appearance-none unchecked:border-1 checked:bg-black checked:border-black rounded-full w-4 h-4"
                                    />
                                </div>
                            </label>
                            <hr className="h-[2px] bg-[#D9D9D9]"></hr>

                            <label className="flex items-center">
                                <div className="rounded-sm mr-2 w-6 h-6 bg-[#D9D9D9]"></div>
                                Custom Tip
                                <div className="ml-auto border border-black w-5 h-5 text-white rounded-full">
                                    <input
                                        type="checkbox"
                                        checked={filters.customTip}
                                        onChange={() => handleFilterChange('customTip')}
                                        className="mr-2 mb-[0.6px] ml-[0.5px] border border-black appearance-none unchecked:border-1 checked:bg-black checked:border-black rounded-full w-4 h-4"
                                    />
                                </div>
                            </label>

                            <div className="relative w-full">
                                <div className="border border-black w-full rounded-xl text-white">
                                    <span
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">$</span>
                                    <input
                                        type="text"
                                        className="border-2 border-black w-full pt-2 pb-2 bg-white text-black rounded-xl pl-8 pr-16 py-2 focus:outline-none"
                                        placeholder="25.00"
                                    />
                                    <span
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black">USD</span>
                                </div>
                            </div>
                            <hr className="h-[2px] bg-[#D9D9D9]"></hr>

                            <h3 className="mr-auto text-xl text-black">Pay With</h3>

                            <div className="w-full">
                                <select className="w-full p-2 border-2 border-black rounded-md focus:outline-none">
                                    <option value="">Select Payment Method...</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                                <button className="w-full mt-4 p-2 bg-[#D9D9D9] text-black rounded-md focus:outline-none">
                                    Powered by Stripe
                                </button>
                                <br></br>
                                <button className="w-full mt-4 p-2 bg-black text-white rounded-md focus:outline-none">
                                    Confirm Tip
                                </button>
                            </div>


                        </div>


                    </div>
                </form>
            </section>
        </>
    )
};
export default CoinModal;