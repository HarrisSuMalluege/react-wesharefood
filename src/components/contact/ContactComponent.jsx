import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Label, Button } from 'reactstrap'; 

import Reserver from '../home/reserver.component';

class Contact extends Component {
    render() {
        return (
            <div className="section-contact" id="sectionBook">
                    <div className="contact">
                        <div className="contact__form">
                            <div className="contact__title">
                                <h2 className="heading-secondary">
                                    Contact us
                                </h2>
                                <p className="contact__title--text">Should you have any inquiry, please feel to shoot us an email at support@wesharefood.com, we'll get back to you as
                                    soon as we can.</p>
                                <p className="contact__title--text"><b>Phone:</b> 612-888-FOOD</p>
                                <p className="contact__title--text"><b>Address:</b> 000 Nicollet Mall, Minneapolis, MN 55401</p>
                            </div>

                            <Form className='form'>
                                <FormGroup className="form__group">
                                    <Input type='text' id='name' name='name' className='form__input' />
                                    <Label htmlFor="name" className="form__label">Full name</Label>
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <Input type='text' id='email' name='email' className='form__input' />
                                    <Label htmlFor="name" className="form__label">Email address</Label>
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <Input type='number' id='phone' name='phone' className='form__input' />
                                    <Label htmlFor="name" className="form__label">Phone number</Label>
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <Input type='number' id='phone' name='phone' className='form__input' />
                                    <Label htmlFor="name" className="form__label">Phone number</Label>
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
