export enum status {
  'idle',
  'error',
  'loading',
}

export enum actionType {
  'HEROES_DELETED',
  'HEROES_FETCHING',
  'HEROES_FETCHED',
  'HEROES_FETCHING_ERROR',
  'ACTIVE_FILTER_CHANGED',
  'FILTERS_FETCHING',
  'FILTERS_FETCHED',
  'FILTERS_FETCHING_ERROR',
  'HERO_CREATED',
}

export interface Action<T> {
  type: actionType;
  payload: T | T[];
}

export interface Hero {
  id: string;
  name: string;
  description: string;
  element: string;
}

export interface Filter {
  name: string;
  label: string;
  className: string;
}
