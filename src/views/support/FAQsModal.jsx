import React, { useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import FAQDetailsModal from './FAQDetailsModal';
import { CiSearch } from 'react-icons/ci';

const faqs = [
    {
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase for a full refund."
    },
    {
        question: "How do I track my order?",
        answer: "You can track your order using the tracking link provided in your order confirmation email."
    },
    {
        question: "Can I purchase items in bulk?",
        answer: "Yes, we offer bulk purchase options for many of our products. Please contact our sales team for more details."
    },
    // Add more FAQ items as needed
];

const FAQsModal = ({ onClose }) => {
    const [selectedFAQ, setSelectedFAQ] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleItemClick = (faq) => {
        setSelectedFAQ(faq);
    };

    const handleCloseDetails = () => {
        setSelectedFAQ(null);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredFAQs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-white flex items-end z-50">
            <div className="p-3 w-[100%] bg-white max-w-[500px] h-[90%] flex flex-col gap-9 rounded-t-lg">
                <div className="flex justify-between items-center pl-3 pr-3">
                    <div className="h-[3rem] bg-gray-300 w-[85%] border-2 rounded-lg flex items-center pl-2">
                        <CiSearch className='text-2xl'/>
                        <input
                            type="text"
                            placeholder="Search FAQ"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full h-full pl-2 bg-transparent rounded-lg text-black"
                        />
                    </div>
                    <button onClick={onClose} className="text-black font-bold">
                        <LiaTimesSolid className="text-2xl" />
                    </button>
                </div>
                <div className='pl-3 pr-3'>
                    <p className="font-bold text-xl">Frequently Asked Questions</p>
                </div>
                <section className="h-[70vh] overflow-y-auto">
                    <ul className="space-y-4 flex flex-col gap-2">
                        {filteredFAQs.map((faq, index) => (
                            <li
                                key={index}
                                className="flex flex-col gap-2 p-3 bg-gray-100 rounded-lg shadow-custom cursor-pointer"
                                onClick={() => handleItemClick(faq)}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-xl font-bold">{faq.question}</h1>
                                        <span className="text-lg text-gray-400">{faq.answer.substring(0, 20)}...</span>
                                    </div>
                        
                                    <span>
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.665 12L0.25 10.5855L4.9195 5.998L0.25 1.4145L1.665 0L7.75 5.998L1.665 12Z" fill="black" />
                                        </svg>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                {selectedFAQ && (
                    <FAQDetailsModal faq={selectedFAQ} onClose={handleCloseDetails} />
                )}
            </div>
        </div>
    );
};

export default FAQsModal;
