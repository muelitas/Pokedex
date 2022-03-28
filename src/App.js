import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'reactstrap';

import MainLeftCol from "./mainLeftCol";
import PokDetails from "./components/pokDetails";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      selectedPok: 'pikachu'
    };

    this.onClickOfPok = this.onClickOfPok.bind(this);
  }

  onClickOfPok(selectedPok){
    this.setState({
      selectedPok: selectedPok
    });
  }

  render(){
    return(
      <>
      <Container>
        <Row className='text-center'>
          <Col sm="12">
            <h1>Pokedex</h1>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col sm="6">
            <MainLeftCol 
              onClick = {this.onClickOfPok}
              selectedPok = {this.state.selectedPok}
            />
          </Col>
          <Col sm="6">
            <PokDetails 
              pokName = {this.state.selectedPok}
            />
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default App;