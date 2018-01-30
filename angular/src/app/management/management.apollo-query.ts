export const getAllConferences = 'TO IMPLEMENT';


export const addConference = 'TO IMPLEMENT';

export const updateConference = 'TO IMPLEMENT';

export const getConference = 'TO IMPLEMENT';

export interface getAllConferencesResponse {
  conferences;
  loading;
  _allConferencesMeta;
}

export const deleteConference = 'TO IMPLEMENT';

export interface getConferenceResponse {
  loading;
  conference;
  data;
}

export const getAllTalks = 'TO IMPLEMENT';

//Talks


export const addTalk = 'TO IMPLEMENT';

export const updateTalk = 'TO IMPLEMENT';

export const getTalk = 'TO IMPLEMENT';

export interface getAllTalksResponse {
  talks;
  loading;
  _allTalksMeta;
}

export const deleteTalk = 'TO IMPLEMENT';

export const getSpeakers = 'TO IMPLEMENT';


export interface getTalkResponse {
  loading;
  talk;
  data;
}

export const updateTalkSpeaker = 'TO IMPLEMENT';

export const getTalksOnConference = 'TO IMPLEMENT';

export interface getSpeakersResponse {
  speakers;
}

export const updateTalksOnConference = 'TO IMPLEMENT';

export interface getTalksOnConferenceResponse {
  talks;
}


