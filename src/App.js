import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Primary from './components/Primary';
import Product from './components/Product';
import styled from 'styled-components';
import History from './components/History';
import Showroom from './components/Showroom';
import Contact from './components/Contact';
import { Switch,Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Primary}/>
          <Route path="/product" component={Product}/>
          <Route path="/history" component={History}/>
          <Route path="/showroom" component={Showroom}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Wrapper>
    </React.Fragment>
  );
}
const Wrapper = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`;
export default App;
