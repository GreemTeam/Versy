import React from 'react';
import $ from 'jquery';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 0,
      userFirstName: '',
      userLastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      checked1: false,
      checked2: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  resetState() {
    this.setState({
      userFirstName: '',
      userLastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    });
  }

  handleClick(event) {
    event.preventDefault();
    var data = {};
    for (var keys in this.state) {
      data[keys] = this.state[keys];
    }
    $.post('/signUp', data, function () {
      this.props.redirectSignIn();
      this.resetState();
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleCheckboxChange(event) {
    this.setState({ [event.target.id]: event.target.checked });
  }
  render() {
    return (
      <div>
        <h3>SignUp</h3>
        <form>
          <div className='form_signUp'>
            <div className='user_first_name'>
              <label name='user_first_name'>First Name:</label>
              <br></br>
              <input
                type='text'
                id='user_first_name'
                value={this.state.user_first_name}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <hr></hr>
          <div className='form_signUp'>
            <div className='user_last_name'>
              <label name='user_last_name'>Last Name:</label>
              <br></br>
              <input
                type='text'
                id='user_last_name'
                value={this.state.user_last_name}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <hr></hr>
          <div className='form_signUp'>
            <div className='email'>
              <label name='email'>Email:</label>
              <br></br>
              <input
                type='text'
                id='email'
                value={this.state.email}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <hr></hr>
          <div className='form_signUp'>
            <div className='password'>
              <label name='password'>Password:</label>
              <br></br>
              <input
                type='Password'
                id='password'
                value={this.state.password}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <hr></hr>
          <div className='form_signUp'>
            <div className='confirm_password'>
              <label name='confirm_password'>Confirm Password:</label>
              <br></br>
              <input
                type='Password'
                id='confirm_password'
                value={this.state.confirm_password}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <hr></hr>
          <div className='form_signUp'>
            <div className='phone_number'>
              <label name='phone_number'>Phone Number:</label>
              <br></br>
              <input
                type='text'
                id='phone_number'
                value={this.state.phone_number}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <hr></hr>
          <div className='form_signUp'>
            <div className='gender'>
              <label name='gender'>
                <span>Select your gender:</span>
                <br></br>
                <span>Male: </span>
                <input
                  type='checkbox'
                  checked={this.state.checked1}
                  onChange={this.handleCheckboxChange}
                />
                <span>  Female: </span>
                <input
                  type='checkbox'
                  checked={this.state.checked2}
                  onChange={this.handleCheckboxChange}
                />
              </label>
            </div>
          </div>
          <hr></hr>
          <div className='submit_form'>
            <button onClick={this.handleClick}>Create your account!</button>
          </div>
        </form>
        <br></br>
        <hr></hr>
        <span>
          Already have an account? -
          <button onClick={this.props.redirectSignIn}>Sign In!</button>
        </span>
      </div>
    );
  }
}

export default SignUp;