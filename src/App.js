import React from "react";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Card } from "react-bootstrap";
import "./styles.css";

const App = () => {
  const firstName = "Clinton"; // Replace with your first name or leave it as is



  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
            <Image />
          </Card.Text>
        </Card.Body>
      </Card>
      <p className="greeting-text"> 
        Hello, {firstName ? firstName : "there"}!</p>
    </div>
  );
};

export default App;

