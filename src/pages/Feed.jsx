import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Video from './Video';
import { fetchFromAPI } from '../utils/FetchData';
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data?.items)
    );
  }, [selectedCategory]);

  return (
    <div className='md:flex'>
      <Sidebar
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <Video videos={videos}></Video>
    </div>
  );
};

export default Feed;
