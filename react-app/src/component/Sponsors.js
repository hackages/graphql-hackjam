import React from 'react';
import {gql} from 'react-apollo';
import Company from './Company';


const Sponsors = ({sponsors, type: searchType}) => {
return <div>
  {
    sponsors
      .filter(({type}) => type === searchType)
      .map(({company}) => {
        return <Company
          key={company.id}
          company={company}/>
      })
  }
</div>
};

Sponsors.fragments = {
  sponsor: undefined /*Use propType util to tell what fragment is required */
};

export default Sponsors;