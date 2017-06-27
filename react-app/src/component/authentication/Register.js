import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {isValidForm, validateInput} from '../../utils/index';
import {gql, graphql} from 'react-apollo'; import {SuccessModal} from '../modal/index';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validation: {},
      data: {},
      showSuccessModel: false,
      validForm: true
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

  submitRegistration = () => {
    if(isValidForm(7, this.state.validation)) {
      const {passwordConfirmation, ...newUser} = this.state.data;
      //TODO call the mutation graphql HOC passes in the props
      //Pass variables here
      this.props.registerUser()
      .then(() => {
          this.setState({
            showSuccessModel: true,
            validForm : true
          });
      })
    } else {
      this.setState({
        validForm : false
      })
    }
  };

  render() {
    const {data = {}, validation= {}} = this.state;
    return <div className="section">
      <div className="container">
        <SuccessModal
          isVisible={this.state.showSuccessModel}
          hide={() => this.setState({
            showSuccessModel : false
          })}
          title="Success"
          subTitle={`@${this.state.data.publicName}`}
          text="You are successfully registered"
        />
        <div className="columns is-vcentered">
          <div className="column is-4 is-offset-4">
            <h1 className="title">
              Register an Account
            </h1>
            <div className="box">
              <label className="label">Username*</label>
              <p className="control">
                <input
                  className={validation.username || 'input'}
                  type="text"
                  name="username"
                  placeholder="jsmith"
                  min="3"
                  max="20"
                  required
                  value={data.username || ''}
                  onChange={this.handleInput}
                />
              </p>
              <label className="label">Tweeter handle*</label>
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">
                    @
                  </a>
                </p>
                <p className="control">
                  <input
                    className={validation.publicName || 'input'}
                    type="text"
                    name="publicName"
                    placeholder="jsm"
                    min="3"
                    max="20"
                    required
                    value={data.publicName || ''}
                    onChange={this.handleInput}
                  />
                </p>
              </div>
              <label className="label">Picture*</label>
              <p className="control">
                <input
                  className={validation.picture || 'input'}
                  type="text"
                  placeholder="https://graphql.org/image/lee-byron.jpg"
                  required
                  data-url
                  max="250"
                  name="picture"
                  value={data.picture || ''}
                  onChange={this.handleInput}
                />
              </p>
              <label className="label">Email*</label>
              <p className="control">
                <input
                  className={validation.email || 'input'}
                  type="email"
                  placeholder="jsmith@example.org"
                  name="email"
                  required
                  max="250"
                  value={data.email || ''}
                  onChange={this.handleInput}
                />
              </p>
              <hr/>
              <label className="label">Password*</label>
              <p className="control">
                <input
                  className={validation.password || 'input'}
                  type="password"
                  placeholder="●●●●●●●"
                  name="password"
                  required
                  min="3"
                  max="250"
                  value={data.password || ''}
                  onChange={this.handleInput}
                />
              </p>
              <label className="label">Confirm Password*</label>
              <p className="control">
                <input
                  className={validation.passwordConfirmation || 'input'}
                  type="password"
                  placeholder="●●●●●●●"
                  name="passwordConfirmation"
                  data-equals={this.state.data.password || ''}
                  required
                  min="3"
                  max="250"
                  value={data.passwordConfirmation || ''}
                  onChange={this.handleInput}
                />
              </p>
              <hr/>
              <label className="label">Bio*</label>
              <p className="control">
                <textarea
                  className={validation.bio || 'textarea'}
                  placeholder="Hi"
                  name="bio"
                  required
                  value={data.bio || ''}
                  onChange={(e) => this.handleInput(e, 'textarea')}
                >
                </textarea>
              </p>
              <hr/>
              <p className="control">
                <button
                  className={
                    ["button is-outlined is-large is-fullwidth"]
                    .concat(this.state.validForm ? 'is-info' : 'is-danger')
                      .join(' ')
                  }
                  onClick={this.submitRegistration}
                >Register</button>
              </p>
            </div>
            <div className="section forgot-password">
              <p className="has-text-centered">
                <Link to="/authentication/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

//TODO write your mutation to register the user
const mutation = undefined;

const deleteThisWhenImplementing = {
  registerUser : () => {
    return new Promise((resolve, reject) => reject('Write the mutation'))
  }
}
//TODO use react-apollo HOC
const RegisterMutation = () => <Register {...deleteThisWhenImplementing}/>;

export default RegisterMutation;