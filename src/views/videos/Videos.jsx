import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import VideoData from './VideoData';

const Videos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = (direction) => {
        if (direction === 'UP' && currentIndex < VideoData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (direction === 'DOWN' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handlers = useSwipeable({
        onSwipedUp: () => handleSwipe('UP'),
        onSwipedDown: () => handleSwipe('DOWN'),
    });

    const VideoPlayer = React.lazy(() => import('./VideoPlayer'));

    return (
        <section {...handlers} className='bg-black'>
            <React.Suspense fallback={<div>Loading...</div>}>
                {VideoData.map((videoPost, index) => (
                    <div key={videoPost.id} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                        {index === currentIndex && <VideoPlayer src={videoPost.url} name={videoPost.name} videocaption={videoPost.videocaption} />}
                    </div>
                ))}
            </React.Suspense>
        </section>
    );
};

export default Videos;
