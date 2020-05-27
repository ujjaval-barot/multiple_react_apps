import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Button,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Country.scss";
import Axios from "axios";
import CapitalCity from "../CapitalCity/CapitalCity";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

export default function Country(props) {
  const [country, setCountry] = useState();
  const [showWeather, setShowWeather] = useState();

  useEffect(() => {
    // fetch weather data from api
    Axios.get(
      `https://restcountries.eu/rest/v2/name/${props.match.params.name}`
    )
      .then((res) => {
        if (res) {
          let countriesData = res.data;
          let match = countriesData.filter((country) => {
            if (country.alpha2Code === props.match.params.code) return country;
          });
          setCountry(match[0]);
        }
      })
      .catch((err) => {
        // setLoading(false);
        return err;
      });
  }, []);

  return (
    <>
      <Box className="list-container">
        <Card className="country-container">
          {country && (
            <Card
              style={{ alignItems: "flex-start", justifySelf: "flex-start" }}
            >
              <CardHeader title={country.name} subheader={country.region} />
              <CardMedia
                className="image"
                image={country.flag}
                title={country.name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Population: {country.population}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Latitude: {country.latlng[0]}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Longitude: {country.latlng[1]}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Native Name: {country.nativeName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Capital: {country.capital}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Area: {country.area}
                </Typography>
                <br />
                <Button
                  onClick={() => setShowWeather(true)}
                  className="button"
                  variant="contained"
                  color="primary"
                >
                  Check Whether
                </Button>
              </CardContent>
            </Card>
          )}
          {showWeather && <CapitalCity {...props} />}
        </Card>
      </Box>
    </>
  );
}
