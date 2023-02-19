import React, { useState } from 'react';
import { SideMenu } from '../utils/Constants';
const Sidebar = ({ setSelectedCategory, selectedCategory }) => {
  const [active, setActive] = useState(0);

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <div className=' flex overflow-x-scroll w-screen md:flex-col md:w-[20%] '>
      {SideMenu.map((item) => {
        const { id, name, icon } = item;
        return (
          <button
            key={id}
            onClick={() => {
              handleClick(id);
              setSelectedCategory(name);
            }}
            className={
              active === id
                ? 'bg-red-600 flex items-center gap-2 p-5 hover:bg-red-600 rounded transition ease duration-150'
                : 'flex items-center gap-2 p-5 hover:bg-red-600 rounded transition ease duration-150 '
            }
          >
            <div className='md:ml-5'>{icon}</div>
            <div>
              <h1 className='font-bold'>{name}</h1>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
