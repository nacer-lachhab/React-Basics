import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends React.Component { //component statless, moin de code que class
    constructor(props) { //pas constructor en revenant que function a class
        super(props);
        this.state = {
            counter : 1,
            list:[0]
        };//definission de state
    }

    compute=(op)=>{
        if(op==='+'){
            let cmpt = this.state.counter +1;
            this.setState({//state est un objet
                counter : cmpt,
                list: new Array(cmpt).fill(0)//tableau de dim cmpt est remplie de 0
            });//changemet de state, regeneration de vue.
        }else{
            let cmpt = this.state.counter-1;
            this.setState({//state est un objet
                counter : cmpt,
                list: new Array(cmpt).fill(0)//tableau de dim cmpt est remplie de 0
            });//changemet de state, regeneration de vue.
        }
    }

    render() {
        return (
            <div className="card m-3">
                <div className="card-header">
                    <strong>
                        {this.props.title?this.props.title:'par Default'} : {this.state.counter}
                    </strong>
                </div>
                <div className="ms-auto">
                    <button onClick={()=>this.compute('+')} className="btn btn-primary m-2">+</button>
                    <button onClick={()=>this.compute('-')} className="btn btn-primary m-2">-</button>
                </div>
                <div className="card-body">
                    {
                        this.state.list.map((v,index)=>{ //v:value et index:indice
                            return (<span>
                                        {index}
                                        <img width={100}
                                             src={this.props.image?this.props.image:'images/photo.jpg'}
                                             alt={"moi"}/>
                                    </span>)
                        })//fin map
                    }
                </div>
            </div>
        );
    }
}

export default Counter;