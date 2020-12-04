import React from "react";

export default function About({ match }) {
  return (
    <div>
      <h1>welcome from about</h1>
      <h2>User id {match.params.id} </h2>
    </div>
  );
}
