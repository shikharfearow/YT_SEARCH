import React from "react";
import SearchBar from "./SearchBar";
import VideoSection from "./VideoSection";
import youtube from "../apis/youtube";

class App extends React.Component{

    state = {videos:[],play:null}

    componentDidMount(){
        this.searchVideos('python free')
    }

    searchVideos = async (term)=>{
        const KEY = "AIzaSyB06HRVepitM9qaWHME6Q_L4RdxrjtAD0I";
        const result = await youtube.get("/search",{
            params:{
                q:term,
                part:'snippet',
                maxResults:5,
                key:KEY
            }
        })

        this.setState({
            videos:result.data.items
            ,play:result.data.items[0]
        })
    } 

    onVideoClick = (e)=>{
        this.setState({play:e})
    }

    render(){
        console.log(this.state.videos)
        return(
            <div className="ui container">
                <div>
                    <SearchBar onSubmit={this.searchVideos}/>
                    <VideoSection videos={this.state.videos} play={this.state.play} onVideoClick={this.onVideoClick}/>
                </div>
            </div>
        );
    }
}

export default App;
