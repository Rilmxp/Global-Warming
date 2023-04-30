// Contains all functions to process data recieved from api calls.
// For nicer display, most data has been reduced - see notes on each function -

// TEMPERATURE DATA
// Filters 10-yearly data from 1880 till 1980 and annually from 1981
function temperatureDataHandler(data) {
  const graphData = data.result;

  const selectedYears = graphData.filter((item) => {
    // separte year from month "1980.04" => "1980"
    const year = +parseInt(item.time);

    // select only january (.04) data every 10 years until 1980 and then annualy.
    if (item.time.endsWith(".04")) {
      if (year >= 1880 && year <= 1980 && +year % 10 === 0) return true;
      if (year > 1980) return true;
    }
  });

  // format year for correct display 1980.04 => 1980
  const finalData = selectedYears.map((item) => {
    let time = +parseInt(item.time);
    return { ...item, time };
  });

  return finalData;
}

// CARBON DIOXIDE DATA
// Filters data annualy instead of monthly
function carbonDioxideDataHandler(data) {
  const graphData = data.co2;
  const annualEmissions = graphData.filter((item) => {
    return item.month === "1" && item.day === "20";
  });
  return annualEmissions;
}

// METHANE DATA
// Filters 3-yearly data
function methaneDataHandler(data) {
  const graphData = data.methane;
  // get only the month of december (eg 1984.12)
  const annualEmissions = graphData.filter((item) => {
    return item.date.endsWith("12");
  });
  // get only ranges of 3 years time + last available year.
  const threeYearlyData = annualEmissions.filter((item, index) => {
    if (index % 3 === 0 || index === annualEmissions.length - 1) {
      return item;
    }
  });

  const finalData = threeYearlyData.map((item) => {
    let date;
    let average;

    date = parseInt(item.date);
    average = parseInt(item.average);

    return { date, average };
  });

  return finalData;
}

// NITROUS OXIDE DATA
// Filters data annually instead of monthly
function nitrousOxideDataHandler(data) {
  const graphData = data.nitrous;

  // January data each year (eg, 2020.1)
  const annualEmissions = graphData.filter((item) => {
    return item.date.endsWith(".1");
  });

  const finalData = annualEmissions.map((item) => {
    let date;
    let average;

    date = parseInt(item.date);
    average = parseInt(item.average);

    return { date, average };
  });

  return finalData;
}

// POLAR ICE DATA
//
function polarIceDataHandler(data) {
  const graphData = data.arcticData;

  const finalData = graphData.map((item) => {
    // sets fixed decimals for large float numbers.
    let extent = item.extent.toFixed(2);
    return { ...item, extent };
  });
  return finalData;
}

export {
  temperatureDataHandler,
  carbonDioxideDataHandler,
  methaneDataHandler,
  nitrousOxideDataHandler,
  polarIceDataHandler,
};
