import React from 'react';
import {gql} from 'react-apollo';
import {propType} from 'graphql-anywhere';

const Company = ({company: {
  description,
  logo,
  name
}}) => <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={logo}
             alt={name}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong>
          <br/>
          {description}
        </p>
      </div>
    </div>
  </article>
</div>;

//TODO write company details fragment
Company.fragments = {
  company: undefined
};

Company.propTypes = {
  company: undefined /*Use propType util to tell what fragment is required on this component*/
};

export default Company;