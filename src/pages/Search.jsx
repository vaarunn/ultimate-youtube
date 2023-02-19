import React, { useEffect, useState } from 'react';
import Video from './Video';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/FetchData';

const Search = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data?.items)
    );
  }, [searchTerm]);

  return <Video className='grid col-span-3' videos={videos}></Video>;
};

export default Search;
