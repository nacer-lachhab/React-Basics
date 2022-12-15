import React, {Component} from 'react';

class SkillBarToAdd extends Component {
    constructor(props) {
        super(props);
        this.state={
            skillValue:''
        };
    };

    setSkillValue=(event)=>{ //s'execute depuis onChange
        this.setState({
            skillValue: event.target.value
        });
    };

    childOnAddSkill2=(event)=>{ //childOnAddSkill2: la vraie methode qui s'applique depuis onSubmit
        event.preventDefault(); //arreter la propagation de l'event
        console.log(this.props);
        console.log("hhhhhh");
        //childOnAddSkill: param passé dans la balise depuis le parent, on l'appel depuis props
        this.props.childOnAddSkill(this.state.skillValue);
        this.setState({
           skillValue:''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.childOnAddSkill2}>
                    <div className="input-group">
                                <span className="input-group-text">
                                    Add Skill To your List :
                                </span>
                        <input className="form-control text-center"
                               type="text"
                               name="skill"
                               value={this.state.skillValue}
                               onChange={this.setSkillValue} >

                        </input>
                        <button className="input-group-text btn btn-primary"
                                type="submit">
                            confirm
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SkillBarToAdd;