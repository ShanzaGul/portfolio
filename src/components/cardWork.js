import React from 'react'
import {Card} from 'react-bootstrap'


export default function cardWork({src,title,link,text}) {
    return (
        <div className="pt-5">
        <a href={link}>
        <Card>
    <Card.Img variant="top" src={src} style={{height:"auto"}} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
      <button className="btn btn-info">Live Preview</button>
    </Card.Body>
  </Card>
        </a>
  
        </div>
    )
}
