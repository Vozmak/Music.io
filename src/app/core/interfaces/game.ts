export interface Game {
  id?: string;
  name: string;
  host: string;
  description?: string;
  roomSize: number;
  answerTime: number;
}
