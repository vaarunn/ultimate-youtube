import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Video from './Video';
import ChannelCard from '../components/ChannelCard';
import { fetchFromAPI } from '../utils/FetchData';
const Channel = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, []);

  // console.log(channelDetails, videos);
  return (
    <>
      <div>
        <ChannelCard channelDetail={channelDetail} />
      </div>
      <div>
        <Video videos={videos} />
      </div>
    </>
  );
};

export default Channel;
