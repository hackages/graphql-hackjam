import {Speaker} from '../speaker/types';
import {Conference} from '../conference/types';

export class Talk {
  id: string;
  description: string;
  room: string;
  startsAt: string;
  title: string;
  speaker?: Speaker;
  conferences?: Conference[];
}
