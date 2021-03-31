import React from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import Title from './components/Title';

function App() {
  return (
    <Container>
      <Card>
        <Title>Start session</Title>
        <Input placeholder="Login" label="Login"/>
        <Input placeholder="Password" label="Password"/>
        <Button>Send</Button>
      </Card>
    </Container>
  );
}

export default App;
