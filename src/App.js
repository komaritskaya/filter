import React, { Fragment } from "react";
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";
import ServiceFilter from "./components/ServiceFilter";
import ServiceAddClassBased from "./components/ServiceAddClassBased";
import ServiceListClassBased from "./components/ServiceListClassBased";
import ServiceFilterClassBased from "./components/ServiceFilterClassBased";

function App() {
  return (
    <Fragment>
      <ServiceAdd />
      <ServiceFilter />
      <ServiceList />
      <hr />
      <ServiceAddClassBased />
      <ServiceFilterClassBased />
      <ServiceListClassBased />
    </Fragment>
  );
}

export default App;
