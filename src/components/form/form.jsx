import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class MealForm extends React.Component {
  constructor(props) {
    super(props);
    const { meals } = this.props;
    this.state = {
      selectedMeal: meals[0],
      amount: meals[0].priceRange.min
    };
  }

  handleSelectChange = e => {
    const { value } = e.target;
    const { meals } = this.props;
    const meal = meals[value];
    this.setState({
      selectedMeal: meal,
      amount: meal.priceRange.min
    });
  };

  getMarks = () => {
    const {
      selectedMeal: { priceRange }
    } = this.state;
    const marks = {};
    for (let i = priceRange.min; i <= priceRange.max; i += priceRange.jump) {
      marks[i] = i;
    }
    return marks;
  };

  handleAddSubmit = e => {
    e.preventDefault();
    const { onHide, meals } = this.props;
    const {
      selectedMeal: { mealId, currency, desc },
      amount
    } = this.state;

    this.setState({ selectedMeal: meals[0], amount: meals[0].priceRange.min });
    onHide({
      amount,
      mealId,
      currency,
      desc
    });
  };

  handlePriceSelected = value => {
    this.setState({ amount: value });
  };

  render() {
    const { meals, showModal, onHide } = this.props;
    const { selectedMeal, amount } = this.state;
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add your meals
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="selectedMeal">
                <Form.Label>Select your meal</Form.Label>
                <Form.Control as="select" onChange={this.handleSelectChange}>
                  {meals.map((meal, index) => (
                    <option key={meal.mealId} value={index}>
                      {meal.desc}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group
                as={Col}
                md={{ span: 5, offset: 1 }}
                controlId="amount"
              >
                <Form.Label>Choose price ({selectedMeal.currency})</Form.Label>
                <Slider
                  min={selectedMeal.priceRange.min}
                  max={selectedMeal.priceRange.max}
                  step={selectedMeal.priceRange.jump}
                  defaultValue={selectedMeal.priceRange.min}
                  marks={this.getMarks()}
                  onChange={this.handlePriceSelected}
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => onHide()}>
            Close
          </Button>
          <Button
            disabled={amount === 0}
            variant="primary"
            onClick={this.handleAddSubmit}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

MealForm.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onHide: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired
};
export default MealForm;
