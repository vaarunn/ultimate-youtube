import React from 'react';
import { Link } from 'react-router-dom';
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture,
} from '../utils/Constants';

const VideoCard = ({ video }) => {
  const { videoId } = video.id;
  const { snippet } = video;

  return (
    <div className='p-5 w-full my-2 mx-1  md:w-[276px] '>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div>
          <img src={snippet?.thumbnails?.high?.url} alt={videoId} />
        </div>
      </Link>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <p className='py-2 font-bold text-xl'>
          {snippet?.title?.slice(0, 60) || demoVideoTitle?.title?.slice(0, 60)}
        </p>
      </Link>
      {/* channel title  */}
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <p className='font-bold'>{snippet?.channelTitle || demoChannelTitle}</p>
      </Link>
    </div>
  );
};

export default VideoCard;
