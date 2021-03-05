import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'

type DetailParams = {
  id: string
}
type DetailProps = RouteComponentProps<DetailParams>
const Detail: React.FC<DetailProps> = ({ match }) => {
  console.log(match.params.id)
  return (
    <>
      <p>Detail</p>
    </>
  );
}

export default withRouter(Detail);
