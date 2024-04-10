import { useHttp } from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import {
  filtersFetching,
  filtersFetched,
  filtersFetchingError,
  activeFilterChanged,
} from '../../actions';

import { Filter, status } from '../../types/';
import { State } from '../../reducers';

import Spinner from '../spinner/Spinner';

const HeroesFilters = () => {
  const { filters, filtersLoadingStatus, activeFilter } = useSelector<
    State,
    State
  >((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    const setFilter = async () => {
      dispatch(filtersFetching());

      try {
        const response = await request('http://localhost:3001/filters');
        dispatch(filtersFetched(response));
      } catch {
        dispatch(filtersFetchingError());
      }
    };

    setFilter();

    // eslint-disable-next-line
  }, []);

  if (filtersLoadingStatus === status.loading) {
    return <Spinner />;
  } else if (filtersLoadingStatus === status.error) {
    return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;
  }

  const renderFilters = (arr: Filter[]) => {
    if (arr.length === 0) {
      return <h5 className='text-center mt-5'>Фильтры не найдены</h5>;
    }

    return arr.map(({ name, className, label }) => {
      const btnClass = classNames('btn', className, {
        active: name === activeFilter,
      });

      return (
        <button
          key={name}
          id={name}
          className={btnClass}
          onClick={() => dispatch(activeFilterChanged(name))}
        >
          {label}
        </button>
      );
    });
  };

  const elements = renderFilters(filters);

  return (
    <div className='card shadow-lg mt-4'>
      <div className='card-body'>
        <p className='card-text'>Отфильтруйте героев по элементам</p>
        <div className='btn-group'>{elements}</div>
      </div>
    </div>
  );
};

export default HeroesFilters;
