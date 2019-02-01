/* eslint-disable react/no-unused-state */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import MealForm from "components/form";
import Moment from "react-moment";
import inputData from "data";

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedMeals: [],
      showModal: false,
      editingFlight: null
    };
  }

  modalHide = added => {
    const newState = { showModal: false, editingFlight: null };
    if (added) {
      const { addedMeals, editingFlight } = this.state;
      newState.addedMeals = [
        ...addedMeals,
        { journeyKey: editingFlight, ...added }
      ];
    }
    this.setState(newState);
  };

  sendData = () => {
    const { addedMeals } = this.state;
    const output = addedMeals.map(({ desc, ...item }) => item);
    console.log(output);
    alert(JSON.stringify(output));
  };

  openModal = editingFlight => {
    this.setState({ showModal: true, editingFlight });
  };

  getAddedMeal = journeyKey => {
    const { addedMeals } = this.state;
    return addedMeals.find(item => item.journeyKey === journeyKey);
  };

  render() {
    const { booking, options } = inputData;
    const { showModal, addedMeals } = this.state;
    return (
      <React.Fragment>
        <Row>
          <Col sm="8">
            <h2>Reservation information</h2>
          </Col>
          <Col sm="4">
            <Button
              id="btn-submit"
              disabled={addedMeals.length < 2}
              variant="success"
              size="lg"
              onClick={this.sendData}
            >
              Save
            </Button>
          </Col>
        </Row>

        <hr className="my-4" />
        <Row className="mb-5">
          <Col xs={4}>
            <strong>Reservation number: </strong>
            {booking.recordLocator}
          </Col>
          <Col xs={4}>
            <strong>Seats: </strong>
            {booking.passengers.length}
          </Col>
          <Col xs={4}>
            <strong>Status: </strong>
            <Badge variant="success">{booking.status}</Badge>
          </Col>
        </Row>
        <Row>
          <Table responsive striped>
            <thead>
              <tr>
                <th>Flight</th>
                <th>From/To</th>
                <th>Departure</th>
                <th>Travel duration</th>
                <th>Meal</th>
                <th>Meal price</th>
              </tr>
            </thead>
            <tbody>
              {booking.journeys.map((journey, index) => {
                const addedMeal = this.getAddedMeal(journey.key);
                return (
                  <tr key={journey.key}>
                    <td>
                      <strong>{journey.flight}</strong>
                    </td>
                    <td>
                      {journey.departure}
                      {"-"}
                      {journey.arrival}
                    </td>
                    <td>
                      <Moment format="ddd DD MMM YYYY">
                        {journey.departureDate}
                      </Moment>
                    </td>
                    <td>
                      <Moment
                        date={journey.arrivalDate}
                        duration={journey.departureDate}
                      />
                    </td>
                    <td>
                      {addedMeal ? (
                        addedMeal.desc
                      ) : (
                        <Button
                          id={`btn-add-${index}`}
                          onClick={() => this.openModal(journey.key)}
                        >
                          Add meal
                        </Button>
                      )}
                    </td>
                    <td>{addedMeal && addedMeal.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
        <MealForm
          meals={options}
          showModal={showModal}
          onHide={this.modalHide}
        />
      </React.Fragment>
    );
  }
}

export default Booking;
