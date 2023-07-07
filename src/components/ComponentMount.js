import React from 'react';
import axios from 'axios';

export default class ComponentMount extends React.Component{

    state={
        "name":"",
        "colour":"",
        "country":"",
        "fruits":[],
        "all_fruits":[],
        "all_colours":[],
        "all_countries":[]
    }

    // componentDidMount(){
    //     axios.get('./json/colours.json').then(r=>this.fruits=r.data);
    //     axios.get('./json/countries.json').then(r=>this.colours=r.data);
    //     axios.get('./json/fruits.json').then(r=>this.fruits=r.data);
    // }

    async componentDidMount(){
        let response=await axios.get('./json/colours.json');
        let all_colours=response.data;

        response=await axios.get('./json/countries.json')
        let all_countries=response.data
       
        response=await axios.get('./json/fruits.json')
        let all_fruits=response.data

        this.setState({
            "all_colours":all_colours,
            "all_countries": all_countries,
            "all_fruits": all_fruits,
        })
    }

    renderColours(){
        let options=[];
        for (let colour of this.state.all_colours){
            let element= <React.Fragment key={colour.value}>
                <input  name="colour" 
                        type="radio" 
                        value={colour.value}
                        checked={this.state.colour===colour.value}
                        onChange={this.updateFormField}
                />
                <span>{colour.display}</span>
            </React.Fragment>
            options.push(element)
        }
        return options;
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
                {this.renderColours()}
            </div>
            <div>
                <label>Country:</label>
                <select value={this.state.country} name="country" onChange={this.updateFormField}>
                    {this.state.all_countries.map((country)=>
                        <option key={country.value}
                                value={country.value}> {country.display} </option>
                    )}   
                </select>
            </div>
            <div>
                <label>Fruits</label>
                {this.state.all_fruits.map((fruit)=>
                    <React.Fragment>
                        <input  type="checkbox"
                                key={fruit.value}
                                name="fruits"
                                value={fruit.value}
                                checked={this.state.fruits.includes(fruit.value)}
                                onChange={this.updateFruits}
                                />
                                <span>{fruit.display}</span>
                    </React.Fragment>
                )}
            </div>             
            <button>submit</button>
        </React.Fragment>
        )
    }
    
    updateFormField = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
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


// componentDidMount(){ axios.get...} - automatically mounted when rendered for first time
// componentDidMount() is async
// 2nd function is similar, but goes on to setstate
// put all_fruits, colours, countries into state (instead of as a [] in the class) because component will render before componentDidMount, and so by putting in state, the component will re-render when data comes in and the state change.


