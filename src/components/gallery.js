import React, {Component} from 'react';
import axios from "axios";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state={
            hits:[],
            currentPage:1,
            pageSize:12,
            locationOfPictures:'',
            totalPages:1
        };
    }

    setLocationOfPictures=(event)=>{
        this.setState({
            locationOfPictures : event.target.value
        });
    };

    getHits(){
        const endPoint = 'https://pixabay.com/api/?key=';
        const location = this.state.locationOfPictures;
        const key = '32134261-3095be03ae66ba0541849a4ba';
        const currentPage = this.state.currentPage;
        const sizePage = this.state.pageSize;
        const url = endPoint+key+'&q='+location+'&page='+currentPage+'&per_page='+sizePage;
        axios.get(url)
             .then((resp)=>{
                 console.log(resp.data);
                 this.setState({
                     hits : resp.data.hits
                 })
             })//fin then
             .catch((error)=>console.log(error));
    };//fin getHits

    search=(event)=>{
        event.preventDefault();
        this.getHits();
    };

    componentDidMount() {//cycle de vie du component, montage du component
        this.getHits();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.search}>
                    <div className="row m-2 p-2">
                        <div className="col">
                            <input type="text"
                                   className="form-control text-center"
                                   placeholder="search location"
                                   value={this.state.locationOfPictures}
                                   onChange={this.setLocationOfPictures}/>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-success" type="submit">chercher</button>
                        </div>
                    </div>
                </form>
                <div className="row">
                    {this.state.hits.map(hit=>
                        <div className="col-md-4" key={hit.id}>
                            <div className="card my-2">
                                <div className="card-header">
                                    {hit.tags} | {hit.webformatWidth} x {hit.webformatHeight}
                                </div>
                                <div className="card-body">
                                    <img height={200} className="card-img" src={hit.webformatURL}/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Gallery;