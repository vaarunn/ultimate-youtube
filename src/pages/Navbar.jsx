import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <div className='border-b-2 justify-between border-slate-100 h-20 flex items-center  px-2 md:px-5 '>
      {/* navbar  */}
      <div>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-7  md:w-10 md:mr-[500px]' />
        </Link>
      </div>
      <div className='relative flex items-center'>
        <form onSubmit={handleSubmit}>
          <div className='absolute right-0'>
            <AiOutlineSearch size={30} />
          </div>

          <input
            type='text'
            className='block rounded-xl outline-none py-1 px-4 lg:w-[500px] text-black'
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
            placeholder='Search here..'
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
