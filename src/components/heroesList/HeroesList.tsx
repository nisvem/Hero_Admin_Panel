import { useHttp } from '../../hooks/http.hook';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  heroesDeleted,
} from '../../actions';
import { Hero, status } from '../../types/';

import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';
import { State } from '../../reducers';

import './heroesList.scss';

const HeroesList = () => {
  const { filteredHeroes, heroesLoadingStatus } = useSelector<State, State>(
    (state) => state
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  const onDelete = useCallback(
    async (id: string) => {
      try {
        const response = await request(
          `http://localhost:3001/heroes/${id}`,
          'DELETE'
        );
        console.log(response, 'Deleted');
        dispatch(heroesDeleted(id));
      } catch (error) {
        console.log(error);
      }
    },
    // eslint-disable-next-line
    [request]
  );

  useEffect(() => {
    async function getHeroes() {
      try {
        dispatch(heroesFetching());
        const response = await request(`http://localhost:3001/heroes`);
        console.log(response, 'Fetched');
        dispatch(heroesFetched(response));
      } catch {
        dispatch(heroesFetchingError());
      }
    }

    getHeroes();
    // eslint-disable-next-line
  }, []);

  if (heroesLoadingStatus === status.loading) {
    return <Spinner />;
  } else if (heroesLoadingStatus === status.error) {
    return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr: Hero[]) => {
    if (arr.length === 0) {
      return (
        <CSSTransition timeout={0} classNames='hero'>
          <h5 className='text-center mt-5'>Героев пока нет</h5>
        </CSSTransition>
      );
    }

    return arr.map(({ id, ...props }) => {
      return (
        <CSSTransition key={id} timeout={500} classNames='hero'>
          <HeroesListItem {...props} onDelete={() => onDelete(id)} />
        </CSSTransition>
      );
    });
  };

  const elements = renderHeroesList(filteredHeroes);
  return <TransitionGroup component='ul'>{elements}</TransitionGroup>;
};

export default HeroesList;
