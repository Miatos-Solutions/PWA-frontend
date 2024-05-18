import React, { useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import { CiFaceSmile } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import './TestStyles.css';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function PostingModal({ isOpen, onClose }) {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedEmojis, setSelectedEmojis] = useState([]);
    
    // Defined emojis array
    const emojis = [
        '😊', '😂', '😍', '😘', '🤗', '😎', '🤩', '🥳', '🤔', '😏',
        '😱', '🤯', '😇', '🤢', '🤮', '🤕', '🤒', '🤓', '🤖', '💩',
        '🙊', '🙉', '🙈', '🐵', '🐶', '🐱', '🐭', '🐼', '🐻', '🐨',
        '🐯', '🐰', '🦁', '🐮', '🐷', '🐸', '🐙', '🐵‍💼', '🦄', '🐝',
        '🐛', '🦋', '🐌', '🐞', '🦗', '🐜', '🕷️', '🦂', '🦟', '🦠',
        '🌻', '🌹', '🌺', '🌼', '🌷', '🌸', '💐', '🍄', '🌰', '🥜',
        '🍞', '🥐', '🥖', '🥨', '🥞', '🧀', '🍖', '🍗', '🥩', '🥓',
        '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🥙', '🥚', '🍳',
        '🥘', '🍲', '🥣', '🥗', '🍿', '🧂', '🥫', '🍱', '🍘', '🍙',
        '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🍡'
    ];

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form inputs
        if (!inputValue.trim()) {
            toast.error('Please enter a caption.');
            return;
        }
        if (selectedFiles.length === 0) {
            toast.error('Please select at least one file.');
            return;
        }

        try {
            // Send data to backend
            const postData = {
                caption: inputValue,
                files: selectedFiles
            };
            // Making a POST request to your backend endpoint
            const response = await axios.post('/api/posts', postData);
            // Handling successful response
            console.log('Post created successfully:', response.data);       
            // Close the modal
            onClose();
            toast.success('Post created successfully');
        } catch (error) {
            // Handling error
            console.error('Error creating post:', error);
            toast.error('Error creating post');
        }
    };

    const handleEmojiClick = (emoji) => {
        // Add the emoji to the list
        const updatedEmojis = [...selectedEmojis, emoji];
        setSelectedEmojis(updatedEmojis);       
        // Update the input value to reflect the selected emojis
        setInputValue(inputValue + emoji);
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);

        const videos = files.filter(file => file.type.startsWith('video/'));
        const invalidVideos = videos.filter(video => video.duration > 180);

        if (invalidVideos.length > 0) {
            toast.error('Please select videos that are 3 minutes or shorter.');
            return;
        }

        setSelectedFiles(files);

        const urls = files.map(file => URL.createObjectURL(file));
        setPreviewUrls(urls);
    };

    if (!isOpen) return null;

    return (
        <section className="Post-Modal-container fixed bottom-0 left-0 w-full h-screen flex justify-center items-center bg-[#D9D9D9] bg-opacity-45 pl-7 pr-7 pb-5">
            <form onSubmit={handleSubmit} className="Post-Modal bg-white rounded-[15px] shadow-lg w-screen h-[38rem] pt-5 flex flex-col justify-between">
                <div className='h-[100%] flex flex-col justify-between'>
                    <div className='h-[3rem] flex items-center justify-between pl-3 pr-3'>
                        <h1 className='text-[1.2rem] font-bold'>New Post</h1>
                        <button onClick={onClose}><LiaTimesSolid className='text-gray-700 text-2xl'/></button>
                    </div>
                    <div className='Underline h-[2px] bg-[#D9D9D9] mb-4'></div>
                    <div className='flex flex-col items-center justify-between h-[20rem] pl-3 pr-3'>
                        <div className='flex gap-4 flex-col w-[100%]'>
                            <div className='Caption-box flex items-center justify-between h-[2.5rem] w-[100%]'>
                                <input value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className='text-[#c6c6c6] h-[100%] w-[90%] bg-transparent pl-3 pr-3'
                                    type='text'
                                    placeholder='Write your Caption...'
                                />
                                <div onClick={toggleDrawer(true)} className='Emojis-btn flex items-center justify-center w-[40px]'>
                                    <CiFaceSmile className='text-[#c9c6c6] text-3xl'/>
                                </div>
                                <Drawer className="custom-drawer" anchor="bottom" open={drawerOpen} onClose={toggleDrawer(false)}>
                                    <div className="bg-white p-4 w-[100%]">
                                    {emojis.map((emoji, index) => (
                                        <Button
                                        key={index}
                                        onClick={() => handleEmojiClick(emoji)}
                                        className={selectedEmojis.includes(emoji) ? "selected-emoji" : "emoji"}
                                        >
                                        {emoji}
                                        </Button>
                                    ))}
                                    </div>
                                </Drawer>
                            </div>
                            <div className='Info-box flex items-center gap-2 w-[100%] h-[4.5rem] p-1'>
                                <IoIosInformationCircle className="text-7xl font-bold text-[#adabab]"/>
                                <p className="text-[11px] text-[#adabab]">Remember, you can upload up to 100MB.
                                    videos cannot exceed 3 minutes and 30 second and you
                                    cannot upload photos higher than 5MB.
                                </p>
                            </div>
                            <label htmlFor="file-upload" className='Posts-box flex items-center justify-center h-[8.5rem] w-[100%] bg-white'>
                                <input id="file-upload" type='file' accept='image/*, video/*' style={{ display: 'none' }} onChange={handleFileChange} multiple />
                                {previewUrls.map((url, index) => (
                                    url.endsWith('.mp4') ? 
                                    <video key={index} src={url} alt={`Preview ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} controls /> :
                                    <img key={index} src={url} alt={`Preview ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ))}
                                {previewUrls.length === 0 && <div className='flex flex-col gap-2 w-[100%] h-[100%] items-center justify-center'>
                                    <FaCirclePlus className='text-4xl text-[#adabab]' />
                                    <span className='text-[14px] font-bold'>Add Photo</span>
                                </div>
                                }
                            </label>
                        </div>
                    </div>
                    <div className='h-[20%] w-[100%] flex flex-col justify-between p-3'>
                        <div className='Public-boxn flex justify-between'>
                            <div className='Public flex gap-2 items-center'>
                                <IoIosInformationCircle className="text-3xl font-bold text-[#adabab]" />
                                <p className='text-[14px] font-bold text-gray-500'>Public Post</p>
                            </div>
                            {/* Toggler here */}
                            <label className='Switch1'>
                                <input type='checkbox' />
                                <span className='Slider'/>
                            </label>
                        </div>
                        <div className='Underline h-[2px] bg-[#D9D9D9]'></div>
                        <div className='Premium-box flex justify-between'>
                            <div className='Premium flex gap-2 items-center'>
                                <IoIosInformationCircle className="text-3xl font-bold text-[#adabab]" />
                                <p className='text-[14px] font-bold text-gray-500'>Premium Content</p>
                            </div>
                            {/* Toggler here */}
                            <label className='Switch2'>
                                <input type='checkbox' />
                                <span className='Slider'/>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Submit button */}
                <div className="Post-box flex items-center justify-center py-3 mb-2 pl-3 pr-3">
                   <button type='submit' className='Post-submit bg-black text-white w-[100%] h-[40px]'>Confirm New Post</button>
                </div>
            </form>
        </section>
    );
}

export default PostingModal;
