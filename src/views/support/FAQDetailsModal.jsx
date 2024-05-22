import React from 'react';
import { LiaTimesSolid } from 'react-icons/lia';

const FAQDetailsModal = ({ faq, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
            <div className="bg-white p-4 w-[100%] max-w-[500px] h-[90%] flex flex-col gap-9 top-0 left-0 rounded-tl-lg rounded-tl">
                <div className="flex justify-between items-center mb-1 pt-2 top-0 right-0 rounded-tl-lg rounded-tr">
                    <h2 className="text-xl font-bold">FAQ</h2>
                    <button onClick={onClose} className="text-black font-bold">
                        <LiaTimesSolid className="text-2xl" />
                    </button>
                </div>
                <div className="h-[80vh]">
                    <h3 className="text-3xl font-bold pb-5">{faq.question}</h3>
                    <p>{faq.answer}</p>
                </div>
            </div>
        </div>
    );
};

export default FAQDetailsModal;
