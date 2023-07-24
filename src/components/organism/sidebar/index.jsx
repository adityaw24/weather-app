/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { RowWrapper, StyledContainer, StyledGrid } from "./style";
import "../../../style/sidebar.scss";
import { Grid } from "semantic-ui-react";
import { baseUrl } from "../../../utils/config";
import { GoDotFill } from "react-icons/go";
import { useRegularHook } from "../../../utils/hooks";
import { getDataReverseLocation } from "../../../utils/redux/action/weatherAction";
import moment from "moment";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Sidebar = () => {
  const { dispatch, reduxState, dateNow } = useRegularHook();
  const [dataChart, dataChartSet] = useState([]);

  const dataFetch = reduxState.weather;
  const dataWeather = dataFetch.weather;
  const dataWeatherCurrent = dataFetch.weather.current;
  const dataLocationCurrent = dataFetch.reverseLocation;
  //   const dataLocation = dataFetch.location;

  const CustomTooltip = (props) => {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">
            {`${moment.unix(payload[0].payload?.dt).format("dddd, kk:mm")} : ${
              payload[0].value
            }`}
            &deg;C
          </p>
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    if (Object.keys(dataWeather).length > 0) {
      dispatch(getDataReverseLocation(dataWeather.lat, dataWeather.lon));
      //   console.log(dataWeather);
      const data = dataWeather.hourly
        .filter((d) => d.dt > moment(dateNow).unix())
        .map((d) => {
          const value = { ...d };
          value.dtView = moment.unix(d?.dt).format("kk:mm");
          value.temp = Math.floor(d?.temp);
          return value;
        });
      dataChartSet(data);
    }
  }, [dataWeather]);

  return (
    <StyledContainer className="container-sidebar">
      <StyledGrid>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={8} textAlign="right">
            <img
              src={`${baseUrl.icon}${dataWeatherCurrent?.weather[0]?.icon}.png`}
              style={{
                float: "right",
                // marginRight: "1rem",
                height: "8rem",
              }}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <p
              style={{
                fontSize: "1.7rem",
                fontWeight: 900,
              }}
            >
              {moment.unix(dataWeatherCurrent?.dt).format("ddd, kk:mm")}
            </p>
          </Grid.Column>
        </Grid.Row>
        <RowWrapper verticalAlign="top">
          <Grid.Column width={8} textAlign="right">
            <h1>{Math.floor(dataWeatherCurrent?.temp)}</h1>
          </Grid.Column>
          <Grid.Column width={8}>
            <span style={{ fontSize: "1.5rem", marginLeft: "0.5rem" }}>
              &deg;C
            </span>
          </Grid.Column>
        </RowWrapper>
        <Grid.Row textAlign="center">
          <Grid.Column>{dataLocationCurrent[0]?.name}</Grid.Column>
        </Grid.Row>
        <RowWrapper textAlign="center">
          <Grid.Column verticalAlign="middle">
            {`Feels like ${Math.floor(dataWeatherCurrent?.feels_like)}`} &deg;C
            <GoDotFill style={{ margin: "0 1rem", display: "inline-block" }} />
            {`Humidity ${Math.floor(dataWeatherCurrent?.humidity)} %`}
            <br />
            {`Sunrise ${moment
              .unix(dataWeatherCurrent?.sunrise)
              .format("kk:mm")}`}
            <GoDotFill style={{ margin: "0 1rem", display: "inline-block" }} />
            {`Sunset ${moment
              .unix(dataWeatherCurrent?.sunset)
              .format("kk:mm")}`}
          </Grid.Column>
        </RowWrapper>
      </StyledGrid>
      <ResponsiveContainer height="30%">
        <AreaChart
          width={500}
          height={400}
          data={dataChart}
          margin={{
            top: 0,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="dtView"
            tick={{ fill: "white" }}
            tickLine={{ stroke: "white" }}
          />
          <YAxis tick={{ fill: "white" }} tickLine={{ stroke: "white" }} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="natural" dataKey="temp" fill="#fff" />
        </AreaChart>
      </ResponsiveContainer>
    </StyledContainer>
  );
};

export default Sidebar;
