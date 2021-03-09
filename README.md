# Calendar

This is a multiplatform Calendar Web application created by using React. It includes the below [detailed features](#features).

## Demo

If you like to open a functional version of the web application, please click [here](https://lmadrazo-calendar.herokuapp.com/)


## How to run locally?

First of all, clone this repository.

```sh
git clone https://madrazolucas.github.io/calendar/
cd calendar
```

After that, install the dependencies and run the project.

```sh
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Main project dependencies

The following are the most relevant dependencies used by this project:
- [React](https://reactjs.org/) - A Java Script library for building user interfaces.
- [Material-UI](https://material-ui.com/) - Component library to build React applications.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [Moment.js](https://momentjs.com/) - A JavaScript date library for parsing, validating, manipulating, and formatting dates.

## Features
- Display an interactive calendar and navigate between months
- Ability to add reminders, including a title, day, time, color and city.
- Display reminders on the calendar view in the correct time order, and with the color provided on its creation.
- Ability to modify or delete a selected reminder.
- Ability to delete all the reminders of a specific day.
- See weather information of the reminder city.

## How to run unit test?

Run the following script:

```sh
npm test
```

## Notes/Considerations
- You can see in the .eslintrc file the styling guide configuration.
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- In order to get cities and weather information, the [weather-api](https://www.weatherapi.com/) is being used by this project. Just for demo proposal, a temporal free api-key is added to this repository.
