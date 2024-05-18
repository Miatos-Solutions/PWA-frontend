import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ProfilesData from './ProfilesData';
import Swiper from '../../components/Swiper/Swiper'; // Import Swiper component

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
