import React, { useState } from 'react';
import Navbar from '../../layouts/Navbar/Navbar';
import './HomeStyles.css';
import Posts from '../../layouts/Posts/Posts';
import PostDetails from '../../layouts/Posts/PostDetails';

function Home() {
  // State to manage which post is selected
  const [selectedPost, setSelectedPost] = useState(null);

  // Function to handle selecting a post
  const handlePostClick = (postId) => {
    setSelectedPost(postId);
  };

  // Function to handle unviewing a post
  const handleUnviewPost = () => {
    setSelectedPost(null);
  };

  return (
    <section className='Home-cover'>
      <section className='Home-page flex items-center justify-center flex-col w-[100vw] h-screen'>
        <Navbar />
        <section className='h-[calc(100vh-150px)] w-[100%] flex flex-col items-center pt-20px pl-3 pr-3 pb-10px gap-3 overflow-y-auto'>
          {/* Conditionally rendering complete details of the selected post */}
          {selectedPost !== null ? (
            <PostDetails postId={selectedPost} onUnview={handleUnviewPost} />
          ) : (
            <Posts handlePostClick={handlePostClick} />
          )}
        </section>
      </section>
      <section className='Empty-display'></section>
    </section>
  );
}

export default Home;
