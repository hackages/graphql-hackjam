import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {isValidForm, validateInput} from '../../utils/index';
import {gql} from 'react-apollo'; import graphql from 'react-apollo/lib/graphql'; import {SuccessModal} from '../modal/index';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validation: {},
      data: {},
      validForm: true,
      userNotFound: false,
      showSuccessModel: false
    };
  }

  handleInput = (event, defaultClass = 'input') => {
    this.setState({
      data : {
        ...this.state.data,
        [event.target.name]: event.target.value
      },
      validation: {
        ...this.state.validation,
        [event.target.name]: validateInput(event) ? defaultClass :  defaultClass + ' is-danger'
      }
    });
  };

  submitLogin = () => {
    if(isValidForm(2, this.state.validation)) {
      //TODO call the mutation function that graphql connector passed in the props
      //Pass the variables here
      this.props.callTheMutation()
        .then((re) => {
          this.setState({
            validForm : true,
            userNotFound: false,
            showSuccessModel: true
          });
        })
        .catch(err => {
          this.setState({
            userNotFound: true
          });
          throw err;
        })
    } else {
      this.setState({
        validForm : false
      })
    }
  };

  render() {
    const {validation} = this.state;
    return <div className="section">
      <SuccessModal
        isVisible={this.state.showSuccessModel}
        hide={() => this.setState({
          showSuccessModel : false
        })}
        title="Success"
        text="You are successfully logged in"
      />
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-4 is-offset-4">
            <h1 className="title">
              Sign in
            </h1>
            <div className="box">
              <label className="label">Email*</label>
              <p className="control">
                <input
                  className={validation.email || 'input'}
                  type="email"
                  placeholder="jsmith@example.org"
                  name="email"
                  required
                  onChange={this.handleInput}
                />
              </p>
              <label className="label">Password*</label>
              <p className="control">
                <input
                  className={validation.password || 'input'}
                  type="password"
                  placeholder="●●●●●●●"
                  name="password"
                  required
                  onChange={this.handleInput}
                />
              </p>
              {
                this.state.userNotFound && <p>
                  User not found
                </p>
              }

              <hr/>

              <p className="control">
                <button
                  className={
                    ["button is-outlined is-large is-fullwidth"]
                      .concat(this.state.validForm ? 'is-info' : 'is-danger')
                      .join(' ')
                  }
                  onClick={this.submitLogin}
                >Login</button>
              </p>
            </div>
            <p className="has-text-centered">
              <Link to="/authentication/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>;
  }
}

//TODO write a mutation to log the user in
//This is typical to graph.cool, get back the token
// But you don't have to do anything with it
// (You could store it in your local storage and use it in other requests)
const mutation = undefined;

//Use graphql connector from react-apollo to make the mutation available to your component
 const deleteThisWhenImplementing = {
   callTheMutation: () => {
     return new Promise((resolve, reject) => reject("You're not done"));
   }
 };

 //TODO connect with graphql HOC from react-apollo
const LoginData = () => <Login {...deleteThisWhenImplementing}/>  ;

export default LoginData;