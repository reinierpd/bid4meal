/* eslint-disable react/no-unused-state */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import MealForm from "components/form";
import Moment from "react-moment";

const inputData = {
  booking: {
    recordLocator: "TST123",
    status: "Confirmed",
    culture: "en-US",
    passengers: [
      {
        firstName: "Burt",
        lastName: "Reynolds",
        prefix: "Mr",
        gender: "Male",
        type: "Adult"
      },
      {
        firstName: "Susan",
        lastName: "Clark",
        prefix: "Mrs",
        gender: "Female",
        type: "Adult"
      },
      {
        firstName: "Kevin",
        lastName: "Reynolds",
        prefix: "Mr",
        gender: "Male",
        type: "Child"
      }
    ],
    journeys: [
      {
        key: "TST12 BCN-LAX 30/08/2014 08:35",
        flight: "TST 12",
        departure: "BCN",
        departureDate: "2014-08-30T08:35:00.000+08:00",
        arrival: "LAX",
        arrivalDate: "2014-08-30T19:45:00.000+08:00"
      },
      {
        key: "TST21 LAX-BCN 30/09/2014 08:35",
        flight: "TST 21",
        departure: "LAX",
        departureDate: "2014-09-30T08:35:00.000+08:00",
        arrival: "BCN",
        arrivalDate: "2014-09-30T19:45:00.000+08:00"
      }
    ]
  },
  options: [
    {
      mealId: "ML01",
      desc: "Snacks & Soda",
      priceRange: {
        min: 0,
        max: 20,
        jump: 5
      },
      currency: "EUR"
    },
    {
      mealId: "ML02",
      desc: "Light Dinner: Salad & Wine",
      priceRange: {
        min: 0,
        max: 50,
        jump: 10
      },
      currency: "EUR"
    },
    {
      mealId: "ML03",
      desc:
        "Dinner or Lunch: Meat with Pasta, Salad, Brad rolls, Tiramisu Cake, " +
        "Cheese and Crackers.",
      priceRange: {
        min: 0,
        max: 100,
        jump: 25
      },
      currency: "EUR"
    },
    {
      mealId: "ML04",
      desc: "Breackfast: Yogurt, Juice or Cooffe, Bread and Cookies",
      priceRange: {
        min: 0,
        max: 20,
        jump: 5
      },
      currency: "EUR"
    }
  ]
};

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
    console.log(addedMeals);
    alert(JSON.stringify(addedMeals));
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
    const { showModal } = this.state;
    return (
      <React.Fragment>
        <Row>
          <Col sm="8">
            <h2>Reservation information</h2>
          </Col>
          <Col sm="4">
            <Button variant="success" size="lg" onClick={this.sendData}>
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
              {booking.journeys.map(journey => {
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
                        <Button onClick={() => this.openModal(journey.key)}>
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
