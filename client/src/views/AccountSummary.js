import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { IoIosContact, IoIosExit } from 'react-icons/io';
import ReservationDisplay from './ReservationDisplay';
import { logout } from '../_actions/userActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogoutModal from './LogoutModal';


class AccountSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            userDetails: JSON.parse(localStorage.getItem('user')),
        }
    }

    componentDidMount() {
        if (this.props.reservation) {
            const te = new Date(this.props.reservation.end);
            const t = te.getTime() - Date.now();
            console.log(new Date(t).getMinutes());
            this.setState({
                timeLeft:  new Date(t).getMinutes()
            })
        }
        
    }

    handleLogout =() => {
        this.props.dispatch(logout());
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <Container className="account-container">
                <Row>
                    <LogoutModal logout={this.handleLogout} toggle={this.toggle} isOpen={this.state.modal} onClick={this.toggle} />
                    <Col sm="12" md="6" className="offset-md-3">
                        <p style={{margin:"0px"}} align="center"><Link to="/settings/account"><IoIosContact size="256"/></Link></p>
                        <h2 align="center">{this.state.userDetails.firstname}</h2>
                        <div style={{textAlign: 'center'}}><Button color="info" onClick={this.toggle}>Log out<IoIosExit size="24"/></Button></div>
                        <br />
                        <p>Current reservation:</p>
                        <ReservationDisplay timeLeft={this.state.timeLeft} reservation={this.props.reservation} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    const { reservation } = state.reservation;
    return {
        reservation,

    }
}
export default connect(mapStateToProps)(AccountSummary);