import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {
    state = {  }
   
    render() { 
        const renderedVideo = this.props.videos.map((video)=>{
            return <VideoItem  key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect}/>
       });
        return <div className="ui relaxed divided list">{renderedVideo}</div>
    }
}
 
export default VideoList;