import React, {Component} from 'react';
import axios from "axios";
import HitItem from "./hitItem";
import SearchGalleryHit from "./searchGalleryHit";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state={
            hits:[],
            currentPage:1,
            pageSize:12,
            locationOfPictures:'',
            totalPages:1,
            pages : []
        };
    }

    getHits(){
        const endPoint = 'https://pixabay.com/api/?key=';
        const location = this.state.locationOfPictures;
        const key = '32134261-3095be03ae66ba0541849a4ba';
        const currentPage = this.state.currentPage;
        const sizePage = this.state.pageSize;
        const url = endPoint+key+'&q='+location+'&page='+currentPage+'&per_page='+sizePage;
        axios.get(url)
             .then((resp)=>{
                 let totalDePages = (resp.data.totalHits%this.state.pageSize===0)
                     ?(resp.data.totalHits/this.state.pageSize)
                     :1+(~~(resp.data.totalHits/this.state.pageSize));//~~ donne resultat de la div entiere
                 console.log(totalDePages);
                 console.log(resp.data);
                 this.setState({
                     hits : resp.data.hits,
                     totalPages : totalDePages,
                     pages : new Array(totalDePages).fill(0)//fill(0) pour initialiser les cases a 0
                 })
                 console.log(this.state.pages);
             })//fin then
             .catch((error)=>console.log(error));
    };//fin getHits

    search=(keyWord)=>{
        this.setState({
            locationOfPictures : keyWord
        },()=>{
            this.getHits();
        });
    };

    goToPage=(page)=>{
        this.setState({
            currentPage:page
        },()=> {
            this.getHits();//le callback ne va s'executer qu'apres fin du setState
        });

    }

    componentDidMount() {//cycle de vie du component, montage du component
        this.getHits();
    }

    render() {
        return (
            <div>
                <SearchGalleryHit onSearch={this.search} />
                <div className="row">
                    {this.state.hits.map(hit=>
                        <HitItem hitProp={hit}/>
                    )}
                </div>
                <div>
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((v,index)=>
                                <button
                                    className={this.state.currentPage===index+1?'btn btn-primary':'btn-link'}
                                    onClick={()=>this.goToPage(index+1)}
                                    key={index}>
                                    <li>{index+1}</li>
                                </button>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Gallery;