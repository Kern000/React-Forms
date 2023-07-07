import React from 'react';

export default class SurveyForm extends React.Component{

    state={
        'name':'',
        'colour':'',
        'country':''
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Favorite Colour:</label>
                    <input type="radio" value="red" name="colour" checked={this.state.colour==='red'} onChange={this.updateFormField}/>Red
                    <input type="radio" value="blue" name="colour" checked={this.state.colour==='blue'} onChange={this.updateFormField}/>Blue
                    <input type="radio" value="green" name="colour" checked={this.state.colour==='green'} onChange={this.updateFormField}/>Green
                </div>
                <div>
                    <label>Country:</label>
                    <select value={this.state.country} name="country" onChange={this.updateFormField}>
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>   
                        <option value="Indonesia">Indonesia</option>
                    </select>
                </div>
            </React.Fragment>
        )
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }



    

}

// refresh: select for dropdown list. input type='checkbox' for checkboxes.
// arrow function because update field will be used in event handler
// checked in radio is boolean, it does not define the state.colour. it is checking if it is same as the state value. At first only one way binding.
// event.target.name is retrieving the value of the name attribute of the form field element - This allows adjusting of corresponding attribute
// if target input has name='name', the state property will be updated with the name: event.target.value
// target refers to targeted html (event occurs there)
// [e.target.name] evaluate expression e.target.name and use it as key
// When using setState in React, if the property specified within the square brackets already exists in the state, its value will be updated. If the property doesn't exist, a new property will be added to the state with the specified name-value pair.
// event.target.name will search for the value of tt as the property, then look at the value to update the state property value
// event argument is object - w 2 impt properties: name, and value of form field

