import React, { useState } from "react";
import "./NasaCard.css";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from "styled-components";

const Heading = styled.h3`
    font-size: 1.5rem;
    text-align: center;
    color: white;
`;

function NasaCard (props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
    <div className="Nasa-Card">
        <img className="apodImg" alt="NASA APOD" src={props.imgUrl}/>
        <div className="apodDesc">
        <Heading>Date: {props.date}</Heading>
            <Button color="info" onClick={toggle} style={{ marginBottom: '1rem'}}>{props.title}</Button>
            <Collapse isOpen={isOpen}>
                <Card style={{ backgroundColor: 'lightgrey'}}>
                    <CardBody>
                    {props.explanation}
                    </CardBody>
                </Card>
                </Collapse>
        </div>
    </div>
);
};

export default NasaCard;