import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import "./CapitalCity.scss";
import { api_key } from "../constants/index";
import "./CapitalCity.scss";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function CapitalCity(props) {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState();
  const classes = useStyles();

  useEffect(() => {
    // fetch weather data from api
    setLoading(true);
    Axios.get(
      `http://api.weatherstack.com/current?access_key=${api_key}&query=${props.match.params.name}`
    )
      .then((res) => {
        if (res) {
          setWeather(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        return err;
      });
  }, []);

  return (
    <>
      {weather ? (
        <Card className="card-container" style={{ width: 400 }} width={500}>
          <CardHeader
            title={weather.location.name}
            subheader={weather.location.country}
            action={
              <CardMedia
                className="weather-image"
                image={weather.current.weather_icons[0]}
                title={weather.current.weather_descriptions[0]}
              />
            }
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Temperature: {weather.current.temperature}° C
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Weather: {weather.current.weather_descriptions[0]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Humidity: {weather.current.humidity}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Wind Speed: {weather.current.wind_speed} KMPH
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Precip: {weather.current.precip}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Observation Time: {weather.current.observation_time}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}
