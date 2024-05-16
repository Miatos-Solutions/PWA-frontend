import React, { useState } from 'react';

function Caption({ text }) {
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  const truncatedText = `${text.slice(0, 20)}...`;

  return (
    <section className='text-start break-all'>
      {showFullText ? text : truncatedText}&nbsp;&nbsp;&nbsp;
      {text.length > 20 && (
        <button onClick={handleToggleText} className="text-black ms-1 font-bold">
          {showFullText ? 'See less' : 'more'}
        </button>
      )}
    </section>
  );
}

export default Caption;
