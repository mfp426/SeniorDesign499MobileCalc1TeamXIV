
  import React from "react";
  import { Container, Row, Col } from 'react-bootstrap';
  import SearchBarCategory from '../components/searchCategory'; // Import the SearchBar component
  import SearchBarFormula from '../components/searchFormula'; // Import the SearchBar component



function SearchPage(props){
    return(
        
        <Container>
        <Row className="my-4">
          <Col md={6}>
            <h2>Search Category:</h2>
            <br></br>
            <SearchBarCategory/>
          </Col>
          <br></br><br></br>
          
        </Row>
        <Row className="my-4">
          <Col md={6}>
            <h2>Search Formulas:</h2>
            <br></br>
            <SearchBarFormula/>
            
          </Col>
          <br></br><br></br>
          
        </Row>

      </Container>

        
    );
   
}
export default SearchPage;
