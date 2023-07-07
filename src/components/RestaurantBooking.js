import React from 'react';

export default class RestaurantBooking extends React.Component{

    state={
        "firstName":"",
        "lastName":"",
        "seating":"",
        "smoking":"",
        "appetizer":"",
        "completed":false,
        "clicked":false
    }

        render(){
    
        let {firstName, lastName, seating, smoking, appetizer, clicked} = this.state
        let completed = firstName && lastName && seating && smoking && appetizer

        return(
            <React.Fragment>
                <div>
                    <label> First Name: </label>
                    <input  type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.updateFormField}                                                
                    />
                </div>
                <div>
                    <label> Last Name: </label>
                    <input  type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.updateFormField}                                                
                    />
                </div>
                <div>
                    <label> Seating Type: </label>
                    <br/>
                    <label> Outdoors </label>
                    <input  type="radio"
                            name="seating"
                            value="outdoors"
                            checked={this.state.seating==="outdoors"}
                            onChange={this.updateFormField}
                    />
                    <label> Indoors </label>
                    <input  type="radio"
                            name="seating"
                            value="indoors"
                            checked={this.state.seating==="indoors"}
                            onChange={this.updateFormField}
                    />
                    <label> VIP indoors </label>
                    <input  type="radio"
                            name="seating"
                            value="VIP indoors"
                            checked={this.state.seating==="VIP indoors"}
                            onChange={this.updateFormField}
                    />
                </div>
                <div>
                    <label> Smoking or Non-smoking: </label>
                    <select name="smoking" value={this.state.smoking} onChange={this.updateFormField}>
                        <option value=""> choose one </option>                                    
                        <option value="smoking"> smoking </option>
                        <option value="non-smoking"> non-smoking </option>
                    </select>
                </div>
                <div>
                    <label> Appetizer: </label>
                    <input  type="checkbox"
                            name="appetizer"
                            value="raw fishes"
                            checked={this.state.appetizer==="raw fishes"}
                            onChange={this.updateFormField}
                    /> Raw Fishes
                    <input  type="checkbox"
                            name="appetizer"
                            value="salad"
                            checked={this.state.appetizer==="salad"}
                            onChange={this.updateFormField}
                    /> Salad
                    <input  type="checkbox"
                            name="appetizer"
                            value="fried cuttlefish"
                            checked={this.state.appetizer==="fried cuttlefish"}
                            onChange={this.updateFormField}
                    /> Fried Cuttlefish
                    <input  type="checkbox"
                            name="appetizer"
                            value="peanuts"
                            checked={this.state.appetizer==="peanuts"}
                            onChange={this.updateFormField}
                    /> Peanuts 
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


// notice we are using '' for appetizers rather than [] and .includes, this is to allow only one choice in the appetizer

// IMPORTANT: if using constructor and inherit props thru React.Component like below, cannot use state={}, must initialize with this.state={}

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         // Initial state properties
//       };
// }
    
//     render() {
//       // Render your component using this.state
//     }
//   }

// In state, will use props.propsName
// but when in render, will use this.props
// Within the render() method of a class component, can access the props using this.props.
// There is no need to put props in constructor for render() to access the props


