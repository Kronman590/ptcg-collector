import React from "react";
import Container from '@mui/material/Container';
import CardList from "./CardList";

const Main = () => {

  return (
    <>
      <div className="header">
          <h1>Pocket TCG Card Collection</h1>
      </div>
      <div className="body">
          <Container fixed
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CardList/>
          </Container>
        </div>
    </>
  );
};

export default Main;
