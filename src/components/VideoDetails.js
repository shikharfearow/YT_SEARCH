import React from "react";

class VideoDetails extends React.Component{

    render(){
        if(!this.props.play){
            return <div style={{'height':'315px'}}>
                <div style={{'height':'100%'}} className="ui segment">
                <div className="ui active dimmer">
                <div className="ui medium text loader">Loading</div>
                </div>
                <p></p>
                <p></p>
                </div>
          </div>
        }
        const {id,snippet} = this.props.play
        return <div>
            <iframe title="hi" width="560" height="315" style={{border:0}}
            src={"https://www.youtube.com/embed/"+id.videoId}>
            </iframe>
            <div className="ui segment">
                <h3 className="ui header">{snippet.title}</h3>
                <div className="ui fitted divider"></div>
                <p>{snippet.description}</p>
            </div>
        </div>
    }
}
export default VideoDetails;