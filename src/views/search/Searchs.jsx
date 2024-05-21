import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ProfilesData from './ProfilesData';
import Swiper from '../../components/Swiper/Swiper'; // Import Swiper component
import { Link } from 'react-router-dom';

function Searchs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState(ProfilesData);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = ProfilesData.filter((profile) =>
      profile.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <section className='Search-Container flex items-center justify-center h-[100vh] bg-white '>
      <div className='Search-Wrapper h-[100%] w-[100%]'>
        <div className='Search-nav h-[60px] bg-white flex items-center justify-between pl-3 pr-3'>
          <h1 className='text-2xl font-bold'>Search</h1>
          <Link to='#'>
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8C12.552 8 13 8.449 13 9C13 9.551 12.552 10 12 10C11.448 10 11 9.551 11 9C11 8.449 11.448 8 12 8ZM12 6C10.343 6 9 7.343 9 9C9 10.657 10.343 12 12 12C13.657 12 15 10.657 15 9C15 7.343 13.657 6 12 6ZM3 10C1.343 10 0 11.343 0 13C0 14.657 1.343 16 3 16C4.657 16 6 14.657 6 13C6 11.343 4.657 10 3 10ZM21 10C19.343 10 18 11.343 18 13C18 14.657 19.343 16 21 16C22.657 16 24 14.657 24 13C24 11.343 22.657 10 21 10ZM12 4C12.343 4 12.677 4.035 13 4.101V1C13 0.448 12.553 0 12 0C11.447 0 11 0.448 11 1V4.101C11.323 4.035 11.657 4 12 4ZM21 8C21.343 8 21.677 8.035 22 8.101V1C22 0.448 21.553 0 21 0C20.447 0 20 0.448 20 1V8.101C20.323 8.035 20.657 8 21 8ZM21 18C20.657 18 20.323 17.965 20 17.899V21C20 21.552 20.447 22 21 22C21.553 22 22 21.552 22 21V17.899C21.677 17.965 21.343 18 21 18ZM3 8C3.343 8 3.677 8.035 4 8.101V1C4 0.448 3.553 0 3 0C2.447 0 2 0.448 2 1V8.101C2.323 8.035 2.657 8 3 8ZM12 14C11.657 14 11.323 13.965 11 13.899V21C11 21.552 11.447 22 12 22C12.553 22 13 21.552 13 21V13.899C12.677 13.965 12.343 14 12 14ZM3 18C2.657 18 2.323 17.965 2 17.899V21C2 21.552 2.447 22 3 22C3.553 22 4 21.552 4 21V17.899C3.677 17.965 3.343 18 3 18Z" fill="black" />
            </svg>
          </Link>
        </div>
        <hr />
        <div className='Search-container pl-3 pr-3 pt-2'>
          <div className='bg-gray-200 rounded-[9px] flex items-center gap-1 pl-4 pr-2 h-[40px]'>
            <span>
              <SearchIcon />
            </span>
            <input
              type='search'
              placeholder='Search for friends...'
              className='bg-transparent w-[100%] text-[14px] text-gray-800'
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className='p-3 h-[80%]'>
          {/* Pass filteredProfiles as a prop to Swiper */}
          <Swiper profiles={filteredProfiles} searchTerm={searchTerm} />
        </div>
      </div>
    </section>
  );
}

export default Searchs;
