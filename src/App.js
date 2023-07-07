import React from 'react';
import SurveyForm from './components/SurveyForm';
import ContactForm from './components/ContactForm';
import FruitsSurvey from './components/FruitsSurvey';
import SurveyForm2 from './components/SurveyForm2';
import RestaurantBooking from './components/RestaurantBooking';
import ComponentMount from './components/ComponentMount';
import ComponentMountRestaurant from './components/ComponentMountRestaurant';

// anything to import needs to be in src folder

export default function App(){
    return(
    <React.Fragment>
        <h2> Practice 1 </h2>
        <div>
            <SurveyForm/>
        </div>
        <h2> Practice 2 </h2>
        <div>       
            <ContactForm/>
        </div>
        <h2> Practice 3 </h2>
        <div>
            <FruitsSurvey/>
        </div>
        <h2> Practice 4 </h2>
        <div>
            <SurveyForm2/>
        </div>
        <h2> Practice 5 </h2>
            <RestaurantBooking/>
        <h2> Practice 6 </h2>
            <ComponentMount/>
        <h2> Practice 7 </h2>
            <ComponentMountRestaurant/>
        <h2> Practice 8 </h2>
    </React.Fragment>   
    )
}


