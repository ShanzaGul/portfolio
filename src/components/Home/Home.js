import React from 'react'
import {Container, Image,Row, Button} from 'react-bootstrap';
import MainCard from './MainCard'
import logo from '../../images/hero.png'
import MainCardHeading from './MainCardHeading'
import { Spring,config } from "react-spring/renderprops";
import VisibilitySensor from "../VisibilitySensor";
import MainServiceHeading from './MainServiceHeading';
import MainCardServices from './MainCardServices';

export default function Home() {
    return (
        <div>
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
                <Row className="justify-content-center" style={{color:'#0E185F',fontFamily: 'Montserrat'}}>
                    <div style={{display:"flex", flexDirection:"row"}}>
                         <h4 style={{fontWeight:"600"}}>Hi, I am Shanza Gul</h4>
                    </div>
                </Row>
                <Row className="justify-content-center text-center pb-5 text-wrap">
                    <div style={{fontWeight: "600", color: '#2FA4FF',fontFamily: 'Montserrat' ,width:"50rem"}}>
                        <h1>I design and develop good looking user interfaces and craft enriching user experience</h1>
                        <a href="mailto:gulshanza77@gmail.com?subject=Hello&body=This is my message">
                            <Button style={{backgroundColor:"#0E185F", borderColor:"white"}}>Contact Me !</Button></a>
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
