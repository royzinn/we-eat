import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

const SelectInput = (props) => {
  return (
    <FormGroup>
      <Label for="exampleSelect">{props.label}</Label>
      <Input type="select" name="select" id="exampleSelect" onChange={props.handleChange}>
        { props.options.length && props.options.map(option => <option key={option}>{option}</option>) }
      </Input>
    </FormGroup>
  );
};

export default class FiltersBar extends Component {
  render() {
    return (
      <div className="row py-3 bg-danger">
        <div className="container">
          <div className="row py-2">
            <div className="col-4">
              <SelectInput
                label="Cuisins"
                options={this.props.cuisins.map(cuisin => cuisin.name)}
                handleChange={this.props.filterCuisins}
              />
            </div>
            <div className="col-4">
              <SelectInput
                label="Rating"
                options={[1, 2, 3, 4, 5].map(rate => `${rate} ${rate == 1 ? 'star' : 'stars'}`)}
                handleChange={this.props.filterRating}
              />
            </div>
            <div className="col-4">
              <SelectInput
                label="Speed"
                options={[15, 30, 45, 60, 90].map(minutes => `Up to ${minutes} minutes`)}
                handleChange={this.props.filterSpeed}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
