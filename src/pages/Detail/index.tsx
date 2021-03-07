import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Card from '../../components/Card';
import { AppState } from '../../store';
import { fetchPlanetInfo } from '../../store/planets/actions';

const Text = styled.header`
  text-align: center;
  padding: 16px;
  font-weight: 600;
  font-size: 18px;
`;

type DetailParams = {
  id: string
}
type DetailProps = RouteComponentProps<DetailParams>
const Detail: React.FC<DetailProps> = ({ match }) => {
  const { id } = match.params
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.planetInfoReducer);

  useEffect(() => {
    dispatch(fetchPlanetInfo(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <Text>Detail</Text>
      <Card title={data.data.name}>
        <span>Population : {data.data.population}</span> <br/>
        <span>Diameter : {data.data.diameter}</span> <br/>
        <span>Climate : {data.data.climate}</span> <br/>
        <span>Terrain : {data.data.terrain}</span> <br/>
      </Card>
    </>
  );
}

export default withRouter(Detail);
