import React, { Component } from 'react';
// import { Control, Form, Errors } from 'react-redux-form';
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Label, Button } from 'reactstrap'; 

import Reserver from '../home/reserver.component';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phoneNum: "",
      messages: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Setup the form change method
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }
  // Setup submit method
  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is " + JSON.stringify(this.state));
    event.preventDefault();
  }
    
    render() {
        // let bgImg = require('../../../public/images/nat-10.jpg');
        return (
          <div className="section-contact" id="sectionBook">
            <div className="contact">
              <div className="breadcrumbBar">
                <Breadcrumb className="breadcrumbBar">
                  <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
              </div>
              <Reserver />
              <div className="contact__form">
                <div className="contact__title">
                  <h2 className="heading-secondary">Contact us</h2>
                  <p className="contact__title--text">
                    Should you have any inquiry, please feel to shoot us an
                    email at support@wesharefood.com, we'll get back to you as
                    soon as we can.
                  </p>
                  <p className="contact__title--text">
                    <b>Phone:</b> 612-888-FOOD
                  </p>
                  <p className="contact__title--text">
                    <b>Address:</b> 000 Nicollet Mall, Minneapolis, MN 55401
                  </p>
                </div>

                <Form className="form" onSubmit={this.handleSubmit}>
                  <FormGroup className="form__group">
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Full Name"
                      className="form__input"
                      value={this.state.fullName}
                      onChange={this.handleInputChange}
                    />
                    <Label htmlFor="fullName" className="form__label">
                      Full Name
                    </Label>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="form__input"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                    <Label htmlFor="email" className="form__label">
                      example@gmail.com
                    </Label>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="tel"
                      id="phoneNum"
                      name="phoneNum"
                      placeholder="Phone Number"
                      className="form__input"
                      value={this.state.phoneNum}
                      onChange={this.handleInputChange}
                    />
                    <Label htmlFor="phone" className="form__label">
                      +16128888888
                    </Label>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="textarea"
                      id="messages"
                      name="messages"
                      rows="4"
                      placeholder="Please kindly provide your messages"
                      className="form__input"
                      value={this.state.messages}
                      onChange={this.handleInputChange}
                    ></Input>
                    <Label htmlFor="feedback" className="form__label">
                      Your Messages
                    </Label>
                  </FormGroup>
                  <Button className="btn btn--green">Submit&rarr;</Button>
                </Form>
              </div>
            </div>
          </div>
        );
    }
}

export default Contact;
