/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  StyledContainer,
  StyledGrid,
  StyledTab,
  Title,
  TitleBold,
} from "./style";
import "../../../style/home.scss";
import { WeatherTab } from "../../organism";
import { Grid, Label, Search } from "semantic-ui-react";
import { useRegularHook } from "../../../utils/hooks";
import {
  getDataLocation,
  getDataWeather,
} from "../../../utils/redux/action/weatherAction";

const Home = () => {
  // const data = {
  //   lat: -6.2629,
  //   lon: 106.8822,
  //   timezone: "Asia/Jakarta",
  //   timezone_offset: 25200,
  //   current: {
  //     dt: 1689828197,
  //     sunrise: 1689807873,
  //     sunset: 1689850357,
  //     temp: 33.49,
  //     feels_like: 40.49,
  //     pressure: 1008,
  //     humidity: 61,
  //     dew_point: 24.93,
  //     uvi: 11.36,
  //     clouds: 20,
  //     visibility: 6000,
  //     wind_speed: 1.54,
  //     wind_deg: 360,
  //     weather: [
  //       {
  //         id: 801,
  //         main: "Clouds",
  //         description: "few clouds",
  //         icon: "02d",
  //       },
  //     ],
  //   },
  //   minutely: [
  //     {
  //       dt: 1689828240,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689828300,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689828360,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689828420,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689828480,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689828540,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689828600,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689828660,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689828720,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689828780,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689828840,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689828900,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689828960,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829020,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829080,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829140,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829200,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829260,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829320,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829380,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829440,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829500,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829560,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829620,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829680,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829740,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829800,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829860,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829920,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689829980,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830040,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830100,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830160,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830220,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830280,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830340,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830400,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830460,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830520,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830580,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830640,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830700,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830760,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830820,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830880,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689830940,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831000,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831060,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831120,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831180,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831240,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831300,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831360,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831420,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831480,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831540,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831600,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831660,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831720,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831780,
  //       precipitation: 0,
  //     },
  //     {
  //       dt: 1689831840,
  //       precipitation: 0,
  //     },
  //   ],
  //   hourly: [
  //     {
  //       dt: 1689825600,
  //       temp: 33.1,
  //       feels_like: 39.06,
  //       pressure: 1008,
  //       humidity: 58,
  //       dew_point: 23.73,
  //       uvi: 10.56,
  //       clouds: 29,
  //       visibility: 10000,
  //       wind_speed: 1.06,
  //       wind_deg: 14,
  //       wind_gust: 1.3,
  //       weather: [
  //         {
  //           id: 802,
  //           main: "Clouds",
  //           description: "scattered clouds",
  //           icon: "03d",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689829200,
  //       temp: 33.49,
  //       feels_like: 40.49,
  //       pressure: 1008,
  //       humidity: 61,
  //       dew_point: 24.93,
  //       uvi: 11.36,
  //       clouds: 20,
  //       visibility: 10000,
  //       wind_speed: 1.67,
  //       wind_deg: 357,
  //       wind_gust: 1.63,
  //       weather: [
  //         {
  //           id: 801,
  //           main: "Clouds",
  //           description: "few clouds",
  //           icon: "02d",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689832800,
  //       temp: 33.37,
  //       feels_like: 39.01,
  //       pressure: 1008,
  //       humidity: 56,
  //       dew_point: 23.39,
  //       uvi: 10.17,
  //       clouds: 26,
  //       visibility: 10000,
  //       wind_speed: 2.42,
  //       wind_deg: 352,
  //       wind_gust: 1.98,
  //       weather: [
  //         {
  //           id: 802,
  //           main: "Clouds",
  //           description: "scattered clouds",
  //           icon: "03d",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689836400,
  //       temp: 33.19,
  //       feels_like: 37.6,
  //       pressure: 1008,
  //       humidity: 53,
  //       dew_point: 22.32,
  //       uvi: 7.21,
  //       clouds: 14,
  //       visibility: 10000,
  //       wind_speed: 3.5,
  //       wind_deg: 351,
  //       wind_gust: 2.46,
  //       weather: [
  //         {
  //           id: 801,
  //           main: "Clouds",
  //           description: "few clouds",
  //           icon: "02d",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689840000,
  //       temp: 32.7,
  //       feels_like: 35.97,
  //       pressure: 1007,
  //       humidity: 51,
  //       dew_point: 21.24,
  //       uvi: 4.1,
  //       clouds: 12,
  //       visibility: 10000,
  //       wind_speed: 4.2,
  //       wind_deg: 351,
  //       wind_gust: 2.97,
  //       weather: [
  //         {
  //           id: 801,
  //           main: "Clouds",
  //           description: "few clouds",
  //           icon: "02d",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689843600,
  //       temp: 31.72,
  //       feels_like: 34.09,
  //       pressure: 1007,
  //       humidity: 51,
  //       dew_point: 20.34,
  //       uvi: 1.6,
  //       clouds: 8,
  //       visibility: 10000,
  //       wind_speed: 4.3,
  //       wind_deg: 348,
  //       wind_gust: 3.18,
  //       weather: [
  //         {
  //           id: 800,
  //           main: "Clear",
  //           description: "clear sky",
  //           icon: "01d",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689847200,
  //       temp: 30,
  //       feels_like: 31.89,
  //       pressure: 1008,
  //       humidity: 55,
  //       dew_point: 20.04,
  //       uvi: 0.31,
  //       clouds: 4,
  //       visibility: 10000,
  //       wind_speed: 4.29,
  //       wind_deg: 343,
  //       wind_gust: 3.6,
  //       weather: [
  //         {
  //           id: 800,
  //           main: "Clear",
  //           description: "clear sky",
  //           icon: "01d",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689850800,
  //       temp: 28.59,
  //       feels_like: 30.22,
  //       pressure: 1009,
  //       humidity: 59,
  //       dew_point: 19.99,
  //       uvi: 0,
  //       clouds: 4,
  //       visibility: 10000,
  //       wind_speed: 3.8,
  //       wind_deg: 340,
  //       wind_gust: 4.1,
  //       weather: [
  //         {
  //           id: 800,
  //           main: "Clear",
  //           description: "clear sky",
  //           icon: "01n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689854400,
  //       temp: 28.35,
  //       feels_like: 29.98,
  //       pressure: 1010,
  //       humidity: 60,
  //       dew_point: 19.8,
  //       uvi: 0,
  //       clouds: 5,
  //       visibility: 10000,
  //       wind_speed: 2.79,
  //       wind_deg: 331,
  //       wind_gust: 3.27,
  //       weather: [
  //         {
  //           id: 800,
  //           main: "Clear",
  //           description: "clear sky",
  //           icon: "01n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689858000,
  //       temp: 28.27,
  //       feels_like: 29.86,
  //       pressure: 1011,
  //       humidity: 60,
  //       dew_point: 19.78,
  //       uvi: 0,
  //       clouds: 78,
  //       visibility: 10000,
  //       wind_speed: 1.82,
  //       wind_deg: 321,
  //       wind_gust: 2.22,
  //       weather: [
  //         {
  //           id: 803,
  //           main: "Clouds",
  //           description: "broken clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689861600,
  //       temp: 28.1,
  //       feels_like: 29.71,
  //       pressure: 1011,
  //       humidity: 61,
  //       dew_point: 19.84,
  //       uvi: 0,
  //       clouds: 87,
  //       visibility: 10000,
  //       wind_speed: 1.6,
  //       wind_deg: 327,
  //       wind_gust: 2.08,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689865200,
  //       temp: 27.9,
  //       feels_like: 29.52,
  //       pressure: 1012,
  //       humidity: 62,
  //       dew_point: 19.84,
  //       uvi: 0,
  //       clouds: 90,
  //       visibility: 10000,
  //       wind_speed: 0.9,
  //       wind_deg: 334,
  //       wind_gust: 1.6,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689868800,
  //       temp: 27.58,
  //       feels_like: 29.14,
  //       pressure: 1012,
  //       humidity: 63,
  //       dew_point: 19.8,
  //       uvi: 0,
  //       clouds: 93,
  //       visibility: 10000,
  //       wind_speed: 0.16,
  //       wind_deg: 246,
  //       wind_gust: 1.09,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689872400,
  //       temp: 27.25,
  //       feels_like: 28.74,
  //       pressure: 1011,
  //       humidity: 64,
  //       dew_point: 19.85,
  //       uvi: 0,
  //       clouds: 94,
  //       visibility: 10000,
  //       wind_speed: 0.48,
  //       wind_deg: 192,
  //       wind_gust: 1.41,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689876000,
  //       temp: 26.89,
  //       feels_like: 28.37,
  //       pressure: 1010,
  //       humidity: 66,
  //       dew_point: 19.85,
  //       uvi: 0,
  //       clouds: 94,
  //       visibility: 10000,
  //       wind_speed: 0.75,
  //       wind_deg: 205,
  //       wind_gust: 1.83,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689879600,
  //       temp: 26.51,
  //       feels_like: 26.51,
  //       pressure: 1010,
  //       humidity: 67,
  //       dew_point: 19.95,
  //       uvi: 0,
  //       clouds: 15,
  //       visibility: 10000,
  //       wind_speed: 0.92,
  //       wind_deg: 203,
  //       wind_gust: 1.8,
  //       weather: [
  //         {
  //           id: 801,
  //           main: "Clouds",
  //           description: "few clouds",
  //           icon: "02n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689883200,
  //       temp: 26.27,
  //       feels_like: 26.27,
  //       pressure: 1010,
  //       humidity: 68,
  //       dew_point: 19.91,
  //       uvi: 0,
  //       clouds: 25,
  //       visibility: 10000,
  //       wind_speed: 1.15,
  //       wind_deg: 201,
  //       wind_gust: 1.84,
  //       weather: [
  //         {
  //           id: 802,
  //           main: "Clouds",
  //           description: "scattered clouds",
  //           icon: "03n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689886800,
  //       temp: 26.01,
  //       feels_like: 26.01,
  //       pressure: 1010,
  //       humidity: 69,
  //       dew_point: 19.96,
  //       uvi: 0,
  //       clouds: 21,
  //       visibility: 10000,
  //       wind_speed: 1.24,
  //       wind_deg: 174,
  //       wind_gust: 1.8,
  //       weather: [
  //         {
  //           id: 801,
  //           main: "Clouds",
  //           description: "few clouds",
  //           icon: "02n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689890400,
  //       temp: 25.66,
  //       feels_like: 26.11,
  //       pressure: 1010,
  //       humidity: 70,
  //       dew_point: 19.9,
  //       uvi: 0,
  //       clouds: 28,
  //       visibility: 10000,
  //       wind_speed: 1.63,
  //       wind_deg: 150,
  //       wind_gust: 2.37,
  //       weather: [
  //         {
  //           id: 802,
  //           main: "Clouds",
  //           description: "scattered clouds",
  //           icon: "03n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689894000,
  //       temp: 25.35,
  //       feels_like: 25.82,
  //       pressure: 1011,
  //       humidity: 72,
  //       dew_point: 19.82,
  //       uvi: 0,
  //       clouds: 31,
  //       visibility: 10000,
  //       wind_speed: 1.9,
  //       wind_deg: 141,
  //       wind_gust: 2.91,
  //       weather: [
  //         {
  //           id: 802,
  //           main: "Clouds",
  //           description: "scattered clouds",
  //           icon: "03n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689897600,
  //       temp: 25.72,
  //       feels_like: 26.18,
  //       pressure: 1012,
  //       humidity: 70,
  //       dew_point: 19.85,
  //       uvi: 0.49,
  //       clouds: 42,
  //       visibility: 10000,
  //       wind_speed: 1.85,
  //       wind_deg: 131,
  //       wind_gust: 2.58,
  //       weather: [
  //         {
  //           id: 802,
  //           main: "Clouds",
  //           description: "scattered clouds",
  //           icon: "03d",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689901200,
  //       temp: 26.87,
  //       feels_like: 28.34,
  //       pressure: 1013,
  //       humidity: 66,
  //       dew_point: 20.04,
  //       uvi: 1.88,
  //       clouds: 100,
  //       visibility: 10000,
  //       wind_speed: 1.79,
  //       wind_deg: 122,
  //       wind_gust: 1.89,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04d",
  //         },
  //       ],
  //       pop: 0.08,
  //     },
  //     {
  //       dt: 1689904800,
  //       temp: 28.32,
  //       feels_like: 30.19,
  //       pressure: 1013,
  //       humidity: 62,
  //       dew_point: 20.39,
  //       uvi: 4.36,
  //       clouds: 100,
  //       visibility: 10000,
  //       wind_speed: 1.26,
  //       wind_deg: 96,
  //       wind_gust: 1.44,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04d",
  //         },
  //       ],
  //       pop: 0.08,
  //     },
  //     {
  //       dt: 1689908400,
  //       temp: 29.72,
  //       feels_like: 32.12,
  //       pressure: 1012,
  //       humidity: 59,
  //       dew_point: 20.84,
  //       uvi: 7.25,
  //       clouds: 98,
  //       visibility: 10000,
  //       wind_speed: 1.13,
  //       wind_deg: 45,
  //       wind_gust: 1.24,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04d",
  //         },
  //       ],
  //       pop: 0.08,
  //     },
  //     {
  //       dt: 1689912000,
  //       temp: 30.66,
  //       feels_like: 33.25,
  //       pressure: 1012,
  //       humidity: 56,
  //       dew_point: 20.87,
  //       uvi: 9.48,
  //       clouds: 98,
  //       visibility: 10000,
  //       wind_speed: 1.74,
  //       wind_deg: 3,
  //       wind_gust: 1.48,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04d",
  //         },
  //       ],
  //       pop: 0.08,
  //     },
  //     {
  //       dt: 1689915600,
  //       temp: 30.58,
  //       feels_like: 33.31,
  //       pressure: 1011,
  //       humidity: 57,
  //       dew_point: 21.05,
  //       uvi: 10.2,
  //       clouds: 98,
  //       visibility: 10000,
  //       wind_speed: 3.01,
  //       wind_deg: 342,
  //       wind_gust: 2.37,
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10d",
  //         },
  //       ],
  //       pop: 0.36,
  //       rain: {
  //         "1h": 0.59,
  //       },
  //     },
  //     {
  //       dt: 1689919200,
  //       temp: 29.72,
  //       feels_like: 32.49,
  //       pressure: 1011,
  //       humidity: 61,
  //       dew_point: 21.47,
  //       uvi: 9.13,
  //       clouds: 97,
  //       visibility: 10000,
  //       wind_speed: 3.73,
  //       wind_deg: 333,
  //       wind_gust: 3.16,
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10d",
  //         },
  //       ],
  //       pop: 0.4,
  //       rain: {
  //         "1h": 0.79,
  //       },
  //     },
  //     {
  //       dt: 1689922800,
  //       temp: 29.49,
  //       feels_like: 32.07,
  //       pressure: 1010,
  //       humidity: 61,
  //       dew_point: 21.26,
  //       uvi: 6.97,
  //       clouds: 90,
  //       visibility: 10000,
  //       wind_speed: 4.12,
  //       wind_deg: 335,
  //       wind_gust: 4.07,
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10d",
  //         },
  //       ],
  //       pop: 0.48,
  //       rain: {
  //         "1h": 0.83,
  //       },
  //     },
  //     {
  //       dt: 1689926400,
  //       temp: 29.55,
  //       feels_like: 31.82,
  //       pressure: 1010,
  //       humidity: 59,
  //       dew_point: 20.77,
  //       uvi: 3.96,
  //       clouds: 85,
  //       visibility: 10000,
  //       wind_speed: 3.75,
  //       wind_deg: 329,
  //       wind_gust: 3.8,
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10d",
  //         },
  //       ],
  //       pop: 0.5,
  //       rain: {
  //         "1h": 0.75,
  //       },
  //     },
  //     {
  //       dt: 1689930000,
  //       temp: 29.28,
  //       feels_like: 31.35,
  //       pressure: 1010,
  //       humidity: 59,
  //       dew_point: 20.34,
  //       uvi: 1.55,
  //       clouds: 89,
  //       visibility: 10000,
  //       wind_speed: 3.38,
  //       wind_deg: 330,
  //       wind_gust: 3.52,
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10d",
  //         },
  //       ],
  //       pop: 0.54,
  //       rain: {
  //         "1h": 0.5,
  //       },
  //     },
  //     {
  //       dt: 1689933600,
  //       temp: 28.86,
  //       feels_like: 30.8,
  //       pressure: 1011,
  //       humidity: 60,
  //       dew_point: 20.27,
  //       uvi: 0.32,
  //       clouds: 90,
  //       visibility: 10000,
  //       wind_speed: 2.85,
  //       wind_deg: 334,
  //       wind_gust: 2.93,
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10d",
  //         },
  //       ],
  //       pop: 0.58,
  //       rain: {
  //         "1h": 0.25,
  //       },
  //     },
  //     {
  //       dt: 1689937200,
  //       temp: 28.2,
  //       feels_like: 30.12,
  //       pressure: 1011,
  //       humidity: 63,
  //       dew_point: 20.4,
  //       uvi: 0,
  //       clouds: 91,
  //       visibility: 10000,
  //       wind_speed: 2.18,
  //       wind_deg: 335,
  //       wind_gust: 2.69,
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10n",
  //         },
  //       ],
  //       pop: 0.58,
  //       rain: {
  //         "1h": 0.11,
  //       },
  //     },
  //     {
  //       dt: 1689940800,
  //       temp: 28.02,
  //       feels_like: 29.94,
  //       pressure: 1012,
  //       humidity: 64,
  //       dew_point: 20.58,
  //       uvi: 0,
  //       clouds: 92,
  //       visibility: 10000,
  //       wind_speed: 1.49,
  //       wind_deg: 331,
  //       wind_gust: 1.97,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0.58,
  //     },
  //     {
  //       dt: 1689944400,
  //       temp: 27.84,
  //       feels_like: 29.88,
  //       pressure: 1013,
  //       humidity: 66,
  //       dew_point: 20.72,
  //       uvi: 0,
  //       clouds: 83,
  //       visibility: 10000,
  //       wind_speed: 0.92,
  //       wind_deg: 304,
  //       wind_gust: 1.46,
  //       weather: [
  //         {
  //           id: 803,
  //           main: "Clouds",
  //           description: "broken clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689948000,
  //       temp: 27.67,
  //       feels_like: 29.7,
  //       pressure: 1013,
  //       humidity: 67,
  //       dew_point: 20.87,
  //       uvi: 0,
  //       clouds: 80,
  //       visibility: 10000,
  //       wind_speed: 0.56,
  //       wind_deg: 292,
  //       wind_gust: 1.18,
  //       weather: [
  //         {
  //           id: 803,
  //           main: "Clouds",
  //           description: "broken clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689951600,
  //       temp: 27.26,
  //       feels_like: 29.21,
  //       pressure: 1013,
  //       humidity: 69,
  //       dew_point: 21.11,
  //       uvi: 0,
  //       clouds: 86,
  //       visibility: 10000,
  //       wind_speed: 0.59,
  //       wind_deg: 182,
  //       wind_gust: 0.75,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689955200,
  //       temp: 26.78,
  //       feels_like: 28.64,
  //       pressure: 1013,
  //       humidity: 72,
  //       dew_point: 21.17,
  //       uvi: 0,
  //       clouds: 89,
  //       visibility: 10000,
  //       wind_speed: 1.34,
  //       wind_deg: 153,
  //       wind_gust: 1.69,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689958800,
  //       temp: 26.33,
  //       feels_like: 26.33,
  //       pressure: 1013,
  //       humidity: 74,
  //       dew_point: 21.18,
  //       uvi: 0,
  //       clouds: 91,
  //       visibility: 10000,
  //       wind_speed: 1.52,
  //       wind_deg: 135,
  //       wind_gust: 2.01,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689962400,
  //       temp: 25.98,
  //       feels_like: 25.98,
  //       pressure: 1012,
  //       humidity: 75,
  //       dew_point: 21.22,
  //       uvi: 0,
  //       clouds: 93,
  //       visibility: 10000,
  //       wind_speed: 1.72,
  //       wind_deg: 129,
  //       wind_gust: 2.2,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689966000,
  //       temp: 25.69,
  //       feels_like: 26.3,
  //       pressure: 1011,
  //       humidity: 76,
  //       dew_point: 21.17,
  //       uvi: 0,
  //       clouds: 97,
  //       visibility: 10000,
  //       wind_speed: 1.54,
  //       wind_deg: 118,
  //       wind_gust: 1.96,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689969600,
  //       temp: 25.5,
  //       feels_like: 26.12,
  //       pressure: 1011,
  //       humidity: 77,
  //       dew_point: 21.05,
  //       uvi: 0,
  //       clouds: 78,
  //       visibility: 10000,
  //       wind_speed: 1.62,
  //       wind_deg: 117,
  //       wind_gust: 2.09,
  //       weather: [
  //         {
  //           id: 803,
  //           main: "Clouds",
  //           description: "broken clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689973200,
  //       temp: 25.27,
  //       feels_like: 25.86,
  //       pressure: 1011,
  //       humidity: 77,
  //       dew_point: 20.95,
  //       uvi: 0,
  //       clouds: 64,
  //       visibility: 10000,
  //       wind_speed: 1.41,
  //       wind_deg: 118,
  //       wind_gust: 1.86,
  //       weather: [
  //         {
  //           id: 803,
  //           main: "Clouds",
  //           description: "broken clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689976800,
  //       temp: 25.18,
  //       feels_like: 25.79,
  //       pressure: 1011,
  //       humidity: 78,
  //       dew_point: 20.95,
  //       uvi: 0,
  //       clouds: 71,
  //       visibility: 10000,
  //       wind_speed: 1.41,
  //       wind_deg: 136,
  //       wind_gust: 1.83,
  //       weather: [
  //         {
  //           id: 803,
  //           main: "Clouds",
  //           description: "broken clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689980400,
  //       temp: 25.04,
  //       feels_like: 25.64,
  //       pressure: 1011,
  //       humidity: 78,
  //       dew_point: 20.85,
  //       uvi: 0,
  //       clouds: 73,
  //       visibility: 10000,
  //       wind_speed: 1.34,
  //       wind_deg: 127,
  //       wind_gust: 1.76,
  //       weather: [
  //         {
  //           id: 803,
  //           main: "Clouds",
  //           description: "broken clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689984000,
  //       temp: 25.46,
  //       feels_like: 26.05,
  //       pressure: 1012,
  //       humidity: 76,
  //       dew_point: 20.93,
  //       uvi: 0.5,
  //       clouds: 77,
  //       visibility: 10000,
  //       wind_speed: 1.18,
  //       wind_deg: 130,
  //       wind_gust: 1.52,
  //       weather: [
  //         {
  //           id: 803,
  //           main: "Clouds",
  //           description: "broken clouds",
  //           icon: "04d",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689987600,
  //       temp: 26.76,
  //       feels_like: 28.46,
  //       pressure: 1013,
  //       humidity: 70,
  //       dew_point: 20.9,
  //       uvi: 2.1,
  //       clouds: 95,
  //       visibility: 10000,
  //       wind_speed: 0.88,
  //       wind_deg: 124,
  //       wind_gust: 0.97,
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04d",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689991200,
  //       temp: 28.4,
  //       feels_like: 30.59,
  //       pressure: 1013,
  //       humidity: 64,
  //       dew_point: 20.92,
  //       uvi: 4.88,
  //       clouds: 77,
  //       visibility: 10000,
  //       wind_speed: 0.59,
  //       wind_deg: 85,
  //       wind_gust: 0.86,
  //       weather: [
  //         {
  //           id: 803,
  //           main: "Clouds",
  //           description: "broken clouds",
  //           icon: "04d",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //     {
  //       dt: 1689994800,
  //       temp: 29.91,
  //       feels_like: 32.28,
  //       pressure: 1013,
  //       humidity: 58,
  //       dew_point: 20.82,
  //       uvi: 8.13,
  //       clouds: 53,
  //       visibility: 10000,
  //       wind_speed: 0.82,
  //       wind_deg: 41,
  //       wind_gust: 1.1,
  //       weather: [
  //         {
  //           id: 803,
  //           main: "Clouds",
  //           description: "broken clouds",
  //           icon: "04d",
  //         },
  //       ],
  //       pop: 0,
  //     },
  //   ],
  //   daily: [
  //     {
  //       dt: 1689825600,
  //       sunrise: 1689807873,
  //       sunset: 1689850357,
  //       moonrise: 1689814500,
  //       moonset: 1689857940,
  //       moon_phase: 0.07,
  //       summary: "Expect a day of partly cloudy with clear spells",
  //       temp: {
  //         day: 33.1,
  //         min: 24.85,
  //         max: 33.49,
  //         night: 27.58,
  //         eve: 30,
  //         morn: 25.19,
  //       },
  //       feels_like: {
  //         day: 39.06,
  //         night: 29.14,
  //         eve: 31.89,
  //         morn: 25.59,
  //       },
  //       pressure: 1008,
  //       humidity: 58,
  //       dew_point: 23.73,
  //       wind_speed: 4.3,
  //       wind_deg: 348,
  //       wind_gust: 4.82,
  //       weather: [
  //         {
  //           id: 802,
  //           main: "Clouds",
  //           description: "scattered clouds",
  //           icon: "03d",
  //         },
  //       ],
  //       clouds: 29,
  //       pop: 0,
  //       uvi: 11.36,
  //     },
  //     {
  //       dt: 1689912000,
  //       sunrise: 1689894272,
  //       sunset: 1689936766,
  //       moonrise: 1689903300,
  //       moonset: 1689946980,
  //       moon_phase: 0.1,
  //       summary: "Expect a day of partly cloudy with rain",
  //       temp: {
  //         day: 30.66,
  //         min: 25.35,
  //         max: 30.66,
  //         night: 26.78,
  //         eve: 28.86,
  //         morn: 25.66,
  //       },
  //       feels_like: {
  //         day: 33.25,
  //         night: 28.64,
  //         eve: 30.8,
  //         morn: 26.11,
  //       },
  //       pressure: 1012,
  //       humidity: 56,
  //       dew_point: 20.87,
  //       wind_speed: 4.12,
  //       wind_deg: 335,
  //       wind_gust: 4.07,
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10d",
  //         },
  //       ],
  //       clouds: 98,
  //       pop: 0.58,
  //       rain: 3.82,
  //       uvi: 10.2,
  //     },
  //     {
  //       dt: 1689998400,
  //       sunrise: 1689980670,
  //       sunset: 1690023175,
  //       moonrise: 1689992040,
  //       moonset: 1690035960,
  //       moon_phase: 0.13,
  //       summary: "There will be partly cloudy today",
  //       temp: {
  //         day: 31.13,
  //         min: 25.04,
  //         max: 31.97,
  //         night: 27.71,
  //         eve: 29.3,
  //         morn: 25.18,
  //       },
  //       feels_like: {
  //         day: 33.69,
  //         night: 29.13,
  //         eve: 30.76,
  //         morn: 25.79,
  //       },
  //       pressure: 1012,
  //       humidity: 54,
  //       dew_point: 20.64,
  //       wind_speed: 4.07,
  //       wind_deg: 348,
  //       wind_gust: 3.44,
  //       weather: [
  //         {
  //           id: 802,
  //           main: "Clouds",
  //           description: "scattered clouds",
  //           icon: "03d",
  //         },
  //       ],
  //       clouds: 45,
  //       pop: 0.2,
  //       uvi: 10.48,
  //     },
  //     {
  //       dt: 1690084800,
  //       sunrise: 1690067067,
  //       sunset: 1690109584,
  //       moonrise: 1690080660,
  //       moonset: 1690124880,
  //       moon_phase: 0.17,
  //       summary: "There will be partly cloudy today",
  //       temp: {
  //         day: 30.22,
  //         min: 26.33,
  //         max: 33.02,
  //         night: 27.83,
  //         eve: 31.07,
  //         morn: 26.51,
  //       },
  //       feels_like: {
  //         day: 31.9,
  //         night: 29.75,
  //         eve: 32.94,
  //         morn: 26.51,
  //       },
  //       pressure: 1012,
  //       humidity: 53,
  //       dew_point: 19.66,
  //       wind_speed: 4.56,
  //       wind_deg: 356,
  //       wind_gust: 3.08,
  //       weather: [
  //         {
  //           id: 803,
  //           main: "Clouds",
  //           description: "broken clouds",
  //           icon: "04d",
  //         },
  //       ],
  //       clouds: 82,
  //       pop: 0.16,
  //       uvi: 10.71,
  //     },
  //     {
  //       dt: 1690171200,
  //       sunrise: 1690153463,
  //       sunset: 1690195992,
  //       moonrise: 1690169220,
  //       moonset: 1690213800,
  //       moon_phase: 0.2,
  //       summary:
  //         "You can expect partly cloudy in the morning, with rain in the afternoon",
  //       temp: {
  //         day: 30.23,
  //         min: 26.1,
  //         max: 32.02,
  //         night: 27.79,
  //         eve: 31.24,
  //         morn: 26.1,
  //       },
  //       feels_like: {
  //         day: 32.66,
  //         night: 30.27,
  //         eve: 33.66,
  //         morn: 26.1,
  //       },
  //       pressure: 1012,
  //       humidity: 57,
  //       dew_point: 20.82,
  //       wind_speed: 4.46,
  //       wind_deg: 356,
  //       wind_gust: 3.3,
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10d",
  //         },
  //       ],
  //       clouds: 100,
  //       pop: 0.34,
  //       rain: 0.39,
  //       uvi: 10.81,
  //     },
  //     {
  //       dt: 1690257600,
  //       sunrise: 1690239859,
  //       sunset: 1690282400,
  //       moonrise: 1690257960,
  //       moonset: 1690302960,
  //       moon_phase: 0.23,
  //       summary: "There will be rain today",
  //       temp: {
  //         day: 29.94,
  //         min: 26.31,
  //         max: 31.38,
  //         night: 26.31,
  //         eve: 29.33,
  //         morn: 26.57,
  //       },
  //       feels_like: {
  //         day: 32.72,
  //         night: 26.31,
  //         eve: 32.3,
  //         morn: 26.57,
  //       },
  //       pressure: 1012,
  //       humidity: 60,
  //       dew_point: 21.34,
  //       wind_speed: 3.9,
  //       wind_deg: 3,
  //       wind_gust: 3.49,
  //       weather: [
  //         {
  //           id: 501,
  //           main: "Rain",
  //           description: "moderate rain",
  //           icon: "10d",
  //         },
  //       ],
  //       clouds: 100,
  //       pop: 0.7,
  //       rain: 8.28,
  //       uvi: 11,
  //     },
  //     {
  //       dt: 1690344000,
  //       sunrise: 1690326254,
  //       sunset: 1690368807,
  //       moonrise: 1690346820,
  //       moonset: 0,
  //       moon_phase: 0.25,
  //       summary: "Expect a day of partly cloudy with rain",
  //       temp: {
  //         day: 30.1,
  //         min: 25.09,
  //         max: 33.24,
  //         night: 27.84,
  //         eve: 31.94,
  //         morn: 25.09,
  //       },
  //       feels_like: {
  //         day: 32.24,
  //         night: 29.65,
  //         eve: 33.79,
  //         morn: 25.77,
  //       },
  //       pressure: 1013,
  //       humidity: 56,
  //       dew_point: 20.29,
  //       wind_speed: 4.4,
  //       wind_deg: 354,
  //       wind_gust: 3.81,
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10d",
  //         },
  //       ],
  //       clouds: 49,
  //       pop: 0.47,
  //       rain: 0.73,
  //       uvi: 11,
  //     },
  //     {
  //       dt: 1690430400,
  //       sunrise: 1690412649,
  //       sunset: 1690455214,
  //       moonrise: 1690435920,
  //       moonset: 1690392180,
  //       moon_phase: 0.29,
  //       summary: "Expect a day of partly cloudy with rain",
  //       temp: {
  //         day: 30.22,
  //         min: 25.27,
  //         max: 33.11,
  //         night: 27.2,
  //         eve: 31,
  //         morn: 25.31,
  //       },
  //       feels_like: {
  //         day: 31.9,
  //         night: 28.84,
  //         eve: 33.02,
  //         morn: 25.83,
  //       },
  //       pressure: 1014,
  //       humidity: 53,
  //       dew_point: 19.61,
  //       wind_speed: 5.03,
  //       wind_deg: 0,
  //       wind_gust: 3.06,
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10d",
  //         },
  //       ],
  //       clouds: 12,
  //       pop: 0.28,
  //       rain: 0.21,
  //       uvi: 11,
  //     },
  //   ],
  // };

  const initData = {
    loading: false,
    result: [],
    value: "",
    city: "jakarta",
  };

  // const [dataWeather, dataWeatherSet] = useState({});
  const [isLoading, isLoadingSet] = useState(initData.loading);
  const [searchValue, searchValueSet] = useState(initData.value);
  const [historySearch, historySearchSet] = useState([]);

  const { dispatch, reduxState, ref } = useRegularHook();

  const dataFetch = reduxState.weather;
  const dataWeather = dataFetch.weather;
  const dataLocation = dataFetch.location;

  // if (searchLocation !== '') {
  //   const { data: dataLocation } = useLocationQuery(searchLocation);
  //   console.log(dataLocation);
  //   searchResultSet(dataLocation)
  // }

  // console.log(dataFetch);

  // if (searchResult.length > 0) {
  //   const { data } = useWeatherQuery(searchResult[0].lat, searchResult[0].lon)
  //   dataWeatherSet(data)
  // }

  const timeoutRef = ref;

  const tabs = [
    // {
    //   menuItem: "Minute",
    //   render: () => <WeatherTab data={data.minutely} />,
    // },
    // {
    //   menuItem: "Hour",
    //   render: () => (
    //     <WeatherTab fetchData={dataWeather.hourly || []} isHourly />
    //   ),
    // },
    {
      menuItem: "Day",
      render: () => <WeatherTab fetchData={dataWeather.daily || []} />,
    },
  ];

  const handleSearchChange = async (value) => {
    // const { value } = e.target;
    // const { value } = data;
    clearTimeout(timeoutRef.current);
    isLoadingSet(true);

    const inputSearch = value.replaceAll(" ", "-");

    searchValueSet(value);
    // isLoadingSet(initData.loading);

    timeoutRef.current = setTimeout(() => {
      isLoadingSet(initData.loading);
      if (value.length === 0) {
        return;
      }

      // fetchDataLocation(inputSearch);
      dispatch(getDataLocation(inputSearch));
      // fetchLocation(inputSearch)
    }, 300);
  };

  const handleResultSelect = (lat, lon, name) => {
    // fetchDataWeather(lat, lon, unit.weather);
    dispatch(getDataWeather(lat, lon));
    searchValueSet(name);
    historySearchSet([
      ...historySearch,
      {
        name,
        lat,
        lon,
      },
    ]);
  };

  const handleSelectHistory = (lat, lon) => {
    // fetchDataWeather(lat, lon, unit.weather);
    dispatch(getDataWeather(lat, lon));
  };

  const resultRenderer = ({ name }) => <p key={name}>{name}</p>;

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    // historySearchSet([]);
    if (window.navigator.geolocation) {
      alert('Please "Allow" browser get current location');
      // navigator.geolocation.getCurrentPosition((position) => {
      //   console.log(position)
      // })
      // navigator.geolocation.clearWatch()
      navigator.geolocation.watchPosition((position) => {
        // console.log(position);
        const { latitude, longitude } = position.coords;
        // fetchDataWeather(latitude, longitude, unit.weather);
        dispatch(getDataWeather(latitude, longitude));
      });
    } else {
      alert("Your browser not support get location. Please search your city");
    }
  }, []);

  return (
    <StyledContainer className="container-home" fluid>
      <StyledGrid verticalAlign="middle">
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={8}>
            <Title>
              Weather <TitleBold>Forecast</TitleBold>
            </Title>
          </Grid.Column>
          <Grid.Column width={8} textAlign="right">
            <Search
              fluid
              loading={isLoading}
              value={searchValue}
              onSearchChange={(e, data) => {
                const { value } = data;
                handleSearchChange(value);
              }}
              resultRenderer={resultRenderer}
              results={dataLocation}
              onResultSelect={(e, data) => {
                const { result } = data;
                handleResultSelect(result.lat, result.lon, result.name);
              }}
              placeholder="Search City"
            />
          </Grid.Column>
        </Grid.Row>
      </StyledGrid>
      {historySearch.length > 0 && (
        <>
          <StyledGrid>
            <Grid.Row>
              <Grid.Column textAlign="right">
                <h3 style={{ marginBottom: "0.5rem" }}>History</h3>
              </Grid.Column>
            </Grid.Row>
          </StyledGrid>
          {historySearch.map((h) => (
            <Label
              horizontal
              as="a"
              key={h.name}
              onClick={() => handleSelectHistory(h.lat, h.lon)}
            >
              {h.name}
            </Label>
          ))}
        </>
      )}
      {Object.keys(dataWeather).length > 0 && (
        <StyledTab
          panes={tabs}
          // defaultActiveIndex={0}
          menu={{ secondary: true }}
        />
      )}
    </StyledContainer>
  );
};

export default Home;
