import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import DashboardFrame from "./components/DashboardFrame/DashboardFrame";
import "./App.scss";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PropsContainer from "./components/PropsContainer/PropsContainer";
import InfoResults from "./components/InfoResults/InfoResults";

const arrayPropperties = [
  {
    id: 2342,
    location: [
      {
        id: 124234234,
        coordinates: [234234.23, 141234.23],
        address: "my street 23",
        context: {},
        property_id: 3,
      },
    ],
    type: "home",
    area: 232,
    status: "sold",
    sold_at: "yesterday",
    bought_by: "3423423",
    created_at: "two days ago",
    updated_at: "23423423",
    price: 99999993,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    ],
    description: "asfasdfsfd",
    num_bathrooms: 2,
    num_rooms: 3,
    pets: true,
    fully_fitted_kitchen: true,
    furnished: true,
    condition: 0,
    contact: 32423422,
    title: "The best one",
  },
  {
    id: 2442,
    location: [
      {
        id: 124234234,
        coordinates: [234234.23, 141234.23],
        address: "my street 23",
        context: {},
        property_id: 3,
      },
    ],
    type: "home",
    area: 232,
    status: "free",
    sold_at: "yesterday",
    bought_by: "3423423",
    created_at: "two days ago",
    updated_at: "23423423",
    price: 99999993,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    ],
    description: "asfasdfsfd",
    num_bathrooms: 2,
    num_rooms: 3,
    pets: true,
    fully_fitted_kitchen: true,
    furnished: true,
    condition: 0,
    contact: 32423422,
    title: "The best one",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/sign-in">
            <LoginPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
          <Route path="/dashboard">
            <DashboardFrame>
              <InfoResults properties={arrayPropperties} />
              {arrayPropperties.map((property) => {
                return <PropsContainer key={property.id} property={property} />;
              })}
            </DashboardFrame>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
