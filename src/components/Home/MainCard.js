import React from 'react'
import Cardd from '../Card'
import {Row} from 'react-bootstrap';
import img from '../../images/bootstrap-4.svg'
import img1 from '../../images/css3-original.svg'
import img2 from '../../images/html5-original.svg'
import img3 from '../../images/git-original.svg'
import img4 from '../../images/github-original.svg'
import img5 from '../../images/javascript-original.svg'
import img6 from '../../images/react-original.svg'
import img7 from '../../images/sass-original.svg'
import img8 from '../../images/react-bootstrap.svg'
import img9 from '../../images/redux.svg'

import img11 from '../../images/mysql.svg'
import img12 from '../../images/firebase.png'
import img13 from '../../images/express.png'
import img14 from '../../images/nodejs.svg'
import img15 from '../../images/mongodb_original_wordmark_logo_icon_146425.svg'

export default function MainCard() {
    return (
        <div style={{ borderRadius:"5px"}} className="p-3 bgg">
        <Row className="justify-content-center">
            <div className="cardflex p-2">
                <Cardd src={img2}  percentage={"Level 9"}/>
                <Cardd src={img1}  percentage={"Level 9"}/>
                <Cardd src={img7}  percentage={"Level 9"}/>
                <Cardd src={img}  percentage={"Level 9"}/>
                <Cardd src={img8}  percentage={"Level 9"}/>
             </div>

        </Row>


            <Row className="justify-content-center">
            <div className="cardflex p-2">
                <Cardd src={img6}  percentage={"Level 7"}/>
                <Cardd src={img9}  percentage={"Level 5"}/>
                <Cardd src={img5}  percentage={"Level 8"}/>
                <Cardd src={img4}  percentage={"Level 8"}/>
                <Cardd src={img3}  percentage={"Level 8"}/>
             </div>
            </Row>

             <Row className="justify-content-center">
             <div className="cardflex p-2">
                <Cardd src={img11}  percentage={"Level 5"}/>
                <Cardd src={img12}  percentage={"Level 5"}/>
                <Cardd src={img13}  percentage={"Level 4"}/>
                <Cardd src={img14}  percentage={"Level 4"}/>
                <Cardd src={img15}  percentage={"Level 4"}/>
             </div>
             </Row>

        </div>
    )
}
