import React from "react";

class SearchBar extends React.Component{
    
    state = {value:''}

    onFormSubmit = (e)=>{
        e.preventDefault();
            this.props.onSubmit(this.state.value);
    }
    
    onInputChange = (e)=>{
        this.setState({value:e.target.value});
    }

    render(){
        return(
            <div style={{"marginTop":"10px"}} className="ui segment">
            <form onSubmit={this.onFormSubmit}>
                <div className="ui form">
                    <div className="field">
                        <label>Search:</label>
                        <input type="text" value={this.state.value} onChange={this.onInputChange}/>
                    </div>
                </div>
            </form>
            </div>
        );
    }
}

export default SearchBar;