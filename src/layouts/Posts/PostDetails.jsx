import React, { useState } from 'react';
import PostData from './PostData';
import { FaHeart } from 'react-icons/fa6';

const PostDetails = ({ postId, onUnview }) => {
  const [newComment, setNewComment] = useState('');
  const [showPost, setShowPost] = useState(true);

  // Find the post with the provided postId
  const post = PostData.find((p) => p.id === postId);

  if (!post || !showPost) {
    return null; // Instead of displaying a message, simply return null to unmount the component
  }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    // Add the new comment to the post
    const updatedPost = {
      ...post,
      comments: [
        ...post.comments,
        {
          user: {
            name: currentUser.name,
            avatar: currentUser.avatar,
          },
          text: newComment,
          timestamp: new Date().toISOString(),
          replies: [] // Assuming no replies initially
        }
      ]
    };
    // Update the post with the new comment
    console.log("New comment:", newComment);
    setNewComment('');
  };

  const handleUnview = () => {
    setShowPost(false); // Set the state to hide the post
    onUnview(); // Call the provided callback to notify the parent component
  };

  return (
    <div className="Post-details-container pt-5">
    <div className='w-[100%] h-[18rem] bg-[#c6c6c6] rounded-[6px] relative'>
        <img src={post.image} alt="Post" className="inset-0 w-full h-full object-cover rounded-[6px]" />
        <button className='absolute h-[5rem] w-[5rem] pl-3 left-0 top-0' onClick={handleUnview}>Back</button>
    </div>
      <div className="Post-details">
        <div>
          <p>{post.likes} Likes</p>
        </div>
        <div>
          <p>{post.captions}</p>
        </div>
        <div className="Post-comments">
          <h4>Comments</h4>
          {post.comments.map((comment, index) => (
            <li key={index} className=" p-2 rounded-md" style={{ maxWidth: '100%', wordWrap: 'break-word' }}>
              <div className='User-name-Icon-container flex items-center justify-between w-[100%]'>
                <div className='flex items-center gap-2'>
                  <div className='Avatar-container w-[3rem] h-[3rem] rounded-[50%] p-1 flex items-center justify-center'>
                    <img className='Avatar' src={comment.user.avatar} alt="User Avatar" />
                  </div>
                  <div className='flex flex-col'>
                    <h3 className='text-[16px] font-bold'>{comment.user.name}</h3>
                    <span>{comment.text}</span>
                  </div>
                </div>
                <div className='h-[3rem]'>
                  <p className='top-0 right-0'>{comment.timestamp}</p>
                </div>
              </div>
              <div className='Reply-and-Likes-container flex gap-4 items-center pl-14 pt-2'>
                <div className='Comments-likes-box'>
                  <button className='flex items-center gap-2'>
                    <FaHeart />
                    <span>20 Likes</span>
                  </button>
                </div>
                <button className='Reply-btn' onClick={() => setReplyingTo(index)}>Reply</button>
              </div>
              {comment.replies && comment.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className='User-name-Icon-container flex items-center justify-between w-[100%] pl-10 mt-4'>
                  <div className='flex items-center gap-2'>
                    <div className='Avatar-container w-[2rem] h-[2rem] rounded-[50%] p-1 flex items-center justify-center'>
                      <img className='Avatar' src={reply.user.avatar} alt="User Avatar" />
                    </div>
                    <div className='flex flex-col'>
                      <h3 className='text-[14px] font-bold'>{reply.user.name}</h3>
                      <span>{reply.text}</span>
                    </div>
                  </div>
                  <div className='h-[3rem]'>
                    <p className='top-0 right-0'>{reply.timestamp}</p>
                  </div>
                </div>
              ))}
            </li>
          ))}
                  <div className='bg-gray-300 flex h-[50px] pl-1 pr-3 items-center justify-between'>
                   <textarea
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Add a comment..."
                    rows={3}
                    className="w-[90%] h-[50px] px-3 rounded resize-none pt-3 bg-transparent"
                    />
                    <button onClick={handleAddComment} className="">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0L15 18.3333L8.22583 12.3008L14.7275 5.43917L6.0125 11.4617L0 10L20 0ZM7.5 13.89V20L10.215 16.3075L7.5 13.89Z" fill="black" />
                    </svg>
                    </button>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
