import {Speaker} from "../speaker/types";
import {Talk} from "../talk/types";

export class Conference {
  id: string;
  city: string;
  country: string;
  description: string;
  logo: string;
  name: string;
  startDate: string;
  website: string;
  speakerCount: number;
  speakers: Speaker[];
  _attendeesMeta: {
    count: string
  };
  talks: Talk[];
  goldSponsors: any[];
  silverSponsors: any[];
  bronzeSponsors: any[];
}


export interface AttendeesCount {
  count: number;

}

export interface SponsorsCount {
  count: number;

}


export class ConferenceDetails {
  id: string;
  city: string;
  country: string;
  description: string;
  logo: string;
  name: string;
  startDate: string;
  website: string;
  speakerCount: number;
  speakers: Speaker[][];
  talks: Talk[][];
}
