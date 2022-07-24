import React from "react";

class VideoList extends React.Component{
    render(){
        
        const {snippet} = this.props.video;

        return(
            <div className="video-card" onClick={()=>{this.props.onVideoClick(this.props.video)}}>
                <div>
                <img alt={snippet.description} src={snippet.thumbnails.default.url}/>
                </div>
                <div>
                    <h5 style={{margin:0,fontSize:'16px'}}>{snippet.title}</h5>
                    <h6 style={{margin:0,fontSize:'14px'}}>{snippet.channelTitle}</h6>
                    <p>{(snippet.publishedAt).substr(0,10)}</p>
                </div>
            </div>            
        );
    }
}

export default VideoList;