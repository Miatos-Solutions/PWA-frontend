import React from 'react';
import Filter from "./Filter.jsx";
import {FaMinus} from "react-icons/fa";

const BottomSheet = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="md:hidden block fixed inset-0 bg-gray-800 bg-opacity-50 justify-center items-end md:items-center z-50">
            <div className="bg-white rounded-t-lg w-full h-[350px] transform transition-transform duration-300 ease-in-out translate-y-full">
                <div className="flex justify-center text-center items-center mb-2">
                    <button onClick={onClose} className="text-gray-600">
                        <FaMinus size={35}/>
                    </button>
                </div>
                <Filter isVisible={isVisible} onClose={onClose}/>
            </div>
        </div>
    );
}
export default BottomSheet;