// We use the gql tag to parse our query string into a query document
import gql from 'graphql-tag';

//TODO write query to get all conferences
export const AllConferencesQuery = undefined;

export interface AllConferencesQueryResponse {
  allConferences;
  loading;
}

//TODO create a query to get the details of a conference by id
export const DetailedConferenceQuery = undefined;

export interface DetailedConferenceQueryResponse {
  conference;
  loading;
}
