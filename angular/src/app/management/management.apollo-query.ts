import gql from 'graphql-tag';

//TODO write query to get all conference
export const getAllConferences = undefined;


export interface getAllConferencesResponse {
  conferences;
  loading;
  _allConferencesMeta;
}

//TODO write mutation to add a conference
export const addConference = undefined;

export const updateConference = gql`
  mutation updateConference(
  $id: ID!
  $city: String!
  $country: String!
  $description: String!
  $endDate: DateTime!
  $logo: String!
  $name: String!
  $startDate: DateTime!
  $website: String
  ) {
    updateConference(
      id: $id,
      city: $city,
      country: $country,
      description: $description,
      endDate: $endDate,
      logo: $logo,
      name: $name,
      startDate: $startDate,
      website: $website
    ) {
      id
    }
  }
`;

//TODO get conference by id
export const getConference = undefined;

export interface getConferenceResponse {
  loading;
  conference;
  data;
}

//TODO write delete conference mutation
export const deleteConference = undefined;

//Talks

//TODO
export const getAllTalks = undefined;


export interface getAllTalksResponse {
  talks;
  loading;
  _allTalksMeta;
}

//TODO
export const addTalk = undefined;

export const updateTalk = gql`
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

//TODO
export const getTalk = undefined;

export interface getTalkResponse {
  loading;
  talk;
  data;
}

export const deleteTalk = undefined;

//TODO
export const getSpeakers = undefined;

export interface getSpeakersResponse {
  speakers;
}

export const updateTalkSpeaker = gql`
  mutation updateSpeaker($talkId: ID!, $speakerId: ID) {
    updateTalk(
      id: $talkId,
      speakerId: $speakerId
    ) {
      id
    }
  }
`;

//TODO
export const getTalksOnConference = undefined;

export interface getTalksOnConferenceResponse {
  talks;
}

//TODO
export const updateTalksOnConference = undefined;


