import React from 'react';
import NavBar from './NavBar';

// Importing React Router components for navigation
import { Link } from "react-router-dom";

// Importing Bootstrap components for styling
import { Container, Row, Col, Card, Button, Form, FormGroup, FormControl, Alert } from 'react-bootstrap';

function LoanPage() {
  return (
    <div>
      <NavBar />
      <Container fluid className="p-3">
        <Row>
          <Col md={3}>
            <Card>
              <Card.Header>Loan Application</Card.Header>
              <Card.Body>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><Link to="/PersonalDetails">Personal Details</Link></li>
                  <li className="list-group-item"><Link to="/PropertyDetails">Property Details</Link></li>
                  <li className="list-group-item"><Link to="/Identity">Identity</Link></li>
                  <li className="list-group-item"><Link to="/CreditCard">Credit Card</Link></li>
                  <li className="list-group-item"><Link to="/Assets">Assets</Link></li>
                  <li className="list-group-item"><Link to="/Income">Income</Link></li>
                  <li className="list-group-item"><Link to="/Address">Address</Link></li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={9}>
            <h2>Apply for a Loan</h2>
            <p>Here you can apply for a loan. Please fill out the application form below.</p>
            <Form>
              <FormGroup controlId="loanAmount">
                <Form.Label>Loan Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter the loan amount" />
              </FormGroup>
              <FormGroup controlId="loanTerm">
                <Form.Label>Loan Term</Form.Label>
                <Form.Control type="number" placeholder="Enter the loan term in years" />
              </FormGroup>
              <FormGroup controlId="loanPurpose">
                <Form.Label>Loan Purpose</Form.Label>
                <Form.Control as="select">
                  <option>Select the loan purpose</option>
                  <option>Home purchase</option>
                  <option>Home improvement</option>
                  <option>Debt consolidation</option>
                  <option>Other</option>
                </Form.Control>
              </FormGroup>
              {/* Add more form fields here */}

              <Button variant="primary" type="submit">Submit</Button>

            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoanPage;
