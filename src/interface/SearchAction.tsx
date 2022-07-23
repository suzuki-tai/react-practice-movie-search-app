export enum SearchActionType {
  'SEARCH_MOVIES_REQUEST',
  'SEARCH_MOVIES_SUCCESS',
  'SEARCH_MOVIES_FAILURE'
};

export interface SearchAction {
  type: SearchActionType,
  payload?: any,
  error?: string
};
