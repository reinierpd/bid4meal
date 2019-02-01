export default {
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
