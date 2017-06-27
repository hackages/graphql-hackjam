import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {isValidForm, timeToInput, validateInput} from '../../../utils/index';
import {SuccessModal} from '../../modal/index';
import {gql, graphql, compose} from 'react-apollo';
import {waitForGraphql} from '../../../apollo/index';
import TalkOverview from '../../talk/TalkOverview';

const hasNoIdParam = ({match: {params: {id}}}) => !id;

class Talk extends Component{
  constructor(props) {
    super(props);

    this.state = {
      validation: {},
      data: hasNoIdParam(this.props) ? {} : {
        ...this.props.getTalk.talk,
        startsAt: timeToInput(this.props.getTalk.talk.startsAt)
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

  submitTalk = () => {
    if(isValidForm(Object.keys(this.state.data).length, this.state.validation)) {
      const method = hasNoIdParam(this.props) ? 'addTalk' : 'updateTalk';
      this.props[method]({
        variables: {
          ...this.state.data,
          startsAt: new Date(1990, 1, 1,  this.state.data.startsAt.slice(0, this.state.data.startsAt.indexOf(':')),
            this.state.data.startsAt.slice(this.state.data.startsAt.indexOf(':') + 1))
        }
      })
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
        text={`Your talk has successfully been ${hasNoIdParam(this.props) ? 'added' : 'updated'}`}
      />
      <div className="section product-header">
        <div className="container">
          <div className="columns">
            <div className="column">
            <span className="title is-3">
              Talk
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
                <label className="label">Title*</label>
                <p className="control">
                  <input
                    className={validation.title || 'input'}
                    type="text"
                    placeholder="Super talk"
                    name="title"
                    value={data.title || ''}
                    required
                    min="3"
                    max="50"
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
                    placeholder="I will do this and that"
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
                <label className="label">Room</label>
                <p className="control">
                  <input
                    className={validation.room || 'input'}
                    type="text"
                    placeholder="12A"
                    name="room"
                    value={data.room || ''}
                    min="2"
                    max="20"
                    onChange={this.handleInput}
                  />
                </p>
              </div>

              <div className="field">
                <label className="label">Starts at*</label>
                <p className="control">
                  <input
                    className={validation.startsAt || 'input'}
                    type="text"
                    placeholder="12:00"
                    name="startsAt"
                    value={data.startsAt || ''}
                    required
                    data-time
                    min="5"
                    max="5"
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
                    onClick={this.submitTalk}
                  >{
                    hasNoIdParam(this.props) ? <span>Add</span> : <span>Update</span>
                  }</button>
                </p>
                <p className="control">
                  <Link to="/secure/talks" className="button is-link">Cancel</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

//Write the mutation to add a talk
const addTalk = undefined;

const addTalkConfig = {
};

const updateTalk = gql`
    mutation updateTalk(
      $id: ID!,
      $description: String!,
      $room: String,
      $startsAt: DateTime,
      $title: String!,
      $status: TALK_STATUS
    ) {
        updateTalk(
            id: $id,
            description: $description,
            room: $room,
            startsAt: $startsAt,
            title: $title,
            status: $status
        ) {
            id
        }
    }
`;

const updateTalkConfig = {
  name: 'updateTalk'
};

const getTalk = undefined; /*gql`
    query getTalk($id: ID!) {
        talk: Talk(id: $id) {
            ...TalkOverview
            status
        }
    }

    ${TalkOverview.fragments.talk}
`;*/

//TODO only execute this when there is a path param id
//This page is used to add a talk (when no path param id)
// Or to update a talk (when there's a path param id
//Path params are accessed with match.params.pathParamKey
const getTalkConfig = {};

//TODO
const TalkData = () => <Talk/>;

export default TalkData;