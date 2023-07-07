import React from 'react';

export default class FruitsSurvey extends React.Component{

    state={
        'fruits':[]
    }

    render(){
        return(
            <React.Fragment>
            <div>
                <label>Fruits</label>
                <input type="checkbox" name="fruits" value="apple" checked={this.state.fruits.includes('apple')} onChange={this.updateFruits}/>Apple
                <input type="checkbox" name="fruits" value="orange" checked={this.state.fruits.includes('orange')} onChange={this.updateFruits}/>Orange
                <input type="checkbox" name="fruits" value="pineapple" checked={this.state.fruits.includes('pineapple')} onChange={this.updateFruits}/>Pineapple
                <input type="checkbox" name="fruits" value="durian" checked={this.state.fruits.includes('durian')} onChange={this.updateFruits}/>Durian
            </div>             
            <button>submit</button>
            </React.Fragment>
        )
    }

    updateFruits=(event)=>{
        let currentValues = this.state[event.target.name];
        let modifiedValues = [];
        if(!currentValues.includes(event.target.value)){
            modifiedValues = [...currentValues, event.target.value];
        } else {
            modifiedValues = currentValues.filter((ArrayItem)=>{
                return ArrayItem!==event.target.value
            })
        }    
        this.setState({
            [event.target.name]: modifiedValues
        })        
    }   
}


// this.state[event.target.name] is looking for the array
// filter returns new array
// ... spread operator also copies array
// if currentValues includes(event.target.value) means unchecking, so modifiedValues will filter to return only those that do not match event.target.value
// return true, so return the value

// 1. check if value in array
// 2. check if checked checkboxes value include value of checkbox we just changed
// 3. modify


