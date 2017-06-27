import React from 'react';
import {propType} from 'graphql-anywhere';
import {Link} from 'react-router-dom';
import TalkOverview from '../../talk/TalkOverview';
import {timeToInput} from '../../../utils/index';

const TalkRow = ({
   deleteTalk,
   talk: {
     id,
     title,
     room,
     startsAt
   }
 }) => <tr>
  <th>{id}</th>
  <th>{title}</th>
  <td>{room}</td>
  <td>{timeToInput(startsAt)}</td>
  <td>
    <Link
      className="button is-info is-outlined"
      to={`/secure/talk/${id}/speakers`}
    >Add Speaker</Link>
  </td>
  <td>
    <Link
      to={`/secure/talk/${id}`}
      className="button is-primary is-outlined"
    >Edit</Link>
  </td>
  <td>
    <a
      className="button is-danger is-outlined"
      onClick={() => deleteTalk(id)}
    >Delete</a>
  </td>
</tr>;

//TODO use propType util to define mandatory prop types with fragment
TalkRow.propTypes = {
  conference: {}
};


export default TalkRow;