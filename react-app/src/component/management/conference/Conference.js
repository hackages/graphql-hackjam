import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {dateToInput, isValidForm, validateInput} from '../../../utils/index';
import {SuccessModal} from '../../modal/index';
import {gql, graphql, compose} from 'react-apollo';
import ConferenceDetails from '../../conference/ConferenceDetails';
import {waitForGraphql} from '../../../apollo/index';

const hasNoIdParam = ({match: {params: {id}}}) => !id;


class Conference extends Component{
  constructor(props) {
    super(props);
    this.state = {
      validation: {},
      data: hasNoIdParam(this.props) ? {} : {
        ...this.props.data.conference,
        startDate: dateToInput(this.props.data.conference.startDate),
        endDate: dateToInput(this.props.data.conference.endDate)
      },
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

  dateInputToDate(dateInput) {
    return new Date(dateInput.slice(-4), dateInput.slice(3, 5), dateInput.slice(0, 2));
  }

  submitConference = () => {
    if(isValidForm(Object.keys(this.state.data).length, this.state.validation)) {
      const method = hasNoIdParam(this.props) ? 'addConference' : 'updateConference';
      //TODO send variables along with the mutation
      // Note: startDate and endDate need to be converted to dates with the Date contructor
      //dateInputToDate(this.state.data.startDate)
        this.props[method]()
        .then(() => {
          this.setState({
            showSuccessModel: true,
            validForm : true
          });
        })
    } else {
      console.log("form error: ", this.state);
      this.setState({
        validForm : false
      })
    }
  };

  render() {
    const {data = {}, validation= {}} = this.state;
    return <div>
      <SuccessModal
        isVisible={this.state.showSuccessModel}
        hide={() => this.setState({
          showSuccessModel : false
        })}
        title="Success"
        text={`Your conference has successfully been ${hasNoIdParam(this.props) ? 'added' : 'updated'}`}
      />
      <div className="section product-header">
        <div className="container">
          <div className="columns">
            <div className="column">
            <span className="title is-3">
              Conferences
            </span>
              <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
              <span className="title is-4 has-text-muted">
              Management
            </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">City*</label>
                <p className="control">
                  <input
                    className={validation.city || 'input'}
                    type="text"
                    placeholder="Text input"
                    name="city"
                    value={data.city || ''}
                    required
                    min="3"
                    max="25"
                    onChange={this.handleInput}
                  />
                </p>
              </div>
              <div className="field">
                <label className="label">Country iso-code*</label>
                <span>Please choose a alpha-3 from : https://fr.wikipedia.org/wiki/ISO_3166-1</span>
                <p className="control">
                  <input
                    className={validation.country || 'input'}
                    type="text"
                    placeholder="Text input"
                    name="country"
                    value={data.country || ''}
                    required
                    min="3"
                    max="200"
                    onChange={this.handleInput}
                  />
                </p>
              </div>
              <div className="field">
                <label className="label">Description*</label>
                <p className="control">
                  <input
                    className={validation.description || 'input'}
                    type="text"
                    placeholder="A cool description"
                    name="description"
                    value={data.description || ''}
                    required
                    min="10"
                    max="250"
                    onChange={this.handleInput}
                  />
                </p>
              </div>
              <div className="field">
                <label className="label">Start date*</label>
                <p className="control">
                  <input
                    className={validation.startDate || 'input'}
                    type="text"
                    placeholder="01/01/2017"
                    name="startDate"
                    value={data.startDate || ''}
                    required
                    data-before={data.endDate}
                    data-date
                    min="10"
                    max="10"
                    onChange={this.handleInput}
                  />
                </p>
              </div>
              <div className="field">
                <label className="label">End date*</label>
                <p className="control">
                  <input
                    className={validation.endDate || 'input'}
                    type="text"
                    placeholder="01/01/2017"
                    name="endDate"
                    value={data.endDate || ''}
                    data-after={data.startDate}
                    required
                    data-date
                    min="10"
                    max="10"
                    onChange={this.handleInput}
                  />
                </p>
              </div>
              <div className="field">
                <label className="label">Logo*</label>
                <p className="control">
                  <input
                    className={validation.logo || 'input'}
                    type="text"
                    placeholder="http://image-google.png"
                    name="logo"
                    value={data.logo || ''}
                    required
                    min="10"
                    data-url
                    onChange={this.handleInput}
                  />
                </p>
              </div>
              <div className="field">
                <label className="label">Name*</label>
                <p className="control">
                  <input
                    className={validation.name || 'input'}
                    type="text"
                    placeholder="My Conference"
                    name="name"
                    value={data.name || ''}
                    required
                    min="3"
                    max="100"
                    onChange={this.handleInput}
                  />
                </p>
              </div>
              <div className="field">
                <label className="label">Website</label>
                <p className="control">
                  <input
                    className={validation.website || 'input'}
                    type="text"
                    placeholder="http://my-website.com"
                    name="website"
                    value={data.website || ''}
                    data-url
                    min="10"
                    max="250"
                    onChange={this.handleInput}
                  />
                </p>
              </div>

              <div className="field is-grouped">
                <p className="control">
                  <button
                    className={
                      ["button"]
                        .concat(this.state.validForm ? 'is-primary' : 'is-danger')
                        .join(' ')
                    }
                    onClick={this.submitConference}
                  >{
                    hasNoIdParam(this.props) ? <span>Add</span> : <span>Update</span>
                  }</button>
                </p>
                <p className="control">
                  <Link to="/secure/conferences" className="button is-link">Cancel</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

//TODO write the add conference mutation
const addConference = undefined;

const addConferenceConfig = {};

//TODO write the update conference mutation
const updateConference = undefined;

const updateConferenceConfig = {};

//TODO write getConference query
const getConference = undefined;


//TODO inject variables in query from path param
//This should only be executed when there is a id path param :
// This page is used to add (if there's no path param id)
// or to update a conference (when there is a path param called id)
// Anyone knows skip?
const getConferenceConfig = {};

//TODO connect the addConference mutation, the updateConference mutation
//and the getConference query
//Only use waitForGraphql util for queries, since a mutation injects a function, not async data
//Use the compose util to enhance them all together
//Don't forget to use names to replace the 'data' or 'mutation' default prop
const deleteWhenImplenting = {
  match: {
    params: {
      id: 2
    }
  },
  data: {
    conference: {

    }
  }
}
const ConferenceData = () => <Conference {...deleteWhenImplenting}/>;

export default ConferenceData;