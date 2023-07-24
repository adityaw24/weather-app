import { useEffect, useState } from "react";
import { Button, Grid, Image } from "semantic-ui-react";
import { baseUrl } from "../../../utils/config";
import moment from "moment/moment";
import { StyledGrid, StyledProgress } from "./style";
import { IoIosWater } from "react-icons/io";
import PropTypes from "prop-types";

const WeatherTab = ({ fetchData, isHourly }) => {
  //   const data = [
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
  //   ];

  //   const mapData = data.map((d) => {
  //     let mapped = [];
  //     if (
  //       d.temp.day > 0 ||
  //       d.temp.eve > 0 ||
  //       d.temp.max > 0 ||
  //       d.temp.min > 0 ||
  //       d.temp.morn > 0 ||
  //       d.temp.night > 0
  //     ) {
  //       d.temp.day = Math.floor(d.temp.day);
  //       d.temp.eve = Math.floor(d.temp.eve);
  //       d.temp.max = Math.floor(d.temp.max);
  //       d.temp.min = Math.floor(d.temp.min);
  //       d.temp.morn = Math.floor(d.temp.morn);
  //       d.temp.night = Math.floor(d.temp.night);
  //     }

  //     mapped.push(d);
  //     return mapped;
  //   });

  const pageSize = 10;

  const [data, dataSet] = useState(fetchData);
  const [page, pageSet] = useState(1);

  useEffect(() => {
    dataSet(fetchData);
  }, [fetchData]);

  const handlePage = (newPage) => pageSet(newPage);

  const handleNextPage = () =>
    page < Math.round(data.length / pageSize) && pageSet(page + 1);

  const handlePreviousPage = () => page > 1 && pageSet(page - 1);

  return (
    <>
      <StyledGrid verticalAlign="middle">
        {data?.slice((page - 1) * pageSize, page * pageSize).map((d) => (
          <Grid.Row key={d.dt}>
            <Grid.Column width={3}>
              {isHourly
                ? moment.unix(d.dt).format("ddd, kk:mm")
                : moment.unix(d.dt).format("dddd")}
            </Grid.Column>
            <Grid.Column width={2} as={Grid}>
              <Grid.Row verticalAlign="middle">
                <Grid.Column width={2}>
                  <IoIosWater />
                </Grid.Column>
                <Grid.Column width={14}>{`${d.humidity} %`}</Grid.Column>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Image src={`${baseUrl.icon}${d.weather[0].icon}.png`} />
            </Grid.Column>
            {!isHourly && (
              <Grid.Column as={Grid} width={10}>
                <Grid.Row verticalAlign="middle" textAlign="center">
                  <Grid.Column width={3}>
                    {`${Math.floor(d.temp.min)}`} &deg;C
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <StyledProgress
                      progress="value"
                      total={Math.floor(d.temp.max)}
                      value={String(Math.floor(d.temp.day))}
                      error={Math.floor(d.temp.day) === Math.floor(d.temp.max)}
                      warning={
                        Math.floor(d.temp.day) >=
                          Math.floor(d.temp.max) * 0.5 &&
                        Math.floor(d.temp.day) !== Math.floor(d.temp.max)
                      }
                      success={
                        Math.floor(d.temp.day) < Math.floor(d.temp.max) * 0.5 &&
                        Math.floor(d.temp.day) !== Math.floor(d.temp.max)
                      }
                    />
                  </Grid.Column>
                  <Grid.Column width={3}>
                    {`${Math.floor(d.temp.max)}`} &deg;C
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
            )}
            {isHourly && (
              <Grid.Column as={Grid} width={10}>
                <Grid.Row verticalAlign="middle" textAlign="center">
                  <Grid.Column width={3}>
                    {`${Math.floor(d.temp)}`} &deg;C
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
            )}
          </Grid.Row>
        ))}
      </StyledGrid>
      <Button.Group>
        <Button
          icon="caret left"
          onClick={handlePreviousPage}
          disabled={page === 1}
        />
        {[...Array(Math.round(data.length / pageSize))].map((v, i) => (
          <Button
            key={i}
            content={i + 1}
            active={page === i + 1}
            onClick={() => handlePage(i + 1)}
          />
        ))}
        {/* <Button content={page} disabled /> */}
        <Button
          icon="caret right"
          onClick={handleNextPage}
          disabled={page === Math.round(data.length / pageSize)}
        />
      </Button.Group>
    </>
  );
};

WeatherTab.propTypes = {
  fetchData: PropTypes.array,
  isHourly: PropTypes.bool,
};

export default WeatherTab;
