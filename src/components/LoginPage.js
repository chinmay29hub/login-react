import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const LoginPage = () => {
    return (
        <>
            <Container>
                <h1 className="shadow-sm mt-5 p-3 text-center rounded">User Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            
                            <Button variant="primary btn-block">Login</Button>{' '}
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021 Robo Bionics. All Rights Reserved.</h6>
            </Container>
        </>
    );
};

export default LoginPage;