import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { AppState } from '../../store';
import { fetchPlanetInfo } from '../../store/planets/actions';

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

  console.log(data)
  return (
    <>
      <p>Detail</p>
    </>
  );
}

export default withRouter(Detail);
