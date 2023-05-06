import { MovieType } from "./typeMovie";

export interface ListType {
  _id: string;
  title: string;
  type: string;
  genre: string;
  movies: MovieType[];
}
