import React, { useState } from "react";
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { dishList } from "./Dishes";

const Calculator = () => {
  const [cuisine, setCuisine] = useState("any");
  const [meat, setMeat] = useState("any");
  const [base, setBase] = useState("any");
  const [chosenDish, setDish] = useState("");

  const getCuisines = dishList.reduce((acc, val) => {if (!acc.includes(val.cuisine)) acc.push(val.cuisine); return acc;}, ["any"]);
  const getBase = dishList.reduce((acc, val) => {if (!acc.includes(val.base)) acc.push(val.base); return acc;}, ["any"]);
  const getMeat = dishList.reduce((acc, val) => {if (!acc.includes(val.meat)) acc.push(val.meat); return acc;}, ["any"]);

  const onCalculate = () => {
    const selectionList = dishList.filter(dish => 
      ((cuisine == "any") || (cuisine == dish.cuisine))
      && ((meat == "any") || (meat == dish.meat))
      && ((base == "any") || (base == dish.base))
    )
    if (selectionList.length == 0) 
      setDish("NO MATCH FOUND");
    else {
      const index = Math.floor(Math.random() * (selectionList.length - 1));
      setDish(selectionList[index].foodrecipe);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ minWidth: '100%' }}>
          <FormGroup style={{alignItems: "center"}}>
            <Typography>FILTERS:</Typography>
            <br/>
            <div>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>CUISINE:</Typography>
                <Select
                  value={cuisine}
                  name="Cuisine"
                  onChange={(e) => setCuisine(e.target.value)}
                  size="small"
                  style={{width:"10rem"}}
                >
                  {getCuisines.map(val => (<MenuItem key={"cuisine"+val} value={val}>{val}</MenuItem>))}
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Typography>BASE:</Typography>
                <Select
                  value={base}
                  name="Base"
                  onChange={(e) => setBase(e.target.value)}
                  size="small"
                  style={{width:"10rem"}}
                >
                  {getBase.map(val => (<MenuItem key={"base"+val} value={val}>{val}</MenuItem>))}
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Typography>MEAT:</Typography>
                <Select
                  value={meat}
                  name="Meat"
                  onChange={(e) => setMeat(e.target.value)}
                  size="small"
                  style={{width:"10rem"}}
                >
                  {getMeat.map(val => (<MenuItem key={"meat"+val} value={val}>{val}</MenuItem>))}
                </Select>
              </Grid>
            </Grid>
            </div>
            <br/>
            <Button variant="contained" onClick={onCalculate}>CHOOSE A DISH</Button>
          </FormGroup>
        </Card>
      </Grid>
      {chosenDish && <Grid item xs={12}>
        <Card sx={{ minWidth: '100%' }} style={{padding: "100px 0px", background: "pink", border: "2px solid cyan", color: "black"}}>
          <Typography style={{whiteSpace: 'pre-line'}}>{chosenDish}</Typography>
        </Card>
      </Grid>}
    </Grid>
  );
};

Calculator.propTypes = {
  events: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
}

export default Calculator;
