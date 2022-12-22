import React, {Component} from 'react';

class SearchGalleryHit extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchedKeyWord : '',
        };
    }

    setSearchedKeyWord=(event)=>{ //location of hits -photos we will get from api-
        this.setState({
            searchedKeyWord : event.target.value
        });
    };

    doSearch=(event)=>{
        event.preventDefault();
        this.props.onSearch(this.state.searchedKeyWord);
    };

    render() {
        return (
            <form onSubmit={this.doSearch}>
                <div className="row m-2 p-2">
                    <div className="col">
                        <input type="text"
                               className="form-control text-center"
                               placeholder="search location"
                               value={this.state.searchedKeyWord} //locationOfPictures
                               onChange={this.setSearchedKeyWord}/>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-success" type="submit">chercher</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchGalleryHit;