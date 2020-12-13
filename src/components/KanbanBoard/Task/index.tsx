import React from 'react';

import { 
  Container,
  LineDiv,
  LineCategory
} from './styles';

const Task: React.FC = () => {
  return (
    <Container>
      <LineCategory />
      <div>
        <h3>Tarefa 01</h3>
        <LineDiv />
        <p>A EaD, pela sua característica de amplitude e pelo 
          uso de tecnologias modernas, representa uma nova forma
          de aprender, respeitando, sempre, o seu tempo.
        </p>
      </div>
      
    </Container>
  );
}

export default Task;