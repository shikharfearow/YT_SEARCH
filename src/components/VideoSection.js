import React from "react";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
import "./styles/style.css";

class VideoSection extends React.Component{

    render(){
        const videos  = this.props.videos.map(
            (video,index) => {
                return <VideoList key={index} video={video} onVideoClick={this.props.onVideoClick}/>
            }
        )
        return(
            <div className="video-section">
                <VideoDetails play={this.props.play}/>
                <div className="video-list">
                {videos}
                </div>
            </div>
        );
    }
}

export default VideoSection;