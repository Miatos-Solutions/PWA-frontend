import FavoriteIcon from '@mui/icons-material/Favorite';
import './PostStyles.css';
import PostData from './PostData';
import Caption from './Caption';

function Posts({ handlePostClick }) {

  return (
    <ul className='w-[100%] flex flex-col items-center pt-70px pb-10px gap-3'>
      {PostData.map((post) => (
        <li key={post.id} className='Post-container w-[100%] p-3 flex flex-col gap-2 rounded-[7px] bg-white'>
          <div className='User-name-Icon-container flex items-center justify-between w-[100%]'>
            <div className='flex items-center gap-2'>
              <div className='Avatar-container w-[4.5rem] h-[4.5rem] rounded-[50%] p-1 flex items-center justify-center'>
                <img className='Avatar' src={post.user.avatar} alt="User Avatar"/>
              </div>
              <div className='flex flex-col'>
                <h3 className='text-[15px] font-bold'>{post.user.name}</h3>
                <span className='text-[12px]'>{post.user.location}</span>
              </div>
            </div>
            <div className='h-[3rem]'>
              <p className='top-0 right-0 text-[13px]'>{post.timestamp}</p>
            </div>
          </div>
          <div className='w-[100%] h-[18rem] bg-[#c6c6c6] rounded'>
            <img src={post.image} alt="Post" className="inset-1 w-full h-full object-cover rounded" />
          </div>
          <div className="inset-0 flex justify-between items-center py-2">
            <div className='w-[30%] h-[30px] flex flex-col justify-between'>
              <div className="bouncing-loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span className='flex'>{`${post.likes} Likes`}</span>
            </div>
            <div className='flex items-center w-[9rem] justify-between'>
              <div className="flex items-center mb-2">
                <button className="flex items-center text-white px-1 py-1">
                  <FavoriteIcon className='mr-1 text-black text-3xl'/>
                </button>
              </div>
              <div className="flex items-center mb-2">
                <button className="flex items-center text-white px-2 py-1" onClick={() => handlePostClick(post.id)}>
                  <svg
                    className='mr-1 text-black text-3xl'
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 0.666748C3.582 
                      0.666748 0 3.57608 0
                      7.16608C0 9.25341 1.21133
                      11.1107 3.09333 12.2994C3.672 13.7441
                      2.37133 14.9714 0.998667 15.3014C2.51267 15.4314 5.206 15.2207 7.248
                      13.6361C11.978 13.9947 16 10.9714 16 7.16608C16 3.57608 12.418
                      0.666748 8 0.666748Z"
                      fill="black"
                    />
                </svg>
                </button>
                <span>{post.comments.length}</span>
              </div>
              <div className="flex items-center mb-2">
                <button className="flex items-center text-white px-2 py-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 0L15 18.3333L8.22583 12.3008L14.7275 
                      5.43917L6.0125 11.4617L0 10L20 0ZM7.5
                      13.89V20L10.215 16.3075L7.5
                      13.89Z"
                      fill="black"
                        />
                    </svg>
                </button>
              </div>
            </div>
          </div>
          <Caption text={post.captions}/>
        </li>
      ))}
    </ul>
  )
}

export default Posts