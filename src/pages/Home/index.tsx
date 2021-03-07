import React, { useEffect, useState } from 'react';
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
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page) {
      dispatch(fetchPlanetList(page));
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
    return;
    setPage(page + 1)
  };

  const renderPlanet = () => {
    const result = data.data.results.map((data, index) => {
      let id = index + 1
      return (
        <Link key={id} to={`/planets/${id}`}>
          <Card title={data.name}>
            <span>Population : {data.population}</span> <br/>
            <span>Diameter : {data.diameter}</span> <br/>
            <span>Climate : {data.climate}</span> <br/>
          </Card>
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
