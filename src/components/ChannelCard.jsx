import React from 'react';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/Constants';

const ChannelDetails = ({ channelDetail }) => {
  return (
    <div>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className='flex justify-center items-center mt-5'>
          <img
            className='w-[247px] flex justify-center items-center'
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
          />
        </div>
      </Link>
      <p className='text-center font-bold text-xl'>
        {channelDetail?.snippet?.title}
      </p>
      {channelDetail?.statistics?.subscriberCount && (
        <p className='text-center'>
          {parseInt(
            channelDetail?.statistics?.subscriberCount
          ).toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default ChannelDetails;
