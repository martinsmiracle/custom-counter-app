import React from "react";
import Nav from "./Nav.jsx";

function ErrorBoundaryTest() {
//   const error = undefinedVariable.name;

  return (
    <>
      <Nav />
      <div>
        <h1>Error boundary test</h1>
      </div>
    </>
  );
}

export default ErrorBoundaryTest;
