import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';


import img from '../images/calculator.JPG'
import img1 from '../images/caloriecalculator.JPG'
import img2 from '../images/colorcycle.JPG'
import img3 from '../images/countdown.JPG'
import img4 from '../images/dashboard.JPG'
import img5 from '../images/decimaltobinary.JPG'
import img6 from '../images/dress.JPG'
import img7 from '../images/driving.JPG'
import img8 from '../images/leadersboard.JPG'
import img9 from '../images/quizapp.JPG'
import img10 from '../images/SweetSpiceWebsite.JPG'




import Cardd from './cardWork'
export default function Work() {
    return (
        <div style={{backgroundColor:'#5ec9cc'}}>
        <Container >
            <Row className="justify-content-center pt-2 pb-2">
                <Col>
                
                <Cardd src={img10} title={"Sweet Spice Cafe"} link={"https://xl4pe.csb.app/"}
                text={"This is Fully working Food Business WebApp, Customer can Order the food online after choosing from menu"} />
                <Cardd src={img4} title={"Dashboard App"} 
                link={"https://f2sk3.csb.app/"} text={"A dashboard App that is used to displaythe data in the different Charts after evaluation"}/>
                <Cardd src={img} title={"Calculator"} link={"https://shanzagul.github.io/Calculator/"} text={"Calculator app can be used to eavaluate the mathematical operations based on inputs by User "} />
                <Cardd src={img8} title={"Leadersboard"} link={"https://7togr.csb.app/"} text={"Leaderboard is to maintain the ranking of different users"} />
                </Col>

            <Col>
            <Cardd src={img7} title={"Alex Driving School"} link={"http://alexdrivingschool.42web.io/index.php?i=1"} text={"This webapplication provides the infromation about the driving school and to enroll user can apply and choose from different courses"} />
            <Cardd src={img9} title={"Quiz App"} link={"https://4gy7c.csb.app/"} text={"Simple Application for taking a Online Mutiple Choice Quiz"} />
            <Cardd src={img1} title={"BMR & Calorie Calculator"} link={"https://h4iv3.csb.app/"} text={"Body Mass Ratio and Daily Calorie can be calculated"}/>
            <Cardd src={img3} title={"Countdown Timer"} link={"https://shanzagul.github.io/CountDownTimer/"} text={"Simple Application for counting down till an event"} />
            </Col>

            <Col>
            <Cardd src={img6} title={"DressUp"} link={"https://shanzagul.github.io/DressUp/"} text={"A user can make an authenticated account and upload the pictures of dresses and then different options of the outfits is shown"}  />
            <Cardd src={img5} title={"Decimal to Binary Converter"} link={"https://shanzagul.github.io/Decimal_to_Binary/"} text={"Simple Application to convert Decimal numbers to Binary numbers"} />
            <Cardd src={img2} title={"Color Cycle Generator"} link={"https://shanzagul.github.io/Color-Cycle-Generator/"} text={"Generates the Color Cycle based on the input given"} />
            </Col>
            
            </Row>
           
            
    
        </Container>
       
    

    

   
        </div>
    )
}
