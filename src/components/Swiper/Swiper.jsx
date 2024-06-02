import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import SwiperCard from './SwiperCard';

function Swiper({ profiles, searchTerm }) {

  const [shuffledProfiles, setShuffledProfiles] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [likedProfiles, setLikedProfiles] = useState([]);
  const [noUserFound, setNoUserFound] = useState(false);

  useEffect(() => {
    const shuffleArray = (array) => {
      const shuffledArray = array.slice(); 
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };
  
    const filteredProfiles = searchTerm
      ? profiles.filter(profile => profile.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : profiles;
  
    if (filteredProfiles.length === 0) {
      setNoUserFound(true);
      setShuffledProfiles([]); // Reset shuffled profiles if no user found
    } else {
      setNoUserFound(false);
      setShuffledProfiles(shuffleArray(filteredProfiles));
    }
  }, [profiles, searchTerm]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      const likedProfile = shuffledProfiles[currentProfileIndex];
      setLikedProfiles(prevLikedProfiles => [...prevLikedProfiles, likedProfile]);
    }
    setCurrentProfileIndex(prevIndex => (prevIndex + 1) % shuffledProfiles.length);
  };

  return (
    <section {...handlers} className="relative">
      {noUserFound ? (
        <div className="text-center">No user found with this name</div>
      ) : (
        <div>
          {shuffledProfiles.slice(currentProfileIndex, currentProfileIndex + 1).map(profile => (
            <div key={profile.id} className="absolute top-0 left-0 w-full">
              <SwiperCard profile={profile} onSwipeRight={handleSwipe} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Swiper;
