import React, { Component } from 'react';
import { Segment, Container, Header, Icon } from 'semantic-ui-react';
import NavBar from './navbar/navbar';
import RecentHistory from './history/history'

import Dashboard from './dashboard/dashboard';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    const headerStyle = {
      paddingTop: '10px'
    };

    return (
      <Container>
        <Segment basic>
          <Header as='h1' style={headerStyle}>
            <Icon name='settings' />
            <Header.Content>SCB Client Application</Header.Content>
          </Header>
        </Segment>
        <Segment basic>
          <NavBar></NavBar>
        </Segment>

        <Segment basic>
          <Route exact path='/'></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route path='/history' component={RecentHistory}></Route>
        </Segment>
      </Container>
    );
  }
}

export default App;
