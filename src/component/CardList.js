import React from "react";
// import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import FormGroup from '@mui/material/FormGroup';
// import Typography from '@mui/material/Typography';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {cardDb} from './cardsDb'

const CardList = () => {
  // const [cuisine, setCuisine] = useState("any");
  // const [meat, setMeat] = useState("any");
  // const [base, setBase] = useState("any");
  // const [chosenDish, setDish] = useState("");

  // const getCuisines = dishList.reduce((acc, val) => {if (!acc.includes(val.cuisine)) acc.push(val.cuisine); return acc;}, ["any"]);
  // const getBase = dishList.reduce((acc, val) => {if (!acc.includes(val.base)) acc.push(val.base); return acc;}, ["any"]);
  // const getMeat = dishList.reduce((acc, val) => {if (!acc.includes(val.meat)) acc.push(val.meat); return acc;}, ["any"]);

  // const onCalculate = () => {
  //   const selectionList = dishList.filter(dish => 
  //     ((cuisine == "any") || (cuisine == dish.cuisine))
  //     && ((meat == "any") || (meat == dish.meat))
  //     && ((base == "any") || (base == dish.base))
  //   )
  //   if (selectionList.length == 0) 
  //     setDish("NO MATCH FOUND");
  //   else {
  //     const index = Math.floor(Math.random() * (selectionList.length - 1));
  //     setDish(selectionList[index].foodrecipe);
  //   }
  // };

  return (
    <Card sx={{ minWidth: '100%' }}>
      <Grid container spacing={2}>
        {cardDb.map(card => (
          <Grid key={card.name} item xs={2}>
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 250 },
                '&:hover': {
                   color: "#f00",
                }
              }}
              src={card.link}
            />
        </Grid>))}
      </Grid>
    </Card>
  );
};

// CardList.propTypes = {
//   events: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
// }

export default CardList;
