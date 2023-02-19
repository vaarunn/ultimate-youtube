import React from 'react';
import VideoCard from '../components/VideoCard';
import ChannelCard from '../components/ChannelCard';
const Video = ({ videos }) => {
  return (
    <div className='w-full h-screen overflow-y-scroll md:flex  flex-wrap'>
      {videos?.map((video) => (
        <div className='flex '>
          {video?.id?.videoId && <VideoCard video={video} />}
          {video?.id?.channelId && <ChannelCard channelDetail={video} />}
        </div>
      ))}
    </div>
  );
};

export default Video;
