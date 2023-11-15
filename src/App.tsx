import React from 'react';
import './App.css';
import Root from './components/Root/Root';
import Container from './components/Container/Container';
import TodoDashBoard from './components/TodoDashboard/TodoDashBoard';
import TodoControlPanel from './components/TodoControlPanel/TodoControlPanel';

function App() {
  return (
    <div className="App">
      <Root>
        <Container>
          <TodoDashBoard />
          <TodoControlPanel />
        </Container>
      </Root>
      
    </div>
  );
}

export default App;
