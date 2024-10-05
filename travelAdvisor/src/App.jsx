import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
import { getPlaceData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaceData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />{" "}
        </Grid>
        <Grid item xs={12} md={8}>
          <Map places={places} />{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
