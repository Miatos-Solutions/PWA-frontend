import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';
import './SwiperCard.css';

function SwiperCard({ profile, onSwipeRight }) {

  const [isDisliked, setIsDisliked] = useState(false);

  const handleSwipeLeft = () => {
    setIsDisliked(true);
    setTimeout(() => setIsDisliked(false), 500);
  };

  return (
    <section className={`relative bg-white shadow-md rounded-lg overflow-hidden h-[70vh] swiper-card ${isDisliked ? 'swiped-left' : ''}`}>
      <img src={profile.image} alt={profile.name} className="w-[100%] h-[100%] object-cover absolute" />
      <div className="p-4 absolute bottom-0 left-0 flex items-end justify-between w-[100%]">
        <h2 className="text-2xl font-bold mb-2 text-white flex gap-2">{profile.name} <span className='text-gray-400 text-2xl'>|</span> {profile.age}</h2>
        <div className='h-[6.5rem] w-[3rem] flex flex-col items-center justify-between'>
          <button className='bg-gray-400 w-[2rem] h-[2rem] flex items-center justify-center rounded-[50%]' onClick={handleSwipeLeft}>
            <LiaTimesSolid className='text-[15px] font-bold text-white' />
          </button>
          <button className='w-[3rem] h-[3rem] rounded-[50%] flex items-center justify-center bg-white' onClick={onSwipeRight}>
            <FaHeart />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SwiperCard;
