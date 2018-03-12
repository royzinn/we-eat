import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

const deliveryTimes = [15, 30, 45, 60, 90];
const ratings = [1, 2, 3, 4, 5];

const SelectInput = ({ label, handleChange, options, defaultOption }) => {
  return (
    <FormGroup>
      <Label for="exampleSelect">{label}</Label>
      <Input type="select" name="select" id="exampleSelect" onChange={handleChange}>
        <option value="">{defaultOption}</option>
        { options.length && options.map(option => <option key={option}>{option}</option>) }
      </Input>
    </FormGroup>
  );
};

SelectInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default function FiltersBar({ cuisins, filterCuisins, filterRating, filterSpeed }) {
  return (
    <div className="row py-3 bg-danger">
      <div className="container">
        <div className="row py-2">
          <div className="col-12 col-sm-4">
            <SelectInput
              label="Cuisins"
              options={cuisins.map(cuisin => cuisin)}
              handleChange={filterCuisins}
              defaultOption="Sushi, israeli, oriental..."
            />
          </div>
          <div className="col-12 col-sm-4">
            <SelectInput
              label="Rating"
              options={ratings.map(rate => `${rate} ${rate === 1 ? 'star' : 'stars'}`)}
              handleChange={filterRating}
              defaultOption="I'm an all-star"
            />
          </div>
          <div className="col-12 col-sm-4">
            <SelectInput
              label="Speed"
              options={deliveryTimes.map(minutes => `Up to ${minutes} minutes`)}
              handleChange={filterSpeed}
              defaultOption="I need it before..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

FiltersBar.propTypes = {
  cuisins: PropTypes.arrayOf(PropTypes.string),
  filterCuisins: PropTypes.func.isRequired,
  filterRating: PropTypes.func.isRequired,
  filterSpeed: PropTypes.func.isRequired,
};
