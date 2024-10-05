import React, { useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import { AppBar, Toolbar, InputBase, Typography, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from './Style';

const Header = () => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      console.log(place);
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5">Travel Advisor</Typography>
          <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <Typography variant="h6" className={classes.title}>
              Explore New Places
            </Typography>
          
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search ..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </LoadScript>
  );
};

export default Header;
