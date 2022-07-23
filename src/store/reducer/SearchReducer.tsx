import { Reducer } from "react";
import { SearchAction, SearchActionType } from "../../interface/SearchAction";
import { SearchStore } from "@/interface/SearchStore";
import { MovieProps } from "@/interface/MovieProps";

const movies: MovieProps[] = [];
export const initialState = {
  loading: true,
  movies: movies,
  errorMessage: ''
};

export const SearchReducer: Reducer<SearchStore, SearchAction> = (state: SearchStore, action: SearchAction) => {
  switch (action.type) {
    case SearchActionType.SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage: ''
      };
    case SearchActionType.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case SearchActionType.SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};