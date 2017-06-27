import {Speaker} from "../speaker/types";

export class Talk {
  id: string;
  description: string;
  room: string;
  startsAt: string;
  title: string;
  speaker?: Speaker;
}
