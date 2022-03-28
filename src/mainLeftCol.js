import { Component, useState } from "react";

import { useQuery } from "@apollo/client";

import ListOfPoks from "./components/listOfPoks";
import PaginationComp from "./components/pagination";
import SearchByPokName from "./components/searchByPokName";

import {GET_POKEMONS} from "./graphql/queries";

function MainLeftCol(props){
    const [poksToDisplay, setPoksToDisplay] = useState(5);
    const [offset, sestOffset] = useState(0);
    const [pagesToDisplay, setPagesToDisplay] = useState(5);

    const onClickOfPok = (event) => {
        props.onClick(event.target.innerHTML);
    };

    const onClickOfPage = (newOffset) => {
        sestOffset(newOffset);
    };

    const gqlVariables = {
        limit: poksToDisplay,
        offset: offset * poksToDisplay
    };

    const { loading, error, data } = useQuery(
        GET_POKEMONS, 
        { variables: gqlVariables }
    );

    if (error) {
        return `Error: ${error.message}`;
    }else if(loading){
        return <p>Loading ...</p>
    }
    
    return(
        <>
        <ListOfPoks 
            poks = {data.pokemons.results}
            onClick = {(event) => onClickOfPok(event)}
            selectedPok = {props.selectedPok}
        />
        <PaginationComp 
            poksTotalNum = {data.pokemons.count}
            pagesToDisplay = {pagesToDisplay}
            poksToDisplay = {poksToDisplay}
            offset = {offset}
            onClick = {(newOffset) => onClickOfPage(newOffset)}
        />
        <h3>Or search by pokemon name</h3>
        <SearchByPokName />
        </>
    );

}

export default MainLeftCol;