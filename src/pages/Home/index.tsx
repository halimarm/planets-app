import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Card from '../../components/Card';
import InputSearch from '../../components/Form/InputSearch';
import { AppState } from '../../store';
import { fetchPlanetList } from '../../store/planets/actions';

type HomeProps = RouteComponentProps;
const Home: React.FC<HomeProps> = ({ history }) => {
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.planetListReducer);

  useEffect(() => {
    dispatch(fetchPlanetList());
  }, [dispatch]);

  const renderPlanet = () => {
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

  if (!data.data.results) return <p>Loading...</p>

  return (
    <>
      <InputSearch
        title="Search..."
        onClick={() => history.push(`/search`)}
      />
      { renderPlanet() }
    </>
  );
}

export default withRouter(Home);
