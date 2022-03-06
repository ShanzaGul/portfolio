import React from 'react'
import ServiceCard from '../CardServices'
import {Row} from 'react-bootstrap';
import img from '../../images/ui-design.png'
import img1 from '../../images/fd.png'
import img2 from '../../images/wd.png'


export default function MainCardServices() {
    return (
    <div  className="mcsmargin pb-5">
        <div style={{ borderRadius:"5px"}} className="p-3 bgg">
        <Row className="justify-content-center">
            <div className="cardflex p-2">
                <ServiceCard src={img2}  title={"Web Desgin"} details={"I design Simple and Elegant websites and webapps while ensuring ease of use"}/>
                <ServiceCard src={img1}  title={"Frontend Development"} details={"I develop responsive cross-platform Web Applications using ReactJs"}/>
                <ServiceCard src={img}  title={"UI/UX Design"} details={"I create Web Applications built for an optimal user experience with user friendlly interface"}/>
             </div>

        </Row>

        </div>
    </div>
    )
}
