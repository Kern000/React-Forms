import React from 'react';
import axios from 'axios';

export default class ComponentMountRestaurant extends React.Component{

    state={
        "firstName":"",
        "lastName":"",
        "seating":"",
        "smoking":"",
        "appetizer":"",
        "completed":false,
        "clicked":false,
        "all_seating":[],
        "all_smoking":[],
        "all_appetizer":[]
    }

    async componentDidMount(){
        let response=await axios.get("./json/seating.json");
        let all_seating=response.data;

        response=await axios.get("./json/smoking.json");
        let all_smoking=response.data;

        response=await axios.get("./json/appetizer.json");
        let all_appetizer=response.data;

        this.setState({
            "all_seating":all_seating,
            "all_smoking":all_smoking,
            "all_appetizer":all_appetizer
        })
    }

    render(){
    let {firstName, lastName, seating, smoking, appetizer, clicked} = this.state
    let completed = firstName && lastName && seating && smoking && appetizer
        return(
            <React.Fragment>
                <div>
                    <label className="form-control"> First Name: </label>
                    <input  type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.updateFormField}
                    />
                </div>
                <div>
                    <label className="form-control"> Last Name: </label>
                    <input  type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.updateFormField}
                    />
                </div>
                <div>
                    <label className="form-control"> Seating Type: </label>
                    <br/>
                    {this.state.all_seating.map((seating)=>
                        <React.Fragment>
                            <input  type="radio"
                                    name="seating"
                                    value={seating.value}
                                    className="form-check-input"
                                    key={seating.value}
                                    checked={this.state.seating===seating.value}
                                    onChange={this.updateFormField}
                            /> {seating.display}
                        </React.Fragment>
                    )}
                </div>
                <div>
                    <label className="form-control"> Smoking or Non-smoking: </label>
                    <select name="smoking" value={this.state.smoking} onChange={this.updateFormField}>
                        {this.state.all_smoking.map((smoke)=>
                            <option value={smoke.value}
                                    key={smoke.value}
                                    > {smoke.display} </option>
                            )}
                    </select>
                </div>
                <div>
                    <label className="form-control"> Appetizer: </label>
                    {this.state.all_appetizer.map((appetizer)=>
                        <React.Fragment>
                        <input  type="checkbox"
                                name="appetizer"
                                value={appetizer.value}
                                key={appetizer.value}
                                checked={this.state.appetizer===appetizer.value}
                                onChange={this.updateFormField}
                        /> {appetizer.display}
                        </React.Fragment>
                    )}
                </div>
                {completed && !clicked && <button onClick={this.handleClick}> submit </button>}
                <div style={{
                     display: clicked? 'block' : 'none',
                     border: '1px solid black',
                     padding: '5px',
                     borderRadius: '2px'
                }}>
                Name: {firstName} {lastName} <br/>
                Seating: {seating} <br/>
                Smoking or Non-smoking: {smoking} <br/>
                Appetizer: {appetizer} <br/>             
                </div>
            </React.Fragment>
        )
    }

    updateFormField=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleClick=()=>{
        this.setState({
            'clicked':true
        })
    }

}
