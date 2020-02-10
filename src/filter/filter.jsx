import React, { Component } from 'react';
import { Dropdown, Grid } from 'semantic-ui-react';

const optionsStatic = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'react', text: 'React', value: 'react' }
];

class Filter extends Component {
  render() {
    return (
      <Grid stackable columns={3}>
        <Grid.Column>
          <Dropdown
            placeholder='Region'
            fluid
            multiple
            search
            selection
            options={optionsStatic}
          />
        </Grid.Column>
        <Grid.Column>
          <Dropdown
            placeholder='Gender'
            fluid
            multiple
            search
            selection
            options={optionsStatic}
          />
        </Grid.Column>
        <Grid.Column>
          <Dropdown
            placeholder='Year'
            fluid
            multiple
            search
            selection
            options={optionsStatic}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Filter;
