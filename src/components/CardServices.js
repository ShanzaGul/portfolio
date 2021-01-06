import React from 'react'
import {Card} from 'react-bootstrap';
import { Spring,config } from "react-spring/renderprops";
import VisibilitySensor from "./VisibilitySensor";

export default function CardServices({src,title,details}) {
    return (
        <div>
                    <VisibilitySensor once>
                        {({ isVisible }) => (
                        <Spring
                            config={config.slow}
                            delay={600}
                            to={{
                            opacity: isVisible ? 1 : 0,
                            }}
                        >
                            {(props) => (
                           <div className="p-2">
                           <Card className="p-3" style={{ color:"#f6836b",width: '18rem', ...props}}>
                                <Card.Img variant="top" src={src} style={{height:"50px", width:"auto"}} />
                                <Card.Body>
                                    <Card.Title className="text-center font-weight-bold">{title}</Card.Title>
                                    <Card.Text className="text-center">
                                   {details}
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                           </div>
                            )}
                        </Spring>
                        )}
                    </VisibilitySensor>
    
        </div>
    )
}
