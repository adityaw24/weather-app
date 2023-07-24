import cfg from "../../../config.json";

export const baseUrl = {
  icon: cfg.baseUrlIconWeather,
  weather: cfg.baseUrl,
};

export const pathUrl = {
  geolocation: cfg.geolocationPath,
  weather: cfg.weatherPath,
};

export const key = {
  api: cfg.apiKey,
};

export const unit = {
  weather: cfg.weatherUnit,
};
