import { Action, actionType, Hero, Filter, status } from '../types/';

export interface State {
  heroes: Hero[];
  heroesLoadingStatus: status;
  filters: Filter[];
  filtersLoadingStatus: status;
  activeFilter: string;
  filteredHeroes: Hero[];
}

const initialState: State = {
  heroes: [],
  heroesLoadingStatus: status.idle,
  filters: [],
  filtersLoadingStatus: status.idle,
  activeFilter: 'all',
  filteredHeroes: [],
};

const reducer = (
  state = initialState,
  action: Action<Hero | Filter | string>
): State => {
  switch (action.type) {
    case actionType.HEROES_FETCHING:
      return {
        ...state,
        heroesLoadingStatus: status.loading,
      };
    case actionType.HEROES_FETCHED:
      if (action.payload instanceof Array) {
        return {
          ...state,
          heroes: action.payload as Hero[],
          filteredHeroes:
            state.activeFilter === 'all'
              ? (action.payload as Hero[])
              : (action.payload as Hero[]).filter(
                  (item) => item.element === state.activeFilter
                ),
          heroesLoadingStatus: status.idle,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionType.HEROES_FETCHING_ERROR:
      return {
        ...state,
        heroesLoadingStatus: status.error,
      };
    case actionType.FILTERS_FETCHING:
      return {
        ...state,
        filtersLoadingStatus: status.loading,
      };
    case actionType.FILTERS_FETCHED:
      if (action.payload instanceof Array) {
        return {
          ...state,
          filters: action.payload as Filter[],
          filtersLoadingStatus: status.idle,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionType.FILTERS_FETCHING_ERROR:
      return {
        ...state,
        filtersLoadingStatus: status.error,
      };
    case actionType.ACTIVE_FILTER_CHANGED:
      if (typeof action.payload === 'string') {
        return {
          ...state,
          activeFilter: action.payload,
          filteredHeroes:
            action.payload === 'all'
              ? state.heroes
              : state.heroes.filter((item) => item.element === action.payload),
        };
      } else {
        return {
          ...state,
        };
      }
    case actionType.HERO_CREATED:
      if (action.payload as Hero) {
        let newCreatedHeroList = [...state.heroes, action.payload] as Hero[];

        return {
          ...state,
          heroes: newCreatedHeroList,
          filteredHeroes:
            state.activeFilter === 'all'
              ? newCreatedHeroList
              : newCreatedHeroList.filter(
                  (item) => item.element === state.activeFilter
                ),
        };
      } else {
        return {
          ...state,
        };
      }
    case actionType.HEROES_DELETED:
      const newHeroList = state.heroes.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        heroes: newHeroList,
        filteredHeroes:
          state.activeFilter === 'all'
            ? newHeroList
            : newHeroList.filter((item) => item.element === state.activeFilter),
      };
    default:
      return state;
  }
};

export default reducer;
