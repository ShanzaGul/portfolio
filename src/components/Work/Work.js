import React from "react";
import { Container, Row, Col , Button } from "react-bootstrap";

import img6 from "../../images/dress.JPG";
import img10 from "../../images/SweetSpiceWebsite.JPG";
import img1 from '../../images/xcomclone.PNG'
import img2 from '../../images/keepnotes.PNG'

import Cardd from "../cardWork";
export default function Work() {
  return (
      <Container>
        <Row className="justify-content-center pt-2 pb-2">
          <Col>
            <Cardd
             src={img1}
             title={"Xcom Clone"}
             link={"https://xcomclone.netlify.app/"}
             text={"A project showcasing the frontend skills, using vibrant colors and animations and a modern approach towards design"}>
            </Cardd>

            <Cardd
              src={img10}
              title={"Sweet Spice Cafe"}
              link={"https://xl4pe.csb.app/"}
              text={
                "This is Fully working Food Business WebApp, Customer can Order the food online after choosing from menu"
              }
            />
          </Col>


          <Col>

          <Cardd
             src={img2}
             title={"Keep Notes Mern Application"}
             link={"https://keepnotesmern.netlify.app/auth"}
             text={"This is a Clone of Google Keep, It has web token and google sign in authentication and also performs the CRUD operations"}>
            </Cardd>


            <Cardd
              src={img6}
              title={"DressUp"}
              link={"https://shanzagul.github.io/DressUp/"}
              text={
                "A user can make an authenticated account and upload the pictures of dresses and then different options of the outfits is shown"
              }
            />
          </Col>
        </Row>
        <Row className="justify-content-center pb-4 pt-4">
            <a href="https://github.com/ShanzaGul">
            <Button size="lg" style={{backgroundColor: "#0E185F"}}>
               Click For More Projects
            </Button>
            </a>
          
        </Row>
      </Container>
  );
}
