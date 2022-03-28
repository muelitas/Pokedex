import React from 'react';
import { useQuery } from "@apollo/client";
import RotatableItem from "./rotatableItem";

import {GET_POKEMON} from "../graphql/queries";

function PokDetails(props){
    const gqlVariables = {
        name: props.pokName
    };

    const { loading, error, data } = useQuery(
        GET_POKEMON, 
        { variables: gqlVariables }
    );

    if (loading) return <p>Loading...</p>;
    if (error) {
        return `Error: ${error.message}`;
    }else{
        // console.dir(data);
        // let finalContent = formatGqlResponse(data.pokemons.results);
        return(
            <>
            {/* //TODO Add default space for Moves and Types*/}
            {/* //TODO Change style of arrows */}
            <p>{props.pokName}</p>
            <h5>
                <strong> Moves: </strong>
                    <RotatableItem 
                        items = {data.pokemon.moves}
                        objectProps = {["move", "name"]}
                    />
            </h5>
            <h5>
                <strong> Types: </strong>
                    <RotatableItem 
                        items = {data.pokemon.types}
                        objectProps = {["type", "name"]}
                    />
            </h5>
            </>
        );
    }
}

export default PokDetails;