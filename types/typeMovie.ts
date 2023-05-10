export interface EpisodeType {
  _id: string;
  title: string;
  description: string;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
}
export interface MovieType {
  _id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  genre: string;
  isSeries: string;
  isShown: string;
  limit: number;
  episodes: EpisodeType[];
}
