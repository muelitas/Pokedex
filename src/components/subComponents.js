import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export function LeftArrow(props){
    if(props.currItemIdx > 0){
        return (
            <FontAwesomeIcon 
                onClick={props.onClick} 
                icon={faArrowLeft} 
                style={{cursor: "pointer"}} 
            />
        )
    }else{
        return (null);
    }
}

export function RightArrow(props){
    if((props.currItemIdx < props.itemsCount - 1) && (props.itemsCount != 1)){
        return (
            <FontAwesomeIcon 
                onClick={props.onClick} 
                icon={faArrowRight} 
                style={{cursor: "pointer"}} 
            />
        )
    }else{
        return (null);
    }
}

