import React, {Component} from 'react';
import SkillBarToAdd from "./skillBarToAdd";

class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            skillAdded:'',
            title:"Professional Resume",
            contact:{name:"nacer lachhab",email:"nacer@lachhab.isga",profile:'images/profile.jpg'},
            skills:[
                {id:1,skillValue:"software Engeneering"},
                {id:2,skillValue:"Machine Learning"},
                {id:3,skillValue:"Big Data"}
            ]//fin list skills
        }
    };//fin constructeur

    setSkill=(event)=>{
        this.setState({
            skillAdded:event.target.value
        });
    };//fin setSkill

    removeSkill=(skill)=>{
        //enlever l'element skill de la liste skills
        let indexOfSkill = this.state.skills.indexOf(skill);
        let listSkills = [...this.state.skills];
        listSkills.splice(indexOfSkill,1);
        //apartir de indexOfSkill va enlever 1 element de la liste
        this.setState({
            skills:listSkills
        })
    };//fin removeSkill

    addSkill=(event)=>{
        event.preventDefault();
        //preventDefault:empeche la propagation de l'évenement
        // dans ce cas empecher submit d'appeler le serveur et recharger la page.
        var skillOfUser={
                id:[...this.state.skills].pop().id+1,//id du dernier element de la copie d'un tableau
                skillValue:this.state.skillAdded
            };
        this.setState({
            skills : [...this.state.skills,skillOfUser]
        });
    };//fin addSkill, avant exportation vers component skillBarToAdd

    parentOnAddSkill=(skill)=>{
        var skillOfUser={
            id:[...this.state.skills].pop().id+1,
            skillValue:skill
        };
        this.setState({
            skills : [...this.state.skills,skillOfUser]
        });
    }

    render() {
        return (
            <div>
                <div className="card p-3 m-3">
                    <div className="card-header">
                        <h2 className="text-center fw-bold">{this.state.title}</h2>
                    </div>
                    <div className="row p-3">
                        <div className="col col-auto">
                            <img src={this.state.contact.profile} width="100"/>
                        </div>
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    {this.state.contact.name}
                                </li>
                                <li className="list-group-item">
                                    {this.state.contact.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card p-3 m-3">
                    <div className="card-header">Skills</div>
                    <div className="card-body">
                        <SkillBarToAdd childOnAddSkill={this.parentOnAddSkill}/>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="col">ID</th>
                                    <th className="col">Skill</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state
                                        .skills
                                        .map(
                                            (skill,index)=>
                                                <tr key={index}>
                                                    <td>{skill.id}</td>
                                                    <td>{skill.skillValue}</td>
                                                    <td>
                                                        <button className="btn btn-danger"
                                                                onClick={()=>this.removeSkill(skill)}>
                                                            Remove
                                                        </button>
                                                    </td>
                                                </tr>
                                        )//fin de map
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;