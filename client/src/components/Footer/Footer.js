import React from 'react';
import Swords from "../../assets/reacteteers.png";
import { Row } from "reactstrap";


const Footer = () => {
    return (
        <>
        <div className="footer">
            <Row>
                <h6>This site was slashed together by The Three Reacteteers</h6>
                <img src={Swords} />
            </Row>
        </div>
        </>
    )
}

export default Footer
