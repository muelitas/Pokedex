import {Component} from 'react';
import {LeftArrow, RightArrow} from './subComponents';

class RotatableItem extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            currItemIdx: 0,
            items: this.props.items,
            itemsCount: this.props.items.length,
            objectProps: this.props.objectProps
        };

        this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
        this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    }

    handleLeftArrowClick(){
        let newItemIdx = this.state.currItemIdx;
        if(this.state.currItemIdx > 0){
            newItemIdx -= 1;
        }else{
            console.log("We have reached the beginning of the array.");
        }

        this.setState({
            currItemIdx: newItemIdx
        });
    }

    handleRightArrowClick(){
        let newItemIdx = this.state.currItemIdx;
        if(this.state.currItemIdx < this.state.itemsCount - 1){
            newItemIdx += 1;
        }else{
            console.log("We have reached the end of the array.");
        }
        
        this.setState({
            currItemIdx: newItemIdx
        });
    }

    getItem(){
        let {items, currItemIdx, objectProps} = this.state;
        let item = items[currItemIdx];
        for (let objectProp of objectProps){
            item = item[objectProp];
        }
        return item;
    }

    render(){
        let item = this.getItem();
        return(
            <>
                <LeftArrow 
                    currItemIdx = {this.state.currItemIdx}
                    onClick = {this.handleLeftArrowClick}
                />
                {item}
                <RightArrow 
                    currItemIdx = {this.state.currItemIdx}
                    itemsCount = {this.state.itemsCount}
                    onClick = {this.handleRightArrowClick}
                />
            </>
        );
    }
}
export default RotatableItem;