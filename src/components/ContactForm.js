import React from 'react';

export default class ContactForm extends React.Component{
   
    state={
        "firstName":"",
        "lastName":"",
        "enquiry":"",
        "country":"",
        "contact":[],
        "completed": "",
        "clicked":""      
        }

    render(){

        const {firstName, lastName, enquiry, country, contact, clicked} = this.state;
        const completed = firstName && lastName && enquiry && country && contact;

        return(
            <React.Fragment>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.updateState}/>
                    <br/>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.updateState}/>
                </div>
                <div>
                    <label> Type of Enquiry </label>
                    <input type="radio" name="enquiry" value="support" checked={this.state.enquiry==="support"} onChange={this.updateState}/>support
                    <input type="radio" name="enquiry" value="sales" checked={this.state.enquiry==="sales"} onChange={this.updateState}/>sales
                    <input type="radio" name="enquiry" value="marketing" checked={this.state.enquiry==="marketing"} onChange={this.updateState}/>marketing                
                </div>
                <div>
                    <label>Country:</label>
                    <select value={this.state.country} name="country" onChange={this.updateState}>
                        <option value="">Choose one</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Thailand">Thailand</option>
                    </select>
                </div>

                <div>
                    <label>Get back to me through</label>
                    <input type="checkbox" name="contact" value="email" checked={this.state.contact.includes("email")} onChange={this.handleCheck}/> Email
                    <input type="checkbox" name="contact" value="phoneNumber" checked={this.state.contact.includes("phoneNumber")} onChange={this.handleCheck}/> Phone Number
                    <input type="checkbox" name="contact" value="visit" checked={this.state.contact.includes("visit")} onChange={this.handleCheck}/> Visit me
                </div>

                <div>
                {completed && !clicked && <button onClick={this.handleClick}>submit</button>}
                </div>
           
                <div style={{ 
                    display: clicked ? 'block' : 'none',
                    border: "1px solid black",
                    padding: "4px",
                    backgroundColor: "skyblue"                  
                    }}>
                    Name: {firstName} {lastName}
                    <br />
                    Enquiry Type: {enquiry}
                    <br />
                    Country: {country}
                    <br />
                    Contact via: {contact}
                </div>
            </React.Fragment>
        )
   }

    updateState=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleClick = (event) => {
        this.setState({ clicked: true });
      };

    handleCheck = (event) => {
        let currentValues=this.state[event.target.name];
        let modifiedValues=[];
        if (!currentValues.includes(event.target.value)){
            modifiedValues=[...currentValues, event.target.value]
        } else {
            modifiedValues=currentValues.filter((arrayItem)=>{
                return arrayItem!==event.target.value
            })
        }
        this.setState({
            [event.target.name]:modifiedValues
        })
    }
}


//back to basics:
// MDN: Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are truthy, the value of the last operand is returned.
// This is why it returns the code <button ... > </button> which is rendered
// use destructuring to evaluate if truthy or falsy -> because if use setStates if evaluate in arrow function, it doesnt work. This is likely due to asynchronous nature.
// remember the [] is truthy in JS, so need to be null if want it to be falsy
// if want only one to be checked, put: checked={this.state.contact === 'visit'} respectively and do setstate based on the event.target.value
