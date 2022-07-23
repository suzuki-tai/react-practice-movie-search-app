import { MovieProps } from "./MovieProps";

export interface SearchStore {
  loading: boolean,
  movies: MovieProps[],
  errorMessage?: string
};
