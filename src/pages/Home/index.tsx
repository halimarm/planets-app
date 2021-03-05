import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { fetchPlanetList } from '../../redux/actions/PlanetActions';
import { AppState } from '../../redux/store';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.planetList);

  useEffect(() => {
    dispatch(fetchPlanetList());
  }, [dispatch]);

  const renderPlanet = () => {
    const result = data.data.results.map((data, index) => {
      let id = index + 1
      return (
        <div key={id} className="list__item list__item--2">
          <Link to={`/planets/${id}`}>
            <Card title={data.name} />
          </Link>
        </div>
      )
    })
    return result
  }

  if (!data.data.results) return <p>Loading...</p>

  return (
    <>
      { renderPlanet() }
    </>
  );
}

export default Home;
