import React, { useState, useEffect } from "react";
import {
  TextField,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
} from "@material-ui/core";
import { Autocomplete, Alert } from "@material-ui/lab";
import "./SearchCountry.scss";
import Axios from "axios";

export default function SearchCountry(props) {
  const [suggestion, setSuggestion] = useState([]);
  const [selected, setSelected] = useState([]);
  const [country, setCountry] = useState();
  const [inputErr, setInputErr] = useState(false);
  const [CountryFound, setCountryFounds] = useState("");

  useEffect(() => {
    setSuggestion(props.countries);
  }, []);

  /** @method handleSubmit used to store counties found from search in redux*/

  const handleChange = (value) => {
    setCountry(value);
    if (country && country.length > 2) {
      Axios.get(`https://restcountries.eu/rest/v2/name/${value}`)
        .then((res) => {
          if (res) {
            setCountryFounds(true);
            setSuggestion(res.data);
          }
        })
        .catch((err) => {
          setCountryFounds(false);
          return err;
        });
    } else return;
  };

  const handleSubmit = () => {
    if (selected)
      props.history.push(`country/${selected.name}/${selected.alpha2Code}`);
  };

  return (
    <Box className="container">
      <Card className="card-container">
        <CardContent>
          <h1>Welcome, please input country name to check weather</h1>
          <form onSubmit={handleSubmit}>
            <Autocomplete
              name="selected"
              id="combo-box-demo"
              onChange={(event, newValue) => {
                setSelected(newValue);
              }}
              options={suggestion}
              getOptionLabel={(option) => option.name}
              // style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  className="input"
                  name="country"
                  {...params}
                  error={inputErr}
                  value={country}
                  id="outlined-error-helper-text"
                  label="Country Name"
                  onInput={(e) => handleChange(e.target.value)}
                  helperText={
                    inputErr && "country name must be atleast 3 characters "
                  }
                  variant="outlined"
                />
              )}
            />
            <br />

            <Grid item xs={12}>
              <Button
                disabled={selected.length === 0}
                type="submit"
                className="button"
                variant="contained"
                color="primary"
              >
                Send
              </Button>
            </Grid>
          </form>
          {/** if no country found show alert */}
          {CountryFound === false && (
            <div className="alert">
              <Alert variant="filled" severity="error">
                country not found! — please input valid country
              </Alert>
            </div>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
