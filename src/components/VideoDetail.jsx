import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import Video from '../pages/Video';
import { fetchFromAPI } from '../utils/FetchData';

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);

  console.log(videoDetail);

  return (
    <div className='grid md:grid-cols-5'>
      <div className='h-[500px] md:col-span-4 md:h-screen '>
        <ReactPlayer
          width='100%'
          height='70%'
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
        />

        <div>
          <p className='font-bold text-xl'>{videoDetail?.snippet?.title}</p>
        </div>

        <div className='flex justify-between'>
          <p>{videoDetail?.snippet?.channelTitle}</p>
          <div className='flex gap-3'>
            <p>{videoDetail?.statistics?.viewCount} views</p>
            <p>{videoDetail?.statistics?.likeCount} likes</p>
          </div>
        </div>
      </div>
      <div className='col-span-1'>
        <Video videos={videos} />
      </div>
    </div>
  );
};

export default VideoDetail;
