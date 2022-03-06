import React from "react";
import { Image } from "react-bootstrap";
import logo from "../../images/my.jpg";
import { Spring, config } from "react-spring/renderprops";
import VisibilitySensor from "../VisibilitySensor";

import { Container, Row, Card, Button } from "react-bootstrap";
export default function About() {
  return (
      <Container>
        <div>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={750}>
            {(props) => (
              <div style={props}>
                <Row className="d-flex justify-content-center pt-1 pb-5">
                  <div>
                    <Image
                      src={logo}
                      roundedCircle
                      style={{ width: "auto", height: "200px" }}
                      fluid
                    />
                  </div>
                </Row>
              </div>
            )}
          </Spring>

          <Row className="justify-content-center pb-5">
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
                    <div style={props}>
                      <Card style={{ width: "50em" , backgroundColor:"#2FA4FF", color:"white"}}>
                        <Card.Body>
                          <Card.Text>
                            I am Frontend Developer currently learning Mern
                            Stack. I graduated from National University of
                            Sciences and Technology as a Computer Engineer. I
                            was always inclined towards creative tasks like art,
                            design, problem-solving and skecthing. During
                            studies I decided to start experimenting with
                            different technologies and during In this process of
                            exploration and self-discovery, I started
                            experimenting with Web development and found that it
                            is something that I really like Then I moved onto
                            web design and enjoyed it even more. On this path I
                            did a couple of internships related to Web
                            Development and since then I am polishing my skills
                            on daily basis My ongoing personal experiments give
                            me plenty of room to explore, take risks and work
                            hard, which is the same mindset that I bring to the
                            table when it comes to creating things for the World
                            Wide Web.
                          </Card.Text>
                          <a href="/work">
                            <Button style={{ backgroundColor: "#0E185F" }}>See My work</Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </Row>
        </div>
      </Container>
  );
}
