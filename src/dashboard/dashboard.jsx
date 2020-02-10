import React, { Component } from 'react';
import { Table, Segment } from 'semantic-ui-react';
import Filter from '../filter/filter';
class Dashboard extends Component {
  render() {
    return (
      <Segment basic>
        <Filter></Filter>

        <Table basic='very'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Region</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Year</Table.HeaderCell>
              <Table.HeaderCell>Count</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>John Lilki</Table.Cell>
              <Table.Cell>September 14, 2013</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jamie Harington</Table.Cell>
              <Table.Cell>January 11, 2014</Table.Cell>
              <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>May 11, 2014</Table.Cell>
              <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

export default Dashboard;
