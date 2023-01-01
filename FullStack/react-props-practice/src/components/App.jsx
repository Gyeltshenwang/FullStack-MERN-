import React from "react";
import Card from "./Card";
import Contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contact </h1>

      <Card
        name={Contacts[0].name}
        tel={Contacts[0].phone}
        email={Contacts[0].email}
        img={Contacts[0].imgURL}
      />
      <Card
        name={Contacts[1].name}
        tel={Contacts[1].phone}
        email={Contacts[1].email}
        img={Contacts[1].imgURL}
      />
      <Card
        name={Contacts[1].name}
        tel={Contacts[2].phone}
        email={Contacts[2].email}
        img={Contacts[2].imgURL}
      />
    </div>
  );
}

export default App;
