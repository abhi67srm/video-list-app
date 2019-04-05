import React from 'react';
import './VideoItem.css';
const VideoItem = ({video, onVideoSelect}) => {

    return (

       <div onClick={()=>onVideoSelect(video)} className="item video-item">
        <img
        className="ui image aligned"
        src={video.snippet.thumbnails.medium.url}
        alt="img" />
        <div className="content">
              <div className="header txt">
              {video.snippet.title }
              </div>
        </div>

       </div>

     );
}

export default VideoItem;
