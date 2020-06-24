import React from 'react';



class Newsletters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
    }

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
    console.log("Thank you for subscribing to our official channel: " + JSON.stringify(this.state));
    alert("Thank you for subscribing to our official channel!" );
    event.preventDefault();
    this.resetForm();
  }

  resetForm() {
    this.setState({
      userEmail: ''
    });
  }

    render() {
        return (
          <div className="newsLetters">
            <h2 className="newsLetters__heading-main">Be in the know</h2>
            <h4 className="newsLetters__heading-sub">
              Sign up to receive the latest from Us
            </h4>
            <div className="newsLetters__form">
              <form className="newsLetters__form-signUp" onSubmit={this.handleSubmit}>
                  <input
                    className="newsLetters__form-signUp-input"
                    type="text"
                    required
                    placeholder="Enter your email address.."
                    id="userEmail"
                    name="userEmail"
                    value={this.state.userEmail}
                    onChange={this.handleInputChange}
                  />
                  <button className="newsLetters__form-signUp-btn">
                    sign up
                  </button>
              </form>
            </div>
          </div>
        );
    }

}



export default Newsletters;