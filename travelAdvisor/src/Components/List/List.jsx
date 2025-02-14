import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import UseStyles from "./Style";
import { useState } from "react";
import Placedtails from '../Placedetails/Placedtails'

const List = () => {
  const classes = UseStyles();
  const [type, setType] = useState("resturants");
  const [rating, setRating] = useState();
  const places = [
    {name:'Best Place'},
    {name:'Best Place'},
    {name:'Best Place'},
    {name:'Best Place'},
    {name:'Best Place'},
    {name:'Best Place'},
    {name:'Best Place'},
    {name:'Best Place'},
    {name:'Best Place'}
  ]
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Resurants , Hotels And Attractions Around You
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="resturants">Resturants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}  >
        {
          places?.map((place,i)=>(
            <Grid item key={i} xs={12} >
              <Placedtails place={place}/>
            </Grid>
          ))
        }

      </Grid>
    </div>
  );
};

export default List;
