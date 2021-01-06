import React from 'react'
import {Card} from 'react-bootstrap';
import { Spring,config } from "react-spring/renderprops";
import VisibilitySensor from "./VisibilitySensor";

export default function card({src,percentage}) {
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
                            <Card className="p-2" style={{ color:"#f6836b",width: '8rem', ...props}} >
                                    <Card.Img variant="top" src={src} style={{height:"70px", width:"auto"}}/>
                                    
                                        <Card.Text className="text-center p-2 font-weight-bold">
                                        {percentage}
                                        </Card.Text>
                                    
                           </Card>
                           </div>
                            )}
                        </Spring>
                        )}
                    </VisibilitySensor>
    
        </div>
    )
}
