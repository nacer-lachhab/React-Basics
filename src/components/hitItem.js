import React, {Component} from 'react';

class HitItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4" key={this.props.hitProp.id}>
                <div className="card my-2">
                    <div className="card-header">
                        {this.props.hitProp.tags} |
                        {this.props.hitProp.webformatWidth} x {this.props.hitProp.webformatHeight}
                    </div>
                    <div className="card-body">
                        <img height={200} className="card-img" src={this.props.hitProp.webformatURL} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HitItem;