import React, {Component} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import HitItem from "./hitItem";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class HitDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
          hit : null,
        };
    }

    getHits(id){
        const url = 'https://pixabay.com/api/?key=32134261-3095be03ae66ba0541849a4ba&id='+id;
        axios.get(url)
            .then((resp)=>{
                this.setState({
                    hit : resp.data.hits[0],//retourn un tableau avec un seul objet
                })
            })//fin then
            .catch((error)=>console.log(error));
    };//fin getHits

    componentDidMount() {
        let { id } = this.props.params;
        this.getHits(id);
    }

    render() {
        if(this.state.hit!=null)
            return (
                <HitItem hitProp={this.state.hit} />
            );
        else
            return <div>Wait Moments, loading....</div>
    }
}

export default withParams(HitDetails);