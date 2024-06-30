import React from "react";
import players from "../players";
import Player from "./Player";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

const PlayerList = () => {
  return (
    // <div>
    //   <Container className="p-4">
    //     <Row>
    //       {players.map((el) => (
    //         <Player player={el} />
    //       ))}
    //     </Row>
    //   </Container>
    // </div>
    <div className="App">
      <Container className="p-4">
        <h1>Football Players</h1>
        <Row>
          {players.map((el, idx) => (
            <Player player={el} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PlayerList;
