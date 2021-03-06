import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import InputSearch from '../../components/Form/InputSearch';
import useDebounce from '../../hooks/useDebounce';
import { AppState } from '../../store';
import { fetchPlanetSearch } from '../../store/planets/actions';

type SearchProps = RouteComponentProps
const Search: React.FC<SearchProps> = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.planetSearchReducer);
  const [value, setValue] = useState<string>('')
  const keyword = useDebounce<string>(value, 300)
  
  useEffect(() => {
    if (keyword) {
      dispatch(fetchPlanetSearch(keyword));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget
    setValue(value)
  }
  
  const renderPlanet = () => {
    if (data.data.results.length === 0) return <p>Tidak ada data tersedia</p>
    const result = data.data.results.map((data, index) => {
      let id = index + 1
      return (
        <Link key={id} to={`/planets/${id}`}>
          <Card title={data.name} />
        </Link>
      )
    })
    return result
  }

  return (
    <>
      <InputSearch
        title="Search..."
        onChange={onChangeHandler}
        focus
      />
      { renderPlanet() }
    </>
  );
}

export default Search;
