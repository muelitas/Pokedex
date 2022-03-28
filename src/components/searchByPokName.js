import {useState} from 'react';
import {Form, FormGroup, Input, Button, Label, FormText, FormFeedback} from 'reactstrap';

function SearchByPokName(props){
    const [pokName, setPokName] = useState('pikachu');
    const [pokNameMsg, setPokNameMsg] = useState('');
    const [pokNameMsgColor, setPokNameMsgColor] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.dir(e.target.name);
        //validatePokName();
    }

    const validatePokName = (pokName) => {
        //If here is a number or a special character
        if(!(/^[A-Za-z\s]*$/.test(pokName))){
            setPokNameMsg("Pokemon names should not have numbers or special characters");
            setPokNameMsgColor("text-danger");
        }else if(!pokName){
            setPokNameMsg("Pokemon name cannot an empty string");
            setPokNameMsgColor("text-danger");
        }else{
            if(pokNameMsg){
                setPokNameMsg("");
                setPokNameMsgColor("");
            }
        }
    }

    const handlePokNameChange = (e) => {
        validatePokName(e.target.value);
        setPokName(e.target.value);
    }

    //TODO implement auto complete of text
    return(
        <>
        <Form onSubmit={(e) => handleFormSubmit(e)}>
            <FormGroup>
                <Label>Pokemon Name:</Label>
                <Input 
                    id = "pokName"
                    name = "pokName"
                    placeholder="i.e. pikachu"
                    type = "text"
                    onChange = {(e) => handlePokNameChange(e)}
                    valid = {pokNameMsgColor === "text-success"}
                    invalid = {pokNameMsgColor === "text-danger"}
                />
                <FormFeedback className={pokNameMsgColor}>{pokNameMsg}</FormFeedback>
                
            </FormGroup>
            <Button>
                Submit
            </Button>
        </Form>
        </>
    );
}

export default SearchByPokName;