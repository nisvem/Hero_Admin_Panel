import { Hero, Filter, actionType } from '../types';

export const heroesFetching = () => {
  return {
    type: actionType.HEROES_FETCHING,
  };
};

export const heroesFetched = (heroes: Hero[]) => {
  return {
    type: actionType.HEROES_FETCHED,
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: actionType.HEROES_FETCHING_ERROR,
  };
};

export const filtersFetching = () => {
  return {
    type: actionType.FILTERS_FETCHING,
  };
};

export const filtersFetched = (filters: Filter[]) => {
  return {
    type: actionType.FILTERS_FETCHED,
    payload: filters,
  };
};

export const filtersFetchingError = () => {
  return {
    type: actionType.FILTERS_FETCHING_ERROR,
  };
};

export const activeFilterChanged = (filter: string) => {
  return {
    type: actionType.ACTIVE_FILTER_CHANGED,
    payload: filter,
  };
};

export const heroesDeleted = (id: string) => {
  return {
    type: actionType.HEROES_DELETED,
    payload: id,
  };
};

export const heroCreated = (hero: Hero) => {
  return {
    type: actionType.HERO_CREATED,
    payload: hero,
  };
};
