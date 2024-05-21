import React, { useRef, useState, useEffect } from 'react';
import './VideoPlayer.css';
import { FaPlay, FaComment, FaHeart } from 'react-icons/fa';

const VideoPlayer = ({ src, name, videocaption }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true); // State to track if video is playing

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleEnded = () => {
            // When the video ends, replay it from the beginning
            videoElement.currentTime = 0;
            videoElement.play();
        };

        videoElement.addEventListener('ended', handleEnded);

        // Set volume to highest level
        videoElement.volume = 1.0;

        return () => {
            // Cleanup: remove event listener when component unmounts
            videoElement.removeEventListener('ended', handleEnded);
        };
    }, []); // Only run once on component mount

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isPlaying]); // Trigger play/pause when isPlaying changes

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying); // Toggle play/pause state
    };

    const seekVideo = (seconds) => {
        videoRef.current.currentTime += seconds;
    };

    return (
        <section className="video-container relative">
            <video ref={videoRef} autoPlay loop>
                <source src={src} type="video/mp4" className='w-[100%]'/>
            </video>
            <div className="background-video" style={{ backgroundImage: `url(${src})` }} />
            <div className="controls absolute bottom-60 left-0 flex justify-between w-[100%]">
                <button onClick={() => seekVideo(-10)}>Rewind 10s</button>
                <button onClick={togglePlayPause} className={`text-white ${isPlaying ? 'activePause' : 'active'}`}>
                    {isPlaying ? 'Pause' : <FaPlay className='text-3xl'/>}
                </button>
                <button onClick={() => seekVideo(10)}>Forward 10s</button>
            </div>
            <section className='absolute bottom-0 left-0 w-[100%] p-6 flex justify-between items-end'>
                <div className='flex flex-col gap-4 bottom-0 left-0'>
                    <div className='flex items-center gap-2'>
                        <div className='Video-Posts-UserAvatar'>
                            <img src='https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='photo'/>
                        </div>
                        <span className='font-bold text-[14px] text-gray-300'>{name}</span>
                    </div>
                        <p className='text-gray-300'>{videocaption}</p>
                    <button className='Share-btn-2 text-gray-300'>Share</button>
                </div>
                <div className='flex flex-col h-[10rem] justify-between'>
                    <button className='flex flex-col justify-center items-center gap-1'>
                        <FaHeart className='text-4xl text-gray-300 shadowed'/>
                        <span className='VideoLikes-count text-gray-300'>22K</span>
                    </button>
                    <button className='flex flex-col justify-center items-center gap-1'>
                        <FaComment className='text-4xl text-gray-300' />
                        <span className='videoComments-count text-gray-300'>800</span>
                    </button>
                </div>
            </section>
        </section>
    );
};

export default VideoPlayer;
