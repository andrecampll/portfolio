import React from 'react';
import gofinances from '../../assets/gofinances.png'

import { Container } from './styles';

const Habilities: React.FC = () => {
  const arr = [1,2,3,4,5];

  return (
    <Container>
      <h3>PROJECTS</h3>
      
      {arr.map(arr => (
        <div>
          <img src={gofinances} alt="projeto"/>
        </div>
      ))}
    </Container>
  );
}

export default Habilities;
