import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import { BASE_API } from './utils/Const';

const App: React.FC = () => {
  return (
    <div className="App">
      <p>Base Api : {BASE_API}</p>
      <p>Endpoints : </p>
      <ul>
        <li>/planets/ -- get all the planets resources</li>
        <li>/planets/:id/ -- get a specific planets resource</li>
        <li>/planets/schema/ -- view the JSON schema for this resource</li>
        <li>/planets/?search=keywords -- get all planets contains keywords in name</li>
      </ul>
      <Card>
        <Button color="primary">Button</Button>
      </Card>
    </div>
  );
}

export default App;
