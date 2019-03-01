import React, { Component } from 'react';
import SettingsNav from './SettingsNav';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export class AccountPage extends Component {
    render() {
        return (
            <div className="sub-setting-page">
                <SettingsNav />
                <Container className="settings-container">
                    <Row>
                        <Col sm="12" md="6" className="offset-md-3">
                        <h4>Personal</h4>
                        <Form>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" />
                                
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">Phone number</Label>
                                <Input type="tel" name="phone" id="phone" />
                            </FormGroup>
                            <Button style={{float: 'right'}}>Save</Button>
                        </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="6" className="offset-md-3">
                        <h4>Password</h4>
                            
                        
                        <Form>
                            <FormGroup>
                                <Input type="password" name="password" id="password" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="confirm" id="confirm" placeholder="confirm" />
                            </FormGroup>
                            <Button>Reset password</Button>
                        </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export class BillingPage extends Component {
    render() {
        return (
            <div className="sub-setting-page">
                <SettingsNav />
                <h1>BILLING</h1>
            </div>
        );
    }
}

export class DisplayPage extends Component {
    render() {
        return (
            <div className="sub-setting-page">
                <SettingsNav />
                <h1>DISPLAY</h1>
            </div>
        );
    }
}

export class AboutPage extends Component {
    render() {
        return (
            <div className="sub-setting-page">
                <SettingsNav />
                <Container style={{marginTop: "2%"}} className="settings-container">
                    <Row>
                        
                        <Col sm="12" md="6" className="offset-md-3">
                        <h4>About</h4>
                            <p>
                                We're just a couple a' dudes being guys.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="6" className="offset-md-3">
                            Find our company website&nbsp;<a href="https://i.imgur.com/EzQZz.jpg">here</a>.
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export class FAQPage extends Component {
    render() {
        return (
            <div className="sub-setting-page">
                <SettingsNav />
                <h1>FAQ</h1>
            </div>
        );
    }
}