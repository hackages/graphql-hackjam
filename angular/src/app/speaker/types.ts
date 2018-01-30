import {Talk} from '../talk/types';

export interface Speaker {
  id: string;
  picture: string;
  username: string;
  bio: string;
  publicName: string;
  talks?: Talk[];
}
