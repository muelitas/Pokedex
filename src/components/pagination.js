import React, { Component, useState } from "react";
import { Pagination, PaginationItem, PaginationLink, Button } from "reactstrap";
//TODO given that I obtain a length when performing query, I can implement
//  "go to the end" pagination link as well.


function NextPage(props){
    const handleClick = () => {
        props.onClick();
    }

    return (
        <PaginationItem key={props.customKey}>
            <PaginationLink 
                href="#" 
                next
                onClick = {() => handleClick()}
            ></PaginationLink>
        </PaginationItem>
    );
}

function PrevPage(props){
    const handleClick = () => {
        props.onClick();
    }

    return (
        <PaginationItem key={props.customKey}>
            <PaginationLink 
                href="#" 
                previous
                onClick = {() => handleClick()}
            ></PaginationLink>
        </PaginationItem>
    );
}

function PaginationComp(props){
    const [selectedPage, setSelectedPage] = useState(props.offset);
    const lastIdxPossible = Math.floor((props.poksTotalNum - 1)/props.poksToDisplay);

    const handlePageClicked = (newOffset) => {
        props.onClick(parseInt(newOffset)-1);
        setSelectedPage(parseInt(newOffset)-1);
    }

    const handleNextClicked = () => {
        props.onClick(props.offset + 1);
        setSelectedPage(selectedPage + 1);
    }

    const handlePrevClicked = () => {
        props.onClick(props.offset - 1);
        setSelectedPage(selectedPage - 1);
    }

    let i = 0, middlePages = [];
    let start = Math.max(0, (selectedPage - Math.floor(props.pagesToDisplay/2)));

    while(i < props.pagesToDisplay){
        middlePages.push(
            <PaginationItem 
                    key={start + i}
                    active = {((start + i) === selectedPage) ? true : false}
                >
                <PaginationLink 
                    href="#"
                    onClick = {e => handlePageClicked(e.target.innerHTML)}
                >
                    {start + i + 1}
                </PaginationLink>
            </PaginationItem>
        );
        i += 1;
    }

    const displayNext = (props.offset + props.pagesToDisplay > lastIdxPossible) ? false : true;
    const displayPrev = (props.offset < Math.ceil(props.pagesToDisplay/2)) ? false : true;
    //TODO make sure edge cases are working

    return(
        <Pagination>
            {displayPrev &&
                <PrevPage 
                    customKey={"prevpage"}
                    onClick = {() => handlePrevClicked()}
                />
            }
            {middlePages}
            {displayNext &&
                <NextPage 
                    customKey={"nextpage"}
                    onClick = {() => handleNextClicked()}
                />
            }
        </Pagination>
    ); 
}
export default PaginationComp;