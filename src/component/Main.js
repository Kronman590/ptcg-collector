import React from "react";
import Container from '@mui/material/Container';
import Calculator from "./Calculator";

const Main = () => {

  return (
    <>
      <div className="header">
          <h1>DINNER ROULETTE</h1>
      </div>
      <div className="body">
          <Container fixed
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Calculator/>
          </Container>
        </div>
    </>
  );
};

export default Main;
