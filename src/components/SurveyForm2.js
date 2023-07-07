import React from 'react';

export default class SurveyForm2 extends React.Component{

    state={
        'name':'',
        'colour':'',
        'country':'',
        'fruits':[]
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
                        {this.countries.map((country)=>
                            <option key={country.value}
                                    value={country.value}> {country.display} </option>
                        )}   
                    </select>
                </div>
                <div>
                    <label>Fruits</label>
                    {this.fruits.map((fruit)=>
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

    countries=[
        {
            'display':'choose one',
            'value':''
        },
        {
            'display':'Singapore',
            'value':'singapore'
        },
        {
            'display':'Malaysia',
            'value':'malaysia'
        },
        {
            'display':'Indonesia',
            'value':'indonesia'
        }
    ]

    fruits=[
        {
            'display':'Apple',
            'value':'apple'
        },
        {
            'display':'Banana',
            'value': 'banana'
        },
        {
            'display': 'Cherries',
            'value': 'cherries'
        }
    ]

    colours=[
        {
            'display':'Red',
            'value': 'red'
        },
        {
            'display': 'Green',
            'value': 'green'
        },
        {
            'display': 'Blue',
            'value': 'blue'
        }
    ]

    renderColours(){
        let options=[];
        for(let colour of this.colours){
            let element=
                <React.Fragment key={colour.value}>
                    <input  type="radio"
                            name="colour"
                            value={colour.value}
                            checked={this.state.colour===colour.value}
                            onChange={this.updateFormField}
                    />
                    <span>{colour.display}</span>
                </React.Fragment>
                options.push(element);
        }
        return options;
    }
}


// notice no need use let in defining the arrays in the class
// Inside the loop, variable e is declared which represents a React fragment that groups multiple elements together. It consists a unique key prop set to colour.value.
// this function generates an array of React elements representing a list of radio buttons and their associated display values based on this.colours array defined within the class.
// key is a props
// key={colour.value} is assigned to each React.Fragment element that is being created within the loop. By assigning a unique key to each element, React can keep track of the individual elements and their respective states in an efficient manner.
// can do similar to renderColours() with <options> for countries dropdown bar <select>
// Here, we use map() to loop for country of countries. It is simpler this way.
// using loop and map(), we create new array with JSX elements in each index.
