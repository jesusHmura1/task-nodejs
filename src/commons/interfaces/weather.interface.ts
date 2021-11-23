export interface IWeather {
    consolidatedWeather: ConsolidatedWeather[];
    time:                Date;
    sunRise:             Date;
    sunSet:              Date;
    timezoneName:        string;
    parent:              Parent;
    sources:             Source[];
    title:               string;
    locationType:        string;
    woeid:               number;
    lattLong:            string;
    timezone:            string;
}

export interface ConsolidatedWeather {
    id:                   number;
    weatherStateName:     string;
    weatherStateAbbr:     string;
    windDirectionCompass: string;
    created:              Date;
    applicableDate:       Date;
    minTemp:              number;
    maxTemp:              number;
    theTemp:              number;
    windSpeed:            number;
    windDirection:        number;
    airPressure:          number;
    humidity:             number;
    visibility:           number;
    predictability:       number;
}

export interface Parent {
    title:        string;
    locationType: string;
    woeid:        number;
    lattLong:     string;
}

export interface Source {
    title:     string;
    slug:      string;
    url:       string;
    crawlRate: number;
}
