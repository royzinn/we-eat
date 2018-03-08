import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

const DELIVERY_TIMES = [15, 30, 45, 60, 90];
const RATINGS = [1, 2, 3, 4, 5];

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

export default function FiltersBar({ cuisines, filterCuisines, filterRating, filterDeliveryTime }) {
  return (
    <div className="row py-3 bg-danger">
      <div className="container">
        <div className="row py-2">
          <div className="col-12 col-sm-4">
            <SelectInput
              label="Cuisines"
              options={cuisines.map(cuisin => cuisin)}
              handleChange={filterCuisines}
              defaultOption="Sushi, israeli, oriental..."
            />
          </div>
          <div className="col-12 col-sm-4">
            <SelectInput
              label="Rating"
              options={RATINGS.map(rate => `${rate} ${rate === 1 ? 'star' : 'stars'}`)}
              handleChange={filterRating}
              defaultOption="I'm an all-star"
            />
          </div>
          <div className="col-12 col-sm-4">
            <SelectInput
              label="Speed"
              options={DELIVERY_TIMES.map(minutes => `Up to ${minutes} minutes`)}
              handleChange={filterDeliveryTime}
              defaultOption="I need it before..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

FiltersBar.propTypes = {
  cuisines: PropTypes.arrayOf(PropTypes.string),
  filterCuisines: PropTypes.func.isRequired,
  filterRating: PropTypes.func.isRequired,
  filterDeliveryTime: PropTypes.func.isRequired,
};
