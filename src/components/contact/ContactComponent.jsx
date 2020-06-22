import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Label, Button } from 'reactstrap'; 

import Reserver from '../home/reserver.component';

class Contact extends Component {
    render() {
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

                <Form className="form">
                  <FormGroup class="form__group">
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Full Name"
                      className="form__input"
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
                    />
                    <Label htmlFor="email" className="form__label">
                      Email
                    </Label>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      className="form__input"
                    />
                    <Label htmlFor="phone" className="form__label">
                      Phone Number
                    </Label>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="textarea"
                      id="feedback"
                      name="feedback"
                      rows="8"
                      placeholder="Please kindly provide your messages"
                      className="form__input"
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
