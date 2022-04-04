import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
  console.log(chalk.bgRed(` ERROR `) + " " + `${err}`);
};

const printSuccess = (msg) => {
  console.log(chalk.bgGreen(` SUCCESS `) + " " + `${msg}`);
};

const printHelp = () => {
  console.log(dedent`${chalk.bgMagenta(` Help `)}
    Without params - output weather
    -c [CITY] for install city
    -h - output help
    -t [API_KEY] for install token
    `);
};

const printWeather = (res, icon) => {
  console.log(dedent`${chalk.bgGreenBright(` Weather `)} Weather in ${res.name}
    ${icon}  ${res.weather[0].description}
    Temp: ${Math.round(res.main.temp)} (feels like: ${Math.round(
    res.main.feels_like
  )})
    Humidity: ${res.main.humidity} %
    `);
};

export { printSuccess, printError, printHelp, printWeather };
