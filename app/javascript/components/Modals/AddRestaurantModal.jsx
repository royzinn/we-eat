import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { addRestaurant } from '../../redux/actions/restaurants';

class AddRestaurantModal extends Component {
  static propTypes = {
    cuisines: PropTypes.array,
    addRestaurant: PropTypes.func.isRequired,
  }

  state = {
    modal: true,
    name: '',
    street: '',
    city: '',
    zip: '',
    country: '',
    accepts_10bis: false,
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(state => ({ ...state, [name]: value }));
  }

  toggle = () => this.setState({ modal: !this.state.modal });

  submit = () => {
    const restaurant = {};
    restaurant.name = this.state.name;
    restaurant.accepts_10bis = this.state.accepts_10bis;

    this.props.addRestaurant(restaurant);
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        backdrop={true}
        className="modal-sm"
      >
        <ModalHeader>Add a restaurant</ModalHeader>
        <ModalBody>
          <div className="container">
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="restaurantName"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                  {this.props.cuisines.map(cuisine => <option key={cuisine.id}>{cuisine.name}</option>)}
                </Input>
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  placeholder="Street address"
                  value={this.state.street}
                />
              </FormGroup>
              <FormGroup>
                <Input type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="number"
                  name="zip"
                  id="zip"
                  placeholder="Zip"
                  value={this.state.zip}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Input type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  value={this.state.country}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="accepts_10bis"
                  />{' '}
                  Accepts 10 bis
                </Label>
              </FormGroup>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.submit}>Add</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  cuisines: state.cuisines.items,
});

const mapDispatchToProps = dispatch => ({
  addRestaurant: restaurant => dispatch(addRestaurant(restaurant)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRestaurantModal);
