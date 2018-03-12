import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCuisines } from '../../redux/actions/cuisines';
import { setCuisineFilter, setRatingsFilter, setDeliveryTimeFilter } from '../../redux/actions/filters';
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

class FiltersBar extends Component {
  componentDidMount() {
    this.props.fetchCuisines();
  }

  filterCuisines = (e) => {
    const cuisineFilter = e.target.value || 'SHOW_ALL';

    this.props.onCuisineChange(cuisineFilter);
  }

  filterRatings = (e) => {
    const value = e.target.value.match(/\d+/);
    const rateFilter = (value && Number(value[0])) || 'SHOW_ALL';

    this.props.onRatingsChange(rateFilter);
  }

  filterDeliveryTime = (e) => {
    const value = e.target.value.match(/\d+/);
    const deliveryTimeFilter = (value && Number(value[0])) || 'SHOW_ALL';

    this.props.onDeliveryTimeChange(deliveryTimeFilter);
  }

  render() {
    const { cuisines } = this.props;

    return (
      <div className="row py-3 bg-danger">
        <div className="container">
          <div className="row py-2">
            <div className="col-12 col-sm-4">
              <SelectInput
                label="Cuisines"
                options={cuisines.map(cuisine => cuisine.name)}
                handleChange={this.filterCuisines}
                defaultOption="Sushi, israeli, oriental..."
              />
            </div>
            <div className="col-12 col-sm-4">
              <SelectInput
                label="Rating"
                options={RATINGS.map(rate => `${rate} ${rate === 1 ? 'star' : 'stars'}`)}
                handleChange={this.filterRatings}
                defaultOption="I'm an all-star"
              />
            </div>
            <div className="col-12 col-sm-4">
              <SelectInput
                label="Speed"
                options={DELIVERY_TIMES.map(minutes => `Up to ${minutes} minutes`)}
                handleChange={this.filterDeliveryTime}
                defaultOption="I need it before..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FiltersBar.propTypes = {
  fetchCuisines: PropTypes.func.isRequired,
  cuisines: PropTypes.arrayOf(PropTypes.object),
  onCuisineChange: PropTypes.func.isRequired,
  onRatingsChange: PropTypes.func.isRequired,
  onDeliveryTimeChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cuisines: state.cuisines.items,
});

const mapDispatchToProps = dispatch => ({
  fetchCuisines: () => dispatch(fetchCuisines()),
  onCuisineChange: cuisine => dispatch(setCuisineFilter(cuisine)),
  onRatingsChange: rating => dispatch(setRatingsFilter(rating)),
  onDeliveryTimeChange: cuisine => dispatch(setDeliveryTimeFilter(cuisine)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);
