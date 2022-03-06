import React from 'react'
import {Row} from 'react-bootstrap';
import { Spring} from "react-spring/renderprops";
import VisibilitySensor from "../VisibilitySensor";
const centeredStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    color : "white"
  };
export default function MainServiceHeading() {
    return (
        <div style={{...centeredStyles, overflow: "hidden",height: "100vh"}} >
        <Row>
        <VisibilitySensor once>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateX(0)"
                  : "translateX(-200px)",
              }}
            >
              {(props) => (
                <h1 style={{ fontSize:"74px", textAlign:"center", backgroundColor: "rgba(47, 164, 255, 0.7)",
                  padding: "16px 32px",...props }}>My Services</h1>
              )}
            </Spring>
          )}
        </VisibilitySensor>
                    </Row>
        </div>
    )
}
