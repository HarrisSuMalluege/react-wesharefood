import React from 'react';
import { Modal, ModalHeader, ModalBody, Label, Button, Col, Row  } from 'reactstrap';
import { Control, LocalForm, Errors } from "react-redux-form";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class Reserver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      reservation: "",
      author: "",
      text: "",
      touched: {
        reservation: false,
        author: false,
        text: false,
      },
    };

    // this.toggleModal = this.toggleModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(values) {
    // To initiate the action upon the user submitting the comment form
    this.toggleModal();
    
    console.log(
      "Current state is: " +
        JSON.stringify(values)
    );
    alert(
      "Current state is: " +
        JSON.stringify(values)
    );
  }


  render() {
    return (
      <React.Fragment>
        <div className="cta">
          <h2 className="cta__book-now">
            Good news! We have 4 free courses incoming days!
          </h2>
          <button className="cta__btn" onClick={this.toggleModal}>
            <span className="cta__btn__visible">Book now</span>
            <span className="cta__btn__invisible">Only 4 seats left</span>
          </button>
        </div>

        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          className="reserver"
        >
          <ModalHeader toggle={this.toggleModal}>Reserver</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label md={12} htmlFor="rating">
                  How many seats do you want?
                </Label>
                <Col md={12}>
                  <Control.select
                    model=".reservation"
                    className="form-control"
                    name="reservation"
                    id="reservation"
                    value={this.state.reservation}
                    onChange={this.handleInputChange}
                  >
                    <option>Please choose a value</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={12} htmlFor="author">
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    className="form-control"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    component="div"
                    messages={{
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={12} htmlFor="text">
                  Additional Requirement:
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".text"
                    className="form-control"
                    id="text"
                    name="text"
                    rows={6}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </Row>
              <Button type="submit" value="submit" className="btn btn--green">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}




export default Reserver;