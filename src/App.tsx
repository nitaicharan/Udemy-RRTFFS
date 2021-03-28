import React from 'react';
import './App.css';
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';

function App() {
  return (
    <Container>
      <Card>
        <Input placeholder="Login" label="Login"/>
        <Input placeholder="Password" label="Password"/>
      </Card>
    </Container>
  );
}

export default App;
