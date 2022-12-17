import React, {Component} from 'react';
import axios from "axios";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state={
            hits:[],
            currentPage:1,
            pageSize:10,
            currentkeyword:'rabat'
        };
    }

    getHits(){
        const city = 'paris';
        const key = '32134261-3095be03ae66ba0541849a4ba';
        const url = 'https://pixabay.com/api/?key='+key+'&q='+city;
        axios.get(url)
             .then((resp)=>{
                 console.log(resp.data);
                 this.setState({
                     hits : resp.data.hits
                 })
             })//fin then
             .catch((error)=>console.log(error));
    };//fin getHits

    componentDidMount() {//cycle de vie du component, montage du component
        this.getHits();
    }

    render() {
        return (
            <div>
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