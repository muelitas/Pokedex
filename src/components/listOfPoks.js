import React from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";

function ListOfPoks(props){
    return(
        <ListGroup>
        {props.poks && props.poks.map((pok) => (
            <ListGroupItem 
                action
                tag="button"
                key={pok.name+String(pok)}
                onClick={props.onClick}
                active={(pok.name == props.selectedPok) ? true:false}
            >
            {pok.name}
            </ListGroupItem>
        ))}
        </ListGroup>
    );
};  

export default ListOfPoks;