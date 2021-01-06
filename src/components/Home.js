import React from 'react'
import {Container, Image,Row} from 'react-bootstrap';
import MainCard from './MainCard'
import logo from '../images/homebg.png'
import MainCardHeading from './MainCardHeading'
import { Spring,config } from "react-spring/renderprops";
import VisibilitySensor from "./VisibilitySensor";
import MainServiceHeading from './MainServiceHeading';
import MainCardServices from './MainCardServices';

export default function Home() {
    return (
        <div style={{backgroundColor:'#c85a53'}}>
        <Container fluid>
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            delay={750}>
            {props => <div style={props}>
            <Row className="d-flex justify-content-center pt-1 pb-5">
            <div>
              <Image src={logo}  style={{width:"auto", height:"250px"}} fluid/>
            
                 </div>
            </Row>
            </div>}
            </Spring>

            <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            delay={1500}>
            {props => 
            <div style={props}>
                <Row className="justify-content-center pb-5" style={{fontSize: "15vw", fontWeight: "600", color:'white',fontFamily: 'Montserrat'}}>
                    <div>
                         <h6>Hi, I am Shanza Gul</h6>
                    </div>
                </Row>
                <Row className="justify-content-center text-center pb-5 text-wrap">
                    <div style={{fontWeight: "600", color: 'silver',fontFamily: 'Montserrat' ,width:"50rem"}}>
                        <h1>I design and develop good looking user interfaces and craft enriching user experience</h1>
                    </div>
                </Row>
            </div>}
            </Spring>
            
            <MainCardHeading /> 

            <VisibilitySensor once>
                        {({ isVisible }) => (
                        <Spring
                            config={config.default}
                            delay={100}
                            to={{
                            opacity: isVisible ? 1 : 0,
                            }}
                        >
                            {(props) => (
                                <MainCard style={props} />
                            )}
                        </Spring>
                        )}
                    </VisibilitySensor>
           
            <MainServiceHeading />
            
            
            <VisibilitySensor once>
                        {({ isVisible }) => (
                        <Spring
                            config={config.default}
                            delay={100}
                            to={{
                            opacity: isVisible ? 1 : 0,
                            }}
                        >
                            {(props) => (
                                <MainCardServices style={props}/>
                            )}
                        </Spring>
                        )}
                    </VisibilitySensor>


        </Container>
            
        </div>
       
    )
}
