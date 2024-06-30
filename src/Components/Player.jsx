import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const Player = ({ player }) => {
  const {
    name = "Messi",
    age = 37,
    team,
    nationality,
    jerseyNumber,
    imageUrl,
  } = player;
  return (
    <Card style={{ width: "30%" }} className="m-2">
      <Card.Img variant="top" src={imageUrl} width={200} height={300} />
      <Card.Body>
        <Card.Title>
          {name} {age}
        </Card.Title>
        <Card.Title>
          {team},{nationality} {jerseyNumber}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Player;
