import { httpBase } from "../../axios";
import { key, pathUrl, unit } from "../../config";
import {
  getLocation,
  getReverseLocation,
  getWeather,
} from "../slice/weatherSlice";
// import { dataLocation, dataWeather } from "../slice/weatherSlice";

export const getDataWeather = (lat, lon) => async (dispatch) => {
  httpBase
    .get(
      `${pathUrl.weather}/onecall?lat=${lat}&lon=${lon}&units=${unit.weather}&appid=${key.api}`
    )
    .then(({ data }) => {
      //   dispatch({ type: GET_WEATHER_SUCCESS, payload: data });
      dispatch(getWeather(data));
    })
    .catch(({ response }) => {
      const { data } = response;
      // console.error(data.message);
      alert(data.message);
    });
};

export const getDataLocation = (city) => async (dispatch) => {
  httpBase
    .get(`${pathUrl.geolocation}/direct?q=${city}&appid=${key.api}`)
    .then(({ data }) => {
      //   dispatch({ type: GET_LOCATION_SUCCESS, payload: data });
      dispatch(getLocation(data));
    })
    .catch(({ response }) => {
      const { data } = response;
      // console.error(data.message);
      alert(data.message);
    });
};

export const getDataReverseLocation = (lat, lon) => async (dispatch) => {
  httpBase
    .get(
      `${pathUrl.geolocation}/reverse?lat=${lat}&lon=${lon}&appid=${key.api}`
    )
    .then(({ data }) => {
      //   dispatch({ type: GET_LOCATION_SUCCESS, payload: data });
      dispatch(getReverseLocation(data));
    })
    .catch(({ response }) => {
      const { data } = response;
      // console.error(data.message);
      alert(data.message);
    });
};
